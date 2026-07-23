"use client";

import FadeUp from "./FadeUp";
import { Heart } from "lucide-react";
import Countdown from "./Countdown";

export default function FinalSection() {
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
            "radial-gradient(circle at center, rgba(239,201,210,.14), transparent 70%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
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
            className="mt-8 font-title text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Obrigado
          </h2>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p
            className="mt-8 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Obrigado por fazer parte da nossa história.
          </p>

          <p
            className="mt-4 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Esperamos viver esse momento tão especial ao seu lado.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div
            className="mx-auto my-10 h-px w-24"
            style={{
              background: "rgba(207,167,93,.35)",
            }}
          />
        </FadeUp>

        <FadeUp delay={0.9}>
          <p
            className="font-title text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Celma & Williams
          </p>

          <p
            className="mt-5 text-sm uppercase tracking-[0.25em]"
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
            className="mt-12 text-lg italic"
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