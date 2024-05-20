"use client";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import EVENT_PIC from "../../../public/images/event-pic.png";
import EVENT_PIC_2 from "../../../public/images/event-pic-2.png";

const NEXT = 1;
const PREV = -1;

type BannerControllerProps = {
  onPrevSlide?: () => void;
  onNextSlide?: () => void;
};

gsap.registerPlugin(useGSAP);

export default function BannerController({ onNextSlide, onPrevSlide }: BannerControllerProps) {
  const tl = useRef<GSAPTimeline>(null!);
  const prevButtonRef = useRef<HTMLButtonElement>(null!);
  const nextButtonRef = useRef<HTMLButtonElement>(null!);
  const controllerRef = useRef<HTMLDivElement>(null!);
  const controllerContentRef = useRef<HTMLDivElement>(null!);
  const slidesCtrlRef = useRef<HTMLDivElement[]>(null!);
  const slidesImagesRef = useRef<HTMLImageElement[]>(null!);
  const slidesCtrlTexts = useRef<NodeList>(null!);
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
          slidesCtrlRef.current[slideCtrl.current].classList.add("opacity-0");
          gsap.set(upcomingSlide, { zIndex: 40, opacity: 0 });
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
      .to(
        currentImage,
        {
          xPercent: -direction * 100,
          scale: 0.7,
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
          scale: 1,
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
      const content = controllerRef.current.querySelector<HTMLDivElement>(".content");
      const image = controllerRef.current.querySelector<HTMLDivElement>(".event-images");
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
          image,
          { autoAlpha: 0, opacity: 0, scale: 0.5, xPercent: 50 },
          { autoAlpha: 1, opacity: 1, scale: 1, xPercent: 0 },
          "<"
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
    slidesImagesRef.current = gsap.utils.toArray<HTMLImageElement>(".event-img ");
    slidesCtrlTexts.current = controllerContentRef.current.querySelectorAll(".text-line");
    slidesCtrlRef.current[slideCtrl.current].classList.add("opacity-100");
    slidesCtrlTotal.current = gsap.utils.toArray(".controller ").length;

    slidesImagesRef.current.forEach((img, idx) => {
      gsap.set(img, { xPercent: 100 * idx });
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
        <div className="event-images hidden md:block absolute bg-angel-blue left-0 w-[316px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
          <Image
            className="event-img absolute object-cover bottom-0 object-center"
            src={EVENT_PIC.src}
            alt="BEGE 2023 Sofia"
            width={EVENT_PIC.width}
            height={EVENT_PIC.height}
          />
          <Image
            className="event-img absolute object-cover object-center -top-12"
            src={EVENT_PIC_2.src}
            alt="BEGE 2023 Sofia"
            width={EVENT_PIC.width}
            height={EVENT_PIC_2.height}
          />
        </div>
        <div
          ref={controllerContentRef}
          className="content grid place-items-center w-full md:w-auto relative md:ml-64 lg:ml-80 xl:ml-72 opacity-0 overflow-hidden"
        >
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative z-10 grid place-items-center grid-flow-col md:gap-12 lg:gap-16 xl:gap-32 opacity-0"
          >
            <div className="text-lines relative">
              <div className="text-line">
                <p className="text-white lg:text-xl max-w-72">
                  We are excited to meet you in Malta at the Casino Beats Summit. - {" "}
                  <span className="text-angel-orange">21-23 May 2024</span>
                </p>
              </div>
              <span className="text-line block border-t border-white/35 w-full my-4"></span>
              <div className="text-line flex items-center justify-between">
                <Link href="" className="text-white text-base hover:underline">
                  Detail
                </Link>
                <Link href="" className="text-angel-orange text-base hover:underline">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative z-0 grid place-items-center grid-flow-col md:gap-12 lg:gap-16 xl:gap-32 opacity-0"
          >
            <div className="text-lines relative">
              <div className="text-line">
                <p className="text-white lg:text-xl max-w-72">
                  We&apos;re thrilled to announce our participation at the Sigma Asia in Manila! - <span className="text-angel-orange">June 02-05 2024</span>
                </p>
              </div>
              <span className="text-line block border-t border-white/35 w-full my-4"></span>
              <div className="text-line flex items-center justify-between">
                <Link href="" className="text-white hover:underline">
                  Detail
                </Link>
                <Link href="" className="text-angel-orange hover:underline">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid grid-flow-col gap-x-16 items-center ml-auto mr-12">
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
    </div>
  );
}
