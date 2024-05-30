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
import MANAGED_SERVICES_BLACK_BG from "../../../../public/images/black-background.png";
import MANAGED_SERVICES_BLUE_BG from "../../../../public/images/blue-background.png";
import MANAGED_SERVICES_B2C from "../../../../public/images/managed-services-b2c.png";
import MANAGED_SERVICES_SEO from "../../../../public/images/managed-services-seo.png";
import MANAGED_SERVICES_LEGAL from "../../../../public/images/managed-services-legal.png";
import MANAGED_SERVICES_MAIN from "../../../../public/images/managed-services-main.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function ManagedServices() {
  const bodyScrollBar = useRef<Scrollbar>(null!);
  const footerRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
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
          trigger: servicesRef.current,
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

        <div
          ref={servicesRef}
          className="relative z-10 block w-full overflow-hidden pt-28 pb-28 xl:pt-0"
        >
          <AngelsHubSVG className="absolute z-0 w-[200%] h-auto top-1/2 -translate-y-1/2 lg:w-full" />

          <div className="container mx-auto grid gap-28">
            <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
              <Image
                className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
                src={MANAGED_SERVICES_BLUE_BG}
                alt="AngelsHub sportsbook players"
              />
              <div className="relative z-10 flex lg:flex-row lg:space-x-16">
                <div className="hidden lg:block">
                  <Image
                    className="relative object-cover object-center"
                    src={MANAGED_SERVICES_B2C}
                    priority
                    alt="Products wave"
                  />
                </div>
                <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                  <div className="flex justify-start items-center -ml-5">
                    <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                    <h1 className="text-white font-bold text-2xl">B2C Support</h1>
                  </div>
                  <p className="text-base text-white">
                    Are you interested in providing round-the-clock support in multiple languages to
                    your players, with the fastest response times in the industry? With our
                    acclaimed Customer Service, we can elevate your business and enhance the player
                    experience. We deliver top-notch support to international partners, enabling you
                    to establish trust by addressing both basic customer inquiries and complex
                    technical problems. Our customer support is offered through live chat and email
                    channels. Additionally, we offer customizable packages for Inbound/Outbound
                    Calls, VIP Support, Customer Acquisition, Retention, and Social Media Customer
                    Service upon request. Rest assured, our services adhere to the regulations of
                    several reputable jurisdictions.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-left text-white">
                    <h3 className="text-xl font-bold -ml-4 mb-4">Key Features</h3>
                    <li className="text-base py-2">24/7 support covering multiple languages</li>
                    <li className="text-base py-2">Industry leading customer response times</li>
                    <li className="text-base py-2">
                      Customer inquiries and data are managed using the most advanced system
                      platform software available
                    </li>
                    <li className="text-base py-2">
                      Highly skilled agents who engage with players in a polite & professional
                      manner
                    </li>
                  </ul>
                  <div className="flex items-center justify-center lg:justify-start">
                    <ButtonFill
                      bg="bg-angel-orange"
                      size="medium"
                      href="/contact"
                      label="Contact Us"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
              <Image
                className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
                src={MANAGED_SERVICES_BLUE_BG}
                alt="AngelsHub sportsbook players"
              />
              <div className="relative z-10 flex lg:flex-row lg:space-x-16">
                <div className="hidden lg:block">
                  <Image
                    className="relative object-cover object-center"
                    src={MANAGED_SERVICES_SEO}
                    priority
                    alt="Products wave"
                  />
                </div>
                <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                  <div className="flex justify-start items-center -ml-5">
                    <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                    <h1 className="text-white font-bold text-2xl">Search Engine Optimisation</h1>
                  </div>
                  <p className="text-base text-white">
                    To begin, we will perform an SEO audit on your website to evaluate its current
                    status, outcomes, and anticipated goals. Subsequently, we will develop an SEO
                    strategy tailored specifically to your needs. With our expertise spanning all
                    aspects of SEO, we understand the unique requirements of gambling and betting
                    websites and possess the know-how to accomplish them. In addition to conducting
                    comprehensive on-page and off-page SEO, we will also promote your website within
                    local forums to enhance its visibility.
                  </p>
                  <div className="">
                    <h3 className="text-xl text-white font-bold mb-4">Key Features</h3>
                    <div className="flex flex-row space-x-8">
                      <ul className="list-disc list-outside pl-4 text-left text-white">
                        <li className="text-base py-2">On-site SEO</li>
                        <li className="text-base py-2">Off-site SEO</li>
                        <li className="text-base py-2">Organic results</li>
                      </ul>
                      <ul className="list-disc list-outside pl-4 text-left text-white">
                        <li className="text-base py-2">Keywords</li>
                        <li className="text-base py-2">Link building</li>
                        <li className="text-base py-2">Quality of traffic</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <ButtonFill
                      bg="bg-angel-orange"
                      size="medium"
                      href="/contact"
                      label="Contact Us"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
              <Image
                className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
                src={MANAGED_SERVICES_BLUE_BG}
                alt="AngelsHub sportsbook players"
              />
              <div className="relative z-10 flex lg:flex-row lg:space-x-16">
                <div className="hidden lg:block">
                  <Image
                    className="relative object-cover object-center"
                    src={MANAGED_SERVICES_LEGAL}
                    priority
                    alt="Products wave"
                  />
                </div>
                <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                  <div className="flex justify-start items-center -ml-5">
                    <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                    <h1 className="text-white font-bold text-2xl">Legal and License Services</h1>
                  </div>
                  <p className="text-base text-white">
                    If you desire to establish your legal entities in respected jurisdictions and
                    require legal support, such as the review and creation of Software License
                    Agreements, White Label Agreements, Consulting Agreements, Technical Service
                    Agreements, Non-Disclosure Agreements, and more, our services can fulfill your
                    needs. We also offer assistance in overseeing the preparation and revision of
                    contracts related to the buying and selling of goods and services. We will
                    develop your company&apos;s policies and stance on legal matters. Additionally,
                    we are skilled in drafting, reviewing, and negotiating contracts, reports,
                    memos, and other documents with suppliers and other business partners.
                  </p>
                  <ul className="list-disc list-outside pl-4 text-left text-white">
                    <h3 className="text-xl font-bold -ml-4 mb-4">Key Features</h3>

                    <li className="text-base py-2">
                      Legal support of high international standards
                    </li>
                    <li className="text-base py-2">
                      Exceptional expertise in gambling area covering a broad spectrum of legal
                      matters
                    </li>
                    <li className="text-base py-2">Flexibility and on-going client support</li>
                    <li className="text-base py-2">
                      Availability, loyalty and complete confidentiality
                    </li>
                    <li className="text-base py-2">
                      Solving increasingly complex legal issues arising in dynamic business
                      environment
                    </li>
                    <li className="text-base py-2">
                      Approaching clients&apos; needs comprehensively and devising practical
                      solutions adapted to the specific circumstances
                    </li>
                  </ul>
                  <div className="flex items-center justify-center lg:justify-start">
                    <ButtonFill
                      bg="bg-angel-orange"
                      size="medium"
                      href="/contact"
                      label="Contact Us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer ref={footerRef} />
      </div>
    </>
  );
}
