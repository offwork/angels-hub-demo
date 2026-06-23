import ButtonFill from "@/components/ui/AHButtonFill";
import Image from "next/image";

export default function SportsbookGamification() {
  return (
    <div className="relative container mx-auto w-full py-28">
      <div className="block w-full rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-3xl">
        <div className="relative grid gap-16 justify-items-center pt-9 pb-28 lg:pt-20 lg:pb-32 xl:pt-24 xl:pb-48 bg-black w-full h-full rounded-3xl overflow-hidden">
          <div className="relative z-10 text-center grid place-content-start gap-9 place-items-center">
            <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white">
              Sportsbook Gamification
            </h2>
            <p className="md:text-lg px-6 text-white/75 lg:max-w-3xl">
              Advanced bonus engine to setup Sportsbook tournament & 4 types of automated bonuses to
              target a specific audience effortlessly based on an abundance of filters & KPIs
              through our sophisticated tagging system with the ability to enable cross product
              bonus wagering as well as specific game setting for wager goals
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
          <div className="relative mx-auto z-10 md:w-[90%] lg:w-[80%] grid gap-16 md:gap-3 lg:gap-6 grid-cols-1 md:grid-cols-2 xl:gap-10">
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-deposit.png"
                  unoptimized
                  width={64}
                  height={76}
                  alt="Deposit Bonus on both Sports & Casino"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-xs text-white/75 md:text-sm xl:text-base">
                  Deposit Bonus (Strict & Regular) on both Sports & Casino
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-freespin.png"
                  unoptimized
                  width={64}
                  height={105}
                  alt="Cashout"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-xs text-white/75 md:text-sm xl:text-base">Cashout</h3>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-freebet.png"
                  unoptimized
                  width={64}
                  height={53}
                  alt="Freebet"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-xs text-white/75 md:text-sm xl:text-base">Freebet</h3>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 md:px-0 xl:space-x-4">
              <div className="flex-shrink relative bg-gray-800/60 w-32 h-28 rounded-xl">
                <Image
                  className="absolute inset-0 m-auto w-2/4 h-auto"
                  src="/supportsbook-cashback.png"
                  width={64}
                  height={54}
                  unoptimized
                  alt="Cashback"
                />
              </div>
              <div className="flex-1 grid gap-1">
                <h3 className="text-xs text-white/75 md:text-sm xl:text-base">Cashback</h3>
              </div>
            </div>
          </div>
          <Image
            className="absolute opacity-40 z-0 left-1/2 -translate-x-1/2 w-3/4 -bottom-[10%] md:-bottom-1/4 xl:-bottom-[40%]"
            src="/supports-big-black-ball.png"
            width={885}
            height={885}
            alt="Angels big black ball"
          />
        </div>
      </div>
    </div>
  );
}
