import SiteForm from "@/app/_components/form/AHSiteForm";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28 lg:pb-56">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">About AngelsHub</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="relative z-10 flex bg-black w-full h-full rounded-3xl pt-24 pb-16 sm:pt-40 md:pt-52 lg:pt-64 lg:pb-24 xl:pt-72">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-32">
                AngelsHub Platform has everything you need to start your iGaming business.
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                AngelsHub is an international company with a great team of iGaming software experts
                with more than 20 years of experience in the field. Our ”customer-first” strategy is
                the way how we work. To our customers, we provide a flexible, modular, and
                customisable solution so they can build and grow successful online casino businesses
                across any market. <br /> <br />
                And today we can proudly say that we have extensive experience and know-how that
                will help to provide the best services to our customers in order to launch and
                successfully develop their iGaming businesses.
              </p>
            </div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 -top-14 sm:-top-20 w-4/5 h-auto lg:w-4/6 lg:-top-16"
              src="/about-angelshub.png"
              width={680}
              height={374}
              priority
              alt="AngelsHub iGaming business Platform"
            />
          </div>
        </div>
        <div className="absolute block w-full top-0 inset-x-0 h-1/2 lg:h-full lg:top-0 overflow-hidden">
          <Image
            className="relative z-0 object-cover mix-blend-luminosity h-full w-auto md:w-full"
            src="/supportsbook-main.png"
            width={1728}
            height={1268}
            loading="lazy"
            alt="AngelsHub About background"
            />
          <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-10%"></div>
        </div>
        <div className="absolute left-0 z-10 w-full h-auto bottom-10 overflow-hidden py-5 xl:bottom-1/4 3xl:bottom-1/4">
          <Image
            className="relative object-cover object-center scale-150 w-full h-auto mix-blend-lighten opacity-20 drop-shadow-lg lg:scale-110"
            src="/abstract-wave.png"
            width={1728}
            height={482}
            alt="Angels abstract wave"
            loading="lazy"
            sizes="100vw"
          />
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-28">
        <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 top-20 md:top-28 lg:top-0 lg:left-0 lg:w-full xl:-top-20" />
        <div className="relative z-10 container grid mx-auto lg:gap-10 xl:gap-14">
          <h2 className="text-4xl text-white md:text-6xl">Mission and Vision</h2>
          <div className="grid grid-cols-1 place-content-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="ralative w-full order-last lg:order-first">
              <p className="text-xl md:text-3xl font-light lg:text-2xl xl:text-3xl text-white">
                We can proudly say that we have extensive experience and a know-how that will help
                to provide the best services to our customers in order to launch and successfully
                develop their iGaming businesses.
              </p>
              <br />
              <p className="text-base md:text-xl lg:text-lg xl:text-xl text-white">
                We believe that through constant innovation and hard work, we will break down any
                barrier that stands between iGaming operators and the success they are aiming for.{" "}
                <br /> <br />
                Last but not least, we don&apos;t forget that running a productive line of work is
                based on trust and respect. This approach is the reason why our projects have been
                and will remain successful.
              </p>
            </div>
            <Image
              className="relative object-contain object-center rotate-6 drop-shadow-4xl -right-4 order-first my-10 lg:order-last xl:-top-20"
              src="/Mission_and_Vision.png"
              width={564}
              height={439}
              loading="lazy"
              alt="provide the best services to your iGaming businesses"/>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-28">
        <div className="container mx-auto w-full">
          <div className="w-full bg-angel-orange rounded-[30px] py-6 lg:py-10 drop-shadow-3xl">
            <h2 className="text-2xl text-white font-bold text-center mb-4 md:text-4xl lg:mb-11">
              Our Offices
            </h2>
            <Image
              className="relative object-contain object-center"
              src="/Our_Offices.png"
              width={1184}
              height={567}
              loading="lazy"
              alt="AngelsHub offices"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full py-28">
        <div className="relative container mx-auto w-full drop-shadow-3xl">
          <div className="relative grid w-full bg-angel-blue-200 rounded-[30px] overflow-hidden h-[515px] lg:h-[200px]">
            <Image
              className="absolute z-0 object-cover object-left-bottom top-1/2 -translate-y-1/2 w-auto h-full hidden lg:block"
              src="/WE_are_HIRING.png"
              width={1184}
              height={200}
              loading="lazy"
              alt="Join Angels Team"
              />
            <Image
              className="absolute z-0 object-contain scale-[1.8] top-1/2 -translate-y-1/2 lg:hidden"
              src="/HIRING.png"
              width={343}
              height={294}
              loading="lazy"
              alt="Join Angels Team"
            />
            <div className="relative z-10 grid grid-flow-row place-items-center px-2 gap-48 sm:gap-56 md:gap-64 lg:grid-flow-col lg:px-0 lg:gap-14 lg:flex lg:justify-end lg:mr-8 xl:gap-36 xl:mr-16">
              <h2 className="relative z-10 text-3xl text-angel-blue-800 text-center mt-10 sm:mt-20 lg:mt-0 lg:text-2xl xl:text-3xl">
                Join AngelsHub team and take <br className="hidden sm:block" /> your career to the
                next level
              </h2>
              <ButtonFill
                className="bg-angel-orange text-white"
                size="medium"
                href="/careers"
                label={"SEE CAREERS"}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer>
        <SiteForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
