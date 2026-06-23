import meta from "@/config/meta";
import { Metadata } from "next";
import TermsConditions from "./_components/TermsConditions";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/terms-and-conditions",
  },
  title: {
    default: meta.pages["terms-and-conditions"].title,
    template: `%s | ${meta.pages["terms-and-conditions"].title}`,
  },
  description: meta.pages["terms-and-conditions"].description,
};

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
