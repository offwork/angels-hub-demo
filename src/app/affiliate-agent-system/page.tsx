"use client";
import Footer from "@/components/Layout/ah-footer";
import Providers from "@/components/Layout/ah-providers";
import ProductCard from "@/components/Products/ah-product-card";
import AngelsHubSVG from "@/components/Products/ah-svg";
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
import WAVE from "../../../public/images/abstract-wave.png";
import AFFILIATE_AGENT_BUILTIN from "../../../public/images/affiliate-agent-system-builtin.svg";
import AFFILIATE_AGENT_CUSTOMIZABLE from "../../../public/images/affiliate-agent-system-customizable.svg";
import AFFILIATE_AGENT_FEATURES from "../../../public/images/affiliate-agent-system-features.png";
import AFFILIATE_AGENT_FLEXIBLE from "../../../public/images/affiliate-agent-system-flexible.svg";
import AFFILIATE_AGENT_MULTITOUCH from "../../../public/images/affiliate-agent-system-multitouch.svg";
import AFFILIATE_AGENT_OFFER from "../../../public/images/affiliate-agent-system-offer.png";
import AFFILIATE_AGENT_OPERATE from "../../../public/images/affiliate-agent-system-oparate.png";
import AFFILIATE_AGENT_REPORTING from "../../../public/images/affiliate-agent-system-reporting.svg";
import AFFILIATE_AGENT_UTILIZE from "../../../public/images/affiliate-agent-system-utilize.png";
import AFFILIATE_AGENT_INSTANT from "../../../public/images/crypto-sulionts-instant.svg";
import AFFILIATE_AGENT_SECURITY from "../../../public/images/crypto-sulionts-security.svg";
import AFFILIATE_AGENT_UNLIMITED from "../../../public/images/crypto-sulionts-unlimited.svg";
import AFFILIATE_AGENT_VERIFICATION from "../../../public/images/crypto-sulionts-verification.svg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function AffiliateAgentSystem() {
  const footerRef = useRef<HTMLDivElement>(null!);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);
  const providersRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const { context, contextSafe } = useGSAP({ scope: scrollContainerRef.current });

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
      <div className="relative flex px-5 w-full h-[1000px] md:h-[820px] lg:h-[1050px] xl:h-[1200px] bg-angel-blue mix-blend-luminosity overflow-hidden">
        <div className="absolute left-0 z-30 top-28 lg:top-16 xl:top-32 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-8"></span>
            <h1 className="text-white font-bold text-2xl sm:text-4xl xl:text-7xl">
              Affiliate and Agent System
            </h1>
          </div>
        </div>
        <div className="relative container mx-auto top-64 z-30 lg:top-1/2 lg:-translate-y-1/2 w-full h-[670px] md:h-[480px] lg:w-[958px] lg:h-[597px] rounded-3xl bg-gradient-to-tr from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl">
            <div className="relative z-10 text-center grid place-content-end gap-12 place-items-center mb-20">
              <h2 className="text-2xl px-8 lg:text-4xl font-bold text-white md:px-16 lg:px-32 lg:leading-tight">
                AngelsHub offers modern Affiliate and Agent System that helps our customers to gain
                full control over their customer management in multiple languages.
              </h2>
              <div className="flex items-center justify-center flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-9 lg:space-x-8 xl:space-x-16">
                <ButtonFill bg="bg-angel-orange" size="medium" href={""} label={"BOOK A MEETING"} />
                <ButtonFill bg="bg-angel-blue" size="medium" href={""} label={"Agent System"} />
              </div>
            </div>
            <div className="absolute z-0 min-w-full h-full p-0.5">
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/5 md:w-2/5 h-auto"
                src={AFFILIATE_AGENT_OFFER}
                alt="AngelsHub suportsbook players"
              />
              <div className="absolute z-10 w-[90%] h-1/2 left-1/2 -translate-x-1/2 md:h-3/4 lg:top-10 xl:top-14 bg-gradient-to-t from-black via-black via-35%"></div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-0 overflow-hidden lg:bottom-16 xl:bottom-80 2xl:bottom-80 3xl:bottom-72 5xl:bottom-60 6xl:bottom-44">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src={WAVE}
            priority
            alt="Products wave"
          />
        </div>
      </div>
      <div className="relative container mx-auto w-full pt-28 pb-28 xl:pt-0">
        <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
          <div className="relative grid gap-12 justify-items-center bg-black w-full h-full rounded-3xl overflow-hidden px-8 pt-20 pb-28 sm:px-16 md:px-10 md:pt-24 lg:px-0 lg:pb-0">
            <div className="relative z-10 text-center grid place-content-start gap-10 place-items-center">
              <h2 className="text-2xl md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
                Affiliate System
              </h2>
              <p className="text-base md:text-lg text-white/75 lg:max-w-[730px]">
                The affiliate system of AngelsHub operates on a performance-driven approach,
                incentivizing affiliates to actively promote the iGaming platform and achieve
                tangible outcomes. We offer an extensive range of tools and resources to assist
                affiliates in successfully marketing the platform, which includes distinctive
                tracking links, creative materials, and up-to-date analytics.
              </p>
            </div>
            <div className="relative w-3/4 h-auto">
              <Image
                className="relative object-cover object-center mx-auto"
                src={AFFILIATE_AGENT_OPERATE}
                alt="AngelsHub suportsbook big ball"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full inset-x-0 -translate-y-24 lg:-translate-y-1/4">
          <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3 lg:gap-5 lg:grid-cols-5 lg:px-6 xl:px-0 xl:max-w-6xl">
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Multi-product and Multi-brand Management</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_MULTITOUCH} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Built-in Payment Processing</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_BUILTIN} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Flexible Commissions</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_FLEXIBLE} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Customizable Platform</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_CUSTOMIZABLE} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
              <h3 className="text-xl text-white">Near-instant Reporting</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_REPORTING} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-28">
        <div className="absolute bg-angel-blue z-0 w-full h-full top-0 left-0 py-[10%] overflow-hidden">
          <Image
            className="relative object-cover mix-blend-lighten opacity-10 h-full w-auto object-center lg:opacity-20 xl:object-left 6xl:-right-[560px]"
            src={AFFILIATE_AGENT_FEATURES}
            alt=""
          />
        </div>
        <div className="relative z-10 container">
          <div className="grid gap-10 lg:gap-14 sm:px-12 md:px-16 lg:px-8 2xl:px-0">
            <h2 className="text-2xl text-center md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
              In addition to that, our Affiliate Management <br className="hidden lg:block" />{" "}
              Software offers a variety of other features, including:
            </h2>
            <ul className="list-disc list-outside text-left text-white grid divide-y divide-white/50 xs:pl-3 sm:pl-0">
              <li className="text-xl py-8">
                Dedicated dashboard that presents graphical representations for each affiliate
              </li>
              <li className="text-xl py-8">
                Detailed access to comprehensive information regarding affiliate performance
              </li>
              <li className="text-xl py-8">
                Efficiently managed and allocated multiple commission plans, with the flexibility to
                customize them at the affiliate level
              </li>
              <li className="text-xl py-8">
                Assign affiliate tags either manually or automatically
              </li>
              <li className="text-xl py-8">
                Approval for sign-ups can be granted automatically or through a manual process
              </li>
              <li className="text-xl py-8">Verification of emails</li>
              <li className="text-xl py-8">
                Back-office that can be tailored to your specific preferences
              </li>
              <li className="text-xl py-8">Adaptable commission payment options</li>
              <li className="text-xl py-8">Storage of dynamic content</li>
              <li className="text-xl py-8">In-House Development</li>
              <li className="text-xl py-8">Generation of automated links</li>
              <li className="text-xl py-8">Cost-Efficient Expansion</li>
              <li className="text-xl py-8">Multiplatform Technology</li>
              <li className="text-xl py-8">Mobile-Friendly</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full text-center py-28 lg:text-left overflow-hidden">
        <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 top-0 md:-top-28 lg:top-0 lg:left-0 lg:w-full" />
        <div className="container">
          <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
          <div className="hidden lg:grid gap-7">
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-64">
                  <h3 className="text-xl text-white min-h-[86px]">A user-friendly interface</h3>
                  <p className="text-sm text-white/75">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-64">
                  <h3 className="text-xl text-white min-h-[86px]">
                    Advanced financial statements that detail revenue
                  </h3>
                  <p className="text-sm text-white/75">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-64">
                  <h3 className="text-xl text-white min-h-[86px]">
                    Empowering agents with the ability to retain their own players
                  </h3>
                  <p className="text-sm text-white/75">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-xl text-white min-h-[84px]">
                    Configuration of commission plans for sub-agents
                  </h3>
                  <p className="text-sm text-white/75">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
              <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-72">
                  <h3 className="text-xl text-white min-h-[84px]">Comprehensive reports</h3>
                  <p className="text-sm text-white/75">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
                <div className="grid justify-items-stretch gap-4 max-w-lg">
                  <h3 className="text-xl text-white min-h-[84px]">
                    Real-time betting reports, statistics, and risk data are readily available,
                    along with seamless integration of sportsbook iframes
                  </h3>
                  <p className="text-sm text-white/75 max-w-72">
                    Lorem ipsum dolor sit amet consectetur. Dolor sed diam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
            <li className="text-xl py-8">A user-friendly interface</li>
            <li className="text-xl py-8">Advanced financial statements that detail revenue</li>
            <li className="text-xl py-8">
              Empowering agents with the ability to retain their own players
            </li>
            <li className="text-xl py-8">Configuration of commission plans for sub-agents</li>
            <li className="text-xl py-8">Comprehensive reports</li>
            <li className="text-xl py-8">
              Real-time betting reports, statistics, and risk data are readily available, along with
              seamless integration of sportsbook iframes
            </li>
          </ul>
        </div>
      </div>
      <div className="relative w-full container mx-auto overflow-hidden py-28">
        <div className="absolute z-0 left-1/2 -translate-x-1/2 rounded-full opacity-35 w-10/12 h-80 sm:h-[500px] md:h-[660px] bg-gradient-to-t from-angel-blue-950 xl:w-3/5 lg:h-3/4"></div>
        <h2 className="relative z-10 text-3xl text-center lg:lg:text-4xl text-white lg:mb-12 xl:mb-0">
          Agent System
        </h2>
        <div className="relative z-10 grid gap-16 xl:gap-14">
          <div className="grid grid-cols-1 place-content-start gap-6 lg:grid-cols-2 lg:gap-14 xl:px-16">
            <div className="ralative w-full h-auto">
              <Image
                className="relative object-cover object-center max-w-full h-auto"
                src={AFFILIATE_AGENT_UTILIZE}
                alt=""
              />
            </div>
            <div className="ralative w-full place-self-center">
              <p className="text-lg text-white/75">
                The AngelsHub Agent System utilizes a wide range of features and capabilities to
                facilitate smooth cooperation between the gaming operator and their agents. Our
                versatile tool, which encompasses various functions and languages, allows for the
                creation of multi-tiered structures where transactions are executed with precision
                at each level. This simplifies the tracking of financial aspects within the
                business. <br />
                <br />
                Our platform offers a secure and transparent setting for agents to monitor their
                progress, handle their referrals, and optimize their earnings. At the same time, it
                assists operators in effectively overseeing agent activities and monitoring the
                overall development of the platform.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 px-16 gap-5 sm:grid-cols-2 md:grid-cols-4 md:px-0 md:gap-3 lg:gap-5 xl:px-36">
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Instant Payouts</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_INSTANT} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Security of players&apos; funds and identities</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_SECURITY} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Unlimited free daily transactions</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_UNLIMITED} alt="" />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">No verification needed</h3>
              <Image className="ml-auto mt-auto" src={AFFILIATE_AGENT_VERIFICATION} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={productsRef}
        className="horizontal-scroll relative z-10 w-full py-28 h-full xl:h-[1070px]"
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
                description={product.description}
                image={product.image}
                key={product.title}
              />
            ))}
          </div>
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
    </>
  );
}
