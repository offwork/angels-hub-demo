import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function OnlineCasinoGamification() {
  return (
    <div className="relative container mx-auto w-full py-28 overflow-x-hidden">
      <div className="relative z-0 block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
        <div className="relative grid gap-20 justify-items-center pt-9 pb-28 lg:pt-20 lg:pb-32 xl:pt-24 xl:pb-48 bg-black w-full h-full rounded-3xl overflow-hidden">
          <h2 className="text-3xl px-4 lg:text-4xl font-bold text-white">Casino Gamification</h2>
          <div className="flex relative z-20">
            <ButtonFill
              className="bg-white text-angel-orange"
              size="medium"
              href="/contact"
              target="_blank"
              label={"BOOK A MEETING"}
            />
          </div>
          <div className="relative mx-auto z-20 md:w-[90%] lg:w-[80%] grid gap-16 md:gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:gap-10">
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-deposit.png"
                  width={64}
                  height={75}
                  unoptimized
                  alt="real time rankings updated at the Tournament page"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                  Tournaments
                </h3>
                <p className="text-xs text-white/75 md:text-sm xl:text-base">
                  In house, with real time rankings updated at the Tournament page
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-freespin.png"
                  width={64}
                  height={105}
                  unoptimized
                  alt="Bonus Management System"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                  Bonus Management System
                </h3>
                <p className="text-xs text-white/75 md:text-sm xl:text-base">
                  Activate free spins, as well as configure deposit and manual bonuses directly from
                  backoffice
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-3/4 h-auto"
                  src="/supportsbook-freebet.png"
                  width={96}
                  height={80}
                  unoptimized
                  alt="Exchange loyalty points for bonuses and bonus spins"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                  Loyalty Program
                </h3>
                <p className="text-xs text-white/75 md:text-sm xl:text-base">
                  Exchange loyalty points for bonuses and bonus spins
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/3 h-auto"
                  src="/supportsbook-freebet.png"
                  width={85}
                  height={72}
                  unoptimized
                  alt="Single Integration"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-base font-medium text-white md:text-lg xl:text-xl">
                  Single Integration
                </h3>
                <p className="text-xs text-white/75 md:text-sm xl:text-base">Single Integration</p>
              </div>
            </div>
          </div>
          <Image
            className="absolute opacity-30 z-0 left-1/2 -translate-x-1/2 w-3/4 -bottom-[10%] md:-bottom-1/4 lg:-bottom-[40%] xl:-bottom-1/2"
            src="/online-casino-chip.png"
            width={885}
            height={899}
            sizes="(min-width: 1280px) 885px, (min-width: 1040px) 693px, (min-width: 780px) 525px, (min-width: 640px) 453px, (min-width: 380px) 254px, 75vw"
            alt="Angels big black chip"
          />
        </div>
        <div className="hidden xl:block absolute z-10 left-0 top-0 w-full h-full">
          <Image
            className="relative w-1/5 h-auto -right-full -translate-x-1/2 "
            src="/online-casino-gamification-2.png"
            width={237}
            height={295}
            sizes="237px"
            alt="Angels gamification Tinkerbell"
          />
          <Image
            className="relative w-1/4 h-auto inline-block -bottom-[15%] -translate-x-1/2"
            src="/online-casino-gamification-1.png"
            width={296}
            height={369}
            sizes="296px"
            alt="Angels gamification Genie"
          />
          <Image
            className="relative filter-none w-1/3 h-auto inline-block -bottom-[15%] -right-3/4 -translate-x-1/2"
            src="/online-casino-gamification-3.png"
            width={395}
            height={395}
            sizes="395px"
            alt="AngelsHub gamification Guard"
          />
        </div>
      </div>
    </div>
  );
}
