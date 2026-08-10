import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type GiftClaim = {
  giftId: string;
  buyerName: string | null;
  purchasedAt: string;
};

export type GiftClaims = Record<string, GiftClaim>;

const dataDirectory = path.join(process.cwd(), "data");
const claimsFile = path.join(dataDirectory, "gift-claims.json");

const sharedState = globalThis as typeof globalThis & {
  giftClaimWriteQueue?: Promise<void>;
};

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

export async function getGiftClaims() {
  await sharedState.giftClaimWriteQueue;
  return readClaimsFile();
}

export async function claimGift(claim: GiftClaim) {
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
