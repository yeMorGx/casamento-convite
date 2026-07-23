"use client";

import { useState } from "react";
import { Gift, Copy, Heart, Check } from "lucide-react";

import FadeUp from "./FadeUp";

export default function GiftSection() {
  // ALTERAR
  const pixKey = "11999999999";
  const giftListUrl = "https://www.google.com";

  const [copied, setCopied] = useState(false);

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden px-8"
      style={{ background: "var(--background)" }}
    >
      {/* Fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(239,201,210,.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <FadeUp delay={0.25}>
          <Heart
            className="mb-6"
            size={30}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary-dark)" }}
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <h2
            className="font-title text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Lista de Presentes
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p
            className="mt-8 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Sua presença já é o nosso maior presente.
          </p>

          <p
            className="mt-4 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Se desejar nos presentear, você pode escolher um
            item da nossa lista ou utilizar nossa chave Pix.
          </p>
        </FadeUp>

        {/* Lista */}
        <FadeUp delay={0.6}>
          <button
            onClick={() => window.open(giftListUrl, "_blank")}
            className="
              mt-12
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              bg-white/70
              px-6
              py-4
              shadow-sm
              backdrop-blur
              transition-all
              duration-300
              hover:scale-[1.03]
            "
            style={{
              borderColor: "var(--color-primary-dark)",
              color: "var(--color-primary-dark)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "var(--color-primary-dark)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "rgba(255,255,255,.7)";
              e.currentTarget.style.color =
                "var(--color-primary-dark)";
            }}
          >
            <Gift
              size={20}
              style={{ color: "var(--color-green)" }}
            />

            Ver lista de presentes
          </button>
        </FadeUp>
                {/* Pix */}
        <FadeUp delay={0.75}>
          <button
            onClick={copyPix}
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              px-6
              py-4
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.03]
            "
            style={{
              background: "var(--color-primary-dark)",
            }}
          >
            {copied ? <Check size={20} /> : <Copy size={18} />}

            {copied ? "Chave copiada!" : "Copiar chave Pix"}
          </button>
        </FadeUp>

        {/* Card Pix */}
        <FadeUp delay={0.9}>
          <div
            className="
              mt-8
              w-full
              rounded-3xl
              border
              p-5
              shadow-sm
              backdrop-blur
            "
            style={{
              borderColor: "var(--color-primary-light)",
              background: "#fff8fa",
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--color-gold)",
              }}
            >
              Chave Pix
            </p>

            <p
              className="mt-3 break-all text-lg font-medium"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              {pixKey}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={1}>
          <p
            className="mt-10 text-center text-sm italic"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Agradecemos por compartilhar este momento tão especial conosco. 🤍
          </p>
        </FadeUp>
      </div>
    </section>
  );
}