"use client";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { ReactNode, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import StickyLogo from "../ah-sticky-logo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  window.history.scrollRestoration = "manual";
}

export default function AHSmoothScrollbar({ children }: { children?: ReactNode }) {
  const scrollContainerRef = useRef<HTMLElement>(null!);
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const stickyLogoRef = useRef<HTMLDivElement>(null!);
  const stickyTL = useRef<GSAPTimeline>(null!);

  const initSmoothScrolling = () => {
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    bodyScrollBar.current = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1,
      alwaysShowTracks: true,
    });

    bodyScrollBar.current.setPosition(0, 0);
    bodyScrollBar.current.track.xAxis.element.remove();
    bodyScrollBar.current.addListener(ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.current.scrollTop = value;
        }
        return bodyScrollBar.current.scrollTop;
      },
    });

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: scrollContainerRef.current,
    });
  };

  useGSAP(
    () => {
      gsap.set(stickyLogoRef.current, { opacity: 0, xPercent: -100 });
      stickyTL.current = gsap.timeline({
        scrollTrigger: {
          trigger: "main",
          start: "bottom 25%",
          toggleActions: "play none reverse none",
          scrub: 1,
        },
      });
      stickyTL.current.to(stickyLogoRef.current, { xPercent: 0, opacity: 1 });
    },
    { scope: scrollContainerRef.current }
  );

  useIsomorphicLayoutEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <>
      <div
        ref={stickyLogoRef}
        className="fixed z-40 opacity-0 top-1/2 -translate-y-1/2 bg-angel-orange text-white"
      >
        <Link href="/" legacyBehavior passHref>
          <StickyLogo href="/" />
        </Link>
      </div>
      <main
        ref={scrollContainerRef}
        className="relative h-screen w-full overscroll-none overflow-hidden"
      >
        {children}
      </main>
    </>
  );
}
