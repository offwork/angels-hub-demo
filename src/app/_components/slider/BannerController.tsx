"use client";
import AHLink from "@/components/ui/AHLink";
import { NEXT, PREV } from "@/constant";
import { Event } from "@/models";
import { classNames, useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import EventImage from "./EventsImage";

type BannerControllerProps = {
  events: Event[];
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
};


export function BannerController({
  onNextSlide,
  onPrevSlide,
  events,
}: BannerControllerProps) {
  gsap.registerPlugin(useGSAP);
  const [showSpin, setShowSpin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const tl = useRef<GSAPTimeline>(null!);
  const prevButtonRef = useRef<HTMLButtonElement>(null!);
  const nextButtonRef = useRef<HTMLButtonElement>(null!);
  const controllerRef = useRef<HTMLDivElement>(null!);
  const controllerContentRef = useRef<HTMLDivElement>(null!);
  const slidesCtrlRef = useRef<HTMLDivElement[]>(null!);
  const slidesImagesRef = useRef<HTMLImageElement[]>(null!);
  const isCtrlAnimating = useRef(false);
  const slideCtrl = useRef(0);
  const slidesCtrlTotal = useRef(0);
  const { context, contextSafe } = useGSAP({ scope: controllerContentRef.current });

  const onNext = () => {
    if (typeof onNextSlide === "function") onNextSlide();
    navigateSlider(NEXT);
  };

  const onPrev = () => {
    if (typeof onPrevSlide === "function") onPrevSlide();
    navigateSlider(PREV);
  };

  const navigateSlider = contextSafe((direction: number) => {
    setShowSpin(false);
    setIsAnimating(true);
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
    const currentImage = slidesImagesRef.current[previous];
    const upcomingImage = slidesImagesRef.current[slideCtrl.current];

    tl.current = gsap
      .timeline({
        defaults: {},
        onStart: () => {
          gsap.set(upcomingSlide, { zIndex: 40, opacity: 0 });
        },
        onComplete: () => {
          gsap.set(currentSlide, { zIndex: 1, opacity: 1 });
          isCtrlAnimating.current = false;
          setIsAnimating(false);
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
      .to(
        currentImage,
        {
          xPercent: -direction * 100,
          scale: 1.2,
          opacity: 0,
        },
        "ctrl"
      )
      .fromTo(
        upcomingImage,
        {
          xPercent: direction * 100,
          scale: 0.7,
          opacity: 0,
        },
        {
          xPercent: 0,
          scale: 1.2,
          opacity: 1,
        },
        "ctrl+=0.1"
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
      );
  });

  useGSAP(
    () => {
      const bar = controllerRef.current.querySelector<HTMLDivElement>(".bar");
      const content = controllerRef.current.querySelector<HTMLDivElement>(".content");
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
          { autoAlpha: 0, opacity: 0, scale: 0.5, xPercent: 20 },
          { autoAlpha: 1, opacity: 1, scale: 1, xPercent: 0 },
          "<"
        );
    },
    { scope: controllerRef.current }
  );

  const autoPlay = useCallback(() => {
    navigateSlider(NEXT);
    gsap.delayedCall(10, autoPlay);
  }, [navigateSlider]);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 1024) {
      gsap.delayedCall(5, autoPlay);
    } else {
      gsap.killTweensOf(autoPlay);
    }
  }, [autoPlay]);

  useIsomorphicLayoutEffect(() => {
    slidesCtrlRef.current = gsap.utils.toArray<HTMLDivElement>(".controller");
    slidesImagesRef.current = gsap.utils.toArray<HTMLImageElement>(".event-img");
    // slidesCtrlTexts.current = controllerContentRef.current.querySelectorAll(".text-line");
    slidesCtrlTotal.current = gsap.utils.toArray(".controller ").length;

    gsap.set(slidesCtrlRef.current[slideCtrl.current], { opacity: 1 });
    slidesImagesRef.current.forEach((img, idx) => {
      gsap.set(img, { scale: 1.2, xPercent: 100 * idx });
    });

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
      <div className="bar relative grid grid-flow-col justify-items-stretch place-items-center w-full rounded-3xl bg-black h-[186px] opacity-0 shadow-[0_18px_103px_-15px_rgba(0,0,0,0.36)]">
        <EventImage events={events} isSPin={showSpin} />
        <div
          ref={controllerContentRef}
          className="content w-full h-44 relative opacity-0 left-7 sm:left-12 md:left-[336px] lg:left-[352px] xl:left-96"
        >
          {events.map((event) => (
            <div
              key={`event-description-${event.id}`}
              className="controller absolute max-w-72 h-full opacity-0 grid grid-flow-col justify-items-stretch place-items-center sm:max-w-lg md:max-w-80 xl:max-w-xl"
            >
              <div className="relative z-30 text-lines">
                <p className="text-line text-white text-sm sm:text-lg md:text-base xl:text-xl">
                  {event.eventDescription}
                </p>
                <span className="block border-t border-white/35 w-full h-0.5 my-4"></span>
                <div className="flex items-center justify-between">
                  <Link
                    as={`/news-and-events/${event.eventSlug}`}
                    href="/news-and-events/[slug]"
                    target="_blank"
                    className="text-white hover:underline"
                  >
                    Detail
                  </Link>
                  <Link href="/news-and-events" passHref legacyBehavior>
                    <AHLink className="text-angel-orange hover:underline" href="/news-and-events" target="_blank">
                      <span className="">View All</span>
                    </AHLink>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid grid-flow-col gap-x-16 items-center ml-auto mr-12">
          <button
            ref={prevButtonRef}
            onClick={onPrev}
            className={classNames(
              isAnimating
                ? "transition-opacity duration-400 ease-in opacity-30 cursor-none"
                : "transition-opacity duration-400 ease-out opacity-100"
            )}
          >
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
          <button
            ref={nextButtonRef}
            onClick={onNext}
            className={classNames(
              isAnimating
                ? "transition-opacity duration-400 ease-in opacity-30 cursor-none"
                : "transition-opacity duration-400 ease-out opacity-100"
            )}
          >
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
    </div>
  );
}
