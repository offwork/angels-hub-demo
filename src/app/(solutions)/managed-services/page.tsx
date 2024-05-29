"use client";
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
import MANAGED_SERVICES_BLACK_BG from "../../../../public/images/black-background.png";
import MANAGED_SERVICES_MAIN from "../../../../public/images/managed-services-main.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function ManagedServices() {
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
    /* const stickyEnd = gsap
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
      .to(stickyLogoRef.current, { xPercent: 0, opacity: 1 }); */
    /*===========================     STICKY LOGO END     ==========================*/
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    /*===========================     PRODUCTS SCROLL     ==========================*/
    /* const hItems = productsRef.current.querySelector<HTMLDivElement>(".horizontal-items")!;

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
    ); */
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
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Managed Services</h1>
            </div>
          </div>
          <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[600px] lg:w-[960px] lg:h-[600px] rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full h-full rounded-3xl">
              <div className="relative z-20 text-center grid place-content-end gap-10 place-items-center mb-16">
                <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-32">
                  Lorem ipsum dolor sit amet consectetur. Risus integer lectus.
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:px-32">
                  We have a diverse selection of professional services available for our customers,
                  including marketing, customer support, responsible gaming, and payments
                  management.
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
                  src={MANAGED_SERVICES_MAIN}
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute z-10 w-[90%] h-3/5 left-1/2 -translate-x-1/2 top-0 bg-gradient-to-t from-black via-black via-25%"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-0.5 rounded-3xl overflow-hidden">
                <Image
                  className="absolute bottom-0 mix-blend-luminosity w-[99%] h-auto left-1/2 -translate-x-1/2"
                  src={MANAGED_SERVICES_BLACK_BG}
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

        {/* ==============================  EMPTY  ==============================  */}

        <Footer ref={footerRef} />
      </div>
    </>
  );
}
