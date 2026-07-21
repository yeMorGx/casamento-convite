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
    <section className="relative flex h-screen snap-start items-center justify-center overflow-hidden bg-[#FAF7F2] px-5 py-8">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_75%)]" />

      {/* Moldura */}
      <div className="absolute inset-5 rounded-[26px] border-2 border-[#7D8A6B]" />

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
          <h2 className="text-center font-title text-5xl text-[#4E4A49]">
            Manual dos
          </h2>

          <h3 className="mt-1 text-center font-title text-5xl text-[#4E4A49]">
            Convidados
          </h3>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="my-8 flex items-center justify-center gap-4">
            <div className="h-px w-14 bg-[#7D8A6B]/40" />

            <Heart
              size={16}
              className="fill-[#7D8A6B] text-[#7D8A6B]"
            />

            <div className="h-px w-14 bg-[#7D8A6B]/40" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-3 gap-y-8">
          <GuideItem
            icon={<CalendarCheck2 size={34} />}
            text="CONFIRME PRESENÇA"
          />

          <GuideItem
            icon={<Clock3 size={34} />}
            text="SEJA PONTUAL"
          />

          <GuideItem
            icon={<Mail size={34} />}
            text="CONVIDADO NÃO CONVIDA"
          />

          <GuideItem
            icon={<Camera size={34} />}
            text="NÃO ATRAPALHE O FOTÓGRAFO"
          />

          <GuideItem
            icon={<Shirt size={34} />}
            text="NÃO USE BRANCO"
          />

          <GuideItem
            icon={<Martini size={34} />}
            text="APROVEITE BASTANTE"
          />

          <GuideItem
            icon={<Heart size={34} />}
            text="DESPEÇA-SE DOS NOIVOS"
          />

          <GuideItem
            icon={<TriangleAlert size={34} />}
            text="EVITE CONFUSÕES"
          />

          <GuideItem
            icon={<MessageCircle size={34} />}
            text="EVITE COMENTÁRIOS NEGATIVOS"
          />

          <GuideItem
            icon={<Flower2 size={34} />}
            text="NÃO LEVE A DECORAÇÃO"
          />

          <GuideItem
            icon={<CakeSlice size={34} />}
            text="NÃO ATAQUE A MESA DE DOCES"
          />

          <GuideItem
            icon={<Images size={34} />}
            text="TIRE MUITAS FOTOS"
          />
        </div>

        <FadeUp delay={0.8}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="font-title text-5xl text-[#4E4A49]">
              C
            </span>

            <Heart
              size={18}
              className="fill-[#7D8A6B] text-[#7D8A6B]"
            />

            <span className="font-title text-5xl text-[#4E4A49]">
              W
            </span>
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-[#8F7B7B]">
        <p className="text-[10px] uppercase tracking-[0.3em]">
          Deslize
        </p>

        <span className="mt-2 animate-bounce text-lg">
          ↓
        </span>
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
      <div className="mb-3 text-[#7D8A6B]">
        {icon}
      </div>

      <p className="text-[11px] font-semibold uppercase leading-4 tracking-wide text-[#55504C]">
        {text}
      </p>
    </div>
  );
}