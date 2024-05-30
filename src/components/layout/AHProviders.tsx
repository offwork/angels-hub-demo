"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function Providers() {
  const containerRef = useRef<HTMLDivElement>(null!);
  const desktopSliderRef = useRef<HTMLDivElement>(null!);
  const tabletSliderRef = useRef<HTMLDivElement>(null!);
  const mobileSliderRef = useRef<HTMLDivElement>(null!);
  const provider = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      const desktopBreakPoint = 1024;
      const mobileBreakPoint = 640;
      const mediaMatcher = gsap.matchMedia();
      mediaMatcher.add(
        {
          isMobile: `(max-width: ${mobileBreakPoint}px) and (prefers-reduced-motion: no-preference)`,
          isTablet: `(max-width: ${desktopBreakPoint - 1}px) and (min-width: ${
            mobileBreakPoint + 1
          }px) and (prefers-reduced-motion: no-preference)`,
          isDesktop: `(min-width: ${desktopBreakPoint}px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          const { isMobile, isTablet, isDesktop } = context.conditions!;
          if (isMobile) {
            const providerHeight =
              mobileSliderRef.current.querySelector<HTMLDivElement>(".provider-row")
                ?.offsetHeight! + 9;
            const providers = mobileSliderRef.current.querySelectorAll(".provider-row").length;
            gsap.set(".provider-row", { y: (i) => i * providerHeight });
            const totalHeight = providers * providerHeight;
            const wrapOffsetTop = -providerHeight;
            const wrapOffsetBottom = totalHeight + wrapOffsetTop;
            const wrap = gsap.utils.wrap(wrapOffsetTop, wrapOffsetBottom);
            const yheight = "-=" + totalHeight;

            gsap.to(".provider-row", {
              duration: 5,
              ease: "none",
              y: yheight,
              modifiers: {
                y: gsap.utils.unitize(wrap),
              },
              repeat: -1,
            });
          } else if (isTablet) {
            const providerHeight =
              tabletSliderRef.current.querySelector<HTMLDivElement>(".provider-row")
                ?.offsetHeight! + 9;
            const providers = tabletSliderRef.current.querySelectorAll(".provider-row").length;
            gsap.set(".provider-row", { y: (i) => i * providerHeight });
            const totalHeight = providers * providerHeight;
            const wrapOffsetTop = -providerHeight;
            const wrapOffsetBottom = totalHeight + wrapOffsetTop;
            const wrap = gsap.utils.wrap(wrapOffsetTop, wrapOffsetBottom);
            const yheight = "-=" + totalHeight;

            gsap.to(".provider-row", {
              duration: 5,
              ease: "none",
              y: yheight,
              modifiers: {
                y: gsap.utils.unitize(wrap),
              },
              repeat: -1,
            });
          } else if (isDesktop) {
            const providerHeight =
              desktopSliderRef.current.querySelector<HTMLDivElement>(".provider-row")
                ?.offsetHeight! + 9;
            const providers = desktopSliderRef.current.querySelectorAll(".provider-row").length;
            gsap.set(".provider-row", { y: (i) => i * providerHeight });
            const totalHeight = providers * providerHeight;
            const wrapOffsetTop = -providerHeight;
            const wrapOffsetBottom = totalHeight + wrapOffsetTop;
            const wrap = gsap.utils.wrap(wrapOffsetTop, wrapOffsetBottom);
            const yheight = "-=" + totalHeight;

            gsap.to(".provider-row", {
              duration: 5,
              ease: "none",
              y: yheight,
              modifiers: {
                y: gsap.utils.unitize(wrap),
              },
              repeat: -1,
            });
          }
        }
      );

      return () => {
        mediaMatcher.revert();
        mediaMatcher.kill();
      };
    },
    { scope: containerRef.current }
  );

  return (
    <div
      style={{
        maskImage: "linear-gradient(180deg,transparent,#0f38b4 20%,#0f38b4 80%,transparent 100%)",
      }}
      ref={containerRef}
      className="relative container grid gap-16 mx-auto w-full mt-16"
    >
      <div
        ref={mobileSliderRef}
        className="relative grid justify-items-center gap-3 w-full min-h-[548px] overflow-hidden md:hidden"
      >
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-amusnet.png",
            "/images/provider-ezugi.png",
            "/images/provider-betsoft.png",
          ].map((item, idx) => (
            <div
              key={`provider-row-1-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-blueprint.png",
            "/images/provider-blueprint.png",
            "/images/provider-endorphia.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-2-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-evolutiongaming.png",
            "/images/provider-evolution.png",
            "/images/provider-evoplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-3-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-wazdan.png",
            "/images/provider-goldenrace.png",
            "/images/provider-irondog.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-isoftbet.png",
            "/images/provider-microgaming.png",
            "/images/provider-netent.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-oryxgaming.png",
            "/images/provider-playngo.png",
            "/images/provider-pragmaticplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-quckspin.png",
            "/images/provider-redtiger.png",
            "/images/provider-spinomenal.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-tomhorn.png",
            "/images/provider-vivogaming.png",
            "/images/vivo-gaming-dark.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center">
          {[
            "/images/provider-yggdrasil.png",
            "/images/provider-microgaming.png",
            "/images/provider-netent.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-[106px] h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={tabletSliderRef}
        className="relative hidden gap-3 w-full min-h-[548px] overflow-hidden md:grid lg:hidden"
      >
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-amusnet.png",
            "/images/provider-ezugi.png",
            "/images/provider-betsoft.png",
            "/images/provider-blueprint.png",
            "/images/provider-elk.png",
          ].map((item, idx) => (
            <div
              key={`provider-row-1-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-endorphia.png",
            "/images/provider-evolutiongaming.png",
            "/images/provider-evolution.png",
            "/images/provider-evoplay.png",
            "/images/provider-wazdan.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-2-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-goldenrace.png",
            "/images/provider-irondog.png",
            "/images/provider-isoftbet.png",
            "/images/provider-microgaming.png",
            "/images/provider-netent.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-3-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-amusnet.png",
            "/images/provider-ezugi.png",
            "/images/provider-betsoft.png",
            "/images/provider-blueprint.png",
            "/images/provider-elk.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-oryxgaming.png",
            "/images/provider-playngo.png",
            "/images/provider-pragmaticplay.png",
            "/images/provider-quckspin.png",
            "/images/provider-redtiger.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-5 gap-3 place-items-center">
          {[
            "/images/provider-spinomenal.png",
            "/images/provider-tomhorn.png",
            "/images/provider-vivogaming.png",
            "/images/vivo-gaming-dark.png",
            "/images/provider-yggdrasil.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-32 h-24"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={desktopSliderRef}
        className="relative hidden gap-3 w-full min-h-[548px] overflow-hidden lg:grid"
      >
        <div className="provider-row top-0 absolute grid grid-cols-6 gap-3 place-items-center">
          {[
            "/images/provider-amusnet.png",
            "/images/provider-ezugi.png",
            "/images/provider-betsoft.png",
            "/images/provider-blueprint.png",
            "/images/provider-elk.png",
            "/images/provider-endorphia.png",
          ].map((item, idx) => (
            <div
              key={`provider-row-1-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-36 h-32 xl:w-[184px]"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-6 gap-3 place-items-center">
          {[
            "/images/provider-evolutiongaming.png",
            "/images/provider-evolution.png",
            "/images/provider-evoplay.png",
            "/images/provider-wazdan.png",
            "/images/provider-goldenrace.png",
            "/images/provider-irondog.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-2-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-36 h-32 xl:w-[184px]"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-6 gap-3 place-items-center">
          {[
            "/images/provider-yggdrasil.png",
            "/images/provider-ezugi.png",
            "/images/provider-betsoft.png",
            "/images/provider-blueprint.png",
            "/images/provider-elk.png",
            "/images/provider-endorphia.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-36 h-32 xl:w-[184px]"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-6 gap-3 place-items-center">
          {[
            "/images/provider-isoftbet.png",
            "/images/provider-microgaming.png",
            "/images/provider-netent.png",
            "/images/provider-oryxgaming.png",
            "/images/provider-playngo.png",
            "/images/provider-pragmaticplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-3-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-36 h-32 xl:w-[184px]"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="provider-row top-0 absolute grid grid-cols-6 gap-3 place-items-center">
          {[
            "/images/provider-quckspin.png",
            "/images/provider-redtiger.png",
            "/images/provider-spinomenal.png",
            "/images/provider-tomhorn.png",
            "/images/provider-vivogaming.png",
            "/images/provider-vivodark.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-36 h-32 xl:w-[184px]"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80 w-auto max-h-16"
                src={item}
                style={{ width: "100%", height: "auto" }}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
