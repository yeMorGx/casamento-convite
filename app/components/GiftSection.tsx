"use client";

import { useState } from "react";
import { Gift, Copy, Heart, Check } from "lucide-react";

import Countdown from "./Countdown";
import FadeUp from "./FadeUp";

export default function GiftSection() {
  // ALTERAR
  const pixKey = "11999999999";
  const giftListUrl = "https://www.google.com"; // Trocar pela lista real

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
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-[#FAF7F2] px-8">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        

        <FadeUp delay={0.25}>
          <Heart
            className="mb-6 text-[#B08D57]"
            size={30}
            strokeWidth={1.5}
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <h2 className="font-title text-5xl text-[#7A5C4D]">
            Lista de Presentes
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p className="mt-8 leading-8 text-[#6E5A5A]">
            Sua presença já é o nosso maior presente.
          </p>

          <p className="mt-4 leading-8 text-[#6E5A5A]">
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
              border-[#B08D57]
              bg-white/60
              px-6
              py-4
              text-[#7A5C4D]
              shadow-sm
              backdrop-blur
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-[#B08D57]
              hover:text-white
            "
          >
            <Gift size={20} />
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
              bg-[#B08D57]
              px-6
              py-4
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.03]
            "
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
              border-[#D4AF37]/20
              bg-white/60
              p-5
              shadow-sm
              backdrop-blur
            "
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
              Chave Pix
            </p>

            <p className="mt-3 break-all text-lg font-medium text-[#7A5C4D]">
              {pixKey}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={1}>
          <p className="mt-10 text-center text-sm italic text-[#8E7A72]">
            Agradecemos por compartilhar este momento tão especial conosco. 🤍
          </p>
        </FadeUp>
      </div>
    </section>
  );
}