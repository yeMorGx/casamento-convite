"use client";

import FadeUp from "./FadeUp";
import { Code2, Palette, Sparkles, ArrowRight } from "lucide-react";

export default function CreatorPage() {
  return (
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-[#111111] px-8">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.15),transparent_70%)]" />

      <div className="relative z-10 max-w-sm text-center text-white">

        <FadeUp delay={0.2}>
          <Sparkles
            size={40}
            className="mx-auto text-[#D4AF37]"
            strokeWidth={1.5}
          />
        </FadeUp>


        <FadeUp delay={0.4}>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-white/50">
            Desenvolvido por
          </p>
        </FadeUp>


        <FadeUp delay={0.6}>
          <h1 className="mt-5 text-6xl font-light">
            Gabriel
          </h1>
        </FadeUp>


        <FadeUp delay={0.8}>
          <p className="mt-4 text-lg text-white/70">
            Desenvolvimento & Design Digital
          </p>
        </FadeUp>


        <FadeUp delay={1}>
          <p className="mt-8 leading-8 text-white/60">
            Criação de sites, sistemas e experiências digitais
            personalizadas para transformar ideias em realidade.
          </p>
        </FadeUp>


        <FadeUp delay={1.2}>
          <div className="mt-10 grid gap-4">


            <div className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
            ">
              <Code2 className="text-[#D4AF37]" />

              <div className="text-left">
                <p>
                  Desenvolvimento
                </p>

                <span className="text-sm text-white/50">
                  Sites e aplicações web
                </span>
              </div>
            </div>


            <div className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
            ">
              <Palette className="text-[#D4AF37]" />

              <div className="text-left">
                <p>
                  Design Digital
                </p>

                <span className="text-sm text-white/50">
                  Interfaces e experiências
                </span>
              </div>
            </div>


          </div>
        </FadeUp>


        <FadeUp delay={1.5}>
          <button
            className="
              mt-10
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#D4AF37]
              py-4
              text-black
              font-medium
            "
          >
            Conheça meu trabalho

            <ArrowRight size={18}/>
          </button>
        </FadeUp>


        <FadeUp delay={1.7}>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Gabriel Morgado
          </p>
        </FadeUp>


      </div>

    </section>
  );
}