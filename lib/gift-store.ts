import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { getCloudflareContext } from "@opennextjs/cloudflare";

import { giftClaimsTableSql } from "@/db/schema";

export type GiftClaim = {
  giftId: string;
  buyerName: string | null;
  purchasedAt: string;
};

export type GiftClaims = Record<string, GiftClaim>;

type D1RunResult = {
  meta?: {
    changes?: number;
  };
};

type D1PreparedStatement = {
  bind: (...values: unknown[]) => D1PreparedStatement;
  all: <T>() => Promise<{ results: T[] }>;
  run: () => Promise<D1RunResult>;
};

type D1Database = {
  prepare: (query: string) => D1PreparedStatement;
};

type GiftClaimRow = {
  gift_id: string;
  buyer_name: string | null;
  purchased_at: string;
};

const dataDirectory = path.join(process.cwd(), "data");
const claimsFile = path.join(dataDirectory, "gift-claims.json");
const isProduction = process.env.NODE_ENV === "production";

const sharedState = globalThis as typeof globalThis & {
  giftClaimWriteQueue?: Promise<void>;
};

async function getD1Database() {
  try {
    const context = await getCloudflareContext({ async: true });
    return (context.env as { DB?: D1Database }).DB;
  } catch {
    return undefined;
  }
}

async function ensureD1Schema(db: D1Database) {
  await db.prepare(giftClaimsTableSql).run();
}

async function readClaimsFromD1(db: D1Database): Promise<GiftClaims> {
  await ensureD1Schema(db);
  const result = await db
    .prepare(
      "SELECT gift_id, buyer_name, purchased_at FROM gift_claims ORDER BY purchased_at ASC",
    )
    .all<GiftClaimRow>();

  return Object.fromEntries(
    result.results.map((row) => [
      row.gift_id,
      {
        giftId: row.gift_id,
        buyerName: row.buyer_name,
        purchasedAt: row.purchased_at,
      },
    ]),
  );
}

async function claimGiftInD1(db: D1Database, claim: GiftClaim) {
  await ensureD1Schema(db);
  const result = await db
    .prepare(
      "INSERT OR IGNORE INTO gift_claims (gift_id, buyer_name, purchased_at) VALUES (?, ?, ?)",
    )
    .bind(claim.giftId, claim.buyerName, claim.purchasedAt)
    .run();

  return (result.meta?.changes ?? 0) > 0;
}

async function readClaimsFile(): Promise<GiftClaims> {
  try {
    const contents = await readFile(claimsFile, "utf8");
    return JSON.parse(contents) as GiftClaims;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return {};
    }

    throw error;
  }
}

async function writeClaimsFile(claims: GiftClaims) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(claimsFile, `${JSON.stringify(claims, null, 2)}\n`, "utf8");
}

async function getLocalClaims() {
  await sharedState.giftClaimWriteQueue;
  return readClaimsFile();
}

async function claimGiftLocally(claim: GiftClaim) {
  let created = false;

  const operation = (sharedState.giftClaimWriteQueue ?? Promise.resolve()).then(
    async () => {
      const claims = await readClaimsFile();

      if (claims[claim.giftId]) {
        return;
      }

      claims[claim.giftId] = claim;
      await writeClaimsFile(claims);
      created = true;
    },
  );

  sharedState.giftClaimWriteQueue = operation.catch(() => undefined);
  await operation;

  return created;
}

export async function getGiftClaims() {
  const db = await getD1Database();

  if (db) {
    return readClaimsFromD1(db);
  }

  if (isProduction) {
    throw new Error("D1 binding DB is not configured.");
  }

  return getLocalClaims();
}

export async function claimGift(claim: GiftClaim) {
  const db = await getD1Database();

  if (db) {
    return claimGiftInD1(db, claim);
  }

  if (isProduction) {
    throw new Error("D1 binding DB is not configured.");
  }

  return claimGiftLocally(claim);
}
