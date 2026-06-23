import meta from "@/config/meta";
import { Metadata } from "next";
import PrivacyPolicy from "./_components/PrivacyPolicy";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/privacy-policy",
  },
  title: {
    default: meta.pages["privacy-policy"].title,
    template: `%s | ${meta.pages["privacy-policy"].title}`,
  },
  description: meta.pages["privacy-policy"].description,
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
