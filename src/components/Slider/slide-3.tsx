"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import BALL_3 from "../../../public/images/slider-ball-3.png";
import SLIDER_PIC_3 from "../../../public/images/slider-main-3.png";
import OrangeShape from "./orange-spahe";
import BlueShape from "./blue-shape";

export default function Slide3({ slide }: { slide: number }) {
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const imageRef1 = useRef<HTMLImageElement>(null!);
  const titleRef1 = useRef<HTMLHeadingElement>(null!);
  const titleRef2 = useRef<HTMLHeadingElement>(null!);
  const titleRef3 = useRef<HTMLHeadingElement>(null!);
  const describeRef = useRef<HTMLParagraphElement>(null!);
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const orangeRef = useRef<HTMLDivElement>(null!);
  const blueRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      const mediaMatcher = gsap.matchMedia();
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
              .paused(Number(selected) !== 2)
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
                  xPercent: -25,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -20,
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
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 0,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (tablet) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: -50,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -25,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -15,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -5,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 5,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktopLg) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                blueRef.current,
                {
                  xPercent: -15,
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
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: -10,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 40,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktopXl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: -10,
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
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -50,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -70,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "23%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 50,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 70,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktop2Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: 20,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -60,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -80,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 60,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 80,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktop3Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                blueRef.current,
                {
                  xPercent: -80,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -100,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 75,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 95,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktop4Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: 30,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 50,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -90,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -110,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 90,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 110,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktop5Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: 40,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 60,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -110,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -130,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 105,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 125,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          } else if (desktop6Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 2)
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
                  xPercent: 80,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: 100,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                blueRef.current,
                {
                  xPercent: -175,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  xPercent: -195,
                  transformOrigin: "center center",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "18%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "28%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  xPercent: 155,
                  transformOrigin: "center center",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  xPercent: 175,
                  transformOrigin: "center center",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              );
          }
        }
      );
    },
    { scope: slideRef, dependencies: [slide] }
  );

  return (
    <div ref={slideRef} className="static w-full h-full">
      <Image
        ref={imageRef}
        className="absolute z-20 object-cover top-2/3 -translate-y-1/2 xl:top-1/2 xl:-translate-y-1/3"
        src={SLIDER_PIC_3.src}
        priority
        width={796}
        height={778}
        alt="Slider picture 1"
      />
      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute object-cover object-center z-0 top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2"
      >
        <source src="/videos/slider-video-3.mp4" type="video/mp4" />
      </video>
      <OrangeShape
        elRef={orangeRef}
        className="absolute z-10 scale-50 -top-1/2 -left-1/2 md:scale-100 md:-top-[40%] lg:-top-1/2 xl:-top-1/3 6xl:scale-125 6xl:-top-[40%]"
      />
      <BlueShape
        elRef={blueRef}
        className="absolute z-10 scale-50 -top-1/4 -right-full md:scale-100 md:-top-[10%] lg:top-[10%] 3xl:top-[15%] 6xl:scale-125 6xl:top-1/4"
      />
      <Image
        ref={imageRef1}
        className="absolute z-10 object-contain hidden xl:block"
        src={BALL_3.src}
        priority
        width={90}
        height={90}
        alt="Slider picture 1"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-15%"></div>
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
