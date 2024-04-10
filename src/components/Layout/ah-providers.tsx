"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

export default function Providers() {
  const infiniteSliderRef = useRef<HTMLDivElement>(null!);
  const provider = useRef<HTMLDivElement>(null!);
  useGSAP(
    () => {
      const providerHeight = infiniteSliderRef.current.querySelector<HTMLDivElement>(".provider-row")?.offsetHeight! + 9;
      const providers = infiniteSliderRef.current.querySelectorAll(".provider-row").length;
      gsap.set(".provider-row", { y: (i) => i * providerHeight })
      const totalHeight = providers * providerHeight;
      const wrapOffsetTop = -providerHeight;
      const wrapOffsetBottom = totalHeight + wrapOffsetTop;
      const wrap = gsap.utils.wrap(wrapOffsetTop, wrapOffsetBottom);
      const yheight = "-=" + totalHeight;

      gsap.to(".provider-row", {
        duration: 5,
        ease: "none",
        y: yheight, //move each.rotating_txt the total height of all.rotating_txtes to upwards
        modifiers: {
          y: gsap.utils.unitize(wrap) //force y value to wrap when it reaches -100
        },
        repeat: -1
      });
    },
    { scope: infiniteSliderRef }
  );

  return (
    <div className="relative container grid gap-16 mx-auto w-full mt-56">
      <div className="relative z-10 grid gap-5 text-center">
        <h2 className="text-3xl text-white leading-tight xl:text-6xl">
          Gaming Providers
        </h2>
        <p className="text-white mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Sed sed varius ut sed sit sed
          commodo a ornare. Tellus viverra adipiscing volutpat habitasse quam
          fringilla tortor diam.
        </p>
      </div>
      <div
        ref={infiniteSliderRef}
        className="relative grid gap-3 w-full min-h-[548px] overflow-hidden"
      >
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center md:grid-cols-6">
          {[
            "/images/provider-betsoft.png",
            "/images/provider-elkstudios.png",
            "/images/provider-evolutiongaming.png",
            "/images/provider-irondog.png",
            "/images/provider-leap.png",
            "/images/provider-netent.png",
          ].map((item, idx) => (
            <div
              key={`provider-row-1-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-28 h-20 lg:w-36 lg:h-32 xl:w-[184px] xl:h-32"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
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
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center md:grid-cols-6">
          {[
            "/images/provider-playingo.png",
            "/images/provider-pragmaticplay.png",
            "/images/provider-redtiger.png",
            "/images/provider-netent.png",
            "/images/provider-evolutiongaming.png",
            "/images/provider-pragmaticplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-2-${idx}`}
              className="box relative rounded-lg bg-angel-blue-950 w-28 h-20 lg:w-36 lg:h-32 xl:w-[184px] xl:h-32"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
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
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center md:grid-cols-6">
          {[
            "/images/provider-irondog.png",
            "/images/provider-leap.png",
            "/images/provider-betsoft.png",
            "/images/provider-redtiger.png",
            "/images/provider-elkstudios.png",
            "/images/provider-playingo.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-3-${idx}`}
              className="box relative rounded-lg bg-angel-blue-950 w-28 h-20 lg:w-36 lg:h-32 xl:w-[184px] xl:h-32"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
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
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center md:grid-cols-6">
          {[
            "/images/provider-leap.png",
            "/images/provider-netent.png",
            "/images/provider-elkstudios.png",
            "/images/provider-playingo.png",
            "/images/provider-irondog.png",
            "/images/provider-pragmaticplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="box relative rounded-lg bg-angel-blue-950 w-28 h-20 lg:w-36 lg:h-32 xl:w-[184px] xl:h-32"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
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
        <div className="provider-row top-0 absolute grid grid-cols-3 gap-3 place-items-center md:grid-cols-6">
          {[
            "/images/provider-leap.png",
            "/images/provider-netent.png",
            "/images/provider-elkstudios.png",
            "/images/provider-playingo.png",
            "/images/provider-irondog.png",
            "/images/provider-pragmaticplay.png",
          ].map((item, idx) => (
            <div
              ref={provider}
              key={`provider-row-4-${idx}`}
              className="box relative rounded-lg bg-angel-blue-950 w-28 h-20 lg:w-36 lg:h-32 xl:w-[184px] xl:h-32"
            >
              <Image
                className="absolute z-0 bottom-0 px-2 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
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
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-angel-blue h-56"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-angel-blue h-48"></div>
      </div>
    </div>
  );
}
