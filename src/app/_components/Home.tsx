"use client";
import AngelsHubFlatSVG from "@/components/layout/AHFlatSvg";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import { PLATFORMS, PRODUCTS, SOLUTIONS } from "@/constant";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import SiteForm from "./form/AHSiteForm";
import PlatformCard from "./platform/AHPlatformCard";
import ProductCard from "./products/AHProductCard";
import AngelsHubSVG from "./products/AHSvg";
import Slider from "./slider/Slider";
import SolutionsGrid from "./solutions/AHSolutionsGrid";
import Team from "./team/AHTeam";

export default function Home() {
  gsap.registerPlugin(useGSAP);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const solutionsRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const platformRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const pickerRef = useRef<HTMLDivElement>(null!);
  const angelshubRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      const mediaMatcher = gsap.matchMedia();
      /*===========================     SOLUTIONS SCROLL     =========================*/
      const solutions = solutionsRef.current.querySelectorAll<HTMLDivElement>(".solution")!;
      const solutionCards = solutionsRef.current.querySelector<HTMLDivElement>(".solutions")!;
      const solutionsTitle = solutionsRef.current.querySelector<HTMLHeadingElement>(".text-white")!;

      mediaMatcher.add(
        {
          isMobile: `(max-width: 1023px) and (prefers-reduced-motion: no-preference)`,
          isTablet: `(min-width: 1024px) and (max-width: 1439px) and (prefers-reduced-motion: no-preference)`,
          isDesktop: `(min-width: 1440px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          const { isMobile, isTablet, isDesktop } = context.conditions!;
          if (isMobile) {
            gsap.from(solutionsTitle, {
              xPercent: -7,
              opacity: 0,
              duration: 0.7,
              ease: "sine.in",
              scrollTrigger: {
                trigger: solutionsRef.current,
                start: () => "top center",
                scrub: 1.2,
                end: () => solutionsTitle.offsetHeight!,
              },
            });

            gsap.from(solutionCards, {
              xPercent: -10,
              opacity: 0,
              duration: 0.7,
              ease: "sine.in",
              scrollTrigger: {
                trigger: solutionCards,
                start: "top center",
                scrub: 1.2,
                end: () => solutionCards.offsetHeight,
              },
            });
          }
          if (isTablet) {
            gsap.from(solutionsTitle, {
              xPercent: -7,
              opacity: 0,
              duration: 0.7,
              ease: "sine.in",
              scrollTrigger: {
                trigger: solutionsRef.current,
                start: () => "top center",
                scrub: 1.2,
                end: () => solutionsTitle.offsetHeight!,
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
                  end: () => "+=" + arr[pos].offsetHeight,
                },
              });
            });
          }
          if (isDesktop) {
            gsap.from(solutionsTitle, {
              xPercent: -7,
              opacity: 0,
              duration: 0.7,
              ease: "sine.in",
              scrollTrigger: {
                trigger: solutionsRef.current,
                start: () => "top center",
                scrub: 1.2,
                end: () => solutionsTitle.offsetHeight!,
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
                  end: () => "+=" + arr[pos].offsetHeight,
                },
              });
            });
          }
        }
      );
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

      mediaMatcher.add(
        {
          isDesktop: `(min-width: 1280px)`,
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
          start: "top center",
          scrub: 2,
          end: "top 25%",
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
          isDesktop: `(min-width: 1024px)`,
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
          end: () =>
            platformRef.current.querySelector<HTMLHeadingElement>(".caption")?.offsetHeight!,
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
      gsap.set(".scale-pin", { transformOrigin: "50% 50%" });
      gsap.set(".team", { transformOrigin: "50% 50%" });
      const teamTl = gsap.timeline({
        defaults: { duration: 5, ease: "slow(0.9,0.7,false)" },
        scrollTrigger: {
          trigger: '.scale-pin',
          pin: true,
          pinType: "transform",
          pinSpacing: true,
          start: "top 65%",
          scrub: 2,
          end: "+=400",
          invalidateOnRefresh: true,
        },
      });
      teamTl
        .addLabel("teamscaling", 0)
        .fromTo(
          ".scale-pin",
          {
            autoAlpha: 1,
            scale: 1,
          },
          {
            scale: 50,
            autoAlpha: 0,
          },
          "teamscaling"
        )
        .fromTo(
          ".team",
          {
            autoAlpha: 0,
            scale: 0.3,
          },
          {
            autoAlpha: 1,
            scale: 1,
          },
          "teamscaling+=1.5"
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
          end: () =>
            providersRef.current.querySelector<HTMLHeadingElement>(".title")?.offsetHeight!,
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

      return () => {
        mediaMatcher.revert();
      };
    },
    { scope: scrollContainerRef }
  );

  const resizeHandle = () => {
    ScrollTrigger.refresh();
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", resizeHandle);

    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="relative w-full h-full overscroll-none overflow-visible"
      >
        <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
          <BrandLogo />
        </AHLink>
        <div className="relative z-10 w-full">
          <Slider />
        </div>
        <div
          ref={productsRef}
          className="horizontal-scroll relative z-10 w-full overflow-hidden mt-28 pb-28 md:pb-40"
        >
          <div className="relative z-10 grid gap-5 w-full text-center mb-6">
            <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
            <h2 className="text-3xl text-white mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
              Discover Innovation with Angelshub: <br className="hidden md:block" /> Introducing Our
              Cutting-Edge Products
            </h2>
          </div>
          <div className="relative w-full">
            <Image
              className="absolute -top-28 z-0 mix-blend-lighten bg-angel-blue opacity-10 max-w-max lg:w-full lg:max-w-full"
              src="/abstract-wave.png"
              width={1728}
              height={482}
              alt="Angels abstract wave"
            />
            <div
              ref={hPinRef}
              className="horizontal-items relative z-10 w-full grid grid-flow-row place-items-center gap-20 py-16 px-10 xl:grid-flow-col"
            >
              {PRODUCTS.map((product) => (
                <ProductCard {...product} key={product.title} />
              ))}
            </div>
            <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 -bottom-32 md:-bottom-56 lg:-bottom-32 xl:-bottom-56 lg:left-0 lg:w-full" />
          </div>
        </div>
        <div ref={solutionsRef} className="container grid gap-9 mt-28">
          <div className="relative text-center text-3xl leading-tight xl:text-6xl">
            <h2 className="relative text-white">
              Ultimate Solutions: Your One-Stop <br /> Hub for All Things Gaming
            </h2>
          </div>
          <div className="solutions grid grid-flow-row gap-0 mx-auto max-w-sm lg:max-w-max lg:gap-8 lg:grid-flow-col">
            {SOLUTIONS.map((solution) => (
              <SolutionsGrid
                key={solution.title}
                href={solution.href}
                img={solution.image}
                title={solution.title}
                sizes={solution.sizes}
                desc={solution.description}
                alt={solution.alt}
              />
            ))}
          </div>
        </div>
        <div
          ref={platformRef}
          className="platform-scroll relative w-full my-56 pb-10 overflow-hidden"
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
            className="platform-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center py-40 px-8 gap-10 -mt-20 xl:mt-0 lg:grid-flow-col"
          >
            {PLATFORMS.map((item, idx) => (
              <PlatformCard key={item.title} title={item.title} image={item.image} />
            ))}
          </div>
          <div className="container w-full flex justify-center lg:justify-end">
            <div className="platform-btn flex">
              <ButtonFill
                className="bg-angel-blue text-white"
                size="large"
                href="/contact"
                target="_blank"
                label="Book a Demo"
              />
            </div>
          </div>
        </div>

        <div
          ref={angelshubRef}
          className="relative h-[844px] w-full py-3 flex justify-center items-center"
        >
          <AngelsHubFlatSVG className="scale-pin absolute top-0 w-full" />
          <Team />
        </div>

        <div ref={providersRef} className="relative w-full py-28">
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
        <Footer>
          <SiteForm message="Your message has been sent successfully." />
        </Footer>
      </div>
    </>
  );
}
