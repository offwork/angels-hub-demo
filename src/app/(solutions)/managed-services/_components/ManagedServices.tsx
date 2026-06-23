import SiteForm from "@/app/_components/form/AHSiteForm";
import AngelsHubSVG from "@/app/_components/products/AHSvg";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import ButtonFill from "@/components/ui/AHButtonFill";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function ManagedServices() {
  return (
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
            <h1 className="text-white font-bold text-4xl md:text-7xl">Managed Services</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="flex bg-black w-full h-full rounded-3xl py-28 overflow-hidden lg:py-56">
            <div className="relative z-30 text-center grid place-content-end gap-10 place-items-center">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white lg:px-40">
                Expert Marketing, Customer Support, Responsible Gaming, and Payments Management
              </h2>
              <p className="md:text-lg px-6 text-white/75 lg:px-32">
                We have a diverse selection of professional services available for our customers,
                including marketing, customer support, responsible gaming, and payments management.
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
              alt="AngelsHub Managed Services black background"
            />
            <div className="absolute z-10 left-1/2 -translate-x-1/2 w-[99%] h-3/5 rounded-3xl top-10 bg-gradient-to-t from-black via-black via-25%"></div>
            <Image
              className="absolute z-0 left-1/2 -translate-x-1/2 -top-14 w-3/4 h-auto sm:w-1/2 md:w-2/5"
              src="/managed-services-main.png"
              width={410}
              height={431}
              alt="Expert Marketing, Customer Support, Responsible Gaming, and Payments Management"
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

      <div className="relative z-10 block w-full overflow-hidden pt-28 pb-28 xl:pt-0">
        <AngelsHubSVG className="absolute z-0 w-[200%] h-auto top-1/2 -translate-y-1/2 lg:w-full" />

        <div className="container mx-auto grid gap-28">
          <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
            <Image
              className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
              src="/blue-background.png"
              width={1184}
              height={380}
              loading="lazy"
              alt="AngelsHub Managed Services blue background"
            />
            <div className="relative z-10 flex lg:flex-row lg:space-x-16">
              <div className="hidden lg:block">
                <Image
                  className="relative object-cover object-center"
                  src="/managed-services-b2c.png"
                  width={294}
                  height={294}
                  alt="B2C Support"
                />
              </div>
              <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                <div className="flex justify-start items-center -ml-5">
                  <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                  <h1 className="text-white font-bold text-2xl">B2C Support</h1>
                </div>
                <p className="text-base text-white">
                  Are you interested in providing round-the-clock support in multiple languages to
                  your players, with the fastest response times in the industry? With our acclaimed
                  Customer Service, we can elevate your business and enhance the player experience.
                  We deliver top-notch support to international partners, enabling you to establish
                  trust by addressing both basic customer inquiries and complex technical problems.
                  Our customer support is offered through live chat and email channels.
                  Additionally, we offer customizable packages for Inbound/Outbound Calls, VIP
                  Support, Customer Acquisition, Retention, and Social Media Customer Service upon
                  request. Rest assured, our services adhere to the regulations of several reputable
                  jurisdictions.
                </p>
                <ul className="list-disc list-outside pl-4 text-left text-white">
                  <h3 className="text-xl font-bold -ml-4 mb-4">Key Features</h3>
                  <li className="text-base py-2">24/7 support covering multiple languages</li>
                  <li className="text-base py-2">Industry leading customer response times</li>
                  <li className="text-base py-2">
                    Customer inquiries and data are managed using the most advanced system platform
                    software available
                  </li>
                  <li className="text-base py-2">
                    Highly skilled agents who engage with players in a polite & professional manner
                  </li>
                </ul>
                <div className="flex items-center justify-center lg:justify-start">
                  <ButtonFill
                    className="bg-angel-orange text-white"
                    size="medium"
                    href="/contact"
                    label="Contact Us"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
            <Image
              className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
              src="/blue-background.png"
              width={1184}
              height={380}
              loading="lazy"
              alt="AngelsHub Managed Services blue background"
            />
            <div className="relative z-10 flex lg:flex-row lg:space-x-16">
              <div className="hidden lg:block">
                <Image
                  className="relative object-cover object-center"
                  src="/managed-services-seo.png"
                  width={262}
                  height={262}
                  alt="Search earnings optimisation"
                />
              </div>
              <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                <div className="flex justify-start items-center -ml-5">
                  <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                  <h1 className="text-white font-bold text-2xl">Search Engine Optimisation</h1>
                </div>
                <p className="text-base text-white">
                  To begin, we will perform an SEO audit on your website to evaluate its current
                  status, outcomes, and anticipated goals. Subsequently, we will develop an SEO
                  strategy tailored specifically to your needs. With our expertise spanning all
                  aspects of SEO, we understand the unique requirements of gambling and betting
                  websites and possess the know-how to accomplish them. In addition to conducting
                  comprehensive on-page and off-page SEO, we will also promote your website within
                  local forums to enhance its visibility.
                </p>
                <div className="">
                  <h3 className="text-xl text-white font-bold mb-4">Key Features</h3>
                  <div className="flex flex-row space-x-8">
                    <ul className="list-disc list-outside pl-4 text-left text-white">
                      <li className="text-base py-2">On-site SEO</li>
                      <li className="text-base py-2">Off-site SEO</li>
                      <li className="text-base py-2">Organic results</li>
                    </ul>
                    <ul className="list-disc list-outside pl-4 text-left text-white">
                      <li className="text-base py-2">Keywords</li>
                      <li className="text-base py-2">Link building</li>
                      <li className="text-base py-2">Quality of traffic</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <ButtonFill
                    className="bg-angel-orange text-white"
                    size="medium"
                    href="/contact"
                    label="Contact Us"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative block w-full bg-[#0151AD] rounded-xl shadow-2xl py-16 overflow-hidden">
            <Image
              className="absolute opacity-75 bottom-0 z-0 w-full h-auto left-1/2 -translate-x-1/2"
              src="/blue-background.png"
              width={1184}
              height={380}
              loading="lazy"
              alt="AngelsHub Managed Services blue background"
            />
            <div className="relative z-10 flex lg:flex-row lg:space-x-16">
              <div className="hidden lg:block">
                <Image
                  className="relative object-cover object-center"
                  src="/managed-services-legal.png"
                  width={293}
                  height={293}
                  alt="Legal and License Services"
                />
              </div>
              <div className="grid gap-8 max-w-2xl px-5 md:px-10">
                <div className="flex justify-start items-center -ml-5">
                  <span className="w-2.5 h-6 bg-angel-orange mr-3"></span>
                  <h1 className="text-white font-bold text-2xl">Legal and License Services</h1>
                </div>
                <p className="text-base text-white">
                  If you desire to establish your legal entities in respected jurisdictions and
                  require legal support, such as the review and creation of Software License
                  Agreements, White Label Agreements, Consulting Agreements, Technical Service
                  Agreements, Non-Disclosure Agreements, and more, our services can fulfill your
                  needs. We also offer assistance in overseeing the preparation and revision of
                  contracts related to the buying and selling of goods and services. We will develop
                  your company&apos;s policies and stance on legal matters. Additionally, we are
                  skilled in drafting, reviewing, and negotiating contracts, reports, memos, and
                  other documents with suppliers and other business partners.
                </p>
                <ul className="list-disc list-outside pl-4 text-left text-white">
                  <h3 className="text-xl font-bold -ml-4 mb-4">Key Features</h3>

                  <li className="text-base py-2">Legal support of high international standards</li>
                  <li className="text-base py-2">
                    Exceptional expertise in gambling area covering a broad spectrum of legal
                    matters
                  </li>
                  <li className="text-base py-2">Flexibility and on-going client support</li>
                  <li className="text-base py-2">
                    Availability, loyalty and complete confidentiality
                  </li>
                  <li className="text-base py-2">
                    Solving increasingly complex legal issues arising in dynamic business
                    environment
                  </li>
                  <li className="text-base py-2">
                    Approaching clients&apos; needs comprehensively and devising practical solutions
                    adapted to the specific circumstances
                  </li>
                </ul>
                <div className="flex items-center justify-center lg:justify-start">
                  <ButtonFill
                    className="bg-angel-orange text-white"
                    size="medium"
                    href="/contact"
                    label="Contact Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer>
        <SiteForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
