import Image from "next/image";

export default function AffiliateAgentSystemFeatures() {
  return (
    <div className="relative w-full py-28">
      <div className="absolute bg-angel-blue z-0 w-full h-full top-0 left-0 py-[10%] overflow-hidden">
        <Image
          className="relative object-cover mix-blend-lighten opacity-10 h-full w-auto object-center lg:opacity-20 xl:object-left 6xl:-right-[560px]"
          src="/affiliate-agent-system-features.png"
          width={1728}
          height={1315}
          sizes="(min-width: 2260px) calc(-35.27vw + 2930px), calc(94.85vw + 15px)"
          alt="Affiliate Management Software offers a variety of other features"
        />
      </div>
      <div className="relative z-10 container">
        <div className="grid gap-10 lg:gap-14 sm:px-12 md:px-16 lg:px-8 2xl:px-0">
          <h2 className="text-2xl text-center md:text-3xl lg:lg:text-3xl xl:text-4xl font-bold text-white">
            In addition to that, our Affiliate Management <br className="hidden lg:block" />{" "}
            Software offers a variety of other features, including:
          </h2>
          <ul className="list-disc list-outside text-left text-white grid divide-y divide-white/50 xs:pl-3 sm:pl-0">
            <li className="text-xl py-8">
              <h3>
                Dedicated dashboard that presents graphical representations for each affiliate
              </h3>
            </li>
            <li className="text-xl py-8">
              <h3>Detailed access to comprehensive information regarding affiliate performance</h3>
            </li>
            <li className="text-xl py-8">
              <h3>
                Efficiently managed and allocated multiple commission plans, with the flexibility to
                customize them at the affiliate level
              </h3>
            </li>
            <li className="text-xl py-8">
              <h3>Assign affiliate tags either manually or automatically</h3>
            </li>
            <li className="text-xl py-8">
              <h3>
                Approval for sign-ups can be granted automatically or through a manual process
              </h3>
            </li>
            <li className="text-xl py-8">
              <h3>Verification of emails</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Back-office that can be tailored to your specific preferences</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Adaptable commission payment options</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Storage of dynamic content</h3>
            </li>
            <li className="text-xl py-8">
              <h3>In-House Development</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Generation of automated links</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Cost-Efficient Expansion</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Multiplatform Technology</h3>
            </li>
            <li className="text-xl py-8">
              <h3>Mobile-Friendly</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
