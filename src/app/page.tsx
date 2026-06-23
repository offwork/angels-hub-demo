import meta from "@/config/meta";
import { Metadata } from "next";
import Home from "./_components/Home";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: new URL(meta.base_url),
  },
  title: {
    default: meta.site_title,
    template: `%s | ${meta.site_description}`,
  },
  description: meta.site_description,
};
export default function HomePage() {
  return <Home />;
}
