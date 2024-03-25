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
          desktopXl: "(max-width: 1281px)",
          desktop2Xl: "(max-width: 1441px)",
          desktop3Xl: "(max-width: 1601px)",
          desktop4Xl: "(max-width: 1761px)",
          desktop5Xl: "(max-width: 1921px)",
        },
        (context) => {
          const { desktopXl, desktop2Xl, desktop3Xl, desktop4Xl, desktop5Xl } =
            context.conditions!;
          if (desktopXl) {
            gsap
              .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
              .paused(Number(selected) !== 2)
              .fromTo(
                orangeRef.current,
                { left: "-50%", top: "-80%", opacity: 0, autoAlpha: 0 },
                { left: "-25%", top: "-55%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-20%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                titleRef1.current,
                { yPercent: 20, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              )
              .fromTo(
                titleRef2.current,
                { yPercent: 30, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                { yPercent: 40, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                { yPercent: 50, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                { yPercent: 60, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                imageRef1.current,
                { top: "35%", right: "18%", opacity: 0, autoAlpha: 0 },
                { top: "25%", right: "13%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-10%",
                  right: "-25%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: 0,
                  right: "-15%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
              );
          } else if (desktop2Xl) {
            gsap
              .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
              .paused(Number(selected) !== 2)
              .fromTo(
                orangeRef.current,
                { left: "-45%", top: "-75%", opacity: 0, autoAlpha: 0 },
                { left: "-20%", top: "-50%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                blueRef.current,
                { right: "-40%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                titleRef1.current,
                { yPercent: 20, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              )
              .fromTo(
                titleRef2.current,
                { yPercent: 30, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                { yPercent: 40, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                { yPercent: 50, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                { yPercent: 60, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                imageRef1.current,
                { top: "35%", right: "18%", opacity: 0, autoAlpha: 0 },
                { top: "20%", right: "15%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-15%",
                  right: "-20%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "5%",
                  right: "-10%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
              );
          } else if (desktop3Xl) {
            gsap
              .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
              .paused(Number(selected) !== 2)
              .fromTo(
                orangeRef.current,
                { left: "-40%", top: "-70%", opacity: 0, autoAlpha: 0 },
                { left: "-15%", top: "-45%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-20%", top: "20%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                titleRef1.current,
                { yPercent: 20, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              )
              .fromTo(
                titleRef2.current,
                { yPercent: 30, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                { yPercent: 40, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                { yPercent: 50, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                { yPercent: 60, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                imageRef1.current,
                { top: "26%", right: "17%", opacity: 0, autoAlpha: 0 },
                { top: "16%", right: "23%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-7%",
                  right: "-10%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "7%",
                  right: 0,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
              );
          } else if (desktop4Xl) {
            gsap
              .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
              .paused(Number(selected) !== 2)
              .fromTo(
                orangeRef.current,
                { left: "-35%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "-10%", top: "-40%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                blueRef.current,
                { right: "-45%", top: "55%", opacity: 0, autoAlpha: 0 },
                { right: "-15%", top: "17%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                titleRef1.current,
                { yPercent: 20, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              )
              .fromTo(
                titleRef2.current,
                { yPercent: 30, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                { yPercent: 40, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                { yPercent: 50, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                { yPercent: 60, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                imageRef1.current,
                { top: "22%", right: "20%", opacity: 0, autoAlpha: 0 },
                { top: "17%", right: "26%", opacity: 1, autoAlpha: 1 },
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
                  right: "5%",
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.2"
              );
          } else if (desktop5Xl) {
            gsap
              .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
              .paused(Number(selected) !== 2)
              .fromTo(
                orangeRef.current,
                { left: "-30%", top: "-65%", opacity: 0, autoAlpha: 0 },
                { left: "-5%", top: "-40%", opacity: 1, autoAlpha: 1 }
              )
              .fromTo(
                blueRef.current,
                { right: "-35%", top: "43%", opacity: 0, autoAlpha: 0 },
                { right: "-10%", top: "17%", opacity: 1, autoAlpha: 1 },
                "<0.2"
              )
              .fromTo(
                titleRef1.current,
                { yPercent: 20, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<"
              )
              .fromTo(
                titleRef2.current,
                { yPercent: 30, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                titleRef3.current,
                { yPercent: 40, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                describeRef.current,
                { yPercent: 50, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                linkRef.current,
                { yPercent: 60, opacity: 0, autoAlpha: 0 },
                {
                  yPercent: 0,
                  opacity: 1,
                  autoAlpha: 1,
                  ease: "back.out(1.7)",
                },
                "<0.1"
              )
              .fromTo(
                imageRef1.current,
                { top: "22%", right: "24%", opacity: 0, autoAlpha: 0 },
                { top: "17%", right: "34%", opacity: 1, autoAlpha: 1 },
                "<"
              )
              .fromTo(
                imageRef.current,
                {
                  scale: 1.8,
                  bottom: "-7%",
                  right: "5%",
                  opacity: 0,
                  autoAlpha: 0,
                  ease: "back.out(1.7)",
                },
                {
                  scale: 1,
                  opacity: 1,
                  bottom: "7%",
                  right: "15%",
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
        className="absolute z-20 object-contain"
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
        className="absolute z-10 mix-blend-color -left-full"
      />
      <BlueShape
        elRef={blueRef}
        className="absolute z-10 mix-blend-color -right-full"
        bg="#0F38B4"
      />
      <Image
        ref={imageRef1}
        className="absolute z-10 object-contain"
        src={BALL_3.src}
        priority
        width={90}
        height={90}
        alt="Slider picture 1"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-15%"></div>
      <div className="container absolute z-30 top-48 left-1/2 -translate-x-1/2">
        <div className="grid max-w-3xl gap-9 2xl:gap-10 text-white">
          <h1
            ref={titleRef1}
            className="text-7xl 2xl:text-8xl font-light drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
          >
            Home for NextGen
          </h1>
          <h2
            ref={titleRef2}
            className="text-7xl 2xl:text-8xl font-semibold -mt-9 drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
          >
            iGaming Platform
          </h2>
          <h3 ref={titleRef3} className="text-3xl 2xl:text-4xl font-bold">
            Everything under one roof.
          </h3>
          <p
            ref={describeRef}
            className="text-base 2xl:text-lg max-w-lg 2xl:max-w-xl"
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
