import SiteForm from "@/app/_components/form/AHSiteForm";
import ProductSlider from "@/app/_components/products/AHProductSlider";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import Providers from "@/components/layout/AHProviders";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import OnlineCasinoGamification from "./OnlineCasinoGamification";
import OnlineCasinoKeyFeatures from "./OnlineCasinoKeyFeatures";

export default function OnlineCasino() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
        <BrandLogo />
      </AHLink>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28 lg:pb-56">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Online Casino</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl pt-40 pb-16 overflow-hidden lg:pt-48 lg:pb-24">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                Online Casino Aggregator is a complete one-stop solution for starting your online
                and mobile casino business.
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                The aggregator offers a full suite of tools and features for successfully operating
                and maintaining an online casino website.
              </p>
              <ButtonFill
                className="bg-angel-orange text-white"
                size="medium"
                href="/contact"
                target="_blank"
                label={"BOOK A MEETING"}
              />
            </div>
            <div className="absolute z-0 min-w-full h-full -top-6 sm:-top-6 lg:-top-1">
              <svg
                className="absolute w-16 h-auto md:w-20 lg:w-28 z-10 left-1/2 -translate-x-[64%] -translate-y-[14%]"
                width="100%"
                height="100%"
                viewBox="0 0 370 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                  fill="#FF5F00"
                />
              </svg>
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-3/4 md:w-1/2 h-auto"
                src="/online-casino-aggregator.png"
                width={512}
                height={446}
                sizes="(min-width: 1140px) 512px, (min-width: 780px) calc(41.76vw + 44px), calc(75vw - 30px)"
                alt="online casino aggregator"
              />
            </div>
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-[99%] rounded-3xl top-0 bg-gradient-to-t from-black via-black via-25%"></div>
          </div>
        </div>
        <div className="absolute block w-full h-full inset-x-0 top-0 overflow-hidden">
          <Image
            className="relative w-full mt-44 mx-auto mix-blend-luminosity scale-[1.35] lg:mt-28 lg:scale-100 lg:w-full xl:w-4/5"
            src="/online-casino-main.png"
            width={1382}
            height={534}
            sizes="(min-width: 1280px) 80vw, 100vw"
            loading="lazy"
            alt="Online casino platform"
          />
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            sizes="100vw"
            width={1728}
            height={482}
            loading="lazy"
            alt="Angels abstract wave"
          />
        </div>
      </div>

      <OnlineCasinoKeyFeatures />

      <OnlineCasinoGamification />

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
