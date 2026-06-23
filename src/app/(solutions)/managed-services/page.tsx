import meta from "@/config/meta";
import { Metadata } from "next";
import ManagedServices from "./_components/ManagedServices";

export const metadata: Metadata = {
  metadataBase: new URL(meta.base_url),
  alternates: {
    canonical: "/managed-services",
  },
  title: {
    default: meta.pages["managed-services"].title,
    template: `%s | ${meta.pages["managed-services"].title}`,
  },
  description: meta.pages["managed-services"].description,
};

export default function ManagedServicesPage() {
  return (
    <ManagedServices />
  );
}
