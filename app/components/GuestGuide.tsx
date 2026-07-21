import {
  Camera,
  Clock3,
  Martini,
  Shirt,
  Smartphone,
} from "lucide-react";

import FadeUp from "./FadeUp";

export default function GuestGuide() {
  return (
    <section className="relative flex h-screen snap-start flex-col overflow-hidden bg-[#FAF7F2] px-8 py-20">

      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative z-10">

        <FadeUp delay={0.1}>
  <p className="text-center text-sm uppercase tracking-[0.35em] text-[#B08D57]">
    Informações
  </p>
</FadeUp>

<FadeUp delay={0.2}>
  <h2 className="mt-2 text-center font-title text-6xl text-[#7A5C4D]">
    Manual
  </h2>

  <p className="mb-12 text-center font-body text-2xl text-[#7A5C4D]">
    dos convidados
  </p>
</FadeUp>

        <div className="space-y-7">

          <FadeUp delay={0.3}>
  <Item
    icon={<Shirt size={20} />}
    title="Traje"
    text="Esporte Fino"
  />
</FadeUp>

<FadeUp delay={0.4}>
  <Item
    icon={<Clock3 size={20} />}
    title="Horário"
    text="Chegue com 30 minutos de antecedência."
  />
</FadeUp>

<FadeUp delay={0.5}>
  <Item
    icon={<Smartphone size={20} />}
    title="Cerimônia"
    text="Evite utilizar o celular durante a celebração."
  />
</FadeUp>

<FadeUp delay={0.6}>
  <Item
    icon={<Camera size={20} />}
    title="Fotos"
    text="Nosso fotógrafo registrará todos os momentos."
  />
</FadeUp>

<FadeUp delay={0.7}>
  <Item
    icon={<Martini size={20} />}
    title="Recepção"
    text="Aproveite cada momento da festa."
  />
</FadeUp>

        </div>

      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-[#8F7B7B]">
        <p className="text-[11px] uppercase tracking-[0.25em]">
          Deslize
        </p>

        <span className="mt-2 animate-bounce text-xl">
          ↓
        </span>
      </div>

    </section>
  );
}

interface ItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Item({
  icon,
  title,
  text,
}: ItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-4
        rounded-3xl
        border
        border-[#D4AF37]/15
        bg-white/60
        p-5
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#B08D57]/10
          text-[#B08D57]
        "
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-[#7A5C4D]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#6E5A5A]">
          {text}
        </p>
      </div>
    </div>
  );
}