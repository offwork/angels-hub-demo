import meta from "@/config/meta";
import { Metadata } from "next";
import WhiteLabel from "./_components/WhiteLabel";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/white-label",
  },
  title: {
    default: meta.pages["white-label"].title,
    template: `%s | ${meta.pages["white-label"].title}`,
  },
  description: meta.pages["white-label"].description,
};

export default function WhiteLabelPage() {
  return <WhiteLabel />;
}
