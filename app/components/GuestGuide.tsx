"use client";

import Image from "next/image";
import {
  CalendarCheck2,
  Clock3,
  Mail,
  Camera,
  Shirt,
  Martini,
  Heart,
  TriangleAlert,
  MessageCircle,
  Flower2,
  CakeSlice,
  Images,
} from "lucide-react";

import FadeUp from "./FadeUp";

export default function GuestGuide() {
  return (
    <section
      className="relative flex h-full snap-start items-start justify-center overflow-y-auto px-5 py-6 md:py-8"
      style={{ background: "var(--background)" }}
    >
      {/* Fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle_at_center, rgba(239,201,210,.12), transparent 75%)",
        }}
      />

      {/* Moldura */}
      <div
        className="absolute inset-3 md:inset-5 rounded-[26px] border-2"
        style={{
          borderColor: "var(--color-primary-dark)",
        }}
      />

      {/* Flores */}
      <Image
        src="/flowers/corner-top.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-0 top-0 rotate-85"
      />

      <Image
        src="/flowers/corner-top.png"
        alt=""
        width={120}
        height={120}
        className="absolute bottom-0 right-0 rotate-265"
      />

      <div className="relative z-10 w-full max-w-[340px]">
        <FadeUp delay={0.1}>
          <h2
            className="text-center font-title text-4xl md:text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Manual dos
          </h2>

          <h3
            className="mt-1 text-center font-title text-4xl md:text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Convidados
          </h3>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="my-4 md:my-8 flex items-center justify-center gap-4">
            <div
              className="h-px w-14"
              style={{
                background: "rgba(217,144,164,.35)",
              }}
            />

            <Heart
              size={16}
              style={{
                fill: "var(--color-primary-dark)",
                color: "var(--color-primary-dark)",
              }}
            />

            <div
              className="h-px w-14"
              style={{
                background: "rgba(217,144,164,.35)",
              }}
            />
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-y-8 mt-2 md:mt-0">
          <GuideItem
            icon={<CalendarCheck2 size={26} className="md:w-[34px] md:h-[34px]" />}
            text="CONFIRME PRESENÇA"
          />

          <GuideItem
            icon={<Clock3 size={26} className="md:w-[34px] md:h-[34px]" />}
            text="SEJA PONTUAL"
          />

          <GuideItem
            icon={<Mail size={26} className="md:w-[34px] md:h-[34px]" />}
            text="CONVIDADO NÃO CONVIDA"
          />

          <GuideItem
            icon={<Camera size={26} className="md:w-[34px] md:h-[34px]" />}
            text="NÃO ATRAPALHE O FOTÓGRAFO"
          />

          <GuideItem
            icon={<Shirt size={26} className="md:w-[34px] md:h-[34px]" />}
            text="NÃO USE BRANCO"
          />

          <GuideItem
            icon={<Martini size={26} className="md:w-[34px] md:h-[34px]" />}
            text="APROVEITE BASTANTE"
          />

          <GuideItem
            icon={<Heart size={26} className="md:w-[34px] md:h-[34px]" />}
            text="NÃO SAIA SEM SE DESPEIDR DOS NOIVOS!"
          />

          <GuideItem
            icon={<TriangleAlert size={26} className="md:w-[34px] md:h-[34px]" />}
            text="EVITE CONFUSÕES"
          />

          <GuideItem
            icon={<MessageCircle size={26} className="md:w-[34px] md:h-[34px]" />}
            text="EVITE COMENTÁRIOS NEGATIVOS"
          />

          <GuideItem
            icon={<Flower2 size={26} className="md:w-[34px] md:h-[34px]" />}
            text="NÃO LEVE A DECORAÇÃO"
          />

          <GuideItem
            icon={<CakeSlice size={26} className="md:w-[34px] md:h-[34px]" />}
            text="NÃO ATAQUE A MESA DE DOCES"
          />

          <GuideItem
            icon={<Images size={26} className="md:w-[34px] md:h-[34px]" />}
            text="TIRE MUITAS FOTOS"
          />
        </div>

        <FadeUp delay={0.8}>
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-4">
            <span
              className="font-title text-4xl md:text-5xl"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              C
            </span>

            <Heart
              size={18}
              style={{
                fill: "var(--color-primary-dark)",
                color: "var(--color-primary-dark)",
              }}
            />

            <span
              className="font-title text-5xl"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              W
            </span>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
interface GuideItemProps {
  icon: React.ReactNode;
  text: string;
}

function GuideItem({
  icon,
  text,
}: GuideItemProps) {
  return (
    <div className="flex flex-col items-center px-2 text-center">
      <div
        className="mb-2"
        style={{
          color: "var(--color-primary-dark)",
        }}
      >
        {icon}
      </div>

      <p
        className="text-[11px] font-semibold uppercase leading-4 tracking-wide"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {text}
      </p>
    </div>
  );
}