"use client";
import { useIsomorphicLayoutEffect } from "@/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactNode, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  window.history.scrollRestoration = "manual";
}

export default function AHSmoothScrollbar({ children }: { children?: ReactNode }) {
  const scrollContainerRef = useRef<HTMLElement>(null!);
  const bodyScrollBar = useRef<Scrollbar>(null!);

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

  useIsomorphicLayoutEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
    <main
      ref={scrollContainerRef}
      className="relative h-screen w-full overscroll-none overflow-hidden"
    >
      {children}
    </main>
  );
}
