import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const npmRunner = process.platform === "win32" ? "npx.cmd" : "npx";

function run(command, args) {
  const result = spawnSync(npmRunner, [command, ...args], {
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

// OpenNext runs the configured package build itself with NEXT_PRIVATE_STANDALONE
// enabled. In that nested invocation we only run Next, then the outer build
// assembles the Cloudflare worker and the Sites-compatible dist/ directory.
if (process.env.NEXT_PRIVATE_STANDALONE === "true") {
  run("next", ["build", "--webpack"]);
  process.exit(0);
}

run("opennextjs-cloudflare", ["build", "--skipWranglerConfigCheck"]);

const openNextDir = resolve(".open-next");
const distDir = resolve("dist");
const serverDir = join(distDir, "server");
const assetsDir = join(distDir, "assets");

rmSync(distDir, { recursive: true, force: true });
mkdirSync(serverDir, { recursive: true });

for (const entry of readdirSync(openNextDir)) {
  if (entry === "assets") continue;
  cpSync(join(openNextDir, entry), join(serverDir, entry), { recursive: true });
}

cpSync(join(openNextDir, "worker.js"), join(serverDir, "index.js"));
cpSync(join(openNextDir, "assets"), assetsDir, { recursive: true });

const workerEntryPath = join(serverDir, "index.js");
const workerEntry = readFileSync(workerEntryPath, "utf8");
const virtualFiles = {};

function collectVirtualFiles(directory, relativeDirectory = "") {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const relativePath = join(relativeDirectory, entry.name).replace(/\\/g, "/");
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      collectVirtualFiles(absolutePath, relativePath);
      continue;
    }

    try {
      virtualFiles[relativePath] = readFileSync(absolutePath, "utf8");
    } catch {
      // Binary assets are served through the Sites asset binding and do not
      // need to be available to Next's server-side manifest reader.
    }
  }
}

collectVirtualFiles(join(openNextDir, "server-functions", "default", ".next"), ".next");
const workerRuntimePrelude = `
import * as __sitesStream from "node:stream";
import * as __sitesUtil from "node:util";
import * as __sitesPathModule from "node:path";
const __sitesFiles = ${JSON.stringify(virtualFiles)};
const __sitesNormalizePath = (value) => {
  let normalized = String(value).replace(/\\\\/g, "/");
  const nextMarker = normalized.indexOf("/.next/");
  if (nextMarker >= 0) normalized = normalized.slice(nextMarker + 1);
  return normalized.replace(/^\\.\\//, "");
};
const __sitesFileExists = (value) => {
  const normalized = __sitesNormalizePath(value);
  return Object.prototype.hasOwnProperty.call(__sitesFiles, normalized)
    || Object.keys(__sitesFiles).some((file) => file.startsWith(normalized + "/"));
};
const __sitesReadFile = (value, options) => {
  const normalized = __sitesNormalizePath(value);
  const contents = __sitesFiles[normalized];
  if (contents === undefined) throw new Error("File not found: " + value);
  const encoding = typeof options === "string" ? options : options?.encoding;
  return encoding ? contents : new TextEncoder().encode(contents);
};
const __sitesPath = {
  join: (...parts) => parts.filter(Boolean).join("/").replace(/\\\\/g, "/").replace(/\\/{2,}/g, "/"),
  dirname: (value) => value.replace(/\\\\/g, "/").split("/").slice(0, -1).join("/") || ".",
};
const __sitesFs = {
  appendFileSync() {},
  existsSync(value) { return __sitesFileExists(value); },
  mkdirSync() {},
  readFileSync(value, options) { return __sitesReadFile(value, options); },
  promises: {
    mkdir: async () => undefined,
    readFile: async (value, options) => __sitesReadFile(value, options),
    stat: async (value) => ({
      isDirectory: () => Object.keys(__sitesFiles).some((file) => file.startsWith(__sitesNormalizePath(value) + "/")),
      isFile: () => true,
    }),
    writeFile: async () => undefined,
  },
  writeFileSync() {},
};
globalThis.require ??= (moduleName) => {
  if (moduleName === "path" || moduleName === "node:path") return __sitesPathModule;
  if (moduleName === "fs" || moduleName === "node:fs") return __sitesFs;
  if (moduleName === "async_hooks" || moduleName === "node:async_hooks") {
    return { AsyncLocalStorage: globalThis.AsyncLocalStorage };
  }
  if (moduleName === "util" || moduleName === "node:util") {
    return __sitesUtil;
  }
  if (moduleName === "stream" || moduleName === "node:stream") return __sitesStream;
  if (moduleName === "os" || moduleName === "node:os") {
    return { cpus: () => [{}] };
  }
  if (moduleName === "timers" || moduleName === "node:timers") {
    return {
      clearImmediate: globalThis.clearImmediate ?? (() => {}),
      setImmediate: globalThis.setImmediate ?? ((callback, ...args) => {
        queueMicrotask(() => callback(...args));
      }),
    };
  }
  if (moduleName === "timers/promises" || moduleName === "node:timers/promises") {
    return {
      setImmediate: () => Promise.resolve(),
    };
  }
  if (moduleName === "http" || moduleName === "node:http" || moduleName === "https" || moduleName === "node:https") {
    return {
      Agent: class SitesAgent {},
      globalAgent: {},
    };
  }
  return {};
};
`;
if (!workerEntry.includes("const __sitesPath")) {
  writeFileSync(workerEntryPath, `${workerRuntimePrelude}\n${workerEntry}`, "utf8");
}

// Next's bundled Node environment checks globalThis.AsyncLocalStorage before
// falling back to a CommonJS require. Workers expose the module import but do
// not always populate that global, so make the supported implementation
// available before the handler is loaded.
const cloudflareInitPath = join(serverDir, "cloudflare", "init.js");
const cloudflareInit = readFileSync(cloudflareInitPath, "utf8");
const asyncStorageGlobal = "globalThis.AsyncLocalStorage ??= AsyncLocalStorage;";
if (!cloudflareInit.includes(asyncStorageGlobal)) {
  writeFileSync(
    cloudflareInitPath,
    cloudflareInit.replace(
      'import * as nextEnvVars from "./next-env.mjs";\n',
      `import * as nextEnvVars from "./next-env.mjs";\n${asyncStorageGlobal}\n`,
    ),
    "utf8",
  );
}
