"use client";
import { useRef } from "react";
import BannerController from "./banner-controller";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Slide1 from "./slide-1";
import Slide2 from "./slide-2";
import Slide3 from "./slide-3";
import useInterval from "./use-interval";

const NEXT = 1;
const PREV = -1;

gsap.registerPlugin(useGSAP);

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null!);
  const slidesRef = useRef<HTMLDivElement[]>(null!);
  const slideChildrenRef = useRef<HTMLDivElement[]>(null!);
  const isAnimating = useRef(false);
  const slide = useRef(0);
  const slidesTotal = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: sliderRef });

  const onNextSlide = () => {
    navigateSlider(NEXT);
  };
  
  const onPrevSlide = () => {
    navigateSlider(PREV);
  };

  useInterval(onNextSlide, 5000);

  const navigateSlider = contextSafe((value: number) => {
    if (isAnimating.current) return false;
    isAnimating.current = false;
    const previous = slide.current;
    slide.current =
      value === 1
        ? slide.current < slidesTotal.current - 1
          ? ++slide.current
          : 0
        : slide.current > 0
        ? --slide.current
        : slidesTotal.current - 1;

    const currentSlide = slidesRef.current[previous];
    const upcomingSlide = slidesRef.current[slide.current];
    const upcomingInner = slideChildrenRef.current[slide.current];

    gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "power3.inOut",
        },
        onStart: () => {
          slidesRef.current[slide.current].classList.add(
            "opacity-100",
            "pointer-events-auto"
          );
          gsap.set(upcomingSlide, { zIndex: 99 });
          isAnimating.current = true;
        },
        onComplete: () => {
          slidesRef.current[previous].classList.remove(
            "opacity-100",
            "pointer-events-auto"
          );
          gsap.set(upcomingSlide, { zIndex: 1 });
          isAnimating.current = false;
        },
      })
      .addLabel("start", 0)
      .to(
        currentSlide,
        {
          yPercent: -value * 100,
        },
        "start"
      )
      .fromTo(
        upcomingSlide,
        {
          yPercent: 0,
          autoAlpha: 0,
          rotationX: 140,
          scale: 0.1,
          z: -1000,
        },
        {
          autoAlpha: 1,
          rotationX: 0,
          z: 0,
          scale: 1,
        },
        "start+=0.1"
      )
      .fromTo(
        upcomingInner,
        {
          scale: 1.8,
          skewY: 45,
        },
        {
          scale: 1,
          skewY: 0,
        },
        "start+=0.17"
      );
  });

  useGSAP(
    () => {
      slidesRef.current = gsap.utils.toArray<HTMLDivElement>(".slide");
      slideChildrenRef.current = slidesRef.current.map(
        (child) => child.querySelector(".absolute")!
      );
      slidesRef.current[slide.current].classList.add(
        "opacity-100",
        "pointer-events-auto"
      );
      slidesTotal.current = gsap.utils.toArray(".slide").length;

      return () => {
        context.kill();
        context.revert();
      }
    },
    { scope: sliderRef }
  );

  return (
    <>
      <div className="absolute z-30 w-full h-2">
        <div className="container mx-auto px-44 pt-36">
          <div className="flex space-x-2 items-center mb-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="162"
              height="4"
              viewBox="0 0 162 4"
              fill="none"
            >
              <rect width="46" height="4" rx="2" fill="#D2D2D2" />
              <rect x="58" width="46" height="4" rx="2" fill="#D2D2D2" />
              <rect x="116" width="46" height="4" rx="2" fill="#D2D2D2" />
            </svg>
          </div>
        </div>
      </div>
      <div
        ref={sliderRef}
        style={{ perspective: 1000 }}
        className="grid place-items-center w-full h-[1123px] overflow-hidden"
      >
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="slide relative grid place-items-center w-full h-full opacity-0 pointer-events-none overflow-hidden"
        >
          <Slide1 />
        </div>
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="slide relative grid place-items-center w-full h-full opacity-0 pointer-events-none overflow-hidden"
        >
          <Slide2 />
        </div>
        <div
          style={{ gridArea: "1 / 1 / -1 / -1" }}
          className="slide relative grid place-items-center w-full h-full opacity-0 pointer-events-none overflow-hidden"
        >
          <Slide3 />
        </div>
      </div>
      <BannerController onNextSlide={onNextSlide} onPrevSlide={onPrevSlide} />
    </>
  );
}
