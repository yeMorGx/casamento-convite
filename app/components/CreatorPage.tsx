"use client";

import FadeUp from "./FadeUp";
import { Code2, Palette, ArrowRight } from "lucide-react";

export default function CreatorPage() {
  return (
    <section
      className="relative flex h-screen snap-start items-center justify-center overflow-hidden px-8"
      style={{
        background: "#050505",
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,.04), transparent 70%)",
        }}
      />

      {/* Glow dourado */}
      <div
        className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "rgba(212,175,55,.08)",
        }}
      />

      <div className="relative z-10 max-w-sm text-center">

        <FadeUp delay={0.2}>
          <svg
            viewBox="0 0 325 323.45"
            className="mx-auto h-20 w-20"
            fill="white"
          >
            <path d="M325,226.72v65c0,17.52-14.2,31.72-31.72,31.72H31.72c-17.52,0-31.72-14.2-31.72-31.72V31.72C0,14.2,14.2,0,31.72,0h66.55c17.52,0,31.72,14.2,31.72,31.72v1.55c0,17.52-14.2,31.72-31.72,31.72h-1.55c-17.52,0-31.72,14.2-31.72,31.72v130c0,17.52,14.2,31.72,31.72,31.72h131.55c17.52,0,31.72-14.2,31.72-31.72h0c0-17.52,14.2-31.73,31.72-31.73h1.55c17.52,0,31.72,14.2,31.72,31.72Z" />

            <rect
              x="130"
              y="130"
              width="130"
              height="63.45"
              rx="31.72"
              ry="31.72"
            />
          </svg>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p
            className="mt-8 text-xs uppercase tracking-[0.45em]"
            style={{
              color: "rgba(255,255,255,.45)",
            }}
          >
            Desenvolvido por
          </p>
        </FadeUp>

        <FadeUp delay={0.5}>
          <h1
            className="mt-5 text-6xl font-light"
            style={{
              color: "#FFF",
            }}
          >
            Gabriel
          </h1>
        </FadeUp>

        <FadeUp delay={0.65}>
          <p
            className="mt-4 text-lg"
            style={{
              color: "rgba(255,255,255,.75)",
            }}
          >
            Desenvolvimento & Design Digital
          </p>
        </FadeUp>

        <FadeUp delay={0.8}>
          <p
            className="mt-8 leading-8"
            style={{
              color: "rgba(255,255,255,.55)",
            }}
          >
            Criação de sites, sistemas e
            experiências digitais personalizadas
            para transformar ideias em realidade.
          </p>
        </FadeUp>

        <FadeUp delay={1}>
          <div className="mt-10 grid gap-5">

            <div
              className="flex items-center gap-4 rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#111111",
                borderColor: "rgba(255,255,255,.08)",
              }}
            >
              <Code2
                size={28}
                color="#D4AF37"
              />

              <div className="text-left">
                <p
                  className="font-medium"
                  style={{
                    color: "#FFF",
                  }}
                >
                  Desenvolvimento
                </p>

                <span
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  Sites e aplicações web
                </span>
              </div>
            </div>

            <div
              className="flex items-center gap-4 rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#111111",
                borderColor: "rgba(255,255,255,.08)",
              }}
            >
              <Palette
                size={28}
                color="#D4AF37"
              />

              <div className="text-left">
                <p
                  className="font-medium"
                  style={{
                    color: "#FFF",
                  }}
                >
                  Design Digital
                </p>

                <span
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,.55)",
                  }}
                >
                  Interfaces e experiências
                </span>
              </div>
            </div>

          </div>
        </FadeUp>
                <FadeUp delay={1.3}>
          <button
            onClick={() =>
              window.open("https://gabrielmorgado.dev", "_blank")
            }
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              py-4
              font-medium
              transition-all
              duration-300
              hover:scale-[1.03]
            "
            style={{
              background: "#FFF",
              color: "#000",
            }}
          >
            Conheça meu trabalho

            <ArrowRight size={18} />
          </button>
        </FadeUp>

        <FadeUp delay={1.5}>
          <div
            className="mt-10 h-px w-20 mx-auto"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(212,175,55,.6), transparent)",
            }}
          />
        </FadeUp>

        <FadeUp delay={1.7}>
          <p
            className="mt-8 text-xs uppercase tracking-[0.35em]"
            style={{
              color: "rgba(255,255,255,.35)",
            }}
          >
            Gabriel Morgado
          </p>
        </FadeUp>
      </div>
    </section>
  );
}