"use client";

import { useState } from "react";
import { Gift, Copy, Heart, Check, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

import FadeUp from "./FadeUp";

export default function GiftSection() {
  // ALTERAR
  const pixKey = "celmacardosozn@gmail.com";

  const giftLinks = [
    {
      title: "Panela Cuscuzeira Inox Nordestina",
      url: "https://shopee.com.br/Panela-Cuscuzeira-Inox-Nordestina-Para-Cuscuz-Tradicional-i.844120093.22295798317",
    },
    {
      title: "Kit 19 Peças de Utensílios de Silicone e Facas",
      url: "https://shopee.com.br/KIT-19-Pe%C3%A7as-Conjunto-de-Utens%C3%ADlios-de-Silicone-com-Cabo-de-Madeira-e-Kit-de-Facas-com-T%C3%A1bua-i.1553175352.22098857963",
    },
    {
      title: "Kit Potes Herméticos 640ml Com Divisória",
      url: "https://shopee.com.br/Kit-10-ou-5-Potes-Herm%C3%A9ticos-640ml-Com-Divis%C3%B3ria-Retangular-Transparente-Premium-i.811924245.22293175057",
    },
    {
      title: "Panela de pressão elétrica Mondial Master Cooker 5L",
      url: "https://www.carrefour.com.br/produto/panela-de-pressao-eletrica-mondial-master-cooker-5l-inox-220v-325501429",
    },
    {
      title: "Jogo De Panelas Indução Kit 10 Peças Revestimento Cerâmico",
      url: "https://br.shp.ee/khSkitum",
    },
    {
      title: "Conjunto De Facas Aço Carbono 17 Peças",
      url: "https://br.shp.ee/3YBQSwYL",
    },
    {
      title: "Opção Especial",
      url: "https://shopee.com.br/opaanlp/842996464/22093251391?__mobile__=1&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMfaLqlfFS4JwQPCoOJZHE2YMfq1tWF61pnIIHqGuyOlpkjBotHu7Xpb0YRK1tULWVZdcpI_r9hw6jgE9CqmNpcGhlcnRleHTElwAAAAxzTNKVvoXVNpPKL7rF9T3gpE1-pvvTkKtZ3CpjqkCbWWILEXpQQuSygmbLcmyIo1sMFddXYqC7WXonZ8ecsbo4PSrAabS3b9FOpEWrpCnpthHcPP-2JGD79A1z1aIUrWyW6dWWe2zV-5wNeV-zhhlefiIQ9Y6kG5X5BhDUlf2qXP26HEbyViUYxTmfRszyw7Gq8tg&mmp_pid=an_18321660125&uls_trackid=560b2gbe00mp&utm_campaign=id_xbNRRYh3UW&utm_content=----&utm_medium=affiliates&utm_source=an_18321660125&utm_term=f4yg6y229ki3",
    },
  ];

  const [copied, setCopied] = useState(false);
  const [showGiftList, setShowGiftList] = useState(false);

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
    <section
      className="relative flex min-h-screen w-full snap-start items-center justify-center overflow-y-auto overflow-x-hidden px-8 py-20"
      style={{ background: "var(--background)" }}
    >
      {/* Fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(239,201,210,.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        <FadeUp delay={0.25}>
          <Heart
            className="mb-6"
            size={30}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary-dark)" }}
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <h2
            className="font-title text-5xl"
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Lista de Presentes
          </h2>
        </FadeUp>

        <FadeUp delay={0.45}>
          <p
            className="mt-8 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Sua presença já é o nosso maior presente.
          </p>

          <p
            className="mt-4 leading-8"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Se desejar nos presentear, você pode escolher um item da nossa lista
            ou utilizar nossa chave Pix.
          </p>
        </FadeUp>

        {/* Lista */}
        <FadeUp delay={0.6}>
          <button
            onClick={() => setShowGiftList(!showGiftList)}
            className="
              mt-12
              flex
              w-full
              items-center
              justify-between
              rounded-full
              border
              bg-white/70
              px-6
              py-4
              shadow-sm
              backdrop-blur
              transition-all
              duration-300
              hover:scale-[1.03]
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
              e.currentTarget.style.background = "rgba(255,255,255,.7)";
              e.currentTarget.style.color = "var(--color-primary-dark)";
            }}
          >
            <div className="flex items-center gap-3">
              <Gift size={20} style={{ color: "currentColor" }} />
              Ver lista de presentes
            </div>
            {showGiftList ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {/* Lista de links expansível */}
          <div
            className={`
              w-full
              transition-all
              duration-500
              ease-in-out
              overflow-hidden
              ${showGiftList ? "max-h-[22rem] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}
            `}
          >
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[21rem] pb-2 custom-scrollbar">
              {giftLinks.map((gift, idx) => (
                <a
                  key={idx}
                  href={gift.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    border
                    bg-white/60
                    p-4
                    text-left
                    transition-all
                    hover:bg-white/90
                    hover:scale-[1.02]
                  "
                  style={{
                    borderColor: "var(--color-primary-light)",
                  }}
                >
                  <span className="text-sm font-medium leading-tight" style={{ color: "var(--text-primary)" }}>
                    {gift.title}
                  </span>
                  <ExternalLink size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
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
              px-6
              py-4
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.03]
            "
            style={{
              background: "var(--color-primary-dark)",
            }}
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
              p-5
              shadow-sm
              backdrop-blur
            "
            style={{
              borderColor: "var(--color-primary-light)",
              background: "#fff8fa",
            }}
          >
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                color: "var(--color-gold)",
              }}
            >
              Chave Pix
            </p>

            <p
              className="mt-3 break-all text-lg font-medium"
              style={{
                color: "var(--color-primary-dark)",
              }}
            >
              {pixKey}
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={1}>
          <p
            className="mt-10 text-center text-sm italic"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Agradecemos por compartilhar este momento tão especial conosco. 🤍
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
