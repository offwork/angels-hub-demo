import SiteForm from "@/app/_components/form/AHSiteForm";
import ProductSlider from "@/app/_components/products/AHProductSlider";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import CryptoSolutionsPlatform from "./CryptoSolutionsPlatform";
import CryptoSolutionsSecure from "./CryptoSolutionsSecure";

export default function CryptoSolutions() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
        <BrandLogo />
      </AHLink>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28 lg:pb-56">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Crypto Solutions</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl pt-40 pb-16 overflow-hidden lg:pt-48 lg:pb-24">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-2xl px-8 lg:text-4xl font-bold text-white lg:px-20 lg:leading-tight">
                We are glad to introduce our Crypto Solutions that support all available
                cryptocurrencies included Bitcoin, Ethereum, Litecoin, Dogecoin, Tether, Bitcoin
                Cash, Ripple, Binance Coin, Cardano, TRON, and many more.
              </h2>
              <ButtonFill
                className="bg-angel-orange text-white"
                size="medium"
                href="/contact"
                target="_blank"
                label={"BOOK A MEETING"}
              />
            </div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 w-3/5 h-auto -top-10 md:w-1/2"
              src="/crypto-solutions-currency.png"
              width={512}
              height={535}
              sizes="(min-width: 1140px) 512px, (min-width: 780px) calc(41.76vw + 44px), calc(60vw - 24px)"
              alt="Crypto Solutions that support all available cryptocurrencies"
            />
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-[99%] rounded-3xl top-0 bg-gradient-to-t from-black via-black via-25%"></div>
          </div>
        </div>
        <div className="absolute block w-full top-0 inset-x-0 h-1/2 lg:h-full lg:top-0 overflow-hidden">
          <div className="relative mx-auto w-full h-full">
            <Image
              className="absolute object-contain mix-blend-luminosity w-full h-auto -left-36 top-44 md:w-3/4 lg:w-2/5 lg:left-10 lg:top-1/3 lg:-translate-y-1/2"
              src="/crypto-solutions-main-spin.png"
              sizes="(min-width: 1040px) 40vw, (min-width: 780px) 75vw, 100vw"
              width={691}
              height={456}
              loading="lazy"
              alt="Crypto Solutions spin image"
            />
            <Image
              className="absolute object-contain mix-blend-luminosity w-1/3 h-auto -right-14 top-48 md:w-3/12 lg:w-1/5 lg:right-0 lg:top-1/3 lg:-translate-y-1/2 lg:-translate-x-1/4"
              src="/crypto-solutions-main-chips.png"
              width={346}
              height={414}
              loading="lazy"
              sizes="(min-width: 1040px) 20vw, (min-width: 780px) 25vw, 33.26vw"
              alt="Crypto Solutions chips image"
            />
          </div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            width={1728}
            height={482}
            loading="lazy"
            alt="Angels abstract wave"
            sizes="100vw"
          />
        </div>
      </div>

      <CryptoSolutionsPlatform />

      <CryptoSolutionsSecure />

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
