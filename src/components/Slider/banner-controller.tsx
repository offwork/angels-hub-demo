"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import EVENT_PIC from "../../../public/images/event-pic.png";

const NEXT = 1;
const PREV = -1;

type BannerControllerProps = {
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
};

gsap.registerPlugin(useGSAP)

export default function BannerController({ onNextSlide, onPrevSlide }: BannerControllerProps) {
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
  const { contextSafe } = useGSAP({ scope: controllerContentRef });

  const onNext = () => {
    if( typeof onNextSlide === "function" ) onNextSlide();
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
        defaults: {
          
        },
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
          yPercent: direction * 100,
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
          yPercent: direction * 100,
          ease: "back.inOut(1.7)",
          stagger: 0.1,
        },
        {
          autoAlpha: 1,
          opacity: 1,
          yPercent: 0,
          ease: "elas.inOut(5)",
          stagger: 0.3,
        },
        "ctrl+=0.1"
      )
      .fromTo(
        slidesCtrlTexts.current,
        {
          autoAlpha: 0,
          opacity: 0,
          y: -direction * 65,
          ease: "back",
          stagger: 0.1,
          duration: .8,
        },
        {
          autoAlpha: 1,
          opacity: 1,
          y: 0,
          ease: "back(3)",
          stagger: 0.2,
          duration: .4,
        },
        "ctrl<0.1"
      );
  });

  useGSAP(
    (context) => {
      const bar = controllerRef.current.querySelector<HTMLDivElement>(".bar");
      const content = controllerRef.current.querySelector<HTMLDivElement>(".content");
      gsap
        .timeline({ defaults: { duration: 1, ease: "power3.inOut", delay: 0.5} })
        .fromTo(bar, {autoAlpha: 0, opacity: 0, scale: 0.5, yPercent: 20}, {autoAlpha: 1, opacity: 1, scale: 1, yPercent: 0})
        .fromTo(content, {autoAlpha: 0, opacity: 0, scale: 0.5, yPercent: 20}, {autoAlpha: 1, opacity: 1, scale: 1, yPercent: 0},"<")
    },
    { scope: controllerRef }
  );

  useGSAP(
    () => {
      slidesCtrlRef.current =
        gsap.utils.toArray<HTMLDivElement>(".controller ");
      slidesCtrlTexts.current =
        controllerContentRef.current.querySelectorAll(".text-white");
      slidesCtrlRef.current[slideCtrl.current].classList.add("opacity-100");
      slidesCtrlTotal.current = gsap.utils.toArray(".controller ").length;

      return () => {
        prevButtonRef.current.removeEventListener("click", onPrev);
        nextButtonRef.current.removeEventListener("click", onNext);
      };
    },
    { scope: controllerContentRef }
  );

  return (
    <div ref={controllerRef} className="container absolute left-1/2 -translate-x-1/2 -translate-y-full z-20 bottom-0 mx-auto">
      <div className="bar grid place-items-center w-full rounded-3xl bg-black h-[186px] opacity-0 shadow-[0_18px_103px_-15px_rgba(0,0,0,0.36)]">
        <div className="flex gap-x-16 items-center ml-auto mr-12">
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
      </div>
      <div
        ref={controllerContentRef}
        className="content absolute z-20 grid place-items-center -top-[68px] h-[320px] opacity-0 overflow-hidden"
      >
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="controller relative grid place-items-center grid-flow-col gap-32 opacity-0 "
        >
          <div className="relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
            <Image
              className="absolute object-cover -translate-y-11 object-center"
              src={EVENT_PIC.src}
              alt="BEGE 2023 Sofia"
              width={EVENT_PIC.width}
              height={EVENT_PIC.height}
            />
          </div>
          <div className="relative">
            <p className="text-white text-xl text-nowrap">
              We are so excited to meet so many
            </p>
            <p className="text-white text-xl text-nowrap">
              partners and friends there!
            </p>
            <p className="text-white text-xl text-nowrap">
              Booth 38 -{" "}
              <span className="text-angel-orange">14-18 JUNE 2021 </span>
            </p>
          </div>
        </div>
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="controller relative grid place-items-center grid-flow-col gap-32 opacity-0 "
        >
          <div className="relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
            <Image
              className="absolute object-cover -translate-y-11 object-center"
              src={EVENT_PIC.src}
              alt="BEGE 2023 Sofia"
              width={EVENT_PIC.width}
              height={EVENT_PIC.height}
            />
          </div>
          <div className="relative">
            <p className="text-white text-xl text-nowrap">
              We are so excited to meet so many
            </p>
            <p className="text-white text-xl text-nowrap">
              partners and friends there!
            </p>
            <p className="text-white text-xl text-nowrap">
              Booth 38 -{" "}
              <span className="text-angel-orange">14-18 JUNE 2022 </span>
            </p>
          </div>
        </div>
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="controller relative grid place-items-center grid-flow-col gap-32 opacity-0 "
        >
          <div className="relative w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
            <Image
              className="absolute object-cover -translate-y-11 object-center"
              src={EVENT_PIC.src}
              alt="BEGE 2023 Sofia"
              width={EVENT_PIC.width}
              height={EVENT_PIC.height}
            />
          </div>
          <div className="relative">
            <p className="text-white text-xl text-nowrap">
              We are so excited to meet so many
            </p>
            <p className="text-white text-xl text-nowrap">
              partners and friends there!
            </p>
            <p className="text-white text-xl text-nowrap">
              Booth 38 -{" "}
              <span className="text-angel-orange">14-18 JUNE 2023 </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
