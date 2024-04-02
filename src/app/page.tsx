"use client";
import Platform from "@/components/Platform/ah-platform";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import Slider from "@/components/Slider/slider";
import CircleBtn from "@/components/Solutions/ah-circle-btn";
import Team from "@/components/Team/ah-team";
import { PRODUCTS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../public/images/abstract-wave.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const solutionsRef = useRef<NodeListOf<HTMLDivElement>>(null!);
  const solutionsTitleRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef });

  const initSmoothScrolling = () => {
    const bodyScrollBar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    ScrollTrigger.defaults({ scroller: scrollContainerRef.current });
  };

  const scroll = contextSafe(() => {
    gsap.from(solutionsTitleRef.current.querySelector(".text-white"), {
      xPercent: 7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in" /* back.inOut(1.6) */,
      scrollTrigger: {
        trigger: solutionsTitleRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          solutionsTitleRef.current.querySelector<HTMLHeadingElement>(
            ".text-white"
          )?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(solutionsTitleRef.current.querySelector(".text-spray"), {
      xPercent: 10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in" /* back.inOut(0.8) */,
      scrollTrigger: {
        trigger: solutionsTitleRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          solutionsTitleRef.current.querySelector<HTMLHeadingElement>(
            ".text-spray"
          )?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    solutionsRef.current.forEach((_, pos, arr) => {
      gsap.from(arr[arr.length - 1 - pos], {
        ease: "sine.in",
        yPercent: 10,
        opacity: 0,
        delay: pos * 0.2,
        stagger: 0.4,
        scrollTrigger: {
          trigger: scrollContainerRef.current.querySelector(".solutions"),
          start: "top bottom",
          scrub: pos * 0.8,
          end: () => arr[pos].offsetHeight,
          toggleActions: "play none none reset",
        },
      });
    });

    const sections = gsap.utils.toArray<HTMLDivElement>(".horizontal-item");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: `+=${hPinRef.current.scrollWidth}`,
      },
    });

    gsap.from(productsRef.current.querySelector(".text-angel-orange-500"), {
      xPercent: 5,
      opacity: 0,
      duration: 0.6,
      ease: "sine.in" /* back.inOut(1.6) */,
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          productsRef.current.querySelector<HTMLHeadingElement>(
            ".text-angel-orange-500"
          )?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(productsRef.current.querySelector(".text-spray"), {
      xPercent: 5,
      opacity: 0,
      duration: 0.6,
      ease: "sine.in" /* back.inOut(1.6) */,
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 1.4,
        end: () =>
          productsRef.current.querySelector<HTMLHeadingElement>(".text-spray")
            ?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(productsRef.current.querySelector(".text-white"), {
      xPercent: 5,
      opacity: 0,
      duration: 0.6,
      ease: "sine.in" /* back.inOut(1.6) */,
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 1.8,
        end: () =>
          productsRef.current.querySelector<HTMLHeadingElement>(".text-white")
            ?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(hPinRef.current, {
      xPercent: 10,
      opacity: 0,
      duration: 1.6,
      ease: "sine.in" /* back.inOut(1.6) */,
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 2,
        end: () => hPinRef.current.offsetHeight,
        toggleActions: "play none none reset",
      },
    });
  });

  useEffect(() => {
    ScrollTrigger.defaults({ toggleActions: "restart pause resume pause" });
    solutionsRef.current =
      scrollContainerRef.current.querySelectorAll(".solution");
    initSmoothScrolling();
    scroll();

    return () => {
      context.kill();
      context.revert();
    };
  }, [context, scroll]);

  return (
    <div ref={scrollContainerRef} className="h-screen w-full overflow-hidden">
      <div className="relative z-10 w-full">
        <Slider />
      </div>
      <div className="scoller">
        <div className="container grid gap-9">
          <div
            ref={solutionsTitleRef}
            className="relative text-center text-6xl leading-tight"
          >
            <h2 className="relative text-white">Complete Solutions for</h2>
            <h2 className="relative text-spray">Everything Gaming</h2>
          </div>
          <div className="solutions grid grid-flow-col gap-8">
            <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
              <h3 className="text-2xl font-bold text-white">Website API</h3>
              <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
                <CircleBtn />
              </div>
              <p className="text-white">
                It was never easier to integrate sports and casino content into
                your website as like now.
              </p>
            </div>
            <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
              <h3 className="text-2xl font-bold text-white">Turnkey System</h3>
              <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
                <CircleBtn />
              </div>
              <p className="text-white">
                Our Turnkey Solution comes with support to help you operate
                under own license. You can benefit from the whole spectrum of
                our betting and gaming products.
              </p>
            </div>
            <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
              <h3 className="text-2xl font-bold text-white">White Label</h3>
              <div className="relative w-full h-[464px] bg-angel-blue-950 rounded-xl">
                <CircleBtn />
              </div>
              <p className="text-white">
                AngelsHub White Label solution comes under Curacao license. It
                is integrated with multiple payment systems and comes with 24/7
                support and risk management.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={productsRef}
          className="horizontal-scroll relative z-10 w-full h-[1050px] mt-28 overflow-x-hidden"
        >
          <div className="relative z-10 grid gap-5 text-center">
            <h3 className="text-3xl text-angel-orange-500 font-medium">
              Products
            </h3>
            <h2 className="text-6xl text-spray leading-tight">
              Do you have a good idea but <br /> still not sure{" "}
              <span className="text-white">where to start?</span>
            </h2>
          </div>
          <div
            ref={hPinRef}
            className="relative z-10 w-full flex justify-start items-start py-24 px-6 gap-16 overflow-x-hidden overscroll-none"
          >
            {PRODUCTS.map((product) => (
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                key={product.title}
              />
            ))}
          </div>
          <div className="absolute z-0 w-full -top-4 overflow-hidden">
            <Image
              className="relative z-10 mix-blend-lighten bg-angel-blue opacity-10"
              src={WAVE}
              alt="Products wave"
            />
            <AngelsHubSVG />
          </div>
        </div>

        <Platform />
        <Team />
      </div>

      <button className="fixed z-20 flex space-x-2 items-center bottom-4 right-24">
        <span className="text-white text-lg">Scroll</span>
        <svg
          className="motion-safe:animate-bounce"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M6.05519 13.7163C6.17649 13.7157 6.29643 13.6906 6.40778 13.6425C6.51914 13.5943 6.61962 13.5242 6.70319 13.4363L11.8362 8.30127C12.0312 8.09927 12.1172 7.88927 12.1172 7.66927C12.1172 7.16927 11.7662 6.81027 11.2892 6.81027C11.0392 6.81027 10.8292 6.91227 10.6722 7.06827L8.89119 8.82627L6.82119 11.0913L6.93019 9.27927L6.93019 1.80927C6.93019 1.28627 6.57019 0.926269 6.05519 0.926269C5.54719 0.926269 5.18819 1.28627 5.18819 1.80927L5.18819 9.27827L5.29719 11.0903L3.22719 8.82527L1.44519 7.06727C1.36478 6.98524 1.26876 6.92015 1.16279 6.87583C1.05682 6.83152 0.943049 6.80889 0.828188 6.80927C0.352188 6.80927 0.000187601 7.16927 0.000187579 7.66927C0.00375908 7.90202 0.099405 8.12388 0.266187 8.28627L5.41419 13.4343C5.49659 13.5216 5.59571 13.5915 5.70566 13.6398C5.8156 13.688 5.93412 13.7137 6.05419 13.7153L6.05519 13.7163Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
