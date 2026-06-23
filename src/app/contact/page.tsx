import meta from "@/config/meta";
import { Metadata } from "next";
import Contact from "./_components/Contact";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/contact",
  },
  title: {
    default: meta.pages["contact"].title,
    template: `%s | ${meta.pages["contact"].title}`,
  },
  description: meta.pages["contact"].description,
};

export default function ContactPage() {
  return <Contact />;
}
