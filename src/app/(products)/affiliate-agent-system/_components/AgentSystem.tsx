import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function AgentSystem() {
  return (
    <>
      <div className="absolute z-0 left-1/2 -translate-x-1/2 rounded-full opacity-35 w-10/12 h-80 sm:h-[500px] md:h-[660px] bg-gradient-to-t from-angel-blue-950 xl:w-3/5 lg:h-3/4"></div>
      <h2 className="relative z-10 text-3xl text-center lg:lg:text-4xl text-white lg:mb-12 xl:mb-0">
        Agent System
      </h2>
      <div className="relative z-10 grid gap-16 xl:gap-14">
        <div className="grid grid-cols-1 place-content-start gap-6 lg:grid-cols-2 lg:gap-14 xl:px-16">
          <div className="ralative w-full h-auto">
            <Image
              className="relative object-cover object-center max-w-full h-auto"
              src="/affiliate-agent-system-utilize.png"
              width={500}
              height={500}
              sizes="(min-width: 1280px) 500px, (min-width: 1040px) 436px, (min-width: 640px) 500px, (min-width: 380px) 343px, 100vw"
              alt="Agent System"
            />
          </div>
          <div className="ralative grid gap-8 w-full place-self-center">
            <p className="text-lg text-white/75">
              The AngelsHub Agent System utilizes a wide range of features and capabilities to
              facilitate smooth cooperation between the gaming operator and their agents. Our
              versatile tool, which encompasses various functions and languages, allows for the
              creation of multi-tiered structures where transactions are executed with precision at
              each level. This simplifies the tracking of financial aspects within the business.
            </p>
            <p className="text-lg text-white/75">
              Our platform offers a secure and transparent setting for agents to monitor their
              progress, handle their referrals, and optimize their earnings. At the same time, it
              assists operators in effectively overseeing agent activities and monitoring the
              overall development of the platform.
            </p>
            <ButtonFill
              className="bg-angel-orange text-white"
              size="medium"
              href="/contact"
              target="_blank"
              label={"BOOK A MEETING"}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 px-16 gap-5 sm:grid-cols-2 md:grid-cols-4 md:px-0 md:gap-3 lg:gap-5 xl:px-36">
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Instant Payouts</h3>
            <Image
              className="ml-auto mt-auto"
              width={49}
              height={54}
              unoptimized
              src="/crypto-sulionts-instant.svg"
              alt="Instant Payouts"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Security of players&apos; funds and identities</h3>
            <Image
              className="ml-auto mt-auto"
              width={57}
              height={58}
              unoptimized
              src="/crypto-sulionts-security.svg"
              alt="Security of players' funds and identities"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Unlimited free daily transactions</h3>
            <Image
              className="ml-auto mt-auto"
              width={51}
              height={58}
              unoptimized
              src="/crypto-sulionts-unlimited.svg"
              alt="Unlimited free daily transactions"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">No verification needed</h3>
            <Image
              className="ml-auto mt-auto"
              width={44}
              height={60}
              unoptimized
              src="/crypto-sulionts-verification.svg"
              alt="No verification needed"
            />
          </div>
        </div>
      </div>
    </>
  );
}
