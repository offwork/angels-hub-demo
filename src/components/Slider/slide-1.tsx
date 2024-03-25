"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import SLIDER_PIC_1 from "../../../public/images/slider-main-2-copy.png";
import OrangeShape from "./orange-spahe";
import BlueShape from "./blue-shape";

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
  const orangeRef = useRef<SVGSVGElement>(null!);
  const blueRef = useRef<SVGSVGElement>(null!);

  useGSAP(
    () => {
      const mediaMatcher = gsap.matchMedia();
      mediaMatcher.add(
        {
          desktopXl: "(max-width: 1280px)",
          desktop2Xl: "(max-width: 1441px)",
          desktop3Xl: "(max-width: 1601px)",
          desktop4Xl: "(max-width: 1761px)",
          desktop5Xl: "(max-width: 1921px)",
          desktop6Xl: "(max-width: 2560px)",
        },
        (context) => {
          const {
            desktopXl,
            desktop2Xl,
            desktop3Xl,
            desktop4Xl,
            desktop5Xl,
            desktop6Xl,
          } = context.conditions!;
          if (desktopXl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-45%", top: "-75%", opacity: 0, autoAlpha: 0 },
                { left: "-20%", top: "-50%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "5%", opacity: 0, autoAlpha: 0 },
                { scale: 1, left: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-60%", top: "40%", opacity: 0, autoAlpha: 0 },
                { right: "-35%", top: "15%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktop2Xl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-40%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-15%", top: "-45%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "5%", opacity: 0, autoAlpha: 0 },
                { scale: 1, left: "21%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-50%", top: "50%", opacity: 0, autoAlpha: 0 },
                { right: "-25%", top: "25%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktop3Xl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-35%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "-10%", top: "-40%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "5%", opacity: 0, autoAlpha: 0 },
                { scale: 1, left: "23%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-55%", top: "45%", opacity: 0, autoAlpha: 0 },
                { right: "-30%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktop4Xl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-31%", top: "-58%", opacity: 0, autoAlpha: 0 },
                { left: "-6%", top: "-33%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "5%", top: "0", opacity: 0, autoAlpha: 0 },
                { scale: 1, left: "20%", top: "-5%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "45%", opacity: 0, autoAlpha: 0 },
                { right: "-20%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktop5Xl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-30%", top: "-55%", opacity: 0, autoAlpha: 0 },
                { left: "-5%", top: "-30%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "5%", top: "0", opacity: 0, autoAlpha: 0 },
                {
                  scale: 1,
                  left: "20%",
                  top: "-10%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-40%", top: "45%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<"
              );
          } else if (desktop6Xl) {
            gsap
              .timeline({
                /* defaults: { duration: 0.6, ease: "power1.inOut" } */
              })
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
                { left: "-25%", top: "-55%", opacity: 0, autoAlpha: 0 },
                { left: "0%", top: "-30%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                { scale: 1.8, left: "-5%", top: "-10%", opacity: 0, autoAlpha: 0 },
                {
                  scale: 1,
                  left: "20%",
                  top: "-15%",
                  opacity: 1,
                  autoAlpha: 1,
                },
                "<0.2"
              )
              .fromTo(
                blueRef.current,
                { right: "-30%", top: "60%", opacity: 0, autoAlpha: 0 },
                { right: "-5%", top: "35%", opacity: 1, autoAlpha: 1 },
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

  return (
    <div ref={slideRef} className="static w-full h-full">
      <Image
        ref={imageRef}
        className="main-item absolute object-cover top-0"
        src={SLIDER_PIC_1}
        priority
        alt="Slider picture 1"
      />
      <BlueShape
        elRef={blueRef}
        bg="#0F38B4"
        className="absolute z-10 mix-blend-hard-light -right-full 6xl:scale-125"
      />
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-radial from-angel-blue from-40% via-angel-blue via-80% to-angel-blue to-100%"></div>
      <OrangeShape
        elRef={orangeRef}
        className="absolute z-10 mix-blend-color -left-full 6xl:scale-125"
      />

      <div className="container absolute z-30 top-40 left-1/2 -translate-x-1/2">
        <div className="grid max-w-3xl gap-10 text-white 4xl:gap-11 5xl:gap-14">
          <h1
            ref={titleRef1}
            className="text-8xl font-light drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
          >
            Home for NextGen
          </h1>
          <h2
            ref={titleRef2}
            className="text-8xl font-semibold -mt-9 drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
          >
            iGaming Platform
          </h2>
          <h3 ref={titleRef3} className="text-4xl tracking-[.2em] font-bold">
            Everything under one roof.
          </h3>
          <p ref={describeRef} className="text-lg 4xl:text-xl">
            AngelsHub is a technology and service provider for online gaming{" "}
            <br />
            industry. We offer white label, turnkey, SAAS solutions, crypto{" "}
            <br />
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
