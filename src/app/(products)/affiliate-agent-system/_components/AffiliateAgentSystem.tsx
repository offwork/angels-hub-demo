"use client";
import SiteForm from "@/app/_components/form/AHSiteForm";
import ProductSlider from "@/app/_components/products/AHProductSlider";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { useRef } from "react";
import AffiliateAgentSystemFeatures from "./AffiliateAgentSystemFeatures";
import AffiliateAgentSystemKeyFeatures from "./AffiliateAgentSystemKeyFeatures";
import AffiliateSystem from "./AffiliateSystem";
import AgentSystem from "./AgentSystem";

export default function AffiliateAgentSystem() {
  gsap.registerPlugin(useGSAP, ScrollToPlugin);
  const buttonsRef = useRef<HTMLDivElement>(null!);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const affiliateRef = useRef<HTMLDivElement>(null!);
  const agentRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    (_context, contextSafe) => {
      const affiliateSystem = buttonsRef.current.querySelector<HTMLAnchorElement>("a.affiliate")!;
      const agentSystem = buttonsRef.current.querySelector<HTMLAnchorElement>("a.agent")!;

      const scrollToAffiliateSystem = contextSafe!(() => {
        gsap.to(window, { duration: 1, scrollTo: affiliateRef.current });
      });

      const scrollToAgentSystem = contextSafe!(() => {
        gsap.to(window, { duration: 1, scrollTo: agentRef.current });
      });

      affiliateSystem.addEventListener("click", scrollToAffiliateSystem);
      agentSystem.addEventListener("click", scrollToAgentSystem);

      return () => {
        if (affiliateSystem && agentSystem) {
          affiliateSystem.removeEventListener("click", scrollToAffiliateSystem);
          agentSystem.removeEventListener("click", scrollToAgentSystem);
        }
      };
    },
    { scope: scrollContainerRef.current }
  );

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full w-full overscroll-none overflow-visible"
    >
      <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
        <BrandLogo />
      </AHLink>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28 lg:pb-56">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">
              Affiliate and <br className="md:hidden" /> Agent System
            </h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl pt-40 pb-16 overflow-hidden lg:pt-48 lg:pb-24">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-2xl px-8 lg:text-4xl font-bold text-white lg:px-20 lg:leading-tight">
                AngelsHub offers modern Affiliate and Agent System that helps our customers to gain
                full control over their customer management in multiple languages.
              </h2>
              <div
                ref={buttonsRef}
                className="flex items-center justify-center flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-9 lg:space-x-8 xl:space-x-16"
              >
                <ButtonFill
                  className="bg-angel-orange text-white"
                  size="normal"
                  href="/"
                  selector="affiliate"
                  label="Affiliate System"
                />
                <ButtonFill
                  className="bg-angel-blue text-white"
                  size="normal"
                  href="/"
                  selector="agent"
                  label="Agent System"
                />
              </div>
            </div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 w-3/5 h-auto -top-10 md:w-2/5"
              src="/affiliate-agent-system-offer.png"
              width={410}
              height={399}
              sizes="(min-width: 1140px) 410px, (min-width: 780px) calc(33.53vw + 34px), calc(60vw - 24px)"
              alt="Affiliate and Agent System that helps our customers"
            />
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-[99%] rounded-3xl top-0 bg-gradient-to-t from-black via-black via-25%"></div>
          </div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            width={1728}
            height={482}
            sizes="100vw"
            loading="lazy"
            alt="Angels abstract wave"
          />
        </div>
      </div>

      <div ref={affiliateRef} className="relative container mx-auto w-full pt-28 pb-28 xl:pt-0">
        <AffiliateSystem />
      </div>

      <AffiliateAgentSystemFeatures />

      <AffiliateAgentSystemKeyFeatures />

      <div ref={agentRef} className="relative w-full container mx-auto overflow-hidden py-28">
        <AgentSystem />
      </div>

      <ProductSlider />

      <div className="relative w-full py-14 xl:py-28">
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
  );
}
