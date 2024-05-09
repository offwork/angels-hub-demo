"use client";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import BrandLogo from "@/components/ah-brand-logo";
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
import CRYPTO_SOLUTIONS_CURRENCY from "../../../public/images/crypto-solutions-currency.png";
import CRYPTO_SOLUTIONS_MAIN_CHIPS from "../../../public/images/crypto-solutions-main-chips.png";
import CRYPTO_SOLUTIONS_MAIN_SPIN from "../../../public/images/crypto-solutions-main-spin.png";
import CRYPTO_SOLUTIONS_PLATFORM from "../../../public/images/crypto-solutions-platform.png";
import CRYPTO_SOLUTIONS_INSTANT from "../../../public/images/crypto-sulionts-instant.svg";
import CRYPTO_SOLUTIONS_POPULARITY from "../../../public/images/crypto-sulionts-popularity.png";
import CRYPTO_SOLUTIONS_SECURITY from "../../../public/images/crypto-sulionts-security.svg";
import CRYPTO_SOLUTIONS_UNLIMITED from "../../../public/images/crypto-sulionts-unlimited.svg";
import CRYPTO_SOLUTIONS_VERIFICATION from "../../../public/images/crypto-sulionts-verification.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function CryptoSolutions() {
  const footerRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef.current });

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
      <div className="relative flex px-5 w-full h-[1000px] md:h-[820px] lg:h-[1050px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
        <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-32 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
            <h1 className="text-white font-bold text-4xl xl:text-7xl">Crypto Solutions</h1>
          </div>
        </div>
        <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[670px] md:h-[480px] lg:w-[958px] lg:h-[597px] rounded-3xl bg-gradient-to-tr from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl">
            <div className="relative z-10 text-center grid place-content-end gap-9 place-items-center mb-14">
              <h2 className="text-2xl px-8 lg:text-4xl font-bold text-white lg:px-20 lg:leading-tight">
                We are glad to introduce our Crypto Solutions that support all available
                cryptocurrencies included Bitcoin, Ethereum, Litecoin, Dogecoin, Tether, Bitcoin
                Cash, Ripple, Binance Coin, Cardano, TRON, and many more.
              </h2>
              <Link
                href="/"
                className="bg-angel-orange rounded-full max-w-fit px-11 py-4 text-white text-center"
              >
                <span className="">BOOK A MEETING</span>
              </Link>
            </div>
            <div className="absolute z-0 min-w-full h-full p-0.5">
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/5 md:w-1/2 h-auto"
                src={CRYPTO_SOLUTIONS_CURRENCY}
                alt="AngelsHub suportsbook players"
              />
              <div className="absolute z-10 w-[90%] h-1/2 left-1/2 -translate-x-1/2 md:h-3/4 lg:top-10 xl:top-14 bg-gradient-to-t from-black via-black via-35%"></div>
            </div>
          </div>
        </div>
        <Image
          className="absolute w-full z-10 scale-125 mix-blend-lighten opacity-20 left-1/2 -translate-x-1/2 bottom-0 lg:bottom-10 xl:bottom-52"
          src={WAVE}
          alt="Products wave"
        />
        <div className="absolute z-10 left-0 w-full h-[670px] lg:h-[597px]">
          <div className="relative mx-auto xl:w-full 2xl:w-[1390px] h-full">
            <Image
              className="absolute object-cover mix-blend-luminosity h-auto w-80 top-32 -left-28 md:-left-24 md:w-96 lg:w-[600px] lg:top-24 xl:left-0 xl:top-60 3xl:-left-20 4xl:-left-28"
              src={CRYPTO_SOLUTIONS_MAIN_SPIN}
              alt="AngelsHub suportsbook"
            />
            <Image
              className="absolute object-cover mix-blend-luminosity h-auto w-36 top-32 right-0 md:-right-9 md:w-44 lg:w-80 lg:top-24 xl:right-0 xl:top-60"
              src={CRYPTO_SOLUTIONS_MAIN_CHIPS}
              alt="AngelsHub suportsbook"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full container grid gap-10 mx-auto overflow-hidden pt-28 pb-28 xl:pt-0 xl:gap-14">
        <div className="grid grid-cols-1 place-content-center gap-28 sm:gap-96 md:gap-[480px] lg:grid-cols-2 lg:gap-14 xl:px-16">
          <div className="ralative w-full min-h-80 lg:min-h-[440px]">
            <Image
              className="absolute object-cover object-center max-w-full h-auto -translate-x-6 lg:max-w-md xl:max-w-xl xl:-translate-x-16"
              src={CRYPTO_SOLUTIONS_PLATFORM}
              alt=""
            />
          </div>
          <div className="ralative w-full place-self-center">
            <p className="text-lg text-white/75">
              Players in our Crypto Platform are at will to use cryptocurrencies to make deposits
              and/ or withdrawals. They use cryptocurrencies to fund the games that they intend to
              play at the casino of their choice. <br /> <br />
              Providing customers anonymity and total control, among other things, digital
              currencies are considered one of the safest forms. <br /> <br />
              Crypto Platform has the same rules and terms like the regular casino. The only
              difference is that with crypto platform a player is depositing and also winning
              cryptocurrencies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 px-16 gap-5 sm:grid-cols-2 md:grid-cols-4 md:px-0 md:gap-3 lg:gap-5 xl:px-36">
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Instant Payouts</h3>
            <Image className="ml-auto mt-auto" src={CRYPTO_SOLUTIONS_INSTANT} alt="" />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Security of players&apos; funds and identities</h3>
            <Image className="ml-auto mt-auto" src={CRYPTO_SOLUTIONS_SECURITY} alt="" />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Unlimited free daily transactions</h3>
            <Image className="ml-auto mt-auto" src={CRYPTO_SOLUTIONS_UNLIMITED} alt="" />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">No verification needed</h3>
            <Image className="ml-auto mt-auto" src={CRYPTO_SOLUTIONS_VERIFICATION} alt="" />
          </div>
        </div>
      </div>
      <div className="relative container mx-auto w-full py-28">
        <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
          <div className="relative grid gap-12 justify-items-center bg-black w-full h-full rounded-3xl overflow-hidden px-8 sm:px-16 pt-20 pb-9 md:px-10 lg:px-0 md:pt-24 md:pb-11">
            <div className="relative z-10 text-center grid place-content-start gap-10 place-items-center">
              <h2 className="text-2xl md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
                Crypto Solution at AngelsHub <br /> Platform is always Stable and Secure
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-white">
                Popularity of crypto gambling raised in <br className="hidden md:block" /> year 2017 and 2018.
              </h3>
              <p className="text-base md:text-lg text-white/75 lg:max-w-3xl">
                AngelsHub Platform offers to all customers cryptocurrency gaming, providing a fun,
                quick and fair experience for the crypto gambling enthusiast. <br />
                <br />
                Our team permanently monitors, supports and exceed the expectations of our gamers.
                We provide cryptocurrency-based casino that allows lightning-fast withdrawals
                secured by the blockchain, anonymously and effortlessly.
              </p>
            </div>
            <div className="relative mx-auto w-10/12 sm:w-3/5 md:w-1/2 lg:w-2/5">
              <Image
                className="relative"
                src={CRYPTO_SOLUTIONS_POPULARITY}
                alt="AngelsHub suportsbook big ball"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={productsRef}
        className="horizontal-scroll relative z-10 w-full py-28 h-full overflow-x-hidden xl:h-[980px]"
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
  );
}