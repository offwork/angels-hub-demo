"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useCallback, useRef } from "react";
import EVENT_PIC from "../../../public/images/event-pic.png";
import { useIsomorphicLayoutEffect } from "@/utils";
import Link from "next/link";

const NEXT = 1;
const PREV = -1;

type BannerControllerProps = {
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
};

gsap.registerPlugin(useGSAP, SplitText);

export default function BannerController({
  onNextSlide,
  onPrevSlide,
}: BannerControllerProps) {
  const tl = useRef<GSAPTimeline>(null!);
  const prevButtonRef = useRef<HTMLButtonElement>(null!);
  const nextButtonRef = useRef<HTMLButtonElement>(null!);
  const controllerRef = useRef<HTMLDivElement>(null!);
  const controllerContentRef = useRef<HTMLDivElement>(null!);
  const slidesCtrlRef = useRef<HTMLDivElement[]>(null!);
  const slidesCtrlTexts = useRef<NodeList>(null!);
  const isCtrlAnimating = useRef(false);
  const slideCtrl = useRef(0);
  const slidesCtrlTotal = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: controllerContentRef });

  const onNext = () => {
    if (typeof onNextSlide === "function") onNextSlide();
    navigateSlider(NEXT);
  };

  const onPrev = () => {
    if (typeof onPrevSlide === "function") onPrevSlide();
    navigateSlider(PREV);
  };

  const navigateSlider = contextSafe((direction: number) => {
    if (isCtrlAnimating.current) return false;
    isCtrlAnimating.current = true;
    const previous = slideCtrl.current;
    slideCtrl.current =
      direction === 1
        ? slideCtrl.current < slidesCtrlTotal.current - 1
          ? ++slideCtrl.current
          : 0
        : slideCtrl.current > 0
        ? --slideCtrl.current
        : slidesCtrlTotal.current - 1;

    const currentSlide = slidesCtrlRef.current[previous];
    const upcomingSlide = slidesCtrlRef.current[slideCtrl.current];

    tl.current = gsap
      .timeline({
        defaults: {},
        onStart: () => {
          slidesCtrlRef.current[slideCtrl.current].classList.add("opacity-0");
          gsap.set(upcomingSlide, { zIndex: 39, opacity: 0 });
        },
        onComplete: () => {
          slidesCtrlRef.current[previous].classList.remove("opacity-0");
          gsap.set(upcomingSlide, { zIndex: 1, opacity: 1 });
          isCtrlAnimating.current = false;
        },
      })
      .addLabel("ctrl", 0)
      .to(
        currentSlide,
        {
          rotationX: -90,
          scale: 0.3,
          ease: "back.in(1.7)",
          opacity: 0,
        },
        "ctrl"
      )
      .fromTo(
        upcomingSlide,
        {
          autoAlpha: 0,
          opacity: 0,
          rotationX: -90,
          scale: 0.3,
          ease: "back.inOut(1.7)",
        },
        {
          autoAlpha: 1,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          ease: "elas.inOut(5)",
        },
        "ctrl+=0.3"
      )
      .fromTo(
        slidesCtrlTexts.current,
        {
          autoAlpha: 0,
          opacity: 0,
          y: direction * 50,
          ease: "back(1.7)",
          stagger: 0.1,
          duration: 0.8,
        },
        {
          autoAlpha: 1,
          opacity: 1,
          y: 0,
          ease: "back(1.7)",
          stagger: 0.2,
          duration: 0.4,
        },
        "ctrl<"
      );
  });

  useGSAP(
    () => {
      const bar = controllerRef.current.querySelector<HTMLDivElement>(".bar");
      const content =
        controllerRef.current.querySelector<HTMLDivElement>(".content");
      gsap
        .timeline({
          defaults: { duration: 1, ease: "power3.inOut", delay: 0.5 },
        })
        .fromTo(
          bar,
          { autoAlpha: 0, opacity: 0, scale: 0.5, yPercent: 20 },
          { autoAlpha: 1, opacity: 1, scale: 1, yPercent: 0 }
        )
        .fromTo(
          content,
          { autoAlpha: 0, opacity: 0, scale: 0.5, yPercent: 20 },
          { autoAlpha: 1, opacity: 1, scale: 1, yPercent: 0 },
          "<"
        );
    },
    { scope: controllerRef }
  );


  const autoPlay = useCallback(() => {
    navigateSlider(NEXT);
    gsap.delayedCall(5, autoPlay);
  }, [navigateSlider]);


  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 1024) {
      gsap.delayedCall(5, autoPlay);
    } else {
      gsap.killTweensOf(autoPlay);
    }
  }, [autoPlay]);

  useIsomorphicLayoutEffect(() => {
    slidesCtrlRef.current = gsap.utils.toArray<HTMLDivElement>(".controller ");
    slidesCtrlTexts.current =
      controllerContentRef.current.querySelectorAll(".text-line");
    slidesCtrlRef.current[slideCtrl.current].classList.add("opacity-100");
    slidesCtrlTotal.current = gsap.utils.toArray(".controller ").length;

    if (window.innerWidth < 1024) {
      gsap.delayedCall(5, autoPlay);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      prevButtonRef.current.removeEventListener("click", onPrev);
      nextButtonRef.current.removeEventListener("click", onNext);
    };
  }, []);

  return (
    <div
      ref={controllerRef}
      className="container absolute left-1/2 -translate-x-1/2 -translate-y-full z-20 mx-auto -bottom-10 lg:-bottom-20 xl:bottom-0"
    >
      <div className="bar relative grid place-items-center w-full rounded-3xl bg-black h-[186px] opacity-0 shadow-[0_18px_103px_-15px_rgba(0,0,0,0.36)]">
        <div className="hidden lg:flex gap-x-16 items-center ml-auto mr-12">
          <button ref={prevButtonRef} onClick={onPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="56"
              viewBox="0 0 30 56"
              fill="none"
            >
              <path d="M29 1L2 28L29 55" stroke="#939393" strokeWidth="1.5" />
            </svg>
          </button>
          <button ref={nextButtonRef} onClick={onNext}>
            <svg
              width="30"
              height="56"
              viewBox="0 0 30 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 8"
                d="M0.999999 1L28 28L0.999999 55"
                stroke="#939393"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        <div
          ref={controllerContentRef}
          className="content grid place-items-center w-full md:w-auto absolute left-0 z-20 opacity-0 overflow-hidden"
        >
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid place-items-center grid-flow-col md:gap-12 lg:gap-16 xl:gap-32 opacity-0"
          >
            <div className="hidden md:block relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
              <Image
                className="absolute object-cover -translate-y-11 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <div className="text-lines relative">
              <div className="text-line">
                <p className="text-white lg:text-xl text-nowrap">
                  We are so excited to meet so many
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  partners and friends there!
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  Booth 38 -{" "}
                  <span className="text-angel-orange">14-18 JUNE 2021 </span>
                </p>
              </div>
              <span className="text-line block border-t border-white/35 w-full my-4"></span>
              <div className="text-line flex items-center justify-between">
                <Link href="" className="text-white text-base">
                  Detail
                </Link>
                <Link href="" className="text-angel-orange text-base">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid place-items-center grid-flow-col md:gap-12 lg:gap-16 xl:gap-32 opacity-0"
          >
            <div className="hidden md:block relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
              <Image
                className="absolute object-cover -translate-y-11 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <div className="text-lines relative">
              <div className="text-line">
                <p className="text-white lg:text-xl text-nowrap">
                  We are so excited to meet so many
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  partners and friends there!
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  Booth 38 -{" "}
                  <span className="text-angel-orange">14-18 JUNE 2022 </span>
                </p>
              </div>
              <span className="text-line block border-t border-white/35 w-full my-4"></span>
              <div className="text-line flex items-center justify-between">
                <Link href="" className="text-white">
                  Detail
                </Link>
                <Link href="" className="text-angel-orange">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid place-items-center grid-flow-col md:gap-12 lg:gap-16 xl:gap-32 opacity-0"
          >
            <div className="hidden md:block relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
              <Image
                className="absolute object-cover -translate-y-11 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <div className="text-lines relative">
              <div className="text-line">
                <p className="text-white lg:text-xl text-nowrap">
                  We are so excited to meet so many
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  partners and friends there!
                </p>
                <p className="text-white lg:text-xl text-nowrap">
                  Booth 38 -{" "}
                  <span className="text-angel-orange">14-18 JUNE 2023 </span>
                </p>
              </div>
              <span className="text-line block border-t border-white/35 w-full my-4"></span>
              <div className="text-line flex items-center justify-between">
                <Link href="" className="text-white">
                  Detail
                </Link>
                <Link href="" className="text-angel-orange">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
