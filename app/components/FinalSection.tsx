"use client";

import FadeUp from "./FadeUp";
import { Heart } from "lucide-react";
import Countdown from "./Countdown";

export default function FinalSection() {
  return (
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-[#FAF7F2] px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_70%)]" />

      <div className="relative z-10 max-w-sm text-center">
        <FadeUp delay={0.1}>
          <Heart
            size={38}
            strokeWidth={1.5}
            className="mx-auto text-[#B08D57]"
          />
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="mt-8 font-title text-5xl text-[#7A5C4D]">Obrigado</h2>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="mt-8 leading-8 text-[#6E5A5A]">
            Obrigado por fazer parte da nossa história.
          </p>

          <p className="mt-4 leading-8 text-[#6E5A5A]">
            Esperamos viver esse momento tão especial ao seu lado.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="mx-auto my-10 h-px w-24 bg-[#D4AF37]/40" />
        </FadeUp>

        <FadeUp delay={0.9}>
          <p className="font-title text-5xl text-[#7A5C4D]">Celma & Williams</p>

          <p className="mt-5 uppercase tracking-[0.25em] text-sm text-[#9B8B84]">
            29 de Agosto de 2026
          </p>
        </FadeUp>

        <FadeUp delay={1.0}>
          <Countdown />
        </FadeUp>

        <FadeUp delay={1.1}>
          <p className="mt-12 text-[#B08D57] italic">Até breve ✨</p>
        </FadeUp>
      </div>
    </section>
  );
}
