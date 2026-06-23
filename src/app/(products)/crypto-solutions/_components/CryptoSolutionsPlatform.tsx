import AngelsHubSVG from "@/app/_components/products/AHSvg";
import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function CryptoSolutionsPlatform() {
  return (
    <div className="relative w-full overflow-hidden pt-28 pb-28 xl:pt-0">
      <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 top-0 md:-top-28 lg:top-0 lg:left-0 lg:w-full" />
      <div className="container grid gap-10 mx-auto xl:gap-14">
        <div className="grid grid-cols-1 place-content-center gap-28 sm:gap-96 md:gap-[480px] lg:grid-cols-2 lg:gap-14 xl:px-16">
          <div className="ralative w-full min-h-80 lg:min-h-[440px]">
            <Image
              className="absolute object-cover object-center max-w-full h-auto -translate-x-6 lg:max-w-md xl:max-w-xl xl:-translate-x-16"
              src="/crypto-solutions-platform.png"
              width={474}
              height={497}
              sizes="(min-width: 1280px) 474px, (min-width: 1040px) 448px, (min-width: 520px) 474px, calc(87vw + 39px)"
              alt="players winning cryptocurrencies"
            />
          </div>
          <div className="ralative grid gap-8 w-full place-self-center">
            <p className="text-lg text-white/75">
              Players in our Crypto Platform are at will to use cryptocurrencies to make deposits
              and/ or withdrawals. They use cryptocurrencies to fund the games that they intend to
              play at the casino of their choice.
            </p>
            <p className="text-lg text-white/75">
              Providing customers anonymity and total control, among other things, digital
              currencies are considered one of the safest forms.
            </p>
            <p className="text-lg text-white/75">
              Crypto Platform has the same rules and terms like the regular casino. The only
              difference is that with crypto platform a player is depositing and also winning
              cryptocurrencies.
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
              src="/crypto-sulionts-instant.svg"
              unoptimized
              width={49}
              height={54}
              alt="Instant Payouts"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Security of players&apos; funds and identities</h3>
            <Image
              className="ml-auto mt-auto"
              src="/crypto-sulionts-security.svg"
              unoptimized
              width={57}
              height={58}
              alt="Security of players' funds and identities"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">Unlimited free daily transactions</h3>
            <Image
              className="ml-auto mt-auto"
              src="/crypto-sulionts-unlimited.svg"
              unoptimized
              width={51}
              height={58}
              alt="Unlimited free daily transactions"
            />
          </div>
          <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
            <h3 className="text-xl text-white">No verification needed</h3>
            <Image
              className="ml-auto mt-auto"
              src="/crypto-sulionts-verification.svg"
              unoptimized
              width={44}
              height={60}
              alt="No verification needed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
