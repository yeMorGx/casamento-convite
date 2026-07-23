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
      <section
        className="relative flex h-screen snap-start flex-col items-center overflow-hidden px-8 pt-24"
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
        <div className="relative z-10 flex flex-1 flex-col items-center">
          <FadeUp delay={0.1}>
            <p
              className="font-body text-3xl tracking-[0.45em]"
              style={{
                color: "var(--color-gold)",
              }}
            >
              C&W
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <h1 className="mt-8 text-center leading-none">
              <span
                className="font-title text-[68px]"
                style={{
                  color: "var(--color-primary-dark)",
                }}
              >
                Celma
              </span>

              <div className="my-3">
                <span
                  className="font-body text-2xl"
                  style={{
                    color: "var(--color-gold)",
                  }}
                >
                  &
                </span>
              </div>

              <span
                className="font-title text-[68px]"
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
              className="my-8 h-px w-24"
              style={{
                background: "rgba(207,167,93,.35)",
              }}
            />
          </FadeUp>

          <FadeUp delay={0.55}>
            <div className="text-center">
              <p
                className="font-body text-3xl"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                29 de Agosto de 2026
              </p>

              <p
                className="mt-2 text-xs uppercase tracking-[0.35em]"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Sábado • 17:00
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div className="mt-12 text-center">
              <h2
                className="mb-4 font-body text-3xl italic"
                style={{
                  color: "var(--color-primary-dark)",
                }}
              >
                Cerimônia
              </h2>

              <p
                className="max-w-xs text-sm leading-7"
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
                mt-10
                rounded-full
                border
                bg-white/50
                px-8
                py-3
                text-sm
                uppercase
                tracking-[0.2em]
                shadow-sm
                backdrop-blur
                transition-all
                duration-300
                hover:scale-105
              "
              style={{
                borderColor: "var(--color-primary-dark)",
                color: "var(--color-primary-dark)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "var(--color-primary-dark)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "rgba(255,255,255,.5)";
                e.currentTarget.style.color =
                  "var(--color-primary-dark)";
              }}
            >
              Abrir localização
            </button>
          </FadeUp>
                  </div>

        {/* Indicador */}
        <FadeUp delay={1.2}>
          <div
            className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em]">
              Deslize
            </p>

            <span className="mt-2 animate-bounce text-xl">
              ↓
            </span>
          </div>
        </FadeUp>
      </section>

      <GuestGuide />

      <GiftSection />

      <FinalSection />

      <CreatorPage />
    </main>
  );
}