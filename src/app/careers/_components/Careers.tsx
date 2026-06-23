import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import { JOBS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import JobPositions from "./AHJobPositions";
import JobPositionsDesktop from "./AHJobPostionDesktop";

export default function Careers() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>

      <div className="relative px-0 w-full bg-angel-blue overflow-hidden pb-28 lg:px-5">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Careers</h1>
          </div>
        </div>

        <div className="hidden relative container mx-auto z-30 max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-5xl lg:block xl:max-w-7xl">
          <div className="block bg-black w-full h-full rounded-3xl pt-48 pb-24 overflow-hidden">
            <div className="relative z-30 px-8 block w-full overscroll-none">
              <div className="relative z-30 text-left mb-20">
                <h2 className="text-4xl font-bold text-white">
                  Are you ready to find your dream job today?
                </h2>
                <p className="text-lg text-white/75 mt-8">
                  Join AngelsHub team and take your career to the next level
                </p>
              </div>
              <JobPositionsDesktop />
            </div>
          </div>
        </div>

        <div className="relative z-30 block bg-[#252525] w-full h-full py-10 lg:hidden">
          <div className="relative z-30 block overflow-hidden overscroll-none">
            <div className="relative z-30 text-center px-4 sm:px-8">
              <h2 className="text-3xl font-bold text-white">
                Are you ready to find your dream job today?
              </h2>
              <p className="text-lg text-white/75 mt-8">
                Join AngelsHub team and take your career to the next level
              </p>
              <div className="grid w-full px-4 mt-14 sm:px-8 lg:px-16 lg:mt-24">
                <h2 className="text-center text-white font-bold text-xl mb-8 sm:text-3xl">
                  Open Job Positions
                </h2>
              </div>
            </div>
            <JobPositions jobs={JOBS} />
          </div>
        </div>

        <div className="absolute block w-full top-0 inset-x-0 h-auto xl:h-1/4 lg:top-0 overflow-hidden">
          <Image
            className="relative z-0 object-cover h-full w-auto md:w-full"
            src="/careers-main.png"
            width={1728}
            height={482}
            loading="lazy"
            alt="AngelsHub Careers background"
          />
          <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-5%"></div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            width={1728}
            height={482}
            sizes="100vw"
            loading="lazy"
            alt="AngelsHub abstract wave"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
