"use client";
import ButtonFill from "@/components/ui/AHButtonFill";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useRef } from "react";
import BLUE_SHAPE from "../../../../public/images/blue-shape.svg";
import ORANGE_SHAPE from "../../../../public/images/orange-shape.svg";
import CARD_2 from "../../../../public/images/slide-card-2.png";
import CIP_2 from "../../../../public/images/slider-cip-2.png";
import CIP_BLUR_2 from "../../../../public/images/slider-cip-blur-2.png";
import SLIDER_PIC_2 from "../../../../public/images/slider-main-2.png";

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
  const linkRef = useRef<HTMLDivElement>(null!);
  const imageBlueRef = useRef<HTMLImageElement>(null!);
  const imageOrangeRef = useRef<HTMLImageElement>(null!);
  const slideTL = useRef<GSAPTimeline>(null!);

  useGSAP(
    () => {
      slideTL.current = gsap.timeline({ paused: Number(selected) !== 1 });
      slideTL.current
        .fromTo(
          titleRef1.current,
          {
            yPercent: 20,
            opacity: 0,
            autoAlpha: 0,
            ease: "back.inOut(1.7)",
          },
          {
            yPercent: 0,
            opacity: 1,
            autoAlpha: 1,
            ease: "back.inOut(1.7)",
          }
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
            opacity: 1,
            autoAlpha: 1,
          },
          ">"
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
            opacity: 1,
            autoAlpha: 1,
          },
          "<"
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
          imageRef1.current,
          { rotate: 0, scale: 0.2, opacity: 0, autoAlpha: 0 },
          {
            rotate: -45,
            scale: 1,
            opacity: 1,
            autoAlpha: 1,
          },
          "<0.2"
        )
        .fromTo(
          imageRef2.current,
          {
            rotate: 0,
            scale: 0.2,
            opacity: 0,
            autoAlpha: 0,
          },
          {
            rotate: 45,
            scale: 1,
            opacity: 1,
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          imageRef3.current,
          { scale: 0.2, opacity: 0, autoAlpha: 0 },
          { scale: 1, opacity: 1, autoAlpha: 1 },
          "<"
        );
    },
    { scope: slideRef.current, dependencies: [slide] }
  );

  return (
    <div ref={slideRef} className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          className="absolute z-20 object-cover right-0 h-3/4 sm:h-auto 6xl:right-80"
          src={SLIDER_PIC_2.src}
          priority
          width={SLIDER_PIC_2.width}
          height={SLIDER_PIC_2.height}
          alt="Slider picture 1"
        />
        <Image
          ref={imageBlueRef}
          className="absolute z-10 brightness-200 opacity-50 scale-150 -right-16 top-40 sm:-right-24 sm:top-16 sm:scale-100 lg:top-0 lg:-right-32 xl:-right-48 6xl:right-32"
          src={BLUE_SHAPE}
          alt=""
        />
        <Image
          ref={imageOrangeRef}
          className="relative z-10 scale-150 -top-24 -left-60 sm:scale-100 sm:-top-60 sm:-left-36 md:-top-64 md:-left-56 lg:-top-80 lg:-left-80 xl:-top-56 xl:-left-[540px] 2xl:-top-96 2xl:-left-[480px] 3xl:-left-96 4xl:-left-24 4xl:-top-[460px] 5xl:-left-16 5xl:-top-96 6xl:-top-96 6xl:-left-11"
          src={ORANGE_SHAPE}
          alt=""
        />
        <Image
          ref={imageRef1}
          className="absolute z-30 hidden xl:block xl:top-[600px] xl:right-[800px] 2xl:right-[880px] 3xl:right-[940px] 6xl:right-[1260px] drop-shadow-[0_35px_15px_rgba(0,0,0,0.35)]"
          src={CIP_2.src}
          priority
          width={106}
          height={100}
          alt="Slider picture 1"
        />
        <Image
          ref={imageRef2}
          className="absolute z-30 hidden xl:block xl:top-10 xl:right-[470px] 6xl:right-[800px]"
          src={CIP_BLUR_2.src}
          priority
          width={114}
          height={77}
          alt="Slider picture 1"
        />
        <Image
          ref={imageRef3}
          className="absolute z-30 hidden xl:block xl:top-80 right-9 6xl:right-[360px] drop-shadow-[0_90px_10px_rgba(0,0,0,0.35)]"
          src={CARD_2.src}
          priority
          width={188}
          height={170}
          alt="Slider picture 1"
        />
        <div className="absolute z-20 w-full h-2/3 bottom-4 md:-bottom-16 2xl:-bottom-24 3xl:-bottom-32 bg-gradient-to-t from-angel-blue via-angel-blue via-50%"></div>
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
            <ButtonFill bg="bg-angel-orange" size="medium" href="/contact" label={"BOOK A MEETING"} />
          </div>
        </div>
      </div>
    </div>
  );
}
