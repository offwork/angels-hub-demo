import AngelsHubSVG from "@/app/_components/products/AHSvg";

export default function AffiliateAgentSystemKeyFeatures() {
  return (
    <div className="relative w-full text-center py-28 lg:text-left overflow-hidden">
      <AngelsHubSVG className="absolute z-0 w-[200%] h-auto -left-20 top-0 md:-top-28 lg:top-0 lg:left-0 lg:w-full" />
      <div className="container relative z-10">
        <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
        <div className="hidden lg:grid gap-7">
          <div className="flex flex-row space-x-7">
            <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                <h3 className="text-base xl:text-xl text-white min-h-16">
                  A user-friendly interface
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Navigate effortlessly through the affiliate system with an intuitive interface
                  designed for ease of use.
                </p>
              </div>
            </div>
            <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                <h3 className="text-base xl:text-xl text-white min-h-16">
                  Advanced financial statements that detail revenue
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Gain insights into revenue streams through detailed financial statements,
                  empowering informed decision-making.
                </p>
              </div>
            </div>
            <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
              <div className="grid h-full justify-items-stretch gap-4 max-w-72">
                <h3 className="text-base xl:text-xl text-white min-h-16">
                  Empowering agents with the ability to retain their own players
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Provide agents with autonomy to retain and manage their player base, fostering
                  stronger player-agent relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-7">
            <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                  Configuration of commission plans for sub-agents
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Customize commission plans for sub-agents, optimizing incentives and rewards for
                  performance.
                </p>
              </div>
            </div>
            <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-72">
                <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                  Comprehensive reports
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Access in-depth reports covering various aspects of affiliate performance and
                  earnings for comprehensive insights.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
              <div className="grid justify-items-stretch gap-4 max-w-lg">
                <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                  Real-time betting reports, statistics, and risk data are readily available, along
                  with seamless integration of sportsbook iframes
                </h3>
                <p className="text-xs xl:text-sm text-white/75">
                  Access real-time betting reports, statistics, and risk data seamlessly integrated
                  with sportsbook iframes for enhanced monitoring and analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
          <li className="text-xl py-8">
            <h3>A user-friendly interface</h3>
          </li>
          <li className="text-xl py-8">
            <h3>Advanced financial statements that detail revenue</h3>
          </li>
          <li className="text-xl py-8">
            <h3>Empowering agents with the ability to retain their own players</h3>
          </li>
          <li className="text-xl py-8">
            <h3>Configuration of commission plans for sub-agents</h3>
          </li>
          <li className="text-xl py-8">
            <h3>Comprehensive reports</h3>
          </li>
          <li className="text-xl py-8">
            <h3>
              Real-time betting reports, statistics, and risk data are readily available, along with
              seamless integration of sportsbook iframes
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
