"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Gift, Heart } from "lucide-react";

import FadeUp from "./FadeUp";

export default function GiftSection() {
  // ALTERAR
  const pixKey = "celmacardosozn@gmail.com";

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
      className="
        relative
        flex
        min-h-[100svh]
        w-full
        snap-start
        items-center
        justify-center
        overflow-x-hidden
        px-6
        py-12
        md:px-8
        md:py-20
      "
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
            className="mb-4 md:mb-6"
            size={30}
            strokeWidth={1.5}
            style={{ color: "var(--color-gold)" }}
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <h2
            className="font-title text-4xl md:text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Lista de Presentes
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p
            className="mt-4 leading-7 md:mt-8 md:leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Sua presença já é o nosso maior presente.
          </p>

          <p
            className="mt-4 leading-7 md:leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Se desejar nos presentear, você pode acessar nossa lista de
            presentes ou utilizar nossa chave Pix.
          </p>
        </FadeUp>

        {/* Botão Lista */}
        <FadeUp delay={0.6}>
          <Link
            href="/presentes"
            className="
              mt-7
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
          >
            <Gift size={20} />
            Ver lista de presentes
          </Link>
        </FadeUp>

        {/* Botão Pix */}
        <FadeUp delay={0.75}>
          <button
            onClick={copyPix}
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-transparent
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
              mt-6
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
            className="mt-8 text-center text-sm italic md:mt-10"
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