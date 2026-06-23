import meta from "@/config/meta";
import { Metadata } from "next";
import About from "./_components/About";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/about",
  },
  title: {
    default: meta.pages["about"].title,
    template: `%s | ${meta.pages["about"].title}`,
  },
  description: meta.pages["about"].description,
};

export default function AboutPage() {
  return <About />;
}
