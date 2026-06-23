"use client";
import ButtonFill from "@/components/ui/AHButtonFill";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useRef } from "react";
import BLUE_SHAPE from "../../../../public/blue-shape.svg";
import ORANGE_SHAPE from "../../../../public/orange-shape.svg";
import BALL_3 from "../../../../public/slider-ball-3.png";


export default function Slide3({ slide }: { slide: number }) {
  gsap.registerPlugin(useGSAP);
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const bgImageRef = useRef<HTMLImageElement>(null!);
  const imageRef1 = useRef<HTMLImageElement>(null!);
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
      slideTL.current = gsap.timeline({ paused: Number(selected) !== 2 });
      slideTL.current
        .fromTo(
          titleRef1.current,
          {
            yPercent: 20,
            opacity: 0,
            autoAlpha: 0,
            ease: "back.inOut(1.7)",
          },
          { yPercent: 0, opacity: 1, autoAlpha: 1, ease: "back.inOut(1.7)" }
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
            opacity: 0.3,
            autoAlpha: 1,
          },
          ">"
        )
        .fromTo(
          bgImageRef.current,
          {
            scale: 1.8,
            transformOrigin: "center center",
            opacity: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            opacity: 1,
            transformOrigin: "center center",
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
            opacity: 0.25,
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
            opacity: 1,
            transformOrigin: "center center",
            autoAlpha: 1,
          },
          "<0.2"
        )
        .fromTo(
          imageRef1.current,
          { scale: 0.2, rotationZ: 0, opacity: 0, autoAlpha: 0 },
          {
            scale: 1,
            rotationZ: 360,
            opacity: 1,
            autoAlpha: 1,
          },
          "<0.2"
        );
    },
    { scope: slideRef.current, dependencies: [slide] }
  );

  return (
    <div ref={slideRef} className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          className="absolute object-cover z-20 h-3/4 top-44 md:h-auto md:top-36 md:right-0 lg:-right-44 lg:top-48 lg:translate-x-0 xl:top-64 xl:-right-32 2xl:-right-14 3xl:right-6 4xl:right-28 5xl:right-48 6xl:right-[510px]"
          src="/slider-main-3.png"
          width={796}
          height={778}
          loading="lazy"
          sizes="(min-width: 840px) 796px, 95.38vw"
          alt="Football players in betting"
        />
        <Image
          ref={bgImageRef}
          src="/slider-3-bg.png"
          alt="Get everything you need"
          width={1728}
          height={1123}
          loading="lazy"
          sizes="(min-width: 1840px) 1728px, calc(93.95vw + 18px)"
          className="absolute object-cover contrast-125 object-center z-0 top-1/2 left-1/2 h-full -translate-y-1/2 -translate-x-1/2"
        />
        <Image
          ref={imageBlueRef}
          className="absolute z-10 brightness-200 opacity-50 scale-150 top-64 -right-28 sm:scale-100 sm:top-44 sm:-right-36 md:-right-44 lg:-right-56 xl:-right-72 2xl:-right-60 3xl:-right-52 4xl:-right-64 5xl:-right-44 6xl:top-32 6xl:-right-12"
          src={BLUE_SHAPE}
          alt="Angels blu shape"
        />
        <Image
          ref={imageOrangeRef}
          className="relative z-10 contrast-200 opacity-50  scale-150 -top-32 -left-40 sm:scale-100 sm:-top-36 sm:-left-32 md:-top-56 md:-left-48 lg:-left-80 xl:-top-80 xl:-left-96 2xl:-top-96 2xl:-left-[480px] 3xl:-left-96 4xl:-top-[480px] 4xl:-left-48 5xl:-top-[450px] 5xl:-left-36"
          src={ORANGE_SHAPE}
          alt="Angels orange shape"
        />
        <Image
          ref={imageRef1}
          className="absolute z-10 object-contain hidden lg:block lg:top-32 lg:right-44 xl:top-44 xl:right-56 2xl:right-[300px] 3xl:right-96 4xl:right-[470px] 5xl:right-[550px] 6xl:right-[870px]"
          src={BALL_3}
          width={90}
          height={90}
          sizes="90px"
          alt="Angels ball"
        />
        <div className="absolute z-20 -bottom-10 w-full h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-10%"></div>
      </div>

      <div className="container absolute z-30 top-40 left-1/2 -translate-x-1/2 text-center lg:text-left">
        <div className="grid max-w-4xl gap-10 text-white justify-items-center lg:justify-items-start lg:gap-10 4xl:gap-11 5xl:gap-14">
          <div>
            <h2
              ref={titleRef1}
              className="text-4xl font-light md:text-5xl lg:text-[50px] xl:text-[80px] drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              Transform Your Business
            </h2>
            <h2
              ref={titleRef2}
              className="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-8xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
               with AngelsHub
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
            Get everything you need for seamless operations and unmatched success.
          </p>
          <div ref={linkRef} className="flex">
            <ButtonFill
              className="bg-angel-orange text-white"
              size="medium"
              href="/contact"
              target="_blank"
              label={"BOOK A MEETING"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
