import meta from "@/config/meta";
import { Metadata } from "next";
import OnlineCasino from "./_components/OnlineCasino";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/online-casino",
  },
  title: {
    default: meta.pages["online-casino"].title,
    template: `%s | ${meta.pages["online-casino"].title}`,
  },
  description: meta.pages["online-casino"].description,
};

export default function OnlineCasinoPage() {
  return <OnlineCasino />;
}
