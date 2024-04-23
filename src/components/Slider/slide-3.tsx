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
  const orangeRef = useRef<SVGSVGElement>(null!);
  const blueRef = useRef<SVGSVGElement>(null!);

  useGSAP(
    () => {
      const mediaMatcher = gsap.matchMedia();
      mediaMatcher.add(
        {
          mobile: `(max-width: 640px) and (prefers-reduced-motion: no-preference)`,
          tablet: "(max-width: 1023px) and (min-width: 641px)",
          desktopLg: "(max-width: 1024px)",
          desktopXl: "(max-width: 1281px)",
          desktop2Xl: "(max-width: 1441px)",
          desktop3Xl: "(max-width: 1601px)",
          desktop4Xl: "(max-width: 1761px)",
          desktop5Xl: "(max-width: 1921px)",
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
                { left: "-150%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-130%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-90%", top: "-20%", opacity: 0, autoAlpha: 0 },
                { right: "-110%", top: "0%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  right: "0%",
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
                { left: "-95%", top: "-75%", opacity: 0, autoAlpha: 0 },
                { left: "-75%", top: "-55%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-85%", top: "-15%", opacity: 0, autoAlpha: 0 },
                { right: "-65%", top: "5%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  right: "0%",
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
                { left: "-50%", top: "-85%", opacity: 0, autoAlpha: 0 },
                { left: "-30%", top: "-65%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-80%", top: "-20%", opacity: 0, autoAlpha: 0 },
                { right: "-60%", top: "0%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  right: "0%",
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
                { left: "-50%", top: "-80%", opacity: 0, autoAlpha: 0 },
                { left: "-25%", top: "-55%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-40%", top: "50%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "25%", opacity: 1, autoAlpha: 1 },
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
                  bottom: "-20%",
                  right: "-30%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "5%",
                  right: "-5%",
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
                { left: "-45%", top: "-75%", opacity: 0, autoAlpha: 0 },
                { left: "-20%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-40%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "20%", right: "20%", opacity: 0, autoAlpha: 0 },
                {
                  top: "20%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-15%",
                  right: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "5%",
                  right: "0%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
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
                { left: "-40%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-15%", top: "-45%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-20%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "16%", right: "20%", opacity: 0, autoAlpha: 0 },
                {
                  top: "16%",
                  right: "25%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-17%",
                  right: "-23%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "8%",
                  right: "2%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
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
                { left: "-35%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "-10%", top: "-40%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "17%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "17%", right: "21%", opacity: 0, autoAlpha: 0 },
                {
                  top: "17%",
                  right: "26%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-7%",
                  right: "-6%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "7%",
                  right: "6%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
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
                { left: "-30%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "-5%", top: "-40%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-35%", top: "43%", opacity: 0, autoAlpha: 0 },
                { right: "-10%", top: "17%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "17%", right: "24%", opacity: 0, autoAlpha: 0 },
                {
                  top: "17%",
                  right: "29%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-7%",
                  right: "0%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "7%",
                  right: "10%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
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
                { left: "-27%", top: "-60%", opacity: 0, autoAlpha: 0 },
                { left: "-2%", top: "-35%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                blueRef.current,
                { right: "-25%", top: "-5%", opacity: 0, autoAlpha: 0 },
                { right: "0%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                imageRef1.current,
                { top: "22%", right: "24%", opacity: 0, autoAlpha: 0 },
                {
                  top: "17%",
                  right: "34%",
                  rotationZ: 360,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-7%",
                  right: "-5%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "7%",
                  right: "20%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
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
        className="absolute z-20 object-contain top-2/3 -translate-y-1/2 xl:top-auto xl:translate-y-0"
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
        className="absolute z-10 mix-blend-color -left-full 6xl:scale-125"
      />
      <BlueShape
        elRef={blueRef}
        className="absolute z-10 mix-blend-color -right-full 6xl:scale-125"
        bg="#0F38B4"
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
