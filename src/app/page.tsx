"use client";
import AngelsHubFlatSVG from "@/components/Layout/ah-flat-svg";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import Slider from "@/components/Slider/slider";
import CircleBtn from "@/components/Solutions/ah-circle-btn";
import Team from "@/components/Team/ah-team";
import { PRODUCTS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../public/images/abstract-wave.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, Draggable, InertiaPlugin);
}

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const solutionsRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const platformRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const pickerRef = useRef<HTMLDivElement>(null!);
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null!);
  const angelshubRef = useRef<HTMLDivElement>(null!);
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef });

  const initSmoothScrolling = () => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });
    const bodyScrollBar = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1,
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

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: scrollContainerRef.current,
    });
  };

  const scroll = contextSafe(() => {
    /*===========================     SOLUTIONS SCROLL     =========================*/
    const solutions =
      solutionsRef.current.querySelectorAll<HTMLDivElement>(".solution");

    gsap.from(solutionsRef.current.querySelector(".text-white"), {
      xPercent: -7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: solutionsRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          solutionsRef.current.querySelector<HTMLHeadingElement>(".text-white")
            ?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(solutionsRef.current.querySelector(".text-spray"), {
      xPercent: -10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: solutionsRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          solutionsRef.current.querySelector<HTMLHeadingElement>(".text-spray")
            ?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    solutions.forEach((solution, pos, arr) => {
      gsap.from(arr[arr.length - 1 - pos], {
        ease: "sine.in",
        yPercent: 10,
        opacity: 0,
        delay: pos * 0.2,
        stagger: 0.4,
        scrollTrigger: {
          trigger: arr[arr.length - 1 - pos],
          start: "top bottom",
          scrub: pos * 0.8,
          end: () => arr[pos].offsetHeight,
          /* toggleActions: "play none none reset", */
        },
      });
    });
    /*============================     SOLUTIONS END     ===========================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PRODUCTS SCROLL     ==========================*/
    const hItems =
      productsRef.current.querySelector<HTMLDivElement>(".horizontal-items")!;

    function getHorizontalScrollAmount() {
      let hItemsWidth = hItems.scrollWidth;
      return -(hItemsWidth - window.innerWidth);
    }

    const mediaMatcher = gsap.matchMedia();
    mediaMatcher.add(
      {
        isDesktop: `(min-width: 1280px) and (prefers-reduced-motion: no-preference)`,
      },
      (context) => {
        const { isDesktop } = context.conditions!;
        if (isDesktop) {
          gsap.to(hItems, {
            x: getHorizontalScrollAmount,
            ease: "none",
            duration: 2,
            scrollTrigger: {
              trigger: ".horizontal-scroll",
              start: "top top",
              end: () => `+=${getHorizontalScrollAmount() * -1}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    );

    gsap.from(productsRef.current.querySelector(".text-angel-orange-500"), {
      xPercent: -5,
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
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(productsRef.current.querySelector(".text-spray"), {
      xPercent: -5,
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
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(productsRef.current.querySelector(".text-white"), {
      xPercent: -5,
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
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(hPinRef.current, {
      xPercent: -10,
      opacity: 0,
      duration: 1.6,
      ease: "sine.in",
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 2,
        end: () => hPinRef.current.offsetHeight,
        /* toggleActions: "play none none reset", */
      },
    });
    /*============================     PRODUCTS END     ============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PLATFORM SCROLL     ==========================*/
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
        scale: 0.9,
        x: -cellWidth,
      });

      const tl = gsap
        .timeline({ repeat: 1 })
        .to(element, { duration: 1, x: `+=${wrapWidth}` }, 0)
        .to(
          element,
          {
            duration: cellStep,
            scale: 1,
            repeat: 1,
            yoyo: true,
          },
          0.5 - cellStep
        );

      baseTl.add(tl, index * -cellStep);
    }

    gsap.from(platformRef.current.querySelector(".title"), {
      xPercent: -7,
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
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(platformRef.current.querySelector(".caption"), {
      xPercent: -10,
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
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(pickerRef.current, {
      xPercent: -10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.6,
        end: () => pickerRef.current.offsetHeight,
        /* toggleActions: "play none none reset", */
      },
    });

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
        /* toggleActions: "play none none reset", */
      },
    });
    /*============================     PLATFORM END     ============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*=============================     TEAM SCROLL     ============================*/
    gsap.set(angelshubRef.current.querySelector(".scale-pin"), {
      autoAlpha: 1,
      transformOrigin: "50% 50%",
    });
    gsap.set(angelshubRef.current.querySelector(".team"), {
      autoAlpha: 0,
      scale: 0.3,
      transformOrigin: "50% 50%",
    });
    const teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: angelshubRef.current.querySelector(".scale-pin"),
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        start: "top bottom",
        scrub: 1.2,
        end: () => "+=100%",
        /* toggleActions: "play none none reset", */
      },
    });
    teamTl
      .addLabel("teamscaling", 0)
      .to(
        angelshubRef.current.querySelector(".scale-pin"),
        {
          scale: 70,
          autoAlpha: 0,
          duration: 5,
          ease: "sine.in",
        },
        "teamscaling"
      )
      .to(angelshubRef.current.querySelector(".team"), {
        autoAlpha: 1,
        scale: 1,
        duration: 0.7,
        yPercent: 5,
        ease: "expoScale(10,2.5,none)",
      }, "teamscaling+=3");
    /*==============================     TEAM END     ==============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PROVIDERS SCROLL     =========================*/
    gsap.from(providersRef.current.querySelector(".title"), {
      xPercent: -7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: providersRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          providersRef.current.querySelector<HTMLHeadingElement>(".title")
            ?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(providersRef.current.querySelector(".caption"), {
      xPercent: -10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: providersRef.current,
        start: "top bottom",
        scrub: 1.6,
        end: () =>
          providersRef.current.querySelector<HTMLHeadingElement>(".caption")
            ?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });
    /*===========================     PROVIDERS END     ============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*============================     FOOTER SCROLL     ===========================*/
    const inputs = footerRef.current.querySelectorAll(".form-element");
    const wordLogo = footerRef.current.querySelector<SVGElement>(".word-logo");
    const footerTitle =
      footerRef.current.querySelector<HTMLHeadingElement>(".title");
    const footerCaption =
      footerRef.current.querySelector<HTMLHeadingElement>(".caption");
    const socialIcons =
      footerRef.current.querySelector<HTMLDivElement>(".social-icons");
    const footerMenuItems = footerRef.current.querySelectorAll(".footer-menu");
    const privacyPolicy =
      footerRef.current.querySelector<HTMLAnchorElement>(".privacy-policy");
    const websiteContent =
      footerRef.current.querySelector<HTMLAnchorElement>(".website-content");
    const copyright =
      footerRef.current.querySelector<HTMLAnchorElement>(".copyright");
    const amblem = footerRef.current.querySelector<SVGElement>(".amblem");

    gsap.from(wordLogo, {
      yPercent: 10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: wordLogo,
        start: "bottom bottom",
        scrub: 1.2,
        end: () => wordLogo?.clientWidth!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(footerTitle, {
      xPercent: -7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: footerTitle,
        start: "top bottom",
        scrub: 1.2,
        end: () => footerTitle?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(footerCaption, {
      xPercent: -10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: footerCaption,
        start: "top bottom",
        scrub: 1.6,
        end: () => footerCaption?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    inputs.forEach((input) => {
      gsap.from(input, {
        xPercent: -10,
        opacity: 0,
        duration: 0.7,
        ease: "sine.in",
        scrollTrigger: {
          trigger: input,
          start: "bottom bottom",
          end: () => "+=10%",
          scrub: 1.2,
          /* toggleActions: "play none none reset", */
        },
      });
    });

    gsap.from(socialIcons, {
      xPercent: -10,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: socialIcons,
        start: "bottom bottom",
        scrub: 1,
        end: () => socialIcons?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    footerMenuItems.forEach((menu) => {
      gsap.from(menu, {
        xPercent: -10,
        opacity: 0,
        duration: 0.7,
        ease: "sine.in",
        stagger: 0.1,
        scrollTrigger: {
          trigger: menu,
          start: "bottom bottom",
          end: () => "+=20%",
          scrub: 1.2,
          /* toggleActions: "play none none reset", */
        },
      });
    });

    gsap.from(privacyPolicy, {
      xPercent: -5,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: privacyPolicy,
        start: "bottom bottom",
        scrub: 1.2,
        end: () => privacyPolicy?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(websiteContent, {
      xPercent: -5,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: websiteContent,
        start: "bottom bottom",
        scrub: 1.2,
        end: () => websiteContent?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(copyright, {
      xPercent: -5,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: copyright,
        start: "bottom bottom",
        scrub: 1.2,
        end: () => copyright?.offsetHeight!,
        /* toggleActions: "play none none reset", */
      },
    });

    gsap.from(amblem, {
      yPercent: 20,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: amblem,
        start: "top bottom",
        scrub: 1.2,
        end: () => amblem?.clientHeight!,
        /* toggleActions: "play none none reset", */
      },
    });
    /*=============================     FOOTER END     =============================*/
  });

  useEffect(() => {
    initSmoothScrolling();
    scroll();

    return () => {
      context.kill();
      context.revert();
      ScrollTrigger.killAll();
    };
  }, [context, scroll]);

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-screen w-full overflow-x-hidden"
    >
      <div className="relative z-10 w-full">
        <Slider />
      </div>
      <div ref={solutionsRef} className="container grid gap-9">
        <div className="relative text-center text-3xl leading-tight xl:text-6xl">
          <h2 className="relative text-white">Complete Solutions for</h2>
          <h2 className="relative text-spray">Everything Gaming</h2>
        </div>
        <div className="grid grid-flow-row gap-0 mx-auto md:max-w-sm lg:max-w-max lg:gap-8 lg:grid-flow-col">
          <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
            <h3 className="text-2xl font-bold text-white">Website API</h3>
            <div className="relative w-full h-[460px] bg-angel-blue-950 rounded-xl lg:h-[360px]">
              <CircleBtn />
            </div>
            <p className="text-white">
              It was never easier to integrate sports and casino content into
              your website as like now.
            </p>
          </div>
          <div className="solution grid content-start border-y-0 border-white/20 gap-8 py-8 lg:border-y">
            <h3 className="text-2xl font-bold text-white">Turnkey System</h3>
            <div className="relative w-full h-[460px] bg-angel-blue-950 rounded-xl lg:h-[360px]">
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
            <div className="relative w-full h-[460px] bg-angel-blue-950 rounded-xl lg:h-[360px]">
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
        className="horizontal-scroll relative z-10 w-full mt-56 h-full overflow-x-hidden xl:h-[980px]"
      >
        <Image
          className="absolute top-20 z-0 mix-blend-lighten bg-angel-blue opacity-10 max-w-max lg:w-full lg:max-w-full"
          src={WAVE}
          alt="Products wave"
        />
        <div className="relative z-10 grid gap-5 w-full text-center">
          <h3 className="text-3xl text-angel-orange-500 font-medium">
            Products
          </h3>
          <h2 className="text-3xl text-spray mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
            Do you have a good idea but <br className="hidden md:block" />{" "}
            still not sure <span className="text-white">where to start?</span>
          </h2>
        </div>
        <div
          ref={hPinRef}
          className="horizontal-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center py-40 px-6 gap-20 -mt-20 xl:mt-0 xl:grid-flow-col"
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
        <AngelsHubSVG className="absolute z-0 w-full lg:-bottom-52 xl:-bottom-28 hidden md:block" />
        <AngelsHubSVG className="absolute z-0 w-auto scale-[0.45] -bottom-[7%] left-[90%] -translate-x-1/2 md:hidden" />
      </div>

      <div
        ref={platformRef}
        className="relative w-full my-56 pb-10 overflow-hidden"
      >
        <div className="relative z-10 grid gap-5 w-full text-center">
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
          className="relative z-10 min-w-full w-screen h-80 my-12 overflow-x-hidden"
        >
          {[
            "All-in-one Solution",
            "Constant Updates",
            "Integrated Anti-Fraud solution",
            "Customizable Software",
            "Extreme Security",
            "Customer-First Orientated",
          ].map((item, idx) => (
            <div
              key={`${idx}-${item}`}
              ref={(el: HTMLDivElement) => {
                if (el) {
                  cellsRef.current[idx] = el;
                }
              }}
              className="absolute w-full h-full p-6 rounded-[20px] top-0 left-0 overflow-hidden flex items-baseline justify-center origin-center"
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

      <div
        ref={angelshubRef}
        className="relative w-full flex min-h-dvh max-h-full justify-center items-center overflow-x-hidden"
      >
        <AngelsHubFlatSVG className="scale-pin relative w-full top-0" />
        <Team />
      </div>

      <div ref={providersRef} className="relative w-full">
        <AngelsHubSVG className="absolute z-0 w-full top-1/2 -translate-y-1/2 2xl:-translate-y-1/3" />
        <div className="relative container grid gap-16 mx-auto w-full mt-56">
          <div className="relative z-10 grid gap-5 text-center">
            <h2 className="text-3xl title text-white leading-tight xl:text-6xl">
              Gaming Providers
            </h2>
            <p className="text-white caption mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
              Lorem ipsum dolor sit amet consectetur. Sed sed varius ut sed
              sit sed commodo a ornare. Tellus viverra adipiscing volutpat
              habitasse quam fringilla tortor diam.
            </p>
          </div>
        </div>
        <Providers />
      </div>
      <Footer ref={footerRef} />
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
