"use client";

import { useState } from "react";
import GuestGuide from "./GuestGuide";
import GiftSection from "./GiftSection";
import FadeUp from "./FadeUp";
import FinalSection from "./FinalSection";
import CreatorPage from "./CreatorPage";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_SECTIONS = 5;

export default function Invitation() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Paróquia+Sagrada+Família+Praça+Dr.+Bruno+Barbosa+150+Castelo+Santos+SP";

  const navigate = (index: number) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 320);
  };

  const mainSection = (
    <section
      className="relative flex min-h-[100svh] flex-col items-center overflow-x-hidden overflow-y-auto px-6 pt-10 pb-28 md:px-8 md:pt-16 md:pb-24"
      style={{ background: "var(--background)" }}
    >
      {/* Fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(239,201,210,.10), transparent 70%)",
        }}
      />

      {/* Decoração */}
      <div
        className="absolute left-6 top-6 h-32 w-32 rounded-full blur-3xl"
        style={{
          background: "rgba(217,144,164,.10)",
        }}
      />

      <div
        className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl"
        style={{
          background: "rgba(239,201,210,.20)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
        <FadeUp delay={0.25}>
          <h1 className="mt-2 text-center leading-tight md:mt-8">
            <span
              className="font-title text-4xl sm:text-5xl md:text-[68px]"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              Celma
            </span>

            <div className="my-1 md:my-3">
              <span
                className="font-body text-xl md:text-2xl"
                style={{
                  color: "var(--color-gold)",
                }}
              >
                &
              </span>
            </div>

            <span
              className="font-title text-4xl sm:text-5xl md:text-[68px]"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              Williams
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div
            className="my-2 h-px w-24 md:my-4"
            style={{
              background: "rgba(207,167,93,.35)",
            }}
          />
        </FadeUp>

        <FadeUp delay={0.55}>
          <div className="text-center">
            <p
              className="font-body text-xl md:text-3xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              29 de Agosto de 2026
            </p>

            <p
              className="mt-2 text-[10px] uppercase tracking-[0.32em] md:text-xs md:tracking-[0.35em]"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Sábado • 17:00
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.7}>
          <div className="mt-4 text-center md:mt-12">
            <h2
              className="mb-1 font-body text-lg italic md:mb-4 md:text-3xl"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              Cerimônia
            </h2>

            <p
              className="max-w-xs text-sm leading-7 md:text-base"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Paróquia Sagrada Família
              <br />
              Praça Dr. Bruno Barbosa, 150
              <br />
              Castelo • Santos • SP
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.9}>
          <button
            onClick={() => window.open(mapsUrl, "_blank")}
            className="
              mt-5
              rounded-full
              border
              bg-white/50
              px-7
              py-3
              text-xs
              uppercase
              tracking-[0.2em]
              shadow-sm
              backdrop-blur
              transition-all
              duration-300
              hover:scale-105
              md:mt-10
              md:px-8
              md:py-3
              md:text-sm
            "
            style={{
              borderColor: "var(--color-primary-dark)",
              color: "var(--color-primary-dark)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-primary-dark)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,.5)";
              e.currentTarget.style.color = "var(--color-primary-dark)";
            }}
          >
            Abrir localização
          </button>
        </FadeUp>

        <FadeUp delay={1}>
          <p
            className="mt-3 text-center text-sm md:mt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="font-body">Contamos com a sua presença!</span>
          </p>
        </FadeUp>

        <FadeUp delay={1.5}>
          <Image
            className="mt-3 h-14 w-14 md:mt-5 md:h-[100px] md:w-[100px]"
            src="/lacre.png"
            alt="Lacre"
            width={100}
            height={100}
          />
        </FadeUp>
      </div>
    </section>
  );

  const sections = [
    mainSection,
    <GuestGuide key="guide" />,
    <GiftSection key="gifts" />,
    <FinalSection key="final" />,
    <CreatorPage key="creator" />,
  ];

  return (
    <main
      className="relative min-h-[100svh] w-full overflow-x-hidden overflow-y-auto"
      style={{ background: "var(--background)" }}
    >
      <div
        className="min-h-[100svh] w-full transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {sections[current]}
      </div>

      {current > 0 && (
        <button
          onClick={() => navigate(current - 1)}
          className="
            fixed
            left-4
            top-5
            z-50
            flex
            items-center
            gap-1.5
            rounded-full
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.2em]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            active:scale-95
          "
          style={{
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(217,144,164,0.3)",
            color: "var(--color-primary-dark)",
          }}
        >
          <ChevronLeft size={14} />
          Voltar
        </button>
      )}

      {current < TOTAL_SECTIONS - 1 && (
        <button
          onClick={() => navigate(current + 1)}
          className="
            fixed
            bottom-8
            left-1/2
            z-50
            flex
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            px-8
            py-3.5
            text-sm
            uppercase
            tracking-[0.2em]
            text-white
            shadow-lg
            transition-all
            duration-200
            hover:scale-105
            active:scale-95
          "
          style={{
            background: "var(--color-primary-dark)",
          }}
        >
          Próximo
          <ChevronRight size={16} />
        </button>
      )}

      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-1.5">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => navigate(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              background:
                i === current
                  ? "var(--color-primary-dark)"
                  : "rgba(217,144,164,0.4)",
            }}
          />
        ))}
      </div>
    </main>
  );
}