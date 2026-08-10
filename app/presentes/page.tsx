import type { Metadata } from "next";

import GiftRegistry from "./GiftRegistry";

export const metadata: Metadata = {
  title: "Lista de Presentes | Celma & Williams",
  description: "Escolha um presente para Celma e Williams.",
};

export default function PresentesPage() {
  return <GiftRegistry />;
}
