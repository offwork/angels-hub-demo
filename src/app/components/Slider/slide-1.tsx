"use client";
import { SelectedSlideContext } from "@/app/contexts/banner-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import SLIDER_PIC_1 from "../../../../public/images/slider-main-2-copy.png";

export default function Slide1({ slide }: { slide: number }) {
  const { selected } = useContext(SelectedSlideContext);
  const slideRef = useRef<HTMLDivElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);
  const titleRef1 = useRef<HTMLHeadingElement>(null!);
  const titleRef2 = useRef<HTMLHeadingElement>(null!);
  const titleRef3 = useRef<HTMLHeadingElement>(null!);
  const describeRef = useRef<HTMLParagraphElement>(null!);
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const orangeRef = useRef<SVGSVGElement>(null!);
  const blueRef = useRef<SVGSVGElement>(null!);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { duration: 0.6, ease: "power1.inOut" } })
        .paused(Number(selected) !== 0)
        .fromTo(
          orangeRef.current,
          { xPercent: -20, yPercent: -20, opacity: 0, autoAlpha: 0 },
          { xPercent: 0, yPercent: 0, opacity: 1, autoAlpha: 1 }
        )
        .fromTo(
          imageRef.current,
          { scale: 1.8, opacity: 0, autoAlpha: 0 },
          { scale: 1, opacity: 1, autoAlpha: 1 },
          "<0.1"
        )
        .fromTo(
          blueRef.current,
          { xPercent: 20, yPercent: 20 },
          { xPercent: 0, yPercent: 0 },
          "<0.2"
        )
        .fromTo(
          titleRef1.current,
          { yPercent: 20, opacity: 0, autoAlpha: 0 },
          { yPercent: 0, opacity: 1, autoAlpha: 1 },
          "<"
        )
        .fromTo(
          titleRef2.current,
          { yPercent: 30, opacity: 0, autoAlpha: 0 },
          { yPercent: 0, opacity: 1, autoAlpha: 1 },
          "<0.1"
        )
        .fromTo(
          titleRef3.current,
          { yPercent: 40, opacity: 0, autoAlpha: 0 },
          { yPercent: 0, opacity: 1, autoAlpha: 1 },
          "<0.1"
        )
        .fromTo(
          describeRef.current,
          { yPercent: 50, opacity: 0, autoAlpha: 0 },
          { yPercent: 0, opacity: 1, autoAlpha: 1 },
          "<0.1"
        )
        .fromTo(
          linkRef.current,
          { yPercent: 60, opacity: 0, autoAlpha: 0 },
          { yPercent: 0, opacity: 1, autoAlpha: 1 },
          "<0.1"
        );
    },
    { scope: slideRef, dependencies: [slide] }
  );

  return (
      <div ref={slideRef} className="static w-full h-full">
        <Image
          ref={imageRef}
          className="main-item absolute object-cover -right-[20%] -top-[3%]"
          src={SLIDER_PIC_1.src}
          priority
          width={SLIDER_PIC_1.width}
          height={SLIDER_PIC_1.height}
          alt="Slider picture 1"
        />
        <svg
          ref={blueRef}
          className="absolute z-10 mix-blend-hard-light top-1/4 -right-[20%]"
          width="1332"
          height="1386"
          viewBox="0 0 1332 1386"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1302.01 414.401L1159.57 128.112C1099.99 8.34829 970.267 -34.5383 870.263 32.4634L448.435 315.084C428.778 328.254 411.852 346.188 399.007 367.458L217.585 667.854L41.1386 960.013C39.0178 963.437 37.1122 966.718 35.1493 969.98C-8.86424 1047.28 -12.3693 1155.83 33.4995 1248.03C96.0537 1373.76 226.954 1422.38 325.523 1356.34L987.11 914.23L1228.67 752.957C1328.79 686.17 1361.53 534.146 1301.95 414.382L1302.01 414.401Z"
            fill="#0F38B4"
          />
        </svg>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-radial from-angel-blue from-40% via-angel-blue via-80% to-angel-blue to-100%"></div>
        <svg
          ref={orangeRef}
          className="absolute z-10 mix-blend-color -left-[14%] -top-1/4"
          width="1431"
          height="1116"
          viewBox="0 0 1431 1116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.80627 603.621L76.452 924.168C105.587 1058.26 220.282 1140.63 332.253 1107.87L801.704 970.51C825.555 963.532 847.748 950.705 866.341 933.155L1109.65 703.477L1348.14 478.343C1350.99 475.721 1353.6 473.169 1356.25 470.653C1416.78 410.244 1445.7 306.925 1423.27 203.698C1392.69 62.9204 1278.21 -25.3387 1167.84 6.95305L427.359 222.589L157.024 301.176C45.0013 333.697 -22.2782 469.564 6.8567 603.658L6.80627 603.621Z"
            fill="#FE5F00"
          />
        </svg>
        <div className="container absolute z-30 top-48 px-44 left-1/2 -translate-x-1/2">
          <div className="grid max-w-3xl gap-10 text-white">
            <h1
              ref={titleRef1}
              className="text-8xl font-light drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              Home for NextGen
            </h1>
            <h2
              ref={titleRef2}
              className="text-8xl font-semibold -mt-9 drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]"
            >
              iGaming Platform
            </h2>
            <h3 ref={titleRef3} className="text-4xl font-bold">
              Everything under one roof.
            </h3>
            <p ref={describeRef} className="text-lg max-w-xl">
              AngelsHub is a technology and service provider for online gaming
              industry. We offer white label, turnkey, SAAS solutions, crypto
              solutions and much much more!
            </p>
            <Link
              ref={linkRef}
              href="/"
              className="bg-angel-orange rounded-full max-w-fit px-11 py-4 text-white text-center"
            >
              <span className="">BOOK A MEETING</span>
            </Link>
          </div>
        </div>
      </div>
  );
}
