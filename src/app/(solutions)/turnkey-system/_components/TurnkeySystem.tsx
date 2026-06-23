import SiteForm from "@/app/_components/form/AHSiteForm";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function TurnkeySystem() {
  return (
    <>
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
              <h1 className="text-white font-bold text-4xl md:text-7xl">Turnkey-System</h1>
            </div>
          </div>
          <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
            <div className="flex bg-black w-full h-full rounded-3xl py-28 overflow-hidden lg:py-56">
              <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
                <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                  Ultimate Flexibility for Customizations, Dynamic Content, and Real-Time
                  Hyper-Segmentation
                </h2>
                <p className="md:text-lg px-6 text-white/75 lg:px-32">
                  AngelsHub Platform&apos;s propriety CMS allows great length of flexibility for
                  customisations and localisations, dynamic content and real-time
                  hyper-segmentation.
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
                loading="lazy"
                alt="AngelsHub Turnkey-System black background"
              />
              <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-3/5 rounded-3xl top-10 bg-gradient-to-t from-black via-black via-25%"></div>
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -top-14 w-3/4 h-auto sm:w-1/2 md:w-2/5"
                src="/turnkey-system-main.png"
                width={410}
                height={410}
                alt="Real-Time Hyper-Segmentation"
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
          <div className="relative z-10 container mx-auto">
            <div className="grid grid-cols-1 place-content-center gap-16 xl:grid-cols-2">
              <div className="relative place-self-center lg:place-self-end">
                <h2 className="text-3xl xl:text-5xl text-white">
                  AngelsHub presents the ultimate/leading/top-tier Turnkey System for your iGaming
                  venture.
                </h2>
              </div>
              <div className="ralative w-full place-self-center xl:row-span-2">
                <Image
                  className="relative object-cover object-center w-full h-auto left-1/2 -translate-x-1/2"
                  src="/website-api-security.png"
                  width={560}
                  height={489}
                  loading="lazy"
                  alt="Turnkey System for your iGaming venture"
                />
              </div>
              <div className="ralative grid gap-8 place-self-center lg:place-self-auto">
                <p className="text-xl text-white">
                  Experience groundbreaking technology tailored for managing core betting and gaming
                  operations. Our fully customizable solution adapts to your specific needs,
                  enhancing game offerings for operators worldwide.
                </p>
                <p className="text-lg text-white/75">
                  What&apos;s more, our customers receive everything ready for immediate use upon
                  installation, ensuring smooth business operations from day one.
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
          </div>
        </div>

        <div className="relative z-10 block container w-full py-40 mx-auto">
          <div className="grid grid-flow-row lg:grid-flow-col gap-10 justify-items-stretch py-28 border-y border-white/20">
            <div className="relative grid gap-8 content-center justify-self-center text-center lg:text-left lg:justify-self-start">
              <h2 className="text-3xl xl:text-6xl text-white">
                Our Turnkey <br /> System includes
              </h2>
              <ButtonFill
                className="bg-angel-orange text-white"
                size="medium"
                href="/contact"
                target="_blank"
                label={"BOOK A MEETING"}
              />
            </div>
            <div className="grid mx-auto grid-cols-1 px-20 gap-5 sm:grid-cols-2 sm:gap-3 lg:gap-5 lg:grid-cols-3 lg:px-6 xl:px-0 xl:max-w-6xl">
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">iGaming Platform</h3>
                <Image
                  className="ml-auto mt-auto"
                  src="/crypto-sulionts-instant.svg"
                  width={46}
                  height={54}
                  alt="iGaming Platform"
                  unoptimized
                />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5">
                <h3 className="text-xl text-white">Licensing Assistance</h3>
                <Image
                  className="ml-auto mt-auto"
                  src="/turnkey-system-license.svg"
                  width={49}
                  height={57}
                  alt="White Label License"
                  unoptimized
                />
              </div>
              <div className="relative w-full h-56 bg-angel-blue-500 rounded-xl flex flex-col p-5 col-auto sm:col-span-2 lg:col-auto">
                <h3 className="text-xl text-white">Affiliate System</h3>
                <Image
                  className="ml-auto mt-auto"
                  src="/turnkey-system-hosting.svg"
                  width={66}
                  height={52}
                  alt="Affiliate System"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full container text-center pb-28 pt-36 lg:pt-20 lg:text-left xl:pt-0">
          <h2 className="text-4xl text-white mb-12 xl:text-7xl">Key Features</h2>
          <div className="hidden lg:grid gap-7">
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Own Share Control in a Gambling Industry for Casino Owners
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Granting casino owners autonomy and control over their share within the gambling
                    industry.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Comprehensive Platform with User-friendly Controls
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Access a comprehensive platform equipped with user-friendly controls for
                    seamless navigation and management.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Time and Resource Management
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Optimize efficiency with tools for effective time and resource management,
                    enhancing productivity.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">High-Quality Design</h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Elevate your iGaming website with visually stunning aesthetics and intuitive
                    user interfaces, enhancing user engagement and brand credibility.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    Simplified Payment System
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Streamline financial transactions with a simplified payment system, ensuring
                    convenience and security for all parties involved.
                  </p>
                </div>
              </div>
              <div className="flex-grow rounded-xl h-56 bg-angel-orange p-6">
                <div className="grid h-full justify-items-stretch gap-4 max-w-80">
                  <h3 className="text-base xl:text-xl text-white min-h-16">
                    24/7 Technical Assistance
                  </h3>
                  <p className="text-xs xl:text-sm text-white/75">
                    Receive round-the-clock technical support to address any queries or issues
                    promptly, ensuring uninterrupted operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="lg:hidden list-disc list-outside text-left text-white xs:pl-3 sm:pl-0 md:px-16 grid divide-y divide-white/50">
            <li className="text-xl py-8">
              Own Share Control in a Gambling Industry for Casino Owners
            </li>
            <li className="text-xl py-8">Comprehensive Platform with User-friendly Controls</li>
            <li className="text-xl py-8">Time and Resource Management</li>
            <li className="text-xl py-8">High-Quality Design</li>
            <li className="text-xl py-8">Simplified Payment System</li>
            <li className="text-xl py-8">24/7 Technical Assistance</li>
          </ul>
        </div>

        <Footer>
          <SiteForm message="Your message has been sent successfully." />
        </Footer>
      </div>
    </>
  );
}
