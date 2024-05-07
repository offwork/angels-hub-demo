"use client";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import { PRODUCTS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import SUPPORTSBOOK_MAIN from "../../../public/images/supportsbook-main.png";
import SUPPORTSBOOK_BALL from "../../../public/images/supports-black-ball.png";
import SUPPORTSBOOK_BIG_BALL from "../../../public/images/supports-big-black-ball.png";
import SUPPORTSBOOK_PLAYERS from "../../../public/images/supportsbook-players.png";
import SUPPORTSBOOK_DEPOSIT from "../../../public/images/supportsbook-deposit.png";
import SUPPORTSBOOK_FREESPIN from "../../../public/images/supportsbook-freespin.png";
import SUPPORTSBOOK_FREEBET from "../../../public/images/supportsbook-freebet.png";
import SUPPORTSBOOK_CASHBACK from "../../../public/images/supportsbook-cashback.png";
import BrandLogo from "@/components/ah-brand-logo";
import { useIsomorphicLayoutEffect } from "@/utils";
import WAVE from "../../../public/images/abstract-wave.png";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, InertiaPlugin);
}

export default function Supportsbook() {
  const footerRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef });

  const initSmoothScrolling = () => {
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

    /* gsap.from(productsRef.current.querySelector(".text-angel-orange-500"), {
      xPercent: -5,
      opacity: 0,
      duration: 0.8,
      ease: "sine.in",
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () =>
          productsRef.current.querySelector<HTMLHeadingElement>(".text-angel-orange-500")
            ?.offsetHeight!,
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
          productsRef.current.querySelector<HTMLHeadingElement>(".text-spray")?.offsetHeight!,
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
          productsRef.current.querySelector<HTMLHeadingElement>(".text-white")?.offsetHeight!,
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
      },
    }); */
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
    <div ref={scrollContainerRef} className="relative h-screen w-full overflow-x-hidden">
      <BrandLogo />
      <div className="relative flex px-5 w-full h-[1000px] md:[960px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
        <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-40 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
            <h1 className="text-white font-bold text-4xl xl:text-7xl">Supportsbook</h1>
          </div>
        </div>
        <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[670px] lg:w-[958px] lg:h-[597px] rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl">
            <div className="relative z-10 text-center grid place-content-end gap-9 place-items-center mb-14">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                Build your sports betting platform with AngelsHub.
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                Due to the years of experience our team has in developing sportsbook software, we
                can provide our clients with a complete sports betting solution and much more!
              </p>
              <Link
                href="/"
                className="bg-angel-orange rounded-full max-w-fit px-11 py-4 text-white text-center"
              >
                <span className="">BOOK A MEETING</span>
              </Link>
            </div>
            <div className="absolute z-0 min-w-full h-full p-0.5">
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-3/4 md:w-1/2 h-auto lg:w-[326px] lg:h-[305px]"
                src={SUPPORTSBOOK_BALL}
                alt="AngelsHub suportsbook ball"
              />
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-[90%] h-auto lg:w-[428px] lg:h-[534px]"
                src={SUPPORTSBOOK_PLAYERS}
                alt="AngelsHub suportsbook players"
              />
              <div className="absolute z-10 w-[90%] h-3/4 left-1/2 -translate-x-1/2 translate-y-1/4 bg-gradient-to-t from-black via-black via-35%"></div>
            </div>
          </div>
        </div>
        <div className="absolute flex w-full top-0 left-0 h-1/2 md:h-full md:-top-44 lg:-top-64 xl:top-0">
          <Image
            className="relative z-0 object-cover mix-blend-luminosity flex-grow"
            src={SUPPORTSBOOK_MAIN}
            alt="AngelsHub suportsbook"
          />
          <div className="absolute z-10 left-0 w-full h-1/2 bottom-0 lg:h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-20% 3xl:h-1/2"></div>
        </div>
        <Image
          className="absolute w-full z-10 scale-125 mix-blend-lighten opacity-20 left-1/2 -translate-x-1/2 bottom-0 lg:bottom-10 xl:bottom-52"
          src={WAVE}
          alt="Products wave"
        />
      </div>
      <div className="relative w-full container md:text-center lg:text-left">
        <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
        <div className="hidden lg:grid gap-7">
          <div className="flex flex-row space-x-7">
            <div className="flex-grow rounded-xl h-44 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-52">
                <h3 className="text-xl text-white min-h-16">Multi-currency and single wallet</h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
            <div className="flex-grow rounded-xl h-44 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-52">
                <h3 className="text-xl text-white min-h-16">Risk management tools</h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
            <div className="flex-grow rounded-xl h-44 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-52">
                <h3 className="text-xl text-white min-h-16">Mobile, web</h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-row space-x-7">
            <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-xl text-white min-h-[84px]">Customisable views</h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
            <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-xl text-white min-h-[84px]">Cash-out</h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-row space-x-7">
            <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-xl text-white min-h-[84px]">
                  Advanced Tagging system for personalized bonuses, content and much more
                </h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
            <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-xl text-white min-h-[84px]">
                  Multiple feeds and ability to run more than one Sportsbook simultaneously
                </h3>
                <p className="text-sm text-white/75">
                  Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
          <li className="text-xl py-8">Multi-currency and single wallet</li>
          <li className="text-xl py-8">Risk management tools</li>
          <li className="text-xl py-8">Mobile, web</li>
          <li className="text-xl py-8">Customisable views</li>
          <li className="text-xl py-8">Cash-out</li>
          <li className="text-xl py-8">
            Advanced Tagging system for personalized bonuses, content and much more
          </li>
          <li className="text-xl py-8">
            Multiple feeds and ability to run more than one Sportsbook simultaneously
          </li>
        </ul>
      </div>
      <div className="relative container mx-auto w-full mt-56">
        <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="relative grid gap-12 lg:gap-32 justify-items-center pt-9 pb-28 xl:pt-24 xl:pb-48 bg-black w-full h-full rounded-3xl overflow-hidden">
            <div className="relative z-10 text-center grid place-content-start gap-9 place-items-center mb-14">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white">
                Sportsbook Gamification
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:max-w-3xl">
                Advanced bonus engine to setup Sportsbook tournament & 4 types of automated bonuses
                to target a specific audience effortlessly based on an abundance of filters & KPIs
                through our sophisticated tagging system with the ability to enable cross product
                bonus wagering as well as specific game setting for wager goals
              </p>
            </div>
            <div className="relative mx-auto z-10 grid gap-16 md:gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:max-w-4xl xl:min-w-5xl">
              <div className="flex flex-row items-center space-x-2">
                <div className="relative bg-gray-800/60 w-32 h-28 rounded-xl">
                  <Image className="absolute inset-0 m-auto w-2/4 h-auto" src={SUPPORTSBOOK_DEPOSIT} alt="AngelsHub suportsbook deposit" />
                </div>
                <p className="max-w-44 text-base md:text-lg text-white xl:max-w-60">Deposit Bonus (Strict & Regular) on both Sports & Casino</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="relative bg-gray-800/60 w-32 h-28 rounded-xl">
                  <Image className="absolute inset-0 m-auto w-3/4 h-auto" src={SUPPORTSBOOK_FREESPIN} alt="AngelsHub suportsbook freespin" />
                </div>
                <p className="max-w-44 text-base md:text-lg text-white xl:max-w-60">Freespin</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="relative bg-gray-800/60 w-32 h-28 rounded-xl">
                  <Image className="absolute inset-0 m-auto w-3/4 h-auto" src={SUPPORTSBOOK_FREEBET} alt="AngelsHub suportsbook freebet" />
                </div>
                <p className="max-w-44 text-base md:text-lg text-white xl:max-w-60">Freebet</p>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="relative bg-gray-800/60 w-32 h-28 rounded-xl">
                  <Image className="absolute inset-0 m-auto w-2/3 h-auto" src={SUPPORTSBOOK_CASHBACK} alt="AngelsHub suportsbook cashback" />
                </div>
                <p className="max-w-44 text-base md:text-lg text-white xl:max-w-60">Cashback</p>
              </div>
            </div>
            <Image
              className="absolute opacity-40 z-0 left-1/2 -translate-x-1/2 w-3/4 -bottom-[10%] md:-bottom-1/4 xl:-bottom-[40%]"
              src={SUPPORTSBOOK_BIG_BALL}
              alt="AngelsHub suportsbook big ball"
            />
          </div>
        </div>
      </div>
      <div
        ref={productsRef}
        className="horizontal-scroll relative z-10 w-full mt-56 h-full overflow-x-hidden xl:h-[980px]"
      >
        <div className="hidden xl:block absolute z-0 w-[150%] -rotate-[9deg] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[480px] bg-angel-orange rounded-tr-full rounded-bl-full"></div>
        <div className="relative z-10 grid gap-5 w-full text-center">
          <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
          <h2 className="text-3xl text-spray mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
            Do you have a good idea but <br className="hidden md:block" /> still not sure{" "}
            <span className="text-white">where to start?</span>
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
      </div>
      <div ref={providersRef} className="relative w-full">
        <AngelsHubSVG className="absolute z-0 w-full top-1/2 -translate-y-1/2 2xl:-translate-y-1/3" />
        <div className="relative container grid gap-16 mx-auto w-full mt-56">
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
  );
}