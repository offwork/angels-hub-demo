"use client";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import Slider from "@/components/Slider/slider";
import CircleBtn from "@/components/Solutions/ah-circle-btn";
import Team from "@/components/Team/ah-team";
import { PRODUCTS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-trial/InertiaPlugin";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../public/images/abstract-wave.png";
import Footer from "@/components/Layout/ah-footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, InertiaPlugin);
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const solutionsRef = useRef<NodeListOf<HTMLDivElement>>(null!);
  const solutionsTitleRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const platformRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const pickerRef = useRef<HTMLDivElement>(null!);
  const cellsRef = useRef<HTMLDivElement[]>([]);
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
      ease: "sine.in",
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
      ease: "sine.in",
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
        end: `+=${hPinRef.current.scrollWidth / 2}`,
      },
    });

    gsap.from(productsRef.current.querySelector(".text-angel-orange-500"), {
      xPercent: 5,
      opacity: 0,
      duration: 0.8,
      ease: "sine.in",
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
      ease: "sine.in",
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
      ease: "sine.in",
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
      ease: "sine.in",
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 2,
        end: () => hPinRef.current.offsetHeight,
        toggleActions: "play none none reset",
      },
    });

    gsap.defaults({ ease: "none" });
    const picker = pickerRef.current;
    const cells = cellsRef.current;
    const proxy = document.createElement("div");
    const myWrapper = gsap.utils.wrap(0, 1);
    const cellWidth = 360;
    const numCells = cells.length;
    const cellStep = 1 / numCells;
    const wrapWidth = cellWidth * numCells;
    const baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      width: wrapWidth - cellWidth,
    });

    cells.forEach((cell, i) => {
      initCell(cell, i);
    });

    const animation = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2));

    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: picker,
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
      onThrowComplete: () => {
        console.log("onThrowComplete");
        // TODO: animation that injects selected card title
      },
    })[0];

    function snapX(x: number) {
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      animation.progress(myWrapper(draggable.x / wrapWidth));
    }

    function initCell(element: HTMLDivElement, index: number) {
      gsap.set(element, {
        width: cellWidth,
        scale: 0.8,
        x: -cellWidth,
      });

      const tl = gsap
        .timeline({ repeat: 1 })
        .to(element, { duration: 1, x: `+=${wrapWidth}` }, 0)
        .to(
          element,
          {
            duration: cellStep,
            color: "#009688",
            scale: 1,
            repeat: 1,
            yoyo: true,
          },
          0.5 - cellStep
        );

      baseTl.add(tl, index * -cellStep);
    }

    gsap.from(platformRef.current.querySelector(".title"), {
      xPercent: 7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          platformRef.current.querySelector<HTMLHeadingElement>(".title")
            ?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(platformRef.current.querySelector(".caption"), {
      xPercent: 10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.6,
        end: () =>
          platformRef.current.querySelector<HTMLHeadingElement>(".caption")
            ?.offsetHeight!,
        toggleActions: "play none none reset",
      },
    });

    gsap.from(pickerRef.current, {
      xPercent: 10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.6,
        end: () => pickerRef.current.offsetHeight,
        toggleActions: "play none none reset",
      },
    });
    //bg-angel-blue
    gsap.from(platformRef.current.querySelector(".bg-angel-blue"), {
      xPercent: -20,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () => "+=80%",
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
      ScrollTrigger.killAll();
    };
  }, [context, scroll]);

  return (
    <div ref={scrollContainerRef} className="h-screen w-full overflow-hidden">
      <div className="relative z-10 w-full h-[1123px]">
        {/* <Slider /> */}
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
              <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl">
                <CircleBtn />
              </div>
              <p className="text-white">
                It was never easier to integrate sports and casino content into
                your website as like now.
              </p>
            </div>
            <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
              <h3 className="text-2xl font-bold text-white">Turnkey System</h3>
              <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl">
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
              <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl">
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
          className="horizontal-scroll relative z-10 w-full h-[980px] mt-48 overflow-hidden"
        >
          <Image
            className="absolute top-20 z-0 w-full mix-blend-lighten bg-angel-blue opacity-10"
            src={WAVE}
            alt="Products wave"
          />
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
            className="relative z-10 snap-x snap-mandatory w-full grid grid-flow-col py-24 px-6 gap-16 overflow-x-hidden overscroll-none"
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
          <AngelsHubSVG className="absolute z-0 -bottom-28 w-full" />
        </div>

        <div
          ref={platformRef}
          className="relative w-full mt-48 overflow-hidden pb-10"
        >
          <div className="relative z-10 grid gap-5 text-center">
            <h2 className="title text-3xl text-white leading-tight xl:text-6xl">
              Why AngelsHub Platform
            </h2>
            <p className="caption text-white mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
              The complete betting offer from Angelshub provides your business
              with the tools to compete against the very best in the industry
              and come out ahead.
            </p>
          </div>

          <div
            ref={pickerRef}
            className="relative z-10 w-screen h-80 overflow-hidden my-12"
          >
            {[
              "All-in-one Solution",
              "Constant Updates",
              "Customizable Software",
              "Integrated Anti-Fraud solution",
              "Extreme Security",
              "Customer-First Orientated",
            ].map((item, idx) => (
              <div
                key={item}
                ref={(el: HTMLDivElement) => {
                  if (el) {
                    cellsRef.current[idx] = el;
                  }
                }}
                className="absolute w-full h-full grid grid-flow-col gap-6 overflow-hidden p-6 rounded-[20px]"
              >
                <h3 className="relative z-10 text-4xl text-white font-medium max-w-64">
                  {item}
                </h3>
                <div className="absolute top-0 left-0 z-0 w-full h-full bg-[#0164B7] mix-blend-luminosity"></div>
              </div>
            ))}
          </div>
          <div className="container w-full flex justify-center lg:justify-end">
            <a
              href="#"
              className="relative bg-angel-blue rounded-full border border-white px-10 py-7 drop-shadow-xl lg:px-20"
            >
              <span className="text-sm text-white uppercase">
                Get good service from experts
              </span>
            </a>
          </div>
        </div>

        <Team />
      </div>
      <Footer />
      <button className="fixed z-20 hidden space-x-2 items-center bottom-4 right-24 xl:flex">
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
