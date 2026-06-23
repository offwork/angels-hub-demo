import meta from "@/config/meta";
import { Metadata } from "next";
import AngelInvestment from "./_components/AngelInvestment";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/angel-investment",
  },
  title: {
    default: meta.pages["angel-investment"].title,
    template: `%s | ${meta.pages["angel-investment"].title}`,
  },
  description: meta.pages["angel-investment"].description,
};

export default function AngelInvestmentPage() {
  return <AngelInvestment />;
}
