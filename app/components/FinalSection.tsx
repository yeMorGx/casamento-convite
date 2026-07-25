"use client";

import FadeUp from "./FadeUp";
import { Heart } from "lucide-react";
import Countdown from "./Countdown";

export default function FinalSection() {
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
        overflow-y-auto
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
            "radial-gradient(circle at center, rgba(239,201,210,.14), transparent 70%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "rgba(239,201,210,.18)",
        }}
      />

      <div
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "rgba(217,144,164,.12)",
        }}
      />

      <div className="relative z-10 max-w-sm text-center">
        <FadeUp delay={0.1}>
          <Heart
            size={38}
            strokeWidth={1.5}
            className="mx-auto"
            style={{
              color: "var(--color-primary-dark)",
              fill: "rgba(217,144,164,.18)",
            }}
          />
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2
            className="mt-6 font-title text-4xl md:mt-8 md:text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Obrigado
          </h2>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p
            className="mt-5 leading-7 md:mt-8 md:leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Obrigado por fazer parte da nossa história.
          </p>

          <p
            className="mt-3 leading-7 md:mt-4 md:leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Esperamos viver esse momento tão especial ao seu lado.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div
            className="mx-auto my-5 h-px w-24 md:my-10"
            style={{
              background: "rgba(207,167,93,.35)",
            }}
          />
        </FadeUp>

        <FadeUp delay={0.9}>
          <p
            className="font-title text-3xl md:text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Celma & Williams
          </p>

          <p
            className="mt-3 text-xs uppercase tracking-[0.25em] md:mt-5 md:text-sm"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            29 de Agosto de 2026
          </p>
        </FadeUp>

        <FadeUp delay={1.0}>
          <Countdown />
        </FadeUp>

        <FadeUp delay={1.1}>
          <p
            className="mt-8 text-base italic md:mt-12 md:text-lg"
            style={{
              color: "var(--color-gold)",
            }}
          >
            Até breve ✨
          </p>
        </FadeUp>
      </div>
    </section>
  );
}