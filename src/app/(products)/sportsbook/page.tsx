"use client";
import ProductCard from "@/app/_components/products/AHProductCard";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import BrandLogo from "@/components/layout/AHBrandLogo";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import StickyLogo from "@/components/layout/AHStickyLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import { PRODUCTS } from "@/constant";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../../../public/images/abstract-wave.png";
import SUPPORTSBOOK_BIG_BALL from "../../../../public/images/supports-big-black-ball.png";
import SUPPORTSBOOK_BALL from "../../../../public/images/supports-black-ball.png";
import SUPPORTSBOOK_CASHBACK from "../../../../public/images/supportsbook-cashback.png";
import SUPPORTSBOOK_DEPOSIT from "../../../../public/images/supportsbook-deposit.png";
import SUPPORTSBOOK_FREEBET from "../../../../public/images/supportsbook-freebet.png";
import SUPPORTSBOOK_FREESPIN from "../../../../public/images/supportsbook-freespin.png";
import SUPPORTSBOOK_MAIN from "../../../../public/images/supportsbook-main.png";
import SUPPORTSBOOK_PLAYERS from "../../../../public/images/supportsbook-players.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Sportsbook() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const featuresRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const stickyLogoRef = useRef<HTMLDivElement>(null!);
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef.current! });

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
          <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-40 block mx-auto w-full">
            <div className="flex justify-center items-center">
              <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Sportsbook</h1>
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
                <ButtonFill bg="bg-angel-orange" size="medium" href="/contact" label={"BOOK A MEETING"} />
              </div>
              <div className="absolute z-0 min-w-full h-full p-0.5">
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-3/4 md:w-1/2 h-auto lg:w-[326px] lg:h-[305px]"
                  src={SUPPORTSBOOK_BALL}
                  alt="AngelsHub sportsbook ball"
                />
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-[85%] h-auto lg:w-[428px] lg:h-[534px]"
                  src={SUPPORTSBOOK_PLAYERS}
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute z-10 w-[90%] h-3/4 left-1/2 -translate-x-1/2 translate-y-1/4 bg-gradient-to-t from-black via-black via-35%"></div>
              </div>
            </div>
          </div>
          <div className="absolute block w-full top-0 inset-x-0 h-1/2 lg:h-full lg:top-0l overflow-hidden">
            <Image
              className="relative z-0 object-cover mix-blend-luminosity h-full w-auto md:w-full"
              src={SUPPORTSBOOK_MAIN}
              alt="AngelsHub sportsbook"
            />
            <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-20%"></div>
          </div>
          <div className="absolute left-0 z-10 w-full h-auto bottom-0 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
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
          className="relative w-full container text-center pb-28 pt-36 lg:pt-20 lg:text-left xl:pt-0"
        >
          <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
          <div className="hidden lg:grid gap-7">
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Multi-currency and single wallet
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Seamlessly manage funds in various currencies through a unified wallet system.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Risk management tools
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Employ sophisticated tools to mitigate risks and optimize profitability.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-base xl:text-xl text-white min-h-16">Mobile, web</h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Accessible across mobile and web platforms for convenient betting anytime,
                    anywhere.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Customisable views
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Tailor the interface to individual preferences for an enhanced user experience.
                  </p>
                </div>
              </div>
              <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">Cashout</h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Offer the flexibility for users to cash out their bets before the event
                    concludes.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Advanced Tagging system for personalized bonuses, content and much more
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Harness a robust tagging system to deliver personalized bonuses, content, and
                    services to users.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-96">
                  <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                    Multiple feeds and ability to run more than one Sportsbook simultaneously
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Integrate multiple data feeds and operate multiple Sportsbooks concurrently for
                    expanded offerings and enhanced user engagement.
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
        <div className="relative container mx-auto w-full py-28">
          <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
            <div className="relative grid gap-12 lg:gap-32 justify-items-center pt-9 pb-28 lg:pt-20 lg:pb-32 xl:pt-24 xl:pb-48 bg-black w-full h-full rounded-3xl overflow-hidden">
              <div className="relative z-10 text-center grid place-content-start gap-9 place-items-center mb-14">
                <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white">
                  Sportsbook Gamification
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:max-w-3xl">
                  Advanced bonus engine to setup Sportsbook tournament & 4 types of automated
                  bonuses to target a specific audience effortlessly based on an abundance of
                  filters & KPIs through our sophisticated tagging system with the ability to enable
                  cross product bonus wagering as well as specific game setting for wager goals
                </p>
              </div>
              <div className="relative mx-auto z-10 md:w-[90%] lg:w-[80%] grid gap-16 md:gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:gap-10">
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/4 h-auto"
                      src={SUPPORTSBOOK_DEPOSIT}
                      alt="AngelsHub sportsbook deposit"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">
                      Deposit Bonus (Strict & Regular) on both Sports & Casino
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/4 h-auto"
                      src={SUPPORTSBOOK_FREESPIN}
                      alt="AngelsHub sportsbook deposit"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">Freespin</p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/4 h-auto"
                      src={SUPPORTSBOOK_FREEBET}
                      alt="AngelsHub sportsbook deposit"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">Freebet</p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
                  <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                    <Image
                      className="absolute inset-0 m-auto w-2/4 h-auto"
                      src={SUPPORTSBOOK_CASHBACK}
                      alt="AngelsHub sportsbook deposit"
                    />
                  </div>
                  <div className="flex-1 grid gap-1">
                    <p className="text-xs text-white/75 md:text-sm xl:text-base">Cashback</p>
                  </div>
                </div>
              </div>
              <Image
                className="absolute opacity-40 z-0 left-1/2 -translate-x-1/2 w-3/4 -bottom-[10%] md:-bottom-1/4 xl:-bottom-[40%]"
                src={SUPPORTSBOOK_BIG_BALL}
                alt="AngelsHub sportsbook big ball"
              />
            </div>
          </div>
        </div>
        <div
          ref={productsRef}
          className="horizontal-scroll relative z-10 w-full py-28 h-full xl:h-[1070px] overflow-hidden"
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
        <div ref={providersRef} className="relative w-full py-14 xl:py-28">
          <AngelsHubSVG className="absolute z-0 w-full top-1/2 -translate-y-1/2 2xl:-translate-y-1/3" />
          <div className="relative container grid gap-16 mx-auto w-full">
            <div className="relative z-10 grid gap-5 text-center">
              <h2 className="text-3xl title text-white leading-tight xl:text-6xl">
                Gaming Providers
              </h2>
              <p className="text-white caption mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
                Explore the trusted partners fuelling iGaming experience
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
