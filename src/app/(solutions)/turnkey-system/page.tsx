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
import TURNKEY_SYSTEM_BACK_BG from "../../../../public/images/black-background.png";
import TURNKEY_SYSTEM_PAYMENTS from "../../../../public/images/crypto-sulionts-instant.svg";
import TURNKEY_SYSTEM_HOSTING from "../../../../public/images/turnkey-system-hosting.svg";
import TURNKEY_SYSTEM_LICENSE from "../../../../public/images/turnkey-system-license.svg";
import TURNKEY_SYSTEM_MAIN from "../../../../public/images/turnkey-system-main.png";
import TURNKEY_SYSTEM from "../../../../public/images/website-api-security.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function TurnkeySystem() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
  const systemRef = useRef<HTMLDivElement>(null!);
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
          trigger: systemRef.current,
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
        <div className="relative flex px-5 w-full h-[930px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
          <div className="absolute left-0 z-30 top-40 lg:top-16 xl:top-36 block mx-auto w-full">
            <div className="flex justify-center items-center">
              <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Turnkey-System</h1>
            </div>
          </div>
          <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[600px] lg:w-[960px] lg:h-[600px] rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full h-full rounded-3xl">
              <div className="relative z-20 text-center grid place-content-end gap-10 place-items-center mb-16">
                <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-32">
                  Lorem ipsum dolor sit amet consectetur. Risus integer lectus.
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:px-32">
                  AngelsHub Platform&apos;s propriety CMS allows great length of flexibility for
                  customisations and localisations, dynamic content and real-time
                  hyper-segmentation.
                </p>
                <ButtonFill
                  bg="bg-angel-orange"
                  size="medium"
                  href="/contact"
                  label={"BOOK A MEETING"}
                />
              </div>
              <div className="absolute z-10 min-w-full h-full p-0.5">
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/4 h-auto sm:w-1/2 md:w-2/5"
                  src={TURNKEY_SYSTEM_MAIN}
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute z-10 w-[90%] h-3/5 left-1/2 -translate-x-1/2 top-0 bg-gradient-to-t from-black via-black via-25%"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-0.5 rounded-3xl overflow-hidden">
                <Image
                  className="absolute bottom-0 mix-blend-luminosity w-[99%] h-auto left-1/2 -translate-x-1/2"
                  src={TURNKEY_SYSTEM_BACK_BG}
                  alt="AngelsHub sportsbook players"
                />
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
        <div ref={systemRef} className="relative w-full overflow-hidden pt-28 pb-28 xl:pt-0">
          <AngelsHubSVG className="absolute z-0 w-[200%] h-auto top-1/2 -translate-y-1/2 lg:w-full" />
          <div className="relative z-10 container grid gap-10 mx-auto xl:gap-32">
            <div className="grid grid-cols-1 place-content-center gap-16 xl:grid-cols-2">
              <div className="relative place-self-center lg:place-self-end">
                <h2 className="text-3xl xl:text-6xl text-white">
                  AngelsHub offers the best<span>&#20;</span>
                  <span className="text-angel-blue-300">
                    Turnkey System for your iGaming Business
                  </span>
                </h2>
              </div>
              <div className="ralative w-full place-self-center xl:row-span-2">
                <Image
                  className="relative object-cover object-center w-full h-auto left-1/2 -translate-x-1/2"
                  src={TURNKEY_SYSTEM}
                  alt=""
                />
              </div>
              <div className="ralative place-self-center lg:place-self-auto">
                <p className="text-xl text-white">
                  AngelsHub offers a ground-breaking Turnkey System for managing core betting and
                  gaming business operations. Our fully customisable solution fits to
                  customer&apos;s needs and boost game offering for betting and gaming operators
                  worldwide.
                </p>
                <br />
                <p className="text-lg text-white/75">
                  And what&apos;s more, our customers get everything ready to be used immediately
                  upon installation and run their business smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 block container w-full py-40 mx-auto">
          <div className="grid grid-flow-row lg:grid-flow-col gap-10 justify-items-stretch py-28 border-y border-white/20">
            <div className="relative grid content-center justify-self-center text-center lg:text-left lg:justify-self-start">
              <h2 className="text-3xl xl:text-6xl text-white">
                <span className="text-angel-blue-300">Our Turnkey</span> <br /> System includes
              </h2>
            </div>
            <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3 lg:gap-5 lg:grid-cols-3 lg:px-6 xl:px-0 xl:max-w-6xl">
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">iGaming Platform</h3>
                <Image className="ml-auto mt-auto" src={TURNKEY_SYSTEM_PAYMENTS} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">White Label License</h3>
                <Image className="ml-auto mt-auto" src={TURNKEY_SYSTEM_LICENSE} alt="" />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 col-auto sm:col-span-2 lg:col-auto">
                <h3 className="text-xl text-white">Affiliate System</h3>
                <Image className="ml-auto mt-auto" src={TURNKEY_SYSTEM_HOSTING} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full container text-center pb-28 pt-36 lg:pt-20 lg:text-left xl:pt-0">
          <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
          <div className="hidden lg:grid gap-7">
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Own Share Control in a Gambling Industry for Casino Owners
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Granting casino owners autonomy and control over their share within the gambling
                    industry.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Comprehensive Platform with User-friendly Controls
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Access a comprehensive platform equipped with user-friendly controls for
                    seamless navigation and management.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Time and Resource Management
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Optimize efficiency with tools for effective time and resource management,
                    enhancing productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">High-Quality Design</h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Elevate your iGaming website with visually stunning aesthetics and intuitive
                    user interfaces, enhancing user engagement and brand credibility.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Simplified Payment System
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Streamline financial transactions with a simplified payment system, ensuring
                    convenience and security for all parties involved.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    24/7 Technical Assistance
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Receive round-the-clock technical support to address any queries or issues
                    promptly, ensuring uninterrupted operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
            <li className="text-xl py-8">
              Own Share Control in a Gambling Industry for Casino Owners
            </li>
            <li className="text-xl py-8">Comprehensive Platform with User-friendly Controls</li>
            <li className="text-xl py-8">Time and Resource Management</li>
            <li className="text-xl py-8">High-Quality Design</li>
            <li className="text-xl py-8">Simplified Payment System</li>
            <li className="text-xl py-8">24/7 Technical Assistance</li>
          </ul>
        </div>
        <Footer ref={footerRef} />
      </div>
    </>
  );
}
