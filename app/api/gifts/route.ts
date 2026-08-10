import { giftIds } from "@/lib/gifts";
import { claimGift, getGiftClaims, type GiftClaim } from "@/lib/gift-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
};

export async function GET() {
  try {
    const claims = await getGiftClaims();
    return Response.json({ claims }, { headers: noStoreHeaders });
  } catch {
    return Response.json(
      { message: "Não foi possível carregar os presentes agora." },
      { status: 500, headers: noStoreHeaders },
    );
  }
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Os dados enviados são inválidos." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  if (!payload || typeof payload !== "object") {
    return Response.json(
      { message: "Os dados enviados são inválidos." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const body = payload as Record<string, unknown>;
  const giftId = typeof body.giftId === "string" ? body.giftId : "";
  const anonymous = body.anonymous === true;
  const buyerName =
    typeof body.buyerName === "string"
      ? body.buyerName.trim().replace(/\s+/g, " ")
      : "";

  if (!giftIds.has(giftId)) {
    return Response.json(
      { message: "Esse presente não existe na lista." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  if (!anonymous && (buyerName.length < 2 || buyerName.length > 60)) {
    return Response.json(
      { message: "Digite um nome entre 2 e 60 caracteres." },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const claim: GiftClaim = {
    giftId,
    buyerName: anonymous ? null : buyerName,
    purchasedAt: new Date().toISOString(),
  };

  try {
    const created = await claimGift(claim);

    if (!created) {
      return Response.json(
        { message: "Alguém acabou de marcar esse presente antes de você." },
        { status: 409, headers: noStoreHeaders },
      );
    }

    return Response.json({ claim }, { status: 201, headers: noStoreHeaders });
  } catch {
    return Response.json(
      { message: "Não foi possível marcar o presente. Tente novamente." },
      { status: 500, headers: noStoreHeaders },
    );
  }
}
