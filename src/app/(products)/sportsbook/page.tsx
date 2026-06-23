import meta from "@/config/meta";
import { Metadata } from "next";
import Sportsbook from "./_components/Sportsbook";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/sportsbook",
  },
  title: {
    default: meta.pages["sportsbook"].title,
    template: `%s | ${meta.pages["sportsbook"].title}`,
  },
  description: meta.pages["sportsbook"].description,
};

export default function SportsbookPage() {
  return <Sportsbook />;
}
