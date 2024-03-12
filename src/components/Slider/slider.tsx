"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef, useState } from "react";
import Slide1 from "./slide-1";
import Slide2 from "./slide-2";
import Slide3 from "./slide-3";
import useInterval from "./use-interval";

export default function Slider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState("0");
  const tl = useRef<GSAPTimeline>(null!);
  const sliderRef = useRef<HTMLDivElement>(null!);
  const slidesRef = useRef<HTMLDivElement[]>(null!);
  const decoRef = useRef<NodeList>(null!);
  const slideChildrenRef = useRef<HTMLDivElement[]>(null!);
  const isAnimating = useRef(false);
  const slide = useRef(0);
  const slidesTotal = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: sliderRef });

  useInterval(() => {
    navigateSlider(1);
  }, 20000);

  const navigateSlider = contextSafe((direction: number) => {
    if (isAnimating.current) return false;
    isAnimating.current = true;
    const previous = slide.current;
    slide.current =
      direction === 1
        ? slide.current < slidesTotal.current - 1
          ? ++slide.current
          : 0
        : slide.current > 0
        ? --slide.current
        : slidesTotal.current - 1;

    const currentSlide = slidesRef.current[previous];
    const upcomingSlide = slidesRef.current[slide.current];

    tl.current = gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "power3.inOut",
        },
        onStart: () => {
          slidesRef.current[slide.current].classList.add("opacity-100");
        },
        onComplete: () => {
          slidesRef.current[previous].classList.remove("opacity-100");
          isAnimating.current = false;
          setSelected(String(slide.current));
        },
      })
      .addLabel("start", 0)
      .to(
        currentSlide,
        {
          duration: 0.4,
          ease: "power2.in",
          xPercent: -direction * 100,
        },
        "start"
      )
      .fromTo(
        decoRef.current,
        {
          xPercent: direction * 100,
          autoAlpha: 1,
        },
        {
          duration: 0.4,
          ease: "power2.in",
          xPercent: 0,
        },
        "start"
      );
    decoRef.current.forEach((_, pos, arr) => {
      tl.current.to(
        arr[arr.length - 1 - pos],
        {
          ease: "power4",
          xPercent: -direction * 100,
        },
        `start+=${(pos + 1) * 0.2}`
      );
    });
    tl.current.addLabel("middle", "<").fromTo(
      upcomingSlide,
      {
        autoAlpha: 1,
        xPercent: direction * 100,
      },
      {
        ease: "power4",
        xPercent: 0,
      },
      "middle"
    );
  });

  useGSAP(
    () => {
      slidesRef.current = gsap.utils.toArray<HTMLDivElement>(".slide");
      decoRef.current =
        sliderRef.current.querySelectorAll<HTMLDivElement>(".deco");
      slideChildrenRef.current = slidesRef.current.map(
        (child) => child.querySelector<HTMLDivElement>(".static")!
      );
      slidesRef.current[slide.current].classList.add("opacity-100");
      slidesTotal.current = gsap.utils.toArray(".slide").length;

      return () => {
        context.kill();
        context.revert();
      };
    },
    { scope: sliderRef }
  );

  return (
    <>
      <SelectedSlideContext.Provider value={{ selected, setSelected }}>
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
            className="slide relative grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide1 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide relative grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide2 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide relative grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide3 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-orange relative grid place-items-center w-full h-full opacity-0"
          ></div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-blue-950 relative grid place-items-center w-full h-full opacity-0"
          ></div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-blue relative grid place-items-center w-full h-full opacity-0"
          ></div>
        </div>
        {children}
      </SelectedSlideContext.Provider>
    </>
  );
}
