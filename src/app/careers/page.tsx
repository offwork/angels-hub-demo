import meta from "@/config/meta";
import { Metadata } from "next";
import Careers from "./_components/Careers";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/careers",
  },
  title: {
    default: meta.pages["careers"].title,
    template: `%s | ${meta.pages["careers"].title}`,
  },
  description: meta.pages["careers"].description,
};

export default function CareersPage() {
  return <Careers />;
}
