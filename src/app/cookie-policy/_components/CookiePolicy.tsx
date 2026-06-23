import SiteForm from "@/app/_components/form/AHSiteForm";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function CookiePolicy() {
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
            <h1 className="text-white font-bold text-4xl md:text-7xl">Cookie Policy</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full">
          <div className="grid gap-8 text-white">
            <p className="">
              This Cookie Policy (hereinafter “Policy”) explains which information is gathered, how
              and for which purpose Cookies are needed for the use of website
              <span className="text-orange-500 font-bold"> https://www.angelshub.com/</span>{" "}
              (hereinafter - Website). Below you can read more about Cookies and how to deactivate
              their appearance and storage. However, please pay attention that partial or full
              Cookies disabling may downgrade, fracture or prevent you from use of certain elements
              of the Website&apos;s functionality. <br />
              Website&apos;s functionality. <br />
              In this Policy, any use of the words: <br />
              as “we”, “us”, “our” expressions refers to{" "}
              <span className="text-orange-500 font-bold">AngelsHub</span>; <br />
              as “you”, “yours”, “user”, similar or identical expressions shall mean any visitor of
              this Website whatsoever; <br />
              as “browser” shall include but not limited to any publicly available search browsers,
              such as: Chrome, Firefox, Internet Explorer, Opera, Safari 5 (for Mac), etc.
            </p>
            <div className="">
              <h2 className="font-bold">What are Cookies?</h2>
              <p className="">
                Cookies are small files consisting of numbers and/or letters that are stored in your
                web browser that provide the possibility to recognize your computer or other device
                which you use to visit the Website. Those files do not include names, contact or
                other personal data, due to the fact that they generally contain anonymous
                information which is used or required for the better user experience and overall
                Website secure functionality. <br />
                For the purpose of better Cookies understanding and making a well-informed choice,
                we recommend to visit a respective browser Cookies guide or visit
                www.aboutcookies.org or www.allaboutcookies.org.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Cookies Appearance and Disabling</h2>
              <p className="">
                When you enter the Website, you will be informed with a respective Cookie Notice at
                the bottom of the Website. You can choose to have your computer warn you each time a
                cookie is being sent, or you can choose to turn off all cookies. You do this through
                your browser settings. Since each browser is a little different, look at your
                browser&apos;s Help Menu to learn the correct way to modify your cookies. <br />
                If you turn cookies off, some of the features that make your site journey more
                efficient may not function properly. It will not affect the user&apos;s experience
                that makes your site experience more efficient and may not function properly.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Cookies Usage and Storage</h2>
              <ul className="list-outside list-disc text-left pl-6">
                <li className="pl-2">
                  to improve your user experience, language adaptability, aggregate statistical
                  information as of the average number and way of the Website usage by visitors.
                  Based on this data we can allocate the Website resources in more sufficient,
                  balanced and optimized (best format for your device or browser) way for the best
                  user experience;
                </li>
                <li className="pl-2">
                  to enable certain functions, such as: navigation and access to some Website areas
                  with further user movement analytics and anonymous data collections. Based on this
                  data we can understand how simple and user-friendly Website interaction is and
                  what can be additionally modified and/or changed.
                </li>
                <li className="pl-2">
                  to collect information as of any bugs, errors or performance issue in connection
                  with the user Website usage experience and/or Website overall performance. Based
                  on this data we can correct any Website performance or functionality issues; in
                  some cases, this information will help us to foresee some bugs or errors.
                </li>
                <li className="pl-2">
                  to predict, prevent, prohibit, block or stop any suspicious or illegal (including,
                  but not limited to malware, unauthorized data collections etc.) Website usage.
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-bold">What Cookies are used on the Website?</h2>
              <p className="">
                Cookies can be set by <span className="text-orange-500 font-bold">AngelsHub</span>{" "}
                (First Party Cookies) or by another company (Third Party Cookies):
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">First Party Cookies</h2>
              <p className="">
                These Cookies are not accessible or readable by anyone except{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> due to the fact that
                they are settled and handled directly by us.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Third Party Cookies</h2>
              <p className="">
                These Cookies are settled by approved Third Parties like Google Analytics, Facebook,
                CloudFlare which are the most widespread and trusted solutions.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Information Disclosure</h2>
              <p className="">
                <span className="text-orange-500 font-bold">AngelsHub</span> does not sell, transfer
                or communicate personal information to third parties.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Other Information</h2>
              <p className="">
                Children have no access to this webpage. <br />
                Please note that your consent to the processing of your personal data is a
                contractual requirement of the Administration and that you are not obligated to give
                the consent. <br />
                In case you have any questions or inquiries in connection with the processing of
                your personal data, please let us know on the email address{" "}
                <a
                  href="mailto:info@angelshub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-bold hover:underline"
                >
                  info@angelshub.com
                </a>{" "}
                or fill up our{" "}
                <Link
                  href="/contact"
                  target="_blank"
                  className="text-orange-500 font-bold hover:underline"
                >
                  “Contact Us”
                </Link>{" "}
                form.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute z-10 inset-0 h-96 sm:h-[640px] md:h-[780px] lg:h-[530px] xl:h-[760px] overflow-hidden">
          <Image
            className="relative left-1/2 -translate-x-1/2 z-0 object-cover w-full h-auto mix-blend-luminosity opacity-40"
            src="/supportsbook-main.png"
            width={1728}
            height={1332}
            sizes="100vw"
            loading="lazy"
            alt="AngelsHub Cookie Policy background"
            />
          <div className="absolute z-10 inset-0 bg-gradient-to-t from-angel-blue via-angel-blue via-25%"></div>
        </div>

        <div className="absolute left-0 z-10 w-full h-auto overflow-hidden py-5 top-96 sm:top-72 md:top-[520px] lg:top-96 xl:top-[580px] ">
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

        <div className="absolute z-20 left-0 mix-blend-hard-light bottom-0 w-full opacity-50 h-full bg-gradient-to-b from-angel-blue via-angel-blue via-25%"></div>
      </div>

      <Footer>
        <SiteForm message="Your message has been sent successfully." />
      </Footer>
    </div>
  );
}
