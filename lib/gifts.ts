export type GiftItem = {
  id: string;
  title: string;
  url: string;
};

export type GiftCategory = {
  label: string;
  items: GiftItem[];
};

export const giftCategories: GiftCategory[] = [
  {
    label: "Cozinha",
    items: [
      {
        id: "panela-cuscuzeira-inox-nordestina",
        title: "Panela Cuscuzeira Inox Nordestina",
        url: "https://www.decoramaiscasa.com.br/manta-flannel-listrada-180-gramas-ultra-soft-paris-queen-rose/p",
      },
      {
        id: "kit-utensilios-silicone-facas",
        title: "Kit 19 Peças de Utensílios de Silicone e Facas",
        url: "https://shopee.com.br/KIT-19-Pe%C3%A7as-Conjunto-de-Utens%C3%ADlios-de-Silicone-com-Cabo-de-Madeira-e-Kit-de-Facas-com-T%C3%A1bua-i.1553175352.22098857963",
      },
      {
        id: "panela-pressao-eletrica-mondial-5l",
        title: "Panela de pressão elétrica Mondial Master Cooker 5L",
        url: "https://www.carrefour.com.br/produto/panela-de-pressao-eletrica-mondial-master-cooker-5l-inox-220v-325501429",
      },
      {
        id: "jogo-panelas-ceramica-12-pecas",
        title: "Jogo de Panelas Cerâmica Antiaderente 12 Peças",
        url: "https://shopee.com.br/Jogo-Panelas-Cer%C3%A2mica-Antiaderente-G%C3%A1s-e-El%C3%A9trico-12-Pe%C3%A7as-Bege-Preto-Alta-Durabilidade-2-5mm-i.1309579976.58255913793",
      },
      {
        id: "kit-talheres-dourado-24-pecas",
        title: "Kit 24 Peças Talheres Dourado",
        url: "https://shopee.com.br/Kit-24-Pe%C3%A7as-Talheres-Dourado-de-A%C3%A7o-Inox-Garfo-Colher-Faca-Colher-De-Mesa-i.1432047236.29377265879",
      },
      {
        id: "kit-galheteiros-saleiro-bandeja",
        title: "Kit Galheteiros, Saleiro e Bandeja",
        url: "https://shopee.com.br/KIT-GALHETEIROS-SALEIRO-E-BANDEJA-5-PE%C3%87AS-DE-VIDRO-E-BAMBU-i.437793197.22394434629",
      },
      {
        id: "porta-guardanapo-papel-toalha-bambu",
        title: "Porta Guardanapo / Porta Papel Toalha de Bambu",
        url: "https://shopee.com.br/Bambu-Porta-Guardanapo-Suporte-de-Papel-Toalha-Grande-para-Mesa-Bancada-Cozinha-Porta-Rolo-i.1588615363.55960118340",
      },
      {
        id: "conjunto-pratos-fundo-oxford",
        title: "Conjunto 6 Pratos Fundo Oxford",
        url: "https://shopee.com.br/Conjunto-6-Pratos-Fundo-22-5-cm-Ryo-Maresia-Porcelana-Oxford-i.638399297.22997671939",
      },
    ],
  },
  {
    label: "Cama",
    items: [
      {
        id: "jogo-lencol-queen-palha",
        title: "Jogo de Lençol Queen 4 Peças Palha",
        url: "https://www.lindacasa.com.br/jogo-de-lencol-queen-4-pcs-400-palha/p",
      },
      {
        id: "jogo-lencol-charme-queen-rose",
        title: "Jogo de Lençol Charme Percal Queen Rose",
        url: "https://www.lindacasa.com.br/jogo-de-lencol-charme-percal-queen-4pcs-rose/p",
      },
      {
        id: "jogo-cama-queen-percal-300-fios",
        title: "Jogo de Cama Queen Percal 300 Fios",
        url: "https://www.decoramaiscasa.com.br/jogo-cama-queen-percal-300-fios-toque-macio-confort-print-04-pecas-rosas-azul/p",
      },
      {
        id: "cobre-leito-percal-200-fios",
        title: "Cobre Leito Percal 200 Fios",
        url: "https://shopee.com.br/Cobre-Leito-3-Pe%C3%A7as-CASAL-ou-QUEEN-Percal-200-Fios-Unique-Macia-Colcha-i.1670393159.23994911335",
      },
      {
        id: "cobre-leito-casal-dots-rose",
        title: "Cobre Leito Casal Dots Rose",
        url: "https://www.lindacasa.com.br/cobre-leito-casal-dots-rose/p",
      },
      {
        id: "manta-flannel-paris-queen-rose",
        title: "Manta Flannel Listrada Ultra Soft Paris Queen Rose",
        url: "https://www.decoramaiscasa.com.br/manta-flannel-listrada-180-gramas-ultra-soft-paris-queen-rose/p",
      },
      {
        id: "manta-sherpa-borboletas-rose",
        title: "Manta Queen / King Sherpa Velvet Borboletas Rose",
        url: "https://www.decoramaiscasa.com.br/manta-queen-king-240-gramas-220-x-240m-jacquard-c-sherpa-velvet-borboletas-rose/p",
      },
      {
        id: "kit-manta-trico-capas-almofadas",
        title: "Kit Manta de Tricô + Capas de Almofadas",
        url: "https://shopee.com.br/Kit-Manta-de-Tric%C3%B4-2-Capas-de-Almofadas-45X45cm-Sof%C3%A1-Poltrona-Cobertor-Cama-150x90cm-Usufruto-Decorativa-Sala-H06-i.387388389.22698828903",
      },
    ],
  },
  {
    label: "Banho",
    items: [
      {
        id: "jogo-banho-algodao-4-pecas",
        title: "Jogo de Banho 4 Peças 100% Algodão",
        url: "https://www.lindacasa.com.br/jogo-de-banho-4-pecas-450gm2-toalhas-banhao-100-algodao-imperial-palha/p",
      },
    ],
  },
  {
    label: "Decoração",
    items: [
      {
        id: "kit-almofada-cordao-caramelo-macrame",
        title: "Kit Capa de Almofada Cordão Caramelo Macramê",
        url: "https://shopee.com.br/Kit-de-Capa-Almofada-Cord%C3%A3o-Caramelo-Macrame-Artesanal-Decorativa-Algod%C3%A3o-Estilo-Rustico-Boho-i.450530875.23493402753",
      },
      {
        id: "kit-almofadas-macrame-verde-musgo",
        title: "Kit Capa de Almofadas Macramê Verde Musgo",
        url: "https://shopee.com.br/Kit-Capa-Almofada-Macrame-Verde-Musgo-(3-Capas-1-Manta)-Artesanal-Moderno-Decorativo-Algod%C3%A3o-i.450530875.21799442830",
      },
      {
        id: "bandeja-retangular-bambu",
        title: "Bandeja Retangular de Bambu 45x30cm",
        url: "https://shopee.com.br/Bandeja-Retangular-Bambu-45x30cm-Com-Al%C3%A7a-Tuut-Para-Caf%C3%A9-Da-Manh%C3%A3-Mesa-Posta-Servir-E-Decorar-i.804588196.23198883580",
      },
      {
        id: "poltrona-decorativa-boucle-beatriz",
        title: "Poltrona Decorativa Bouclé Beatriz",
        url: "https://shopee.com.br/Poltrona-Visammer-Beatriz-Decorativa-Tecido-Boucle-Da-Um-Toque-De-Amor-Elegancia-Para-Sala-De-Estar-i.1525188317.58202362321",
      },
    ],
  },
];

export const giftIds = new Set(
  giftCategories.flatMap((category) => category.items.map((gift) => gift.id)),
);
