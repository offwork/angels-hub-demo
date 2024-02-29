import Image from "next/image";
import EVENT_PIC from "../../../../public/images/event-pic.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap  from "gsap"

type BannerControllerProps = {
  onPrevSlide: () => void;
  onNextSlide: () => void;
};
const NEXT = 1;
const PREV = -1;

gsap.registerPlugin(useGSAP);

export default function BannerController({
  onNextSlide,
  onPrevSlide,
}: BannerControllerProps) {
  const prevButtonRef = useRef<HTMLButtonElement>(null!);
  const nextButtonRef = useRef<HTMLButtonElement>(null!);
  const controllerRef = useRef<HTMLDivElement>(null!);
  const slidesRef = useRef<HTMLDivElement[]>(null!);
  const isAnimating = useRef(false);
  const slide = useRef(0);
  const slidesTotal = useRef(0);
  const { contextSafe } = useGSAP({ scope: controllerRef });

  const onNext = () => {
    onNextSlide();
    navigateSlider(NEXT);
  };

  const onPrev = () => {
    onPrevSlide();
    navigateSlider(PREV);
  };

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

    gsap
      .timeline({
        defaults: {
          duration: 1.2,
          ease: "power3.inOut",
        },
        onStart: () => {
          slidesRef.current[slide.current].classList.add(
            "opacity-100",
          );
          gsap.set(upcomingSlide, { zIndex: 99 });
          isAnimating.current = true;
        },
        onComplete: () => {
          slidesRef.current[previous].classList.remove(
            "opacity-0",
          );
          gsap.set(upcomingSlide, { zIndex: 1 });
          isAnimating.current = false;
        },
      })
      .addLabel("ctrl", 0)
      .to(
        currentSlide,
        {
          yPercent: -value * 100,
          transformPerspective: 1000
        },
        "ctrl"
      )
      .fromTo(
        upcomingSlide,
        {
          autoAlpha: 0,
          yPercent: -value * 100,
          stagger: 0.1,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 0.1,
        },
        "ctrl+=0.2"
      );
  });

  useGSAP(
    () => {
      slidesRef.current = gsap.utils.toArray<HTMLDivElement>(".controller ");
      slidesRef.current[slide.current].classList.add("opacity-100");
      slidesTotal.current = gsap.utils.toArray(".controller ").length;

      return () => {
        prevButtonRef.current.removeEventListener("click", onPrev);
        nextButtonRef.current.removeEventListener("click", onNext);
      }
    },
    { scope: controllerRef }
  );

  return (
    <div className="container absolute left-1/2 -translate-x-1/2 z-20 bottom-24 mx-auto px-44">
      <div className="relative flex justify-between items-center w-full rounded-3xl bg-black max-h-[186px] shadow-[0_18px_103px_-15px_rgba(0,0,0,0.36)]">
        <div className="absolute z-0 left-0 w-[316px] h-[206px] rounded-3xl bg-[#2249C0] "></div>
        <div
          ref={controllerRef}
          style={{ perspective: 1000 }}
          className="relative grid place-items-center h-full w-[706px] overflow-hidden"
        >
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid grid-flow-col place-items-center gap-20 w-full h-full opacity-0 overflow-hidden"
          >
            <div className="relative w-[296px] h-[186px] rounded-2xl overflow-hidden ml-2.5">
              <Image
                className="absolute object-cover -translate-y-10 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <p className="text-white text-xl max-w-xs">
              We are so excited to meet so many partners and friends there!{" "}
              <br /> Booth 38 -{" "}
              <span className="text-secondary">14-18 JUNE 2023 </span>
            </p>
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid grid-flow-col place-items-center gap-20 w-full h-full opacity-0 overflow-hidden"
          >
            <div className="relative w-[296px] h-[186px] rounded-2xl overflow-hidden ml-2.5">
              <Image
                className="absolute object-cover -translate-y-10 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <p className="text-white text-xl max-w-xs">
              We are so excited to meet so many partners and friends there!{" "}
              <br /> Booth 38 -{" "}
              <span className="text-secondary">14-18 JUNE 2023 </span>
            </p>
          </div>
          <div
            style={{ gridArea: "1 / 1 / -1 / -1" }}
            className="controller relative grid grid-flow-col place-items-center gap-20 w-full h-full opacity-0 overflow-hidden"
          >
            <div className="relative w-[296px] h-[186px] rounded-2xl overflow-hidden ml-2.5">
              <Image
                className="absolute object-cover -translate-y-10 object-center"
                src={EVENT_PIC.src}
                alt="BEGE 2023 Sofia"
                width={EVENT_PIC.width}
                height={EVENT_PIC.height}
              />
            </div>
            <p className="text-white text-xl max-w-xs">
              We are so excited to meet so many partners and friends there!{" "}
              <br /> Booth 38 -{" "}
              <span className="text-secondary">14-18 JUNE 2023 </span>
            </p>
          </div>
        </div>
        <div className="flex gap-x-16 items-center mr-12">
          <button ref={prevButtonRef} onClick={() => onPrev()}>
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
          <button ref={nextButtonRef} onClick={() => onNext()}>
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
