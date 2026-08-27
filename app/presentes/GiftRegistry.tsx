"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ExternalLink,
  Gift,
  Heart,
  LoaderCircle,
  LockKeyhole,
  Trash2,
  X,
} from "lucide-react";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

import { giftCategories, type GiftItem } from "@/lib/gifts";
import type { GiftClaim, GiftClaims } from "@/lib/gift-store";

type ApiError = {
  message?: string;
};

export default function GiftRegistry() {
  const [claims, setClaims] = useState<GiftClaims>({});
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [giftToRemove, setGiftToRemove] = useState<GiftItem | null>(null);
  const [buyerName, setBuyerName] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [removalPassword, setRemovalPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const removalPasswordRef = useRef<HTMLInputElement>(null);

  const loadClaims = useCallback(async () => {
    try {
      const response = await fetch("/api/gifts", { cache: "no-store" });

      if (!response.ok) return;

      const data = (await response.json()) as { claims: GiftClaims };
      setClaims(data.claims);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadClaims();

    const interval = window.setInterval(() => void loadClaims(), 15000);
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") void loadClaims();
    };

    document.addEventListener("visibilitychange", refreshWhenVisible);
    window.addEventListener("focus", refreshWhenVisible);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
      window.removeEventListener("focus", refreshWhenVisible);
    };
  }, [loadClaims]);

  useEffect(() => {
    if (!selectedGift && !giftToRemove) return;

    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting && !removing) {
        setSelectedGift(null);
        setGiftToRemove(null);
        setError("");
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.setTimeout(() => {
      if (selectedGift) nameInputRef.current?.focus();
      if (giftToRemove) removalPasswordRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [giftToRemove, removing, selectedGift, submitting]);

  function openConfirmation(gift: GiftItem) {
    setSelectedGift(gift);
    setBuyerName("");
    setAnonymous(false);
    setError("");
  }

  function closeModal() {
    if (submitting) return;
    setSelectedGift(null);
    setError("");
  }

  function openRemoval(gift: GiftItem) {
    setGiftToRemove(gift);
    setRemovalPassword("");
    setError("");
  }

  function closeRemovalModal() {
    if (removing) return;
    setGiftToRemove(null);
    setRemovalPassword("");
    setError("");
  }

  async function confirmPurchase(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedGift || submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/gifts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: selectedGift.id,
          anonymous,
          buyerName,
        }),
      });

      const data = (await response.json()) as ApiError & { claim?: GiftClaim };

      if (!response.ok || !data.claim) {
        setError(data.message ?? "Não foi possível marcar o presente.");
        if (response.status === 409) void loadClaims();
        return;
      }

      setClaims((current) => ({
        ...current,
        [data.claim!.giftId]: data.claim!,
      }));
      setSelectedGift(null);
      setNotice("Presente marcado com carinho. Obrigado!");
      window.setTimeout(() => setNotice(""), 5000);
    } catch {
      setError("Não foi possível marcar o presente. Verifique sua conexão.");
    } finally {
      setSubmitting(false);
    }
  }

  async function confirmRemoval(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!giftToRemove || removing) return;

    setRemoving(true);
    setError("");

    try {
      const response = await fetch("/api/gifts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          giftId: giftToRemove.id,
          password: removalPassword,
        }),
      });
      const data = (await response.json()) as ApiError & { giftId?: string };

      if (!response.ok || !data.giftId) {
        setError(data.message ?? "Não foi possível remover a marcação.");
        if (response.status === 404) void loadClaims();
        return;
      }

      setClaims((current) => {
        const updated = { ...current };
        delete updated[data.giftId!];
        return updated;
      });
      setGiftToRemove(null);
      setRemovalPassword("");
      setNotice("Marcação removida. O presente está disponível novamente.");
      window.setTimeout(() => setNotice(""), 5000);
    } catch {
      setError("Não foi possível remover a marcação. Verifique sua conexão.");
    } finally {
      setRemoving(false);
    }
  }

  return (
    <main
      className="min-h-screen px-5 py-8 md:px-10 md:py-10"
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        <Link
          href="/"
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:scale-[1.02]"
          style={{
            borderColor: "var(--color-primary-light)",
            color: "var(--color-primary-dark)",
            background: "rgba(255,255,255,.7)",
          }}
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <header className="text-center">
          <Gift
            className="mx-auto mb-4"
            size={34}
            style={{ color: "var(--color-gold)" }}
          />

          <h1
            className="font-title text-5xl md:text-6xl"
            style={{ color: "var(--color-primary-dark)" }}
          >
            Lista de Presentes
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-base md:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            Escolha com carinho um presente para nos ajudar a montar nosso novo lar.
          </p>

          <div
            className="mx-auto mt-6 max-w-xl rounded-2xl border px-5 py-4 text-left text-sm leading-6"
            style={{
              borderColor: "var(--color-primary-light)",
              background: "rgba(255,255,255,.72)",
              color: "var(--text-secondary)",
            }}
          >
            <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
              Como funciona:
            </span>{" "}
            abra o presente, finalize a compra na loja e, ao voltar, toque em
            <span className="font-semibold" style={{ color: "var(--color-primary-dark)" }}>
              {" "}“Já comprei”
            </span>
            . Você pode informar seu nome ou marcar de forma anônima.
          </div>
        </header>

        <div className="mt-10 space-y-9">
          {giftCategories.map((category) => (
            <section key={category.label} aria-labelledby={`category-${category.label}`}>
              <div className="mb-4 flex items-center gap-3">
                <Heart size={18} style={{ color: "var(--color-gold)" }} />
                <h2
                  id={`category-${category.label}`}
                  className="font-title text-3xl"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {category.label}
                </h2>
              </div>

              <div className="grid gap-4">
                {category.items.map((gift) => {
                  const claim = claims[gift.id];

                  return (
                    <article
                      key={gift.id}
                      className="rounded-2xl border p-5 shadow-sm"
                      style={{
                        borderColor: claim
                          ? "rgba(77,118,81,.35)"
                          : "var(--color-primary-light)",
                        background: claim
                          ? "rgba(238,247,239,.84)"
                          : "rgba(255,255,255,.78)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className="text-base font-semibold leading-6 md:text-lg"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {gift.title}
                        </h3>

                        {claim && (
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-0.5 shrink-0"
                            size={22}
                            style={{ color: "var(--color-green)" }}
                          />
                        )}
                      </div>

                      {claim && (
                        <p
                          className="mt-2 text-sm font-semibold leading-5"
                          style={{ color: "var(--color-green-dark)" }}
                        >
                          {claim.buyerName
                            ? `${claim.buyerName} já comprou este presente`
                            : "Alguém já comprou este presente"}
                        </p>
                      )}

                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        <a
                          href={gift.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm"
                          style={{
                            borderColor: "var(--color-primary-dark)",
                            color: "var(--color-primary-dark)",
                            background: "rgba(255,255,255,.75)",
                          }}
                        >
                          Ver presente
                          <ExternalLink size={16} />
                        </a>

                        <button
                          type="button"
                          onClick={() => openConfirmation(gift)}
                          disabled={Boolean(claim) || loading}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-65"
                          style={{
                            background: claim
                              ? "var(--color-green)"
                              : "var(--color-primary-dark)",
                          }}
                        >
                          {loading ? (
                            <LoaderCircle className="animate-spin" size={16} />
                          ) : claim ? (
                            <Check size={17} />
                          ) : (
                            <Gift size={16} />
                          )}
                          {loading ? "Verificando..." : claim ? "Já comprado" : "Já comprei"}
                        </button>
                      </div>

                      {claim && (
                        <button
                          type="button"
                          onClick={() => openRemoval(gift)}
                          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold"
                          style={{
                            borderColor: "rgba(159,48,48,.32)",
                            color: "#8f3030",
                            background: "rgba(255,255,255,.72)",
                          }}
                        >
                          <Trash2 size={16} />
                          Remover marcação
                        </button>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {notice && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[70] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-4 text-sm font-semibold text-white shadow-xl"
          style={{ background: "var(--color-green-dark)" }}
        >
          <CheckCircle2 className="shrink-0" size={20} />
          {notice}
        </div>
      )}

      {selectedGift && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="purchase-title"
            className="w-full max-w-lg rounded-t-[28px] bg-white p-6 shadow-2xl sm:rounded-[28px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{ color: "var(--color-gold-dark)" }}
                >
                  Confirmar presente
                </p>
                <h2
                  id="purchase-title"
                  className="mt-2 text-2xl leading-7"
                  style={{ color: "var(--text-primary)" }}
                >
                  Você comprou este item?
                </h2>
              </div>

              <button
                type="button"
                onClick={closeModal}
                disabled={submitting}
                aria-label="Fechar"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-stone-100"
                style={{ color: "var(--text-secondary)" }}
              >
                <X size={20} />
              </button>
            </div>

            <p
              className="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold leading-5"
              style={{
                background: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
              }}
            >
              {selectedGift.title}
            </p>

            <form className="mt-6" onSubmit={confirmPurchase}>
              <fieldset disabled={submitting}>
                <legend
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Como você quer aparecer na lista?
                </legend>

                <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3">
                  <input
                    ref={nameInputRef}
                    type="radio"
                    name="identity"
                    checked={!anonymous}
                    onChange={() => setAnonymous(false)}
                    style={{ width: 18, height: 18, accentColor: "var(--color-primary-dark)" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Mostrar meu nome
                  </span>
                </label>

                {!anonymous && (
                  <div className="mt-3">
                    <label
                      htmlFor="buyer-name"
                      className="mb-1.5 block text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Seu nome
                    </label>
                    <input
                      id="buyer-name"
                      type="text"
                      value={buyerName}
                      onChange={(event) => setBuyerName(event.target.value)}
                      minLength={2}
                      maxLength={60}
                      required
                      autoComplete="name"
                      placeholder="Ex.: Maria e João"
                    />
                  </div>
                )}

                <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3">
                  <input
                    type="radio"
                    name="identity"
                    checked={anonymous}
                    onChange={() => setAnonymous(true)}
                    style={{ width: 18, height: 18, accentColor: "var(--color-primary-dark)" }}
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Prefiro ficar anônimo(a)
                  </span>
                </label>
              </fieldset>

              <p className="mt-4 text-xs leading-5" style={{ color: "var(--text-secondary)" }}>
                Ao confirmar, o presente ficará marcado como comprado para os outros convidados.
              </p>

              {error && (
                <p
                  role="alert"
                  className="mt-3 rounded-xl px-4 py-3 text-sm font-semibold"
                  style={{ background: "#fff0f0", color: "#9f3030" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 font-semibold text-white disabled:cursor-wait disabled:opacity-70"
                style={{ background: "var(--color-primary-dark)" }}
              >
                {submitting ? (
                  <LoaderCircle className="animate-spin" size={18} />
                ) : (
                  <Check size={19} />
                )}
                {submitting ? "Marcando..." : "Confirmar que comprei"}
              </button>
            </form>
          </div>
        </div>
      )}

      {giftToRemove && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeRemovalModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="removal-title"
            className="w-full max-w-lg rounded-t-[28px] bg-white p-6 shadow-2xl sm:rounded-[28px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{ color: "#8f3030" }}
                >
                  Remover marcação
                </p>
                <h2
                  id="removal-title"
                  className="mt-2 text-2xl leading-7"
                  style={{ color: "var(--text-primary)" }}
                >
                  Disponibilizar este presente novamente?
                </h2>
              </div>

              <button
                type="button"
                onClick={closeRemovalModal}
                disabled={removing}
                aria-label="Fechar"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-stone-100"
                style={{ color: "var(--text-secondary)" }}
              >
                <X size={20} />
              </button>
            </div>

            <p
              className="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold leading-5"
              style={{
                background: "var(--color-primary-light)",
                color: "var(--color-primary-dark)",
              }}
            >
              {giftToRemove.title}
            </p>

            <form className="mt-6" onSubmit={confirmRemoval}>
              <label
                htmlFor="removal-password"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Senha para remover
              </label>
              <input
                ref={removalPasswordRef}
                id="removal-password"
                type="password"
                value={removalPassword}
                onChange={(event) => setRemovalPassword(event.target.value)}
                required
                autoComplete="current-password"
                placeholder="Digite a senha"
                disabled={removing}
              />

              <p className="mt-3 text-xs leading-5" style={{ color: "var(--text-secondary)" }}>
                A senha evita que outra pessoa apague uma compra por engano.
              </p>

              {error && (
                <p
                  role="alert"
                  className="mt-3 rounded-xl px-4 py-3 text-sm font-semibold"
                  style={{ background: "#fff0f0", color: "#9f3030" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={removing}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 font-semibold text-white disabled:cursor-wait disabled:opacity-70"
                style={{ background: "#8f3030" }}
              >
                {removing ? (
                  <LoaderCircle className="animate-spin" size={18} />
                ) : (
                  <LockKeyhole size={18} />
                )}
                {removing ? "Removendo..." : "Confirmar remoção"}
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
