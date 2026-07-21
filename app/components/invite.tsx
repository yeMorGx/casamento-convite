import GuestGuide from "./GuestGuide";
import GiftSection from "./GiftSection";
import FadeUp from "./FadeUp";
import FinalSection from "./FinalSection";
import CreatorPage from "./CreatorPage";

export default function Invitation() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Paróquia+Sagrada+Família+Praça+Dr.+Bruno+Barbosa+150+Castelo+Santos+SP";

  return (
   <main
    className="
      h-screen
      w-full
      overflow-y-scroll
      snap-y
      snap-mandatory
      scroll-smooth
      no-scrollbar
    "
  >
      <section className="relative flex h-screen snap-start flex-col items-center overflow-hidden bg-[#FAF7F2] px-8 pt-24">
        {/* Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

        {/* Decoração */}
        <div className="absolute left-6 top-6 h-32 w-32 rounded-full bg-[#D4AF37]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#D8A7B1]/10 blur-3xl" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-1 flex-col items-center">
          <FadeUp delay={0.1}>
            <p className="font-body text-3xl tracking-[0.45em] text-[#B08D57]">
              C&W
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <h1 className="mt-8 text-center leading-none">
              <span className="font-title text-[68px] text-[#7A5C4D]">
                Celma
              </span>

              <div className="my-3">
                <span className="font-body text-2xl text-[#B08D57]">&</span>
              </div>

              <span className="font-title text-[68px] text-[#7A5C4D]">
                Williams
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="my-8 h-px w-24 bg-[#D4AF37]/40" />
          </FadeUp>

          <FadeUp delay={0.55}>
            <div className="text-center">
              <p className="font-body text-3xl text-[#7A5C4D]">
                29 de Agosto de 2026
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#9B8B84]">
                Sábado • 17:00
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="mt-12 text-center">
              <h2 className="mb-4 font-body text-3xl italic text-[#B08D57]">
                Cerimônia
              </h2>

              <p className="max-w-xs text-sm leading-7 text-[#6E5A5A]">
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
        mt-10
        rounded-full
        border
        border-[#B08D57]
        bg-white/50
        px-8
        py-3
        text-sm
        uppercase
        tracking-[0.2em]
        text-[#7A5C4D]
        shadow-sm
        backdrop-blur
        transition-all
        duration-300
        hover:scale-105
        hover:bg-[#B08D57]
        hover:text-white
      "
            >
              Abrir localização
            </button>
          </FadeUp>
        </div>

        {/* Indicador */}
        <FadeUp delay={1.2}>
          <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center text-[#8F7B7B]">
            <p className="text-[11px] uppercase tracking-[0.25em]">Deslize</p>

            <span className="mt-2 animate-bounce text-xl">↓</span>
          </div>
        </FadeUp>
      </section>

      <GuestGuide />

      <GiftSection />

      <FinalSection />

      <CreatorPage/>

    </main>
  );
}
