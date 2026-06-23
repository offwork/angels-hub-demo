import SiteForm from "@/app/_components/form/AHSiteForm";
import Footer from "@/components/layout/AHFooter";
import { ReactNode, Suspense } from "react";
import EventsBgCover from "./_components/AHEventsBgCover";

export default function NewsAndEventsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative px-5 w-ful z-10 h-full overscroll-none overflow-visible">
      <EventsBgCover />
      <div className="relative overflow-hidden">
        <Suspense>{children}</Suspense>
      </div>
      <Footer>
        <SiteForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
