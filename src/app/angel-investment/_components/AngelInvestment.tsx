import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";
import WAVE from "../../../../public/abstract-wave.png";
import ANGEL_INVESTMENT_MAIN from "../../../../public/ANGELINVESTMENT_MAIN.jpg";
import InvestmentContent from "./AHInvestmentContent";
import InvestmentForm from "./AHInvestmentForm";

export default function AngelInvestment() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>

      <div className="relative w-full bg-angel-blue overflow-hidden">
        <div className="absolute z-30 mt-28 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Angel Investment</h1>
          </div>
        </div>
        <div className="relative z-0 inline-block w-full top-0 inset-x-0 overflow-hidden bg-angel-blue max-h-lvh lg:min-h-[860px]">
          <Image
            className="relative z-0 object-cover object-center w-full h-auto mix-blend-luminosity top-32 -translate-y-1/4 scale-[2] sm:scale-150 lg:scale-125 xl:scale-100 xl:top-1/2"
            src={ANGEL_INVESTMENT_MAIN}
            alt="Angel Investment and support for gaming"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-radial from-angel-blue via-angel-blue via-100%"></div>
          <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-10% sm:via-25% md:via-30% xl:via-40% 2xl:via-30% 3xl:via-25%"></div>
          <Image
            className="absolute z-10 object-cover object-center mix-blend-lighten opacity-30 w-full h-auto botto drop-shadow-lg -bottom-6 sm:bottom-20 md:bottom-32 2xl:bottom-10 3xl:-bottom-10 4xl:-bottom-20 5xl:-bottom-10 6xl:-bottom-20"
            src={WAVE}
            loading="lazy"
            alt="AngelsHub abstract wave"
          />
          <div className="absolute z-20 w-full top-56 sm:top-72 md:top-80 lg:top-96 xl:top-80 2xl:top-[376px] 3xl:top-[416px] 4xl:top-[460px] 5xl:top-[514px] 6xl:top-[660px]">
            <div className="grid gap-4 justify-items-center sm:gap-10">
              <h2 className="text-sm font-bold text-white text-center sm:text-lg lg:text-2xl 3xl:text-3xl 6xl:text-5xl">
                We provide Angel Investment and <br /> support for gaming entrepreneurs to <br />{" "}
                make their brands successful.
              </h2>
              <div className="flex">
                <ButtonFill
                  className="bg-angel-orange text-white"
                  size="medium"
                  href="/contact"
                  target="_blank"
                  label={"BOOK A MEETING"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InvestmentContent />

      <Footer>
        <InvestmentForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
