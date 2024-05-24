"use client";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import BrandLogo from "@/components/ah-brand-logo";
import StickyLogo from "@/components/ah-sticky-logo";
import ButtonFill from "@/components/ui/ah-button-fill";
import { PRODUCTS } from "@/constant";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../../public/images/abstract-wave.png";
import ONLINECASINO_AGGREGATOR from "../../../public/images/online-casino-aggregator.png";
import ONLINECASINO_CHIP from "../../../public/images/online-casino-chip.png";
import ONLINECASINO_GAMIFICATION_1 from "../../../public/images/online-casino-gamification-1.png";
import ONLINECASINO_GAMIFICATION_2 from "../../../public/images/online-casino-gamification-2.png";
import ONLINECASINO_GAMIFICATION_3 from "../../../public/images/online-casino-gamification-3.png";
import ONLINECASINO_MAIN from "../../../public/images/online-casino-main.png";
import ONLINECASINO_CASHBACK from "../../../public/images/supportsbook-cashback.png";
import ONLINECASINO_DEPOSIT from "../../../public/images/supportsbook-deposit.png";
import ONLINECASINO_FREEBET from "../../../public/images/supportsbook-freebet.png";
import ONLINECASINO_FREESPIN from "../../../public/images/supportsbook-freespin.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Sportsbook() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const stickyLogoRef = useRef<HTMLDivElement>(null!);
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef.current });

  const initSmoothScrolling = () => {
    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    bodyScrollBar.current = Scrollbar.init(scrollContainerRef.current, {
      damping: 0.1,
      alwaysShowTracks: true,
    });

    bodyScrollBar.current.setPosition(0, 0);
    bodyScrollBar.current.track.xAxis.element.remove();
    bodyScrollBar.current.addListener(ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
      scrollTop(value) {
        if (arguments.length && value) {
          bodyScrollBar.current.scrollTop = value;
        }
        return bodyScrollBar.current.scrollTop;
      },
    });

    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
      scroller: scrollContainerRef.current,
    });
  };

  const scroll = contextSafe(() => {
    /*==========================     STICKY LOGO SCROLL     ========================*/
    gsap.set(stickyLogoRef.current, { opacity: 0, xPercent: -100 });
    const stickyEnd = gsap
      .timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "center",
          toggleActions: "play none none reverse",
          preventOverlaps: true,
        },
      })
      .to(stickyLogoRef.current, { xPercent: -100, opacity: 0 });
    const stickyStart = gsap
      .timeline({
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
          preventOverlaps: true,
        },
      })
      .to(stickyLogoRef.current, { xPercent: 0, opacity: 1 });
    /*===========================     STICKY LOGO END     ==========================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PRODUCTS SCROLL     ==========================*/
    const hItems = productsRef.current.querySelector<HTMLDivElement>(".horizontal-items")!;

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
    /*============================     PRODUCTS END     ============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*============================     FOOTER SCROLL     ===========================*/
    const inputs = footerRef.current.querySelectorAll(".form-element");
    const wordLogo = footerRef.current.querySelector<SVGElement>(".word-logo");
    const footerTitle = footerRef.current.querySelector<HTMLHeadingElement>(".title");
    const footerCaption = footerRef.current.querySelector<HTMLHeadingElement>(".caption");
    const socialIcons = footerRef.current.querySelector<HTMLDivElement>(".social-icons");
    const footerMenuItems = footerRef.current.querySelectorAll(".footer-menu");
    const privacyPolicy = footerRef.current.querySelector<HTMLAnchorElement>(".privacy-policy");
    const websiteContent = footerRef.current.querySelector<HTMLAnchorElement>(".website-content");
    const copyright = footerRef.current.querySelector<HTMLAnchorElement>(".copyright");
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
        end: () => footerRef.current.offsetHeight,
      },
    });
    /*=============================     FOOTER END     =============================*/
  });

  useIsomorphicLayoutEffect(() => {
    initSmoothScrolling();
    scroll();

    return () => {
      context.kill();
      context.revert();
      ScrollTrigger.killAll();
    };
  }, [context, scroll]);

  return (
    <>
      <div
        ref={stickyLogoRef}
        className="absolute z-40 opacity-0 top-5 rounded-r-lg overflow-hidden"
      >
        <Link href="/" legacyBehavior passHref>
          <StickyLogo href="/" />
        </Link>
      </div>
      <div
        ref={scrollContainerRef}
        className="relative h-screen w-full overscroll-none overflow-hidden"
      >
        <Link className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30" href="/" passHref legacyBehavior>
          <BrandLogo href="/" />
        </Link>
        <div className="relative flex px-5 w-full h-[1000px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
          <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-32 block mx-auto w-full">
            <div className="flex justify-center items-center">
              <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Online Casino</h1>
            </div>
          </div>
          <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[670px] lg:w-[958px] lg:h-[597px] rounded-3xl bg-gradient-to-tr from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full h-full rounded-3xl">
              <div className="relative z-10 text-center grid place-content-end gap-9 place-items-center mb-14">
                <h2 className="text-2xl px-8 lg:text-4xl font-bold text-white lg:px-32">
                  Online Casino Aggregator is a complete one-stop solution for starting your online
                  and mobile casino business.
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:px-36">
                  The aggregator offers a full suite of tools and features for successfully
                  operating and maintaining an online casino website.
                </p>
                <ButtonFill bg="bg-angel-orange" size="medium" href="/contact" label={"BOOK A MEETING"} />
              </div>
              <div className="absolute z-0 min-w-full h-full p-0.5">
                <svg
                  className="absolute w-16 h-auto md:w-20 lg:w-28 z-10 left-1/2 -translate-x-[64%] -translate-y-[14%]"
                  width="100%"
                  height="100%"
                  viewBox="0 0 370 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                    fill="#FF5F00"
                  />
                </svg>
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/4 md:w-1/2 h-auto"
                  src={ONLINECASINO_AGGREGATOR}
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute z-10 w-[90%] h-1/2 left-1/2 -translate-x-1/2 md:h-3/4 lg:top-10 xl:top-14 bg-gradient-to-t from-black via-black via-35%"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-40 lg:top-14 xl:top-28 left-0 w-full h-auto">
            <Image
              className="relative z-0 w-full scale-150 lg:scale-100 xl:w-[87%] mx-auto object-cover mix-blend-luminosity"
              src={ONLINECASINO_MAIN}
              alt="AngelsHub sportsbook"
            />
          </div>
          <div className="absolute left-0 z-10 w-full h-auto bottom-0 overflow-hidden lg:bottom-16 xl:bottom-96 2xl:bottom-80 3xl:bottom-72 5xl:bottom-60 6xl:bottom-44">
            <Image
              className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
              src={WAVE}
              priority
              alt="Products wave"
            />
          </div>
        </div>
        <div
          ref={featuresRef}
          className="relative w-full text-center container pb-28 pt-36 lg:pt-20 lg:text-left xl:pt-0"
        >
          <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
          <div className="hidden lg:grid gap-7">
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">10,000+ Casino Games</h3>
                  <p className="text-xs text-white/75">
                    Access an extensive library of over 10,000 captivating casino games to suit
                    every player&apos;s preference.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Classic and video slots, live tables, video poker, megaways and jackpots
                  </h3>
                  <p className="text-xs text-white/75">
                    Enjoy a diverse array of gaming options including classic and video slots, live
                    tables, video poker, megaways, and enticing jackpot opportunities.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Certified RNG systems
                  </h3>
                  <p className="text-xs text-white/75">
                    Rest assured with certified Random Number Generator systems ensuring fair and
                    unpredictable outcomes for all games.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Ready-to-use online casino solution for short implementation time
                  </h3>
                  <p className="text-xs text-white/75">
                    Implement a turnkey online casino solution swiftly, streamlining the launch
                    process for rapid market entry.
                  </p>
                </div>
              </div>
              <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Multi-channel, multi-currency and multi-lingual
                  </h3>
                  <p className="text-xs text-white/75">
                    Reach a global audience with multi-channel accessibility, multi-currency
                    support, and multi-lingual interfaces for enhanced inclusivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-lg">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Comprehensive risk management
                  </h3>
                  <p className="text-xs text-white/75">
                    Safeguard operations with robust risk management strategies ensuring a secure
                    and stable gaming environment for players and operators alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
            <li className="text-xl py-8">10,000+ Casino Games</li>
            <li className="text-xl py-8">
              Classic and video slots, live tables, video poker, megaways and jackpots
            </li>
            <li className="text-xl py-8">Certified RNG systems</li>
            <li className="text-xl py-8">
              Ready-to-use online casino solution for short implementation time
            </li>
            <li className="text-xl py-8">Multi-channel, multi-currency and multi-lingual</li>
            <li className="text-xl py-8">Comprehensive risk management</li>
            <li className="text-xl py-8">
              Fully customizable product to fit customer&apos;s requirements
            </li>
          </ul>
        </div>
        <div className="relative container mx-auto w-full py-28 overflow-x-hidden">
          <div className="relative z-0 block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
            <div className="relative grid gap-12 lg:gap-32 justify-items-center pt-9 pb-28 lg:pt-20 lg:pb-32 xl:pt-24 xl:pb-48 bg-black w-full h-full rounded-3xl overflow-hidden">
              <h2 className="text-3xl px-4 lg:text-4xl font-bold text-white">
                Casino Gamification
              </h2>
              <div className="relative mx-auto z-10 md:w-[90%] lg:w-[80%] grid gap-16 md:gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:gap-10">
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/4 h-auto"
                      src={ONLINECASINO_DEPOSIT}
                      alt="AngelsHub sportsbook deposit"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                      Tournaments
                    </h3>
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">
                      In house, with real time rankings updated at the Tournament page
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-3/4 h-auto"
                      src={ONLINECASINO_FREESPIN}
                      alt="AngelsHub sportsbook freespin"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                      Bonus Management System
                    </h3>
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">
                      Activate free spins, as well as configure deposit and manual bonuses directly
                      from backoffice
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-3/4 h-auto"
                      src={ONLINECASINO_FREEBET}
                      alt="AngelsHub sportsbook freebet"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                      Loyalty Program
                    </h3>
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">
                      Exchange loyalty points for bonuses and bonus spins
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/3 h-auto"
                      src={ONLINECASINO_CASHBACK}
                      alt="AngelsHub sportsbook cashback"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                      Single Integration
                    </h3>
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">
                      Single Integration
                    </p>
                  </div>
                </div>
              </div>
              <Image
                className="absolute opacity-30 z-0 left-1/2 -translate-x-1/2 w-3/4 -bottom-[10%] md:-bottom-1/4 lg:-bottom-[40%] xl:-bottom-1/2"
                src={ONLINECASINO_CHIP}
                alt="AngelsHub sportsbook big ball"
              />
            </div>
            <div className="hidden xl:block absolute z-10 left-0 top-0 w-full h-full">
              <Image
                className="relative w-1/5 h-auto -right-full -translate-x-1/2 "
                src={ONLINECASINO_GAMIFICATION_2}
                alt="AngelsHub online casino gamification 2"
              />
              <Image
                className="relative w-1/4 h-auto inline-block -bottom-[15%] -translate-x-1/2"
                src={ONLINECASINO_GAMIFICATION_1}
                alt="AngelsHub online casino gamification 1"
              />
              <Image
                className="relative filter-none w-1/3 h-auto inline-block -bottom-[15%] -right-3/4 -translate-x-1/2"
                src={ONLINECASINO_GAMIFICATION_3}
                alt="AngelsHub online casino gamification 3"
              />
            </div>
          </div>
        </div>
        <div
          ref={productsRef}
          className="horizontal-scroll relative z-10 w-full py-28 h-full xl:h-[1070px]"
        >
          <div className="relative z-10 grid gap-5 w-full text-center">
            <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
            <h2 className="text-3xl text-spray mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
              Do you have a good idea but <br className="hidden md:block" /> still not sure{" "}
              <span className="text-white">where to start?</span>
            </h2>
          </div>
          <div className="relative w-full overflow-hidden xl:absolute xl:top-56 xl:pt-32 xl:h-full 5xl:pt-40">
            <div className="hidden xl:block absolute z-0 w-[150%] -rotate-[9deg] left-1/2 -translate-x-1/2 h-[600px] bg-angel-orange rounded-tr-full rounded-bl-full 6xl:w-full"></div>
            <div
              ref={hPinRef}
              className="horizontal-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center py-24 px-6 gap-20 xl:py-40 xl:mt-0 xl:grid-flow-col"
            >
              {PRODUCTS.map((product) => (
                <ProductCard
                  title={product.title}
                  href={product.href}
                  description={product.description}
                  image={product.image}
                  key={product.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div ref={providersRef} className="relative w-full py-28">
          <AngelsHubSVG className="absolute z-0 w-full top-1/2 -translate-y-1/2 2xl:-translate-y-1/3" />
          <div className="relative container grid gap-16 mx-auto w-full">
            <div className="relative z-10 grid gap-5 text-center">
              <h2 className="text-3xl title text-white leading-tight xl:text-6xl">
                Gaming Providers
              </h2>
              <p className="text-white caption mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Sed sed varius ut sed sit sed commodo a
                ornare. Tellus viverra adipiscing volutpat habitasse quam fringilla tortor diam.
              </p>
            </div>
          </div>
          <Providers />
        </div>
        <Footer ref={footerRef} />
      </div>
    </>
  );
}
