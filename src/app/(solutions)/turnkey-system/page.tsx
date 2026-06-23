import meta from "@/config/meta";
import { Metadata } from "next";
import TurnkeySystem from "./_components/TurnkeySystem";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/turnkey-system",
  },
  title: {
    default: meta.pages["turnkey-system"].title,
    template: `%s | ${meta.pages["turnkey-system"].title}`,
  },
  description: meta.pages["turnkey-system"].description,
};

export default function TurnkeySystemPage() {
  return (
    < TurnkeySystem />
  );
}
