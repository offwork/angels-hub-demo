import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function AffiliateSystem() {
  return (
    <>
      <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
        <div className="relative grid gap-16 justify-items-center bg-black w-full h-full rounded-3xl overflow-hidden px-8 pt-20 pb-28 sm:px-16 md:px-10 md:pt-24 lg:px-0 lg:pb-0">
          <div className="relative z-10 text-center grid place-content-start gap-10 place-items-center">
            <h2 className="text-2xl md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
              Affiliate System
            </h2>
            <p className="text-base md:text-lg text-white/75 lg:max-w-[730px]">
              The affiliate system of AngelsHub operates on a performance-driven approach,
              incentivizing affiliates to actively promote the iGaming platform and achieve tangible
              outcomes. We offer an extensive range of tools and resources to assist affiliates in
              successfully marketing the platform, which includes distinctive tracking links,
              creative materials, and up-to-date analytics.
            </p>
          </div>
          <div className="flex">
            <ButtonFill
              className="bg-white text-angel-orange"
              size="medium"
              href="/contact"
              target="_blank"
              label={"BOOK A MEETING"}
            />
          </div>
          <div className="relative w-3/4 h-auto">
            <Image
              className="relative object-cover object-center mx-auto"
              src="/affiliate-agent-system-oparate.png"
              width={670}
              height={670}
              sizes="(min-width: 1040px) 670px, (min-width: 780px) 465px, (min-width: 640px) 357px, (min-width: 380px) 206px, calc(75vw - 51px)"
              alt="The affiliate system of AngelsHub operates on a performance-driven approach"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full inset-x-0 -translate-y-24 lg:-translate-y-1/4">
        <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3 lg:gap-5 lg:grid-cols-5 lg:px-6 xl:px-0 xl:max-w-6xl">
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Multi-product and Multi-brand Management</h3>
            <Image
              className="ml-auto mt-auto"
              width={58}
              height={58}
              unoptimized
              src="/affiliate-agent-system-multitouch.svg"
              alt="Multi-product and Multi-brand Management"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Built-in Payment Processing</h3>
            <Image
              className="ml-auto mt-auto"
              width={54}
              height={51}
              unoptimized
              src="/affiliate-agent-system-builtin.svg"
              alt="Built-in Payment Processing"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Flexible Commissions</h3>
            <Image
              className="ml-auto mt-auto"
              width={58}
              height={45}
              unoptimized
              src="/affiliate-agent-system-flexible.svg"
              alt="Flexible Commissions"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Customizable Platform</h3>
            <Image
              className="ml-auto mt-auto"
              width={63}
              height={43}
              unoptimized
              src="/affiliate-agent-system-customizable.svg"
              alt="Customizable Platform"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 sm:col-span-full lg:col-auto">
            <h3 className="text-xl text-white">Near-instant Reporting</h3>
            <Image
              className="ml-auto mt-auto"
              width={48}
              height={48}
              unoptimized
              src="/affiliate-agent-system-reporting.svg"
              alt="Near-instant Reporting"
            />
          </div>
        </div>
      </div>
    </>
  );
}
