"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import CARD_2 from "../../../public/images/slide-card-2.png";
import CIP_2 from "../../../public/images/slider-cip-2.png";
import CIP_BLUR_2 from "../../../public/images/slider-cip-blur-2.png";
import SLIDER_PIC_2 from "../../../public/images/slider-main-2.png";
import BlueShape from "./blue-shape";
import OrangeShape from "./orange-spahe";

gsap.registerPlugin(useGSAP);

export default function Slide2({ slide }: { slide: number }) {
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const imageRef1 = useRef<HTMLImageElement>(null!);
  const imageRef2 = useRef<HTMLImageElement>(null!);
  const imageRef3 = useRef<HTMLImageElement>(null!);
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
              .paused(Number(selected) !== 1)
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
                { left: "-80%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-100%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-90%", top: "-10%", opacity: 0, autoAlpha: 0 },
                { right: "-110%", top: "-30%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (tablet) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                { left: "-105%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-85%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-90%", top: "-20%", opacity: 0, autoAlpha: 0 },
                { right: "-70%", top: "0%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktopLg) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                { left: "-70%", top: "-80%", opacity: 0, autoAlpha: 0 },
                { left: "-60%", top: "-60%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-50%", top: "-20%", opacity: 0, autoAlpha: 0 },
                { right: "-30%", top: "0%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktopXl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-30%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "-5%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "-15%", opacity: 0, autoAlpha: 0 },
                { right: "-20%", top: "10%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef1.current,
                { right: "55%", bottom: "25%", opacity: 0, autoAlpha: 0 },
                {
                  right: "65%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "20%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "30%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "-4%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "1%", opacity: 1, autoAlpha: 1 },
                "<0.1"
              );
          } else if (desktop2Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "-5%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-40%", top: "35%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "10%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef1.current,
                { right: "55%", bottom: "25%", opacity: 0, autoAlpha: 0 },
                {
                  right: "60%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "25%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "30%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "-4%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "1%", opacity: 1, autoAlpha: 1 },
                "<0.1"
              );
          } else if (desktop3Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                { left: "-15%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-35%", top: "28%", opacity: 0, autoAlpha: 0 },
                { right: "-12%", top: "3%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef1.current,
                { right: "55%", bottom: "25%", opacity: 0, autoAlpha: 0 },
                {
                  right: "60%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "20%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "30%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "-8%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "3%", opacity: 1, autoAlpha: 1 },
                "<0.1"
              );
          } else if (desktop4Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                { left: "-35%", top: "-60%", opacity: 0, autoAlpha: 0 },
                { left: "-10%", top: "-45%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-33%", top: "18%", opacity: 0, autoAlpha: 0 },
                { right: "-12%", top: "2%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef1.current,
                { right: "50%", bottom: "30%", opacity: 0, autoAlpha: 0 },
                {
                  right: "55%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "23%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "28%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "-8%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "3%", opacity: 1, autoAlpha: 1 },
                "<0.1"
              );
          } else if (desktop5Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
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
                { left: "-25%", top: "-55%", opacity: 0, autoAlpha: 0 },
                { left: "-5%", top: "-45%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-20%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "0%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-30%", top: "18%", opacity: 0, autoAlpha: 0 },
                { right: "-10%", top: "2%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef1.current,
                { right: "50%", bottom: "25%", opacity: 0, autoAlpha: 0 },
                {
                  right: "55%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "20%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "25%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "-8%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "2%", opacity: 1, autoAlpha: 1 },
                "<0.1"
              );
          } else if (desktop6Xl) {
            gsap
              .timeline()
              .paused(Number(selected) !== 1)
              .paused(Number(selected) !== 1)
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
                { left: "-25%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "0%", top: "-40%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  right: "-15%",
                  bottom: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  right: "10%",
                  bottom: "0%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-23%", top: "-5%", opacity: 0, autoAlpha: 0 },
                { right: "2%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0"
              )
              .fromTo(
                imageRef1.current,
                { right: "45%", bottom: "25%", opacity: 0, autoAlpha: 0 },
                {
                  right: "50%",
                  bottom: "35%",
                  rotationY: -180,
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef2.current,
                {
                  top: "5%",
                  right: "25%",
                  rotationY: -180,
                  opacity: 0,
                  autoAlpha: 0,
                },
                {
                  top: "10%",
                  right: "30%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.1"
              )
              .fromTo(
                imageRef3.current,
                { top: "30%", right: "2%", opacity: 0, autoAlpha: 0 },
                { top: "30%", right: "12%", opacity: 1, autoAlpha: 1 },
                "<0.1"
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
        className="absolute z-20 object-cover top-1/3 -translate-y-1/2 md:top-1/2 xl:top-auto xl:translate-y-0 xl:right-0 xl:bottom-0"
        src={SLIDER_PIC_2.src}
        priority
        width={SLIDER_PIC_2.width}
        height={SLIDER_PIC_2.height}
        alt="Slider picture 1"
      />
      <BlueShape
        elRef={blueRef}
        className="absolute z-10 scale-50 md:scale-100 6xl:scale-125"
      />
      <OrangeShape
        elRef={orangeRef}
        className="absolute z-10 scale-50 md:scale-100 6xl:scale-125"
      />
      <Image
        ref={imageRef1}
        className="absolute z-30 object-contain -right-full hidden xl:block drop-shadow-[0_35px_15px_rgba(0,0,0,0.35)]"
        src={CIP_2.src}
        priority
        width={106}
        height={100}
        alt="Slider picture 1"
      />
      <Image
        ref={imageRef2}
        className="absolute z-30 object-contain -right-full hidden xl:block"
        src={CIP_BLUR_2.src}
        priority
        width={114}
        height={77}
        alt="Slider picture 1"
      />
      <Image
        ref={imageRef3}
        className="absolute z-30 object-contain -right-full hidden xl:block  drop-shadow-[0_90px_10px_rgba(0,0,0,0.35)]"
        src={CARD_2.src}
        priority
        width={188}
        height={170}
        alt="Slider picture 1"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-2/3 top-1/4 md:top-auto bg-gradient-to-t from-angel-blue via-angel-blue via-50% xl:via-15% xl:top-auto"></div>

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
