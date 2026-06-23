"use client";
import PlatformCard from "@/app/_components/platform/AHPlatformCard";
import ButtonFill from "@/components/ui/AHButtonFill";
import { PLATFORMS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function PlatformSlider() {
  gsap.registerPlugin(useGSAP);
  const platformRef = useRef<HTMLDivElement>(null!);
  const pickerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      function getHorizontalPlatformScrollAmount() {
        const totalScrollWidth = pickerRef.current.scrollWidth;
        const visibleWidth = pickerRef.current.clientWidth;
        return visibleWidth - totalScrollWidth;
      }

      const mediaMatcher = gsap.matchMedia();
      mediaMatcher.add(
        {
          isDesktop: `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          const { isDesktop } = context.conditions!;
          if (isDesktop) {
            gsap.to(pickerRef.current, {
              x: getHorizontalPlatformScrollAmount,
              ease: "none",
              duration: 2,
              scrollTrigger: {
                trigger: platformRef.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
              },
            });
          }
        }
      );
    },
    { scope: platformRef }
  );

  return (
    <div ref={platformRef} className="platform-scroll relative w-full my-28 pb-10 overflow-hidden">
      <div className="relative z-10 grid gap-5 w-full text-center">
        <h2 className="title text-3xl text-white leading-tight xl:text-6xl">
          Why AngelsHub Platform
        </h2>
        <p className="caption text-white mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
          The complete betting offer from Angelshub provides your business with the tools to compete
          against the very best in the industry and come out ahead.
        </p>
      </div>
      <div
        ref={pickerRef}
        className="platform-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center py-40 px-8 gap-10 -mt-20 xl:mt-0 lg:grid-flow-col"
      >
        {PLATFORMS.map((item, idx) => (
          <PlatformCard key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
      <div className="container w-full flex justify-center lg:justify-end">
        <div className="platform-btn flex">
          <ButtonFill
            className="bg-angel-blue text-white"
            size="large"
            href="/contact"
            label="Get expert service"
          />
        </div>
      </div>
    </div>
  );
}
