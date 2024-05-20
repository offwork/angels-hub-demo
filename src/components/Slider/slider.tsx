"use client";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import Slide1 from "./slide-1";
import Slide2 from "./slide-2";
import Slide3 from "./slide-3";
import BannerController from "./banner-controller";
import { useIsomorphicLayoutEffect } from "@/utils";

const NEXT = 1;

export default function Slider() {
  const [selected, setSelected] = useState("0");
  const carouselTL = useRef<GSAPTimeline>(null!);
  const sliderRef = useRef<HTMLDivElement>(null!);
  const slidesRef = useRef<HTMLDivElement[]>(null!);
  const decoRef = useRef<NodeList>(null!);
  const dotsRef = useRef<HTMLSpanElement[]>(null!);
  const slideChildrenRef = useRef<HTMLDivElement[]>(null!);
  const isAnimating = useRef(false);
  const slide = useRef(0);
  const slidesTotal = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: sliderRef.current });

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

    dotsRef.current.forEach((_, idx, arr) => {
      const dotsTl = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.4, ease: "expo.inOut" },
        })
        .fromTo(
          arr[idx],
          {
            width: "56px",
            backgroundColor: "#D2D2D2",
          },
          {
            width: "100%",
            backgroundColor: "#fe5f00",
          }
        );

      slide.current === idx ? dotsTl.play() : dotsTl.reverse();
    });

    carouselTL.current = gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "power3.inOut",
        },
        onStart: () => {
          slidesRef.current[slide.current].classList.add("opacity-100");
          gsap.set(upcomingSlide, { z: 99 });
        },
        onComplete: () => {
          slidesRef.current[previous].classList.remove("opacity-100");
          isAnimating.current = false;
          gsap.set(upcomingSlide, { z: 1 });
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
          z: 0
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
      carouselTL.current.to(
        arr[arr.length - 1 - pos],
        {
          ease: "power4",
          xPercent: -direction * 100,
        },
        `start+=${(pos + 1) * 0.2}`
      );
    });
    carouselTL.current.addLabel("middle", "<").fromTo(
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

  const autoPlay = () => {
    navigateSlider(NEXT);
    gsap.delayedCall(10, autoPlay);
  };

  useIsomorphicLayoutEffect(() => {
    slidesRef.current = gsap.utils.toArray<HTMLDivElement>(".slide");
    dotsRef.current = gsap.utils.toArray<HTMLSpanElement>(".dot");
    decoRef.current =
      sliderRef.current.querySelectorAll<HTMLDivElement>(".deco");
    slideChildrenRef.current = slidesRef.current.map(
      (child) => child.querySelector<HTMLDivElement>(".static")!
    );
    slidesRef.current[slide.current].classList.add("opacity-100");
    slidesTotal.current = gsap.utils.toArray(".slide").length;

    gsap.delayedCall(10, autoPlay);

    return () => {
      context.kill();
      context.revert();
    };
  }, []);

  return (
    <>
      <SelectedSlideContext.Provider value={{ selected, setSelected }}>
        <div className="absolute z-30 top-[60%] w-full h-2 lg:top-28">
          <div className="container flex justify-center lg:block">
            <div className="flex flex-row space-x-2 items-center mb-9 w-44">
              <span className="dot h-1.5 w-full border border-white rounded-sm bg-angel-orange"></span>
              <span className="dot h-1.5 w-14 border border-white rounded-sm bg-[#D2D2D2]"></span>
              <span className="dot h-1.5 w-14 border border-white rounded-sm bg-[#D2D2D2]"></span>
            </div>
          </div>
        </div>
        <div
          ref={sliderRef}
          style={{ perspective: 1000 }}
          className="relative z-10 grid place-items-center w-full min-h-[940px] xl:h-[1123px] overflow-hidden"
        >
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide absolute z-20 grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide1 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide absolute z-10 grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide2 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide absolute z-0 grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <Slide3 slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-orange absolute z-0 grid place-items-center w-full h-full opacity-0"
          ></div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-blue-950 absolute z-0 grid place-items-center w-full h-full opacity-0"
          ></div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="deco bg-angel-blue absolute z-0 grid place-items-center w-full h-full opacity-0"
          ></div>
        </div>
        <BannerController />
      </SelectedSlideContext.Provider>
    </>
  );
}
