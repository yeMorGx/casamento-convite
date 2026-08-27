import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
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
  run("next", ["build"]);
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
