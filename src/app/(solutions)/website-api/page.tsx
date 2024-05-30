"use client";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import BrandLogo from "@/components/layout/AHBrandLogo";
import Footer from "@/components/layout/AHFooter";
import StickyLogo from "@/components/layout/AHStickyLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../../../public/images/abstract-wave.png";
import WEBSITEAPI_BUILTIN from "../../../../public/images/affiliate-agent-system-builtin.svg";
import WEBSITEAPI_CUSTOMIZABLE from "../../../../public/images/affiliate-agent-system-customizable.svg";
import WEBSITEAPI_FLEXIBLE from "../../../../public/images/affiliate-agent-system-flexible.svg";
import WEBSITEAPI_MULTITOUCH from "../../../../public/images/affiliate-agent-system-multitouch.svg";
import WEBSITEAPI_HOSTING from "../../../../public/images/crypto-sulionts-security.svg";
import WEBSITEAPI_MAIN from "../../../../public/images/website-api-main.png";
import WEBSITEAPI_REPORTING from "../../../../public/images/website-api-payment.svg";
import WEBSITEAPI_SECURITY from "../../../../public/images/website-api-security.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function WebsiteApi() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
  const platformRef = useRef<HTMLDivElement>(null!);
  const securityRef = useRef<HTMLDivElement>(null!);
  const pickerRef = useRef<HTMLDivElement>(null!);
  const cellsRef = useRef<HTMLDivElement[]>([]);
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
          trigger: securityRef.current,
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
    /*===========================     PLATFORM SCROLL     ==========================*/
    const platformItems = platformRef.current.querySelector<HTMLDivElement>(".platform-items")!;

    function getHorizontalPlatformScrollAmount() {
      const hItemsWidth = platformItems.scrollWidth;
      return -(hItemsWidth - window.innerWidth);
    }
    const mediaMatcher = gsap.matchMedia();
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
        <Link
          className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30"
          href="/"
          passHref
          legacyBehavior
        >
          <BrandLogo href="/" />
        </Link>
        <div className="relative flex px-5 w-full h-[1220px] sm:h-[980px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
          <div className="absolute left-0 z-30 top-40 lg:top-16 xl:top-36 block mx-auto w-full">
            <div className="flex justify-center items-center">
              <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Website API</h1>
            </div>
          </div>
          <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[900px] sm:h-[620px] lg:w-[960px] lg:h-[654px] rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full h-full rounded-3xl">
              <div className="relative z-10 text-center grid place-content-end gap-9 place-items-center mb-11">
                <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-32">
                  We will provide everything you need to run a successful gaming operation, all you
                  need to do is to bring in quality leads.
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:px-32">
                  Crypto Solution at AngelsHub Platform is always Stable and Secure Popularity of
                  crypto gambling raised in year 2017 and 2018. AngelsHub Platform offers to all
                  customers cryptocurrency gaming, providing a fun, quick and fair experience for
                  the crypto gambling enthusiast. <br /> <br />
                  Our team permanently monitors, supports and exceed the expectations of our gamers.
                  We provide cryptocurrency-based casino that allows lightning-fast withdrawals
                  secured by the blockchain, anonymously and effortlessly.
                </p>
                <ButtonFill
                  bg="bg-angel-orange"
                  size="medium"
                  href="/contact"
                  label={"BOOK A MEETING"}
                />
              </div>
              <div className="absolute z-0 min-w-full h-full p-0.5">
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/4 h-auto md:w-1/2"
                  src={WEBSITEAPI_MAIN}
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute z-10 w-[90%] h-3/4 left-1/2 -translate-x-1/2 top-0 bg-gradient-to-t from-black via-black via-35%"></div>
              </div>
            </div>
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
        <div ref={securityRef} className="relative w-full overflow-hidden pt-28 pb-28 xl:pt-0">
          <AngelsHubSVG className="absolute z-0 w-[200%] h-auto top-1/2 -translate-y-1/2 lg:w-full" />
          <div className="relative z-10 container grid gap-10 mx-auto xl:gap-32">
            <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3  lg:gap-5 lg:grid-cols-6 lg:px-6 xl:px-0 xl:max-w-6xl">
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">iGaming Platform</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_CUSTOMIZABLE} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">White Label License</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_FLEXIBLE} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">Affiliate System</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_BUILTIN} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">Marketing</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_MULTITOUCH} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
                <h3 className="text-xl text-white">Payment System</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_REPORTING} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
                <h3 className="text-xl text-white">Technical Support and Hosting</h3>
                <Image className="ml-auto mt-auto" src={WEBSITEAPI_HOSTING} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-1 place-content-center gap-16 xl:grid-cols-2">
              <div className="relative place-self-center lg:place-self-end">
                <h2 className="text-3xl xl:text-6xl text-white">
                  100% Security and Stability This is our <br className="xl:hidden" />
                  <span className="text-angel-blue-300">
                    White Label online <br className="sm:hidden" /> casino software
                  </span>
                </h2>
                <br />
                <p className="text-xl text-white">
                  White Label online casino is a great alternative for everyone who wants to set up
                  a new casino in a shortest possible time and at reasonable and affordable costs.
                </p>
              </div>
              <div className="ralative w-full place-self-center xl:row-span-2">
                <Image
                  className="relative object-cover object-center w-full h-auto left-1/2 -translate-x-1/2"
                  src={WEBSITEAPI_SECURITY}
                  alt=""
                />
              </div>
              <div className="ralative place-self-center lg:place-self-auto">
                <p className="text-lg text-white/75">
                  Our clients get a specific betting platform with a fixed package of slots,
                  bonuses, payment methods and many more and if they like, they can easily remove or
                  add to their packages any games, depending on their preferences or interests of
                  the targeted users or countries. White Label gaming solution is super flexible
                  which makes it one of the best choices in terms of cost efficiency and lead time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={platformRef}
          className="platform-scroll relative w-full mt-28 pb-10 overflow-x-hidden"
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
                className="platform-item snap-always snap-center relative p-6 shadow-2xl origin-center min-w-80 min-h-72 md:min-w-96 md:min-h-80 xl:min-w-[420px] 6xl:min-w-[484px]"
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
                href="/contact"
                label="Get good service from experts"
              />
            </div>
          </div>
        </div>
        <Footer ref={footerRef} />
      </div>
    </>
  );
}
