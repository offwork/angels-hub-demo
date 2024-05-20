"use client";
import AngelsHubFlatSVG from "@/components/Layout/ah-flat-svg";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
import Slider from "@/components/Slider/slider";
import CircleBtn from "@/components/Solutions/ah-circle-btn";
import Team from "@/components/Team/ah-team";
import BrandLogo from "@/components/ah-brand-logo";
import ButtonFill from "@/components/ui/ah-button-fill";
import { PRODUCTS } from "@/constant";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import WAVE from "../../public/images/abstract-wave.png";
import SOLUTIONS_1 from "../../public/images/solutions-1.png";
import SOLUTIONS_2 from "../../public/images/solutions-2.png";
import SOLUTIONS_3 from "../../public/images/solutions-3.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
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
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef.current });

  const scroll = contextSafe(() => {
    /*===========================     SOLUTIONS SCROLL     =========================*/
    const solutions = solutionsRef.current.querySelectorAll<HTMLDivElement>(".solution");

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
          solutionsRef.current.querySelector<HTMLHeadingElement>(".text-white")?.offsetHeight!,
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
          solutionsRef.current.querySelector<HTMLHeadingElement>(".text-spray")?.offsetHeight!,
      },
    });

    solutions.forEach((_solution, pos, arr) => {
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
        },
      });
    });
    /*============================     SOLUTIONS END     ===========================*/
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
    });
    /*============================     PRODUCTS END     ============================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PLATFORM SCROLL     ==========================*/
    const platformItems = platformRef.current.querySelector<HTMLDivElement>(".platform-items")!;

    function getHorizontalPlatformScrollAmount() {
      const hItemsWidth = platformItems.scrollWidth;
      return -(hItemsWidth - window.innerWidth);
    }

    mediaMatcher.add(
      {
        isDesktop: `(min-width: 1024px) and (prefers-reduced-motion: no-preference)`,
      },
      (context) => {
        const { isDesktop } = context.conditions!;
        if (isDesktop) {
          gsap.to(platformItems, {
            x: getHorizontalPlatformScrollAmount,
            ease: "none",
            duration: 2,
            scrollTrigger: {
              trigger: ".platform-scroll",
              start: "top top",
              end: () => `+=${getHorizontalPlatformScrollAmount() * -1}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    );

    gsap.from(platformRef.current.querySelector(".title"), {
      xPercent: -7,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () => platformRef.current.querySelector<HTMLHeadingElement>(".title")?.offsetHeight!,
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
        end: () => platformRef.current.querySelector<HTMLHeadingElement>(".caption")?.offsetHeight!,
      },
    });

    gsap.from(pickerRef.current, {
      xPercent: -10,
      opacity: 0,
      duration: 1.6,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 2,
        end: () => pickerRef.current.offsetHeight,
      },
    });

    gsap.from(platformRef.current.querySelector(".platform-btn"), {
      xPercent: -20,
      opacity: 0,
      duration: 0.7,
      ease: "sine.in",
      scrollTrigger: {
        trigger: platformRef.current,
        start: "top bottom",
        scrub: 1.2,
        end: () => "+=80%",
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
      yPercent: -20,
      transformOrigin: "50% 50%",
    });
    const teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: angelshubRef.current.querySelector(".scale-pin"),
        pin: true,
        pinType: "transform",
        pinSpacing: true,
        start: "center 75%",
        scrub: true,
        end: () => "+=100%",
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
          ease: "slow(0.7,0.4,false)",
        },
        "teamscaling"
      )
      .to(
        angelshubRef.current.querySelector(".team"),
        {
          autoAlpha: 1,
          duration: 2.5,
          scale: 1,
          yPercent: 20,
          ease: "slow(0.7,0.4,false)",
        },
        "teamscaling+=3"
      );
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
        end: () => providersRef.current.querySelector<HTMLHeadingElement>(".title")?.offsetHeight!,
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
          providersRef.current.querySelector<HTMLHeadingElement>(".caption")?.offsetHeight!,
      },
    });
    /*===========================     PROVIDERS END     ============================*/
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
    scroll();

    return () => {
      context.kill();
      context.revert();
      ScrollTrigger.killAll();
    };
  }, [context, scroll]);

  return (
    <>
      <Link className="cursor-pointer absolute ml-12 top-8 z-30" href="/" passHref legacyBehavior>
        <BrandLogo href="/" />
      </Link>
      <div className="slider-ref relative z-10 w-full">
        <Slider />
      </div>
      <div ref={solutionsRef} className="container grid gap-9">
        <div className="relative text-center text-3xl leading-tight xl:text-6xl">
          <h2 className="relative text-white">Complete Solutions for</h2>
          <h2 className="relative text-spray">Everything Gaming</h2>
        </div>
        <div className="grid grid-flow-row gap-0 mx-auto max-w-sm lg:max-w-max lg:gap-8 lg:grid-flow-col">
          <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
            <h3 className="text-2xl font-bold text-white">Website API</h3>
            <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl overflow-hidden">
              <Image
                className="absolute z-0 object-cover object-center h-full w-full"
                src={SOLUTIONS_1}
                alt="Website API Solution"
              />
              <CircleBtn />
            </div>
            <p className="text-white">
              It was never easier to integrate sports and casino content into your website as like
              now.
            </p>
          </div>
          <div className="solution grid content-start border-y-0 border-white/20 gap-8 py-8 lg:border-y">
            <h3 className="text-2xl font-bold text-white">Turnkey System</h3>
            <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl overflow-hidden">
              <Image
                className="absolute z-0 object-cover object-center h-full w-full"
                src={SOLUTIONS_2}
                alt="Turnkey System Solution"
              />
              <CircleBtn />
            </div>
            <p className="text-white">
              Our Turnkey Solution comes with support to help you operate under own license. You can
              benefit from the whole spectrum of our betting and gaming products.
            </p>
          </div>
          <div className="solution grid content-start border-y border-white/20 gap-8 py-8">
            <h3 className="text-2xl font-bold text-white">White Label</h3>
            <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl overflow-hidden">
              <Image
                className="absolute z-0 object-cover object-center h-full w-full"
                src={SOLUTIONS_3}
                alt="White Label Solution"
              />
              <CircleBtn />
            </div>
            <p className="text-white">
              AngelsHub White Label solution comes under Curacao license. It is integrated with
              multiple payment systems and comes with 24/7 support and risk management.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={productsRef}
        className="horizontal-scroll relative z-10 w-full mt-56 h-full xl:h-[980px]"
      >
        <div className="relative z-10 grid gap-5 w-full text-center">
          <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
          <h2 className="text-3xl text-spray mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
            Do you have a good idea but <br className="hidden md:block" /> still not sure{" "}
            <span className="text-white">where to start?</span>
          </h2>
        </div>
        <div className="relative w-full overflow-hidden py-8 md:py-24 xl:absolute xl:h-full">
          <Image
            className="absolute top-0 z-0 mix-blend-lighten bg-angel-blue opacity-10 max-w-max lg:w-full lg:max-w-full"
            src={WAVE}
            alt="Products wave"
          />
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
          <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 bottom-0 lg:left-0 lg:w-full" />
        </div>
      </div>
      <div
        ref={platformRef}
        className="platform-scroll relative w-full my-56 pb-10 overflow-x-hidden"
      >
        <div className="relative z-10 grid gap-5 w-full text-center">
          <h2 className="title text-3xl text-white leading-tight xl:text-6xl">
            Why AngelsHub Platform
          </h2>
          <p className="caption text-white mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
            The complete betting offer from Angelshub provides your business with the tools to
            compete against the very best in the industry and come out ahead.
          </p>
        </div>

        <div
          ref={pickerRef}
          className="platform-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center py-40 px-6 gap-10 -mt-20 xl:mt-0 lg:grid-flow-col"
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
              className="platform-item snap-always snap-center relative p-6 drop-shadow-2xl origin-center min-w-80 min-h-72 md:min-w-96 md:min-h-80 xl:min-w-[420px] 6xl:min-w-[484px]"
            >
              <h3 className="relative z-10 text-4xl text-white font-medium max-w-64">{item}</h3>
              <div className="absolute top-0 left-0 z-0 w-full h-full rounded-[20px] bg-[#0164B7] mix-blend-luminosity"></div>
            </div>
          ))}
        </div>
        <div className="container w-full flex justify-center lg:justify-end">
          <div className="platform-btn flex">
            <ButtonFill
              bg="bg-angel-blue"
              size="large"
              href={""}
              label={"Get good service from experts"}
            />
          </div>
        </div>
      </div>

      <div
        ref={angelshubRef}
        className="relative w-full h-full py-3 flex justify-center items-center overflow-x-hidden"
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
              Explore the trusted partners fuelling iGaming experience
            </p>
          </div>
        </div>
        <Providers />
      </div>
      <Footer ref={footerRef} />
    </>
  );
}
