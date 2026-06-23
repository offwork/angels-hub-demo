import meta from "@/config/meta";
import { Metadata } from "next";
import CryptoSolutions from "./_components/CryptoSolutions";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/crypto-solutions",
  },
  title: {
    default: meta.pages["crypto-solutions"].title,
    template: `%s | ${meta.pages["crypto-solutions"].title}`,
  },
  description: meta.pages["crypto-solutions"].description,
};

export default function CryptoSolutionsPage() {
  return <CryptoSolutions />;
}
