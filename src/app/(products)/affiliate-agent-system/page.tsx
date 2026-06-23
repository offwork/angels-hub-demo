import meta from "@/config/meta";
import { Metadata } from "next";
import AffiliateAgentSystem from "./_components/AffiliateAgentSystem";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/affiliate-agent-system",
  },
  title: {
    default: meta.pages["affiliate-agent-system"].title,
    template: `%s | ${meta.pages["affiliate-agent-system"].title}`,
  },
  description: meta.pages["affiliate-agent-system"].description,
};

export default function AffiliateAgentSystemPage() {
  return <AffiliateAgentSystem />;
}
