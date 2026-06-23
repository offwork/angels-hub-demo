export default function SportsbookKeyFeatures() {
  return (
    <div className="relative w-full container text-center pb-28 pt-36 lg:pt-20 lg:text-left xl:pt-0">
      <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
      <div className="hidden lg:grid gap-7">
        <div className="flex flex-row space-x-7">
          <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
            <div className="grid h-full justify-items-stretch gap-4 max-w-72">
              <h3 className="text-base xl:text-xl text-white min-h-16">
                Multi-currency and single wallet
              </h3>
              <p className="text-xs xl:text-sm text-white/75">
                Seamlessly manage funds in various currencies through a unified wallet system.
              </p>
            </div>
          </div>
          <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
            <div className="grid h-full justify-items-stretch gap-4 max-w-72">
              <h3 className="text-base xl:text-xl text-white min-h-16">Risk management tools</h3>
              <p className="text-xs xl:text-sm text-white/75">
                Employ sophisticated tools to mitigate risks and optimize profitability.
              </p>
            </div>
          </div>
          <div className="flex-grow rounded-xl h-48 bg-angel-orange p-6">
            <div className="grid h-full justify-items-stretch gap-4 max-w-72">
              <h3 className="text-base xl:text-xl text-white min-h-16">Mobile, web</h3>
              <p className="text-xs xl:text-sm text-white/75">
                Accessible across mobile and web platforms for convenient betting anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-7">
          <div className="basis-3/5 rounded-xl h-52 bg-angel-orange p-6">
            <div className="grid justify-items-stretch gap-4 max-w-96">
              <h3 className="text-base xl:text-xl text-white min-h-[84px]">Customisable views</h3>
              <p className="text-xs xl:text-sm text-white/75">
                Tailor the interface to individual preferences for an enhanced user experience.
              </p>
            </div>
          </div>
          <div className="basis-2/5 rounded-xl h-52 bg-angel-orange p-6">
            <div className="grid justify-items-stretch gap-4 max-w-96">
              <h3 className="text-base xl:text-xl text-white min-h-[84px]">Cashout</h3>
              <p className="text-xs xl:text-sm text-white/75">
                Offer the flexibility for users to cash out their bets before the event concludes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-7">
          <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
            <div className="grid justify-items-stretch gap-4 max-w-96">
              <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                Advanced Tagging system for personalized bonuses, content and much more
              </h3>
              <p className="text-xs xl:text-sm text-white/75">
                Harness a robust tagging system to deliver personalized bonuses, content, and
                services to users.
              </p>
            </div>
          </div>
          <div className="flex-grow rounded-xl h-52 bg-angel-orange p-6">
            <div className="grid justify-items-stretch gap-4 max-w-96">
              <h3 className="text-base xl:text-xl text-white min-h-[84px]">
                Multiple feeds and ability to run more than one Sportsbook simultaneously
              </h3>
              <p className="text-xs xl:text-sm text-white/75">
                Integrate multiple data feeds and operate multiple Sportsbooks concurrently for
                expanded offerings and enhanced user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
        <li className="text-xl py-8">
          <h3>Multi-currency and single wallet</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Risk management tools</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Mobile, web</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Customisable views</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Cashout</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Advanced Tagging system for personalized bonuses, content and much more</h3>
        </li>
        <li className="text-xl py-8">
          <h3>Multiple feeds and ability to run more than one Sportsbook simultaneously</h3>
        </li>
      </ul>
    </div>
  );
}
