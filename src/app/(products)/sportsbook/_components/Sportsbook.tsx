import SiteForm from "@/app/_components/form/AHSiteForm";
import ProductSlider from "@/app/_components/products/AHProductSlider";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import SportsbookGamification from "./SportsbookGamification";
import SportsbookKeyFeatures from "./SportsbookKeyFeatures";

export default function Sportsbook() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
        <BrandLogo />
      </AHLink>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28 lg:pb-56">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Sportsbook</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl pt-40 pb-16 overflow-hidden lg:pt-48 lg:pb-24">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                Build your sports betting platform with AngelsHub.
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                Due to the years of experience our team has in developing sportsbook software, we
                can provide our clients with a complete sports betting solution and much more!
              </p>
              <ButtonFill
                className="bg-angel-orange text-white"
                size="medium"
                href="/contact"
                target="_blank"
                label={"BOOK A MEETING"}
              />
            </div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-3/4 md:w-1/2 h-auto lg:w-[326px] lg:h-[305px]"
              src="/supports-black-ball.png"
              width={326}
              height={305}
              alt="Angels black ball"
            />
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 -top-14 sm:-top-20 w-4/5 h-auto md:w-3/5 lg:w-1/2 lg:-top-24"
              src="/supportsbook-players.png"
              width={560}
              height={698}
              alt="Build your sports betting platform with AngelsHub."
            />
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-[99%] rounded-3xl top-0 bg-gradient-to-t from-black via-black via-25%"></div>
          </div>
        </div>
        <div className="absolute block w-full top-0 inset-x-0 h-1/2 lg:h-full lg:top-0 overflow-hidden bg-angel-blue">
          <Image
            className="relative z-0 object-cover mix-blend-luminosity h-full w-auto lg:h-auto lg:w-full"
            src="/supportsbook-main.png"
            width={1728}
            height={950}
            loading="lazy"
            alt="Advanced sportsbook platform"
          />
          <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue xs:via-60% sm:via-25% md:via-10% lg:via-50% 2xl:via-35% 3xl:via-50%"></div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            width={1728}
            height={482}
            loading="lazy"
            alt="Angels abstract wave"
          />
        </div>
      </div>

      <SportsbookKeyFeatures />

      <SportsbookGamification />

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
