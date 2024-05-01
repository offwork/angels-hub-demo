"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useContext, useRef } from "react";
import SLIDER_PIC_1 from "../../../public/images/slider-main-2-copy.png";
import OrangeShape from "./orange-spahe";
import BlueShape from "./blue-shape";
import { useIsomorphicLayoutEffect } from "@/utils";

gsap.registerPlugin(useGSAP);

export default function Slide1({ slide }: { slide: number }) {
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const titleRef1 = useRef<HTMLHeadingElement>(null!);
  const titleRef2 = useRef<HTMLHeadingElement>(null!);
  const titleRef3 = useRef<HTMLHeadingElement>(null!);
  const describeRef = useRef<HTMLParagraphElement>(null!);
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const orangeRef = useRef<HTMLDivElement>(null!);
  const blueRef = useRef<HTMLDivElement>(null!);
  const mediaMatcher = gsap.matchMedia();

  useGSAP(
    () => {
      mediaMatcher.add(
        {
          mobile: `(max-width: 640px) and (prefers-reduced-motion: no-preference)`,
          tablet: "(max-width: 1023px) and (min-width: 641px)",
          desktopLg: "(max-width: 1024px)",
          desktopXl: "(max-width: 1280px)",
          desktop2Xl: "(max-width: 1440px)",
          desktop3Xl: "(max-width: 1600px)",
          desktop4Xl: "(max-width: 1760px)",
          desktop5Xl: "(max-width: 1920px)",
          desktop6Xl: "(max-width: 2560px)",
        },
        (context) => {
          const {
            mobile,
            tablet,
            desktopLg,
            desktopXl,
            desktop2Xl,
            desktop3Xl,
            desktop4Xl,
            desktop5Xl,
            desktop6Xl,
          } = context.conditions!;

          if (mobile) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -40,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 15,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (tablet) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -45,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 10,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktopLg) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 10,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 30,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktopXl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -15,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 45,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktop2Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 35,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktop3Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: -20,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 55,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 35,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktop4Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: -15,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 5,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 50,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 30,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktop5Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: -5,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 15,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 40,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          } else if (desktop6Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 0)
              .fromTo(
                titleRef1.current,
                {
                  yPercent: 20,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "elas.inOut(5)" }
              )
              .fromTo(
                titleRef2.current,
                {
                  yPercent: 30,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                {
                  yPercent: 40,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                {
                  yPercent: 50,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                {
                  yPercent: 60,
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.inOut(1.7)",
                },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "elas.inOut(5)",
                },
                "<0.1"
              )
              .fromTo(
                orangeRef.current,
                {
                  xPercent: 15,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 35,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 0,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: 40,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              );
          }
        }
      );

      return () => {
        mediaMatcher.revert();
        mediaMatcher.kill();
      };
    },
    { scope: slideRef, dependencies: [slide] }
  );

  const onResizeHandle = useCallback(() => {
    gsap.matchMediaRefresh;
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", onResizeHandle);
    return () => {
      window.removeEventListener("resize", onResizeHandle);
    };
  }, []);

  return (
    <div ref={slideRef} className="relative w-full h-full">
      <Image
        ref={imageRef}
        className="main-item absolute object-cover -top-[5%] h-3/4 lg:top-auto lg:h-4/5 xl:h-auto 4xl:-top-[5%] 5xl:-top-[15%]"
        src={SLIDER_PIC_1}
        priority
        alt="Slider picture 1"
      />
      <BlueShape
        elRef={blueRef}
        className="absolute z-10 scale-50 -top-1/3 -right-full md:scale-100 md:top-[5%] md:-right-1/3 lg:top-[10%] lg:right-0 6xl:scale-125 xl:right-[10%] 2xl:right-0"
      />
      <div className="absolute z-10 -left-[10%] lg:left-0 top-0 w-1/2 h-full bg-gradient-to-r from-angel-blue via-angel-blue via-25% xl:via-40%"></div>
      <div className="absolute z-10 -right-1/4 top-0 w-3/5 h-full bg-gradient-to-l from-angel-blue via-angel-blue via-30%"></div>
      <div className="absolute z-10 bottom-0 w-full h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-50%"></div>
      <OrangeShape
        elRef={orangeRef}
        className="absolute z-10 scale-50 -top-1/2 -left-1/2 md:scale-100 md:-left-1/4 lg:-left-[10%] lg:-top-3/4 xl:-left-1/4 xl:-top-1/4 2xl:-left-[10%] 2xl:-top-1/3 5xl:-left-[15%] 6xl:scale-125"
      />

      <div className="container absolute z-30 top-40 left-1/2 -translate-x-1/2 text-center lg:text-left">
        <div className="grid max-w-3xl gap-10 text-white justify-items-center lg:justify-items-start lg:gap-10 4xl:gap-11 5xl:gap-14">
          <div>
            <h1
              ref={titleRef1}
              className="text-4xl font-light md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              Home for NextGen
            </h1>
            <h2
              ref={titleRef2}
              className="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              iGaming Platform
            </h2>
            <h3
              ref={titleRef3}
              className="font-bold text-xl tracking-[.07em] mt-8 md:text-2xl md:tracking-[.13em] lg:text-3xl lg:tracking-[.12em] xl:tracking-[.2em] xl:text-4xl"
            >
              Everything under one roof.
            </h3>
          </div>
          <p
            ref={describeRef}
            className="text-sm max-w-72 md:max-w-96 lg:text-lg lg:max-w-md xl:max-w-xl 4xl:text-xl"
          >
            AngelsHub is a technology and service provider for online gaming
            industry. We offer white label, turnkey, SAAS solutions, crypto
            solutions and much much more!
          </p>
          <Link
            ref={linkRef}
            href="/"
            className="bg-angel-orange rounded-full max-w-fit px-11 py-4 text-white text-center"
          >
            <span className="">BOOK A MEETING</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
