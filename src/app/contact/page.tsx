"use client";
import Footer from "@/components/Layout/ah-footer";
import BrandLogo from "@/components/ah-brand-logo";
import StickyLogo from "@/components/ah-sticky-logo";
import ButtonFill from "@/components/ui/ah-button-fill";
import { useIsomorphicLayoutEffect } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import WAVE from "../../../public/images/abstract-wave.png";
import SUPPORTSBOOK_BALL from "../../../public/images/supports-black-ball.png";
import SUPPORTSBOOK_MAIN from "../../../public/images/supportsbook-main.png";
import SUPPORTSBOOK_PLAYERS from "../../../public/images/supportsbook-players.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Contact() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
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
          start: "top -20%",
          end: "bottom 0%",
          toggleActions: "play none none reverse",
          preventOverlaps: true,
        },
      })
      .to(stickyLogoRef.current, { xPercent: -100, opacity: 0 });
    const stickyStart = gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "center top",
          end: "bottom 20%",
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
    const wordLogo = footerRef.current.querySelector<SVGElement>(".word-logo");
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
        <Link className="cursor-pointer absolute ml-12 top-8 z-30" href="/" passHref legacyBehavior>
          <BrandLogo href="/" />
        </Link>
        <div className="relative z-10 px-5 lg:px-10 xl;px-0 w-full h-full bg-angel-blue mix-blend-luminosity pb-60 md:pb-72">
          <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-40 block mx-auto w-full">
            <div className="flex justify-center items-center">
              <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
              <h1 className="text-white font-bold text-4xl xl:text-7xl">Contact Us</h1>
            </div>
          </div>
          <div className="relative container mx-auto z-30 w-full top-48 md:top-56 lg:top-40 xl:top-72 lg:w-[958px] rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full min-h-[1100px] rounded-3xl">
              <div className="relative z-10 grid place-content-end gap-9 text-center mx-auto mb-14 px-4 sm:px-9">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Do you want to share your iGaming ideas with us?
                </h2>
                <p className="md:text-2xl text-angel-orange">
                  Our team is ready 24/7 to answer all your questions and <br className="hidden lg:block" /> provide the best
                  technical support services.
                </p>
                <p className="md:text-lg text-white/75">
                  Are you interested in finding out more about our offering? <br className="hidden lg:block" /> Please complete
                  the form below and our team will reach out to you as soon as possible.
                </p>
                <div className="grid gap-4 mx-auto text-white w-full mt-10 lg:mt-20 lg:min-w-[672px] lg:max-w-2xl">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="w-full form-element bg-black indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="w-full form-element bg-black indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    name="operation"
                    placeholder="Country of Operation"
                    autoComplete="off"
                    className="w-full form-element bg-black indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    name="message"
                    placeholder="Leave Us a Message"
                    autoComplete="off"
                    className="w-full form-element bg-black indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
                  />
                  <div className="form-element grid justify-items-stretch">
                    <ButtonFill href="" label="SEND" bg="bg-black" size="large" />
                  </div>
                </div>
              </div>
              <div className="absolute z-0 min-w-full h-full p-0.5">
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-3/4 md:w-1/2 h-auto lg:w-[326px] lg:h-[305px]"
                  src={SUPPORTSBOOK_BALL}
                  alt="AngelsHub sportsbook ball"
                />
                <Image
                  className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-[90%] h-auto lg:w-[428px] lg:h-[534px]"
                  src={SUPPORTSBOOK_PLAYERS}
                  priority
                  alt="AngelsHub sportsbook players"
                />
                <div className="absolute top-0 z-10 w-[90%] h-3/5 left-1/2 -translate-x-1/2 bg-gradient-to-t from-black via-black via-35%"></div>
              </div>
            </div>
          </div>
          <div className="absolute flex w-full top-0 left-0 h-1/2 md:h-full md:-top-44 lg:-top-64 xl:top-0">
            <Image
              className="relative z-0 object-cover mix-blend-luminosity flex-grow"
              src={SUPPORTSBOOK_MAIN}
              priority
              alt="AngelsHub sportsbook"
            />
            <div className="absolute z-10 left-0 w-full h-1/2 bottom-0 lg:h-2/3 bg-gradient-to-t from-angel-blue via-angel-blue via-20% 3xl:h-1/2"></div>
          </div>
          <div className="absolute left-0 z-10 w-full h-auto bottom-0 overflow-hidden py-5 xl:bottom-1/3 3xl:bottom-1/4">
            <Image
              className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
              src={WAVE}
              priority
              alt="Products wave"
            />
          </div>
        </div>

        <Footer ref={footerRef} />
      </div>
    </>
  );
}
