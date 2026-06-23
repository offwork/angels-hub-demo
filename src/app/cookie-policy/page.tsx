import meta from "@/config/meta";
import { Metadata } from "next";
import CookiePolicy from "./_components/CookiePolicy";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/cookie-policy",
  },
  title: {
    default: meta.pages["cookie-policy"].title,
    template: `%s | ${meta.pages["cookie-policy"].title}`,
  },
  description: meta.pages["cookie-policy"].description,
};

export default function CookiePolicyPage() {
  return <CookiePolicy />;
}
