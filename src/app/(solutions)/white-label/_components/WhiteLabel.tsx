import SiteForm from "@/app/_components/form/AHSiteForm";
import PlatformSlider from "@/app/_components/platform/AHPlatformSlider";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function WhiteLabel() {
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
            <h1 className="text-white font-bold text-4xl md:text-7xl">White Label</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl py-28 overflow-hidden lg:py-36">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                Discover the Power of Our White Label iGaming Solution
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                Experience a seamless, customizable platform designed to elevate your online gaming
                business. Our comprehensive suite of tools and features includes everything from
                game integration to secure payment processing, ensuring an engaging user experience.
                Partner with us to enhance your brand and achieve rapid growth in the competitive
                iGaming market.
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
              className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 mix-blend-luminosity opacity-30 w-[99%] h-auto"
              src="/black-background.png"
              width={1014}
              height={285}
              alt="AngelsHub WhiteLabel black background"
            />
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-3/5 rounded-3xl top-10 bg-gradient-to-t from-black via-black via-25%"></div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 -top-14 w-3/4 h-auto sm:w-1/2 md:w-2/5"
              src="/website-api-main.png"
              width={410}
              height={264}
              loading="lazy"
              alt="Discover the Power of Our White Label"
            />
          </div>
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

      <div className="relative w-full overflow-hidden pt-28 pb-28 xl:pt-0">
        <AngelsHubSVG className="absolute z-0 w-[200%] h-auto top-1/2 -translate-y-1/2 lg:w-full" />
        <div className="relative z-10 container grid gap-10 mx-auto xl:gap-32">
          <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3  lg:gap-5 lg:grid-cols-6 lg:px-6 xl:px-0 xl:max-w-6xl">
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">iGaming Platform</h3>
              <Image
                className="ml-auto mt-auto"
                src="/affiliate-agent-system-customizable.svg"
                width={63}
                height={43}
                alt="iGaming Platform"
                unoptimized
              />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Licensing Assistance</h3>
              <Image
                className="ml-auto mt-auto"
                src="/affiliate-agent-system-flexible.svg"
                width={58}
                height={45}
                alt="White Label License"
                unoptimized
              />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Affiliate System</h3>
              <Image
                className="ml-auto mt-auto"
                src="/affiliate-agent-system-builtin.svg"
                width={54}
                height={51}
                alt="Affiliate System"
                unoptimized
              />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
              <h3 className="text-xl text-white">Marketing</h3>
              <Image
                className="ml-auto mt-auto"
                src="/affiliate-agent-system-multitouch.svg"
                width={58}
                height={58}
                alt="Marketing"
                unoptimized
              />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
              <h3 className="text-xl text-white">Payment System</h3>
              <Image
                className="ml-auto mt-auto"
                src="/website-api-payment.svg"
                width={52}
                height={38}
                alt="Payment System"
                unoptimized
              />
            </div>
            <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
              <h3 className="text-xl text-white">Technical Support and Hosting</h3>
              <Image
                className="ml-auto mt-auto"
                src="/crypto-sulionts-security.svg"
                width={57}
                height={58}
                alt="Technical Support and Hosting"
                unoptimized
              />
            </div>
          </div>
          <div className="grid grid-cols-1 place-content-center gap-16 xl:grid-cols-2">
            <div className="relative place-self-center lg:place-self-end">
              <h2 className="text-3xl xl:text-6xl text-white">
                100% Security and Stability with Our White Label Online Casino Software
              </h2>
              <br />
              <p className="text-xl text-white">
                White Label online casino is a great alternative for everyone who wants to set up a
                new casino in a shortest possible time and at reasonable and affordable costs.
              </p>
            </div>
            <div className="ralative w-full place-self-center xl:row-span-2">
              <Image
                className="relative object-cover object-center w-full h-auto left-1/2 -translate-x-1/2"
                src="/website-api-security.png"
                width={560}
                height={489}
                loading="lazy"
                alt="100% Security and Stability"
              />
            </div>
            <div className="ralative place-self-center lg:place-self-auto">
              <p className="text-lg text-white/75">
                Our clients get a specific betting platform with a fixed package of slots, bonuses,
                payment methods and many more and if they like, they can easily remove or add to
                their packages any games, depending on their preferences or interests of the
                targeted users or countries. White Label gaming solution is super flexible which
                makes it one of the best choices in terms of cost efficiency and lead time.
              </p>
              <div className="flex items-center mt-16">
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

      <PlatformSlider />

      <Footer>
        <SiteForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
