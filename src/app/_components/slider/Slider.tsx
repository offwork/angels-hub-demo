"use client";
import { NEXT } from "@/constant";
import { SelectedSlideContext } from "@/contexts/banner-context";
import { getMostRecentEvents } from "@/lib/fetch";
import { Event } from "@/models";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";
const BannerController = dynamic(() =>
  import("./BannerController").then((m) => m.BannerController)
);
import SlideFirst from "./SlideFirst";
import SlideSecond from "./SlideSecond";
import SlideThird from "./SlideThird";
import dynamic from "next/dynamic";

export default function Slider() {
  const [eventsData, setEventsData] = useState<Event[]>(null!);
  const [isLoading, setLoading] = useState(true);
  const [selected, setSelected] = useState("0");
  const runOnce = useRef<boolean>(false);
  const carouselTL = useRef<GSAPTimeline>(null!);
  const sliderRef = useRef<HTMLDivElement>(null!);
  const slidesRef = useRef<HTMLDivElement[]>(null!);
  const decoRef = useRef<NodeList>(null!);
  const dotsRef = useRef<HTMLSpanElement[]>(null!);
  const isAnimating = useRef(false);
  const slide = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: sliderRef.current });

  const totalSlides = () => gsap.utils.toArray(".slide").length;

  const navigateSlider = contextSafe((direction: number, currentIdx?: number) => {
    if (isAnimating.current) return false;
    isAnimating.current = true;
    const previous = slide.current;
    if (currentIdx) {
      slide.current = currentIdx;
    } else {
      slide.current =
        direction === 1
          ? slide.current < totalSlides() - 1
            ? ++slide.current
            : 0
          : slide.current > 0
          ? --slide.current
          : totalSlides() - 1;
    }

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
          gsap.set(upcomingSlide, { z: 99 });
        },
        onComplete: () => {
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
          z: 0,
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

  const dotsClick = (evt: MouseEvent) => {
    const elm = evt.currentTarget as HTMLSpanElement;
    const idx = Number(elm.id.substring(elm.id.length - 1, elm.id.length));
    if (slide.current !== idx) {
      navigateSlider(-1, idx);
      gsap.killTweensOf(autoPlay);
      gsap.delayedCall(10, autoPlay);
    }
  };

  const loadEventsData = useCallback(async () => {
    getMostRecentEvents().then(({ events }) => {
      setEventsData(events);
      setLoading(false);
    });
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!runOnce.current) {
      loadEventsData();
    }

    slidesRef.current = gsap.utils.toArray<HTMLDivElement>(".slide");
    dotsRef.current = gsap.utils.toArray<HTMLSpanElement>(".dot");
    decoRef.current = sliderRef.current.querySelectorAll<HTMLDivElement>(".deco");
    gsap.set(slidesRef.current[slide.current], { opacity: 1 });

    dotsRef.current.forEach((elm) => {
      elm.addEventListener("click", dotsClick);
    });

    gsap.delayedCall(10, autoPlay);

    return () => {
      context.revert();
      runOnce.current = true;
      dotsRef.current.forEach((elm) => {
        elm.removeEventListener("click", dotsClick);
      });
    };
  }, [loadEventsData]);

  return (
    <>
      <SelectedSlideContext.Provider value={{ selected, setSelected }}>
        <div className="absolute z-30 top-[60%] w-full h-2 lg:top-28">
          <div className="container flex justify-center lg:block">
            <div className="flex flex-row space-x-2 items-center mb-9 w-44">
              <span
                id="dot-0"
                className="dot cursor-pointer h-1.5 w-full border border-white rounded-sm bg-angel-orange"
              ></span>
              <span
                id="dot-1"
                className="dot cursor-pointer h-1.5 w-14 border border-white rounded-sm bg-[#D2D2D2]"
              ></span>
              <span
                id="dot-2"
                className="dot cursor-pointer h-1.5 w-14 border border-white rounded-sm bg-[#D2D2D2]"
              ></span>
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
            <SlideFirst slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide absolute z-10 grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <SlideSecond slide={slide.current} />
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="slide absolute z-0 grid place-items-center w-full h-full opacity-0 overflow-hidden"
          >
            <SlideThird slide={slide.current} />
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
        {!isLoading ? (
          <BannerController events={eventsData} />
        ) : (
          <p className="sr-only">Loading...</p>
        )}
      </SelectedSlideContext.Provider>
    </>
  );
}
