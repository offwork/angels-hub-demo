import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function CryptoSolutionsSecure() {
  return (
    <div className="relative container mx-auto w-full py-28">
      <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
        <div className="relative grid gap-16 justify-items-center bg-black w-full h-full rounded-3xl overflow-hidden px-8 sm:px-16 pt-20 pb-9 md:px-10 lg:px-0 md:pt-24 md:pb-11">
          <div className="relative z-10 text-center grid place-content-start gap-10 place-items-center">
            <h2 className="text-2xl md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
              Crypto Solution at AngelsHub <br /> Platform is always Stable and Secure
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-white">
              Popularity of crypto gambling raised in <br className="hidden md:block" /> year 2017
              and 2018.
            </h3>
            <p className="text-base md:text-lg text-white/75 lg:max-w-3xl">
              AngelsHub Platform offers to all customers cryptocurrency gaming, providing a fun,
              quick and fair experience for the crypto gambling enthusiast. <br />
              <br />
              Our team permanently monitors, supports and exceed the expectations of our gamers. We
              provide cryptocurrency-based casino that allows lightning-fast withdrawals secured by
              the blockchain, anonymously and effortlessly.
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
          <div className="relative mx-auto w-10/12 sm:w-3/5 md:w-1/2 lg:w-2/5">
            <Image
              className="relative"
              src="/crypto-sulionts-popularity.png"
              width={444}
              height={334}
              sizes="(min-width: 1280px) 444px, (min-width: 1040px) 370px, (min-width: 780px) 310px, (min-width: 640px) 286px, (min-width: 380px) 229px, calc(83.33vw - 57px)"
              alt="AngelsHub Platform is always Stable and Secure"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
