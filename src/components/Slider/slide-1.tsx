"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useRef } from "react";
import BLUE_SHAPE from "../../../public/images/blue-shape.svg";
import ORANGE_SHAPE from "../../../public/images/orange-shape.svg";
import SLIDER_PIC_1 from "../../../public/images/slider-main-2-copy.png";
import ButtonFill from "../ui/ah-button-fill";

gsap.registerPlugin(useGSAP);

export default function Slide1({ slide }: { slide: number }) {
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const titleRef1 = useRef<HTMLHeadingElement>(null!);
  const titleRef2 = useRef<HTMLHeadingElement>(null!);
  const titleRef3 = useRef<HTMLHeadingElement>(null!);
  const describeRef = useRef<HTMLParagraphElement>(null!);
  const linkRef = useRef<HTMLDivElement>(null!);
  const imageOrangeRef = useRef<HTMLImageElement>(null!);
  const imageBlueRef = useRef<HTMLImageElement>(null!);
  const slideTL = useRef<GSAPTimeline>(null!);

  useGSAP(
    () => {
      slideTL.current = gsap.timeline({ paused: Number(selected) !== 0 });
      slideTL.current
        .fromTo(titleRef1.current, {
          yPercent: 20,
          opacity: 0,
          autoAlpha: 0,
          ease: "back.inOut(1.7)",
        }, {
          yPercent: 0,
          opacity: 1,
          autoAlpha: 1,
          ease: "back.inOut(1.7)",
        })
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
            ease: "back.inOut(1.7)",
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
            ease: "back.inOut(1.7)",
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
            ease: "back.inOut(1.7)",
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
            ease: "back.inOut(1.7)",
          },
          "<0.1"
        )
        .fromTo(
          imageRef.current,
          {
            scale: 1.8,
            transformOrigin: "center center",
            opacity: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            transformOrigin: "center center",
            opacity: 1,
            autoAlpha: 1,
          },
          "<0.2"
        )
        .fromTo(
          imageOrangeRef.current,
          {
            scale: 1.8,
            transformOrigin: "center center",
            opacity: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            transformOrigin: "center center",
            opacity: 0.3,
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          imageBlueRef.current,
          {
            scale: 1.8,
            transformOrigin: "center center",
            opacity: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            transformOrigin: "center center",
            opacity: 0.5,
            autoAlpha: 1,
          },
          "<"
        );
      return () => {
        slideTL.current.revert();
      };
    },
    { scope: slideRef.current, dependencies: [slide] }
  );

  return (
    <div ref={slideRef} className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          className="main-item absolute z-0 object-cover h-3/4 -top-20 lg:h-auto lg:top-0 lg:left-20 xl:left-56 2xl:left-60 3xl:left-64 4xl:left-72 5xl:left-80 6xl:left-96 6xl:-top-28"
          src={SLIDER_PIC_1}
          priority
          alt="Slider picture 1"
        />
        <Image
          ref={imageBlueRef}
          className="absolute z-10 saturate-200 opacity-50 top-32 -right-20 sm:top-24 sm:-right-28 md:top-20 md:-right-32 lg:top-28 lg:-right-48 xl:top-32 xl:-right-96 2xl:-right-[416px] 4xl:top-44 4xl:-right-96 6xl:-right-20"
          src={BLUE_SHAPE}
          alt=""
        />
        <div className="absolute z-10 -left-[10%] lg:left-0 top-0 w-1/2 h-full bg-gradient-to-r from-angel-blue via-angel-blue via-25% xl:via-40%"></div>
        <div className="absolute z-10 -right-1/4 top-0 w-3/5 h-full bg-gradient-to-l from-angel-blue via-angel-blue via-30%"></div>
        <div className="absolute z-10 bottom-0 w-full h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-50% 2xl:-bottom-10 3xl:-bottom-24 4xl:-bottom-32 5xl:-bottom-40 6xl:-bottom-72"></div>
        <Image
          ref={imageOrangeRef}
          className="relative z-10 saturate-200 opacity-30 -left-20 -top-28 sm:-left-72 sm:-top-44 md:-left-72 md:-top-72 lg:-left-80 xl:-left-96 xl:-top-64 2xl:-left-80 2xl:-top-96 3xl:-left-72 3xl:-top-80 4xl:-left-28 4xl:-top-96 5xl:-left-28 5xl:-top-80 6xl:left-52 6xl:-top-80"
          src={ORANGE_SHAPE}
          alt=""
        />
      </div>

      <div className="container absolute z-30 top-40 left-1/2 -translate-x-1/2 text-center lg:text-left">
        <div className="grid max-w-4xl gap-10 text-white justify-items-center lg:justify-items-start lg:gap-10 4xl:gap-11 5xl:gap-14">
          <div>
            <h1
              ref={titleRef1}
              className="text-4xl font-light md:text-5xl lg:text-[50px] xl:text-[80px] drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              Home for the NextGen
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
          <div ref={linkRef} className="flex">
            <ButtonFill bg="bg-angel-orange" size="medium" href={""} label={"BOOK A MEETING"} />
          </div>
        </div>
      </div>
    </div>
  );
}
