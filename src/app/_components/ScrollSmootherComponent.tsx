"use client";
import { useIsomorphicLayoutEffect } from "@/utils";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollSmootherComponent({ children }: { children: ReactNode }) {
  const smoother = useRef<ScrollSmoother>();
  const ctx = useRef<gsap.Context>(null!);
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    ctx.current = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    });

    return () => ctx.current.revert();
  }, [pathname]);

  return <>{children}</>;
}
