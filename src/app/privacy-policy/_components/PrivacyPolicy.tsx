import SiteForm from "@/app/_components/form/AHSiteForm";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            <h1 className="text-white font-bold text-4xl md:text-7xl">Privacy Policy</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full">
          <div className="grid gap-8 text-white">
            <p className="">
              This Privacy Policy applies to{" "}
              <span className="text-orange-500 font-bold">https://www.angelshub.com/</span>{" "}
              (hereinafter, “us”, “we”, “Website”,{" "}
              <span className="text-orange-500 font-bold">“AngelsHub”</span> or{" "}
              <span className="text-orange-500 font-bold">“https://www.angelshub.com/</span>”). We
              respect your privacy and are committed to protecting personally identifiable
              information you may provide us through or by use of the Website. We have adopted this
              Privacy Policy (“Privacy Policy”) to explain what information may be collected on our
              Website, how we use this information, and under what circumstances we may use the
              information or disclose the information to third parties. This Privacy Policy applies
              only to information we collect through the Website and does not apply to the
              information we may from time to time collect from other sources. <br /> <br />
              This Privacy Policy, together with the Terms and Conditions posted on our Website, set
              forth the general rules and policies governing your use of our Website. Depending on
              your activities when visiting our Website, you may be required to agree to additional
              terms and conditions.
            </p>
            <div className="">
              <h2 className="font-bold">Website Visitors</h2>
              <p className="">
                Like most website operators,{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> collects
                non-personally-identifying information of the sort that web browsers and servers
                typically make available, such as the browser type, language preference, referring
                site, and the date and time of each visitor request.{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> purpose in
                collecting non-personally identifying information is to better understand how{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> visitors use its
                website. From time to time,{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> may release
                non-personally-identifying information in the aggregate, e.g., by publishing a
                report on trends in the usage of its website. <br /> <br />
                <span className="text-orange-500 font-bold">AngelsHub</span> also collects
                potentially personally-identifying information like Internet Protocol (IP) addresses
                for logged in users and for users leaving comments on{" "}
                <span className="text-orange-500 font-bold">https://www.angelshub.com/</span> blog
                posts or Demo Version. <span className="text-orange-500 font-bold">AngelsHub</span>{" "}
                only discloses logged in user and commenter IP addresses under the same
                circumstances that it uses and discloses personally-identifying information as
                described below. <span className="text-orange-500 font-bold">AngelsHub</span>{" "}
                collects the information only during your visit of our Website. For the avoidance of
                doubt any information collected by a browser or an application you use during your
                access of the Website is not collected by or by request of{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span>.
              </p>
            </div>
            <div className="">
              <h2 className="font-bold">Gathering of Personally-Identifying Information</h2>
              <p className="mb-6">
                Certain visitors to{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> websites choose
                to interact with <span className="text-orange-500 font-bold">AngelsHub</span> in
                ways that require <span className="text-orange-500 font-bold">AngelsHub</span> to
                gather personally-identifying information. The amount and type of information that{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> gathers depends on the
                nature of the interaction. For example:
              </p>
              <div className="grid gap-5 pl-6">
                <div className="">
                  <h3 className="font-semibold">“Contact Us”</h3>
                  <p className="">
                    When you contact us through the form we ask you to provide us with certain
                    pieces of information, including your full name and email address. Please note
                    that all the required pieces of information are mandatory and conditional to
                    obtaining a response from us in such contexts. <br />
                    We will only use your personal data for the purposes for which it was obtained,
                    unless we reasonably consider that we need to use it for another reason and that
                    reason is compatible with the original purpose. <br />
                    <span className="text-orange-500 font-bold">AngelsHub</span> has a legitimate
                    interest in understanding how customers and potential customers use its website.
                    This assists <span className="text-orange-500 font-bold">AngelsHub</span> with
                    providing more relevant products and services, with communicating value to our
                    sponsors and corporate members, and with providing appropriate staffing to meet
                    customer needs. <br />
                    Please note that, depending on the circumstances, you might be asked to provide
                    further information. For example, when you approach us or have been approached
                    by us either as our partner or client with regards to the provision of our
                    Services as well as services provided to us by you, and upon entering into
                    contract with us, you shall be prompted to provide us KYC data (by filling in
                    the applicable form(s)).
                  </p>
                </div>
                <div className="">
                  <h3 className="font-semibold">“Careers - Open Job Positions”</h3>
                  <p className="">
                    When you apply for a job through the Application Form in our career section, we
                    collect the data you provide us with by submitting this form (that includes your
                    name, e-mail address, telephone number, address). We can also obtain personal
                    information that you supply to us within the “Apply Now” of the Application Form
                    along with that information which is disclosed to us through the uploading of
                    your Cv. <br />
                    Kindly note that the above mentioned is just a preliminary information that is
                    required in order for you to trigger (should that be the case) the whole
                    recruiting process with us. Please be aware that further documentation and
                    information will be required after the submission of the Application Form,
                    during the recruitment process (in accordance with its stages) until final
                    onboarding (if any). This information is necessary to carry out the recruitment
                    process in order to take steps to possibly enter into a contract with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="font-bold">Collection of your Personal Information</h2>
              <p className="">
                We collect personal information only by lawful and transparent means and pursuant to
                your consent to this Privacy Policy. <br />
                We collect your personal information directly based on your use of the Website. We
                may collect this information when you: <br />
                access or use the Website; <br />
                contact us directly via any medium including: instant messaging, email, social media
                platforms, postal mail or telephone; <br />
                provide feedback through our Services.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">
                Purpose of Collection and Use of the Personal Information
              </h2>
              <p className="">
                We collect, hold, use, and disclose personal information: <br />
                for communicating with you, including sending you information about our products,
                services, and promotions; <br />
                cor internal research and development for promotions and the marketing of the
                Website; <br />
                to create internal aggregate data about our users in order to optimize the Website
                and/or to improve our business; <br />
                for the investigation of suspected unlawful, fraudulent or other improper activity
                connected with the use of the Website; <br />
                to comply with our legal and statutory obligations.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Security</h2>
              <p className="">
                The security of your Personal Information is important to us, but remember that no
                method of transmission over the Internet, or method of electronic storage is 100%
                secure. While we strive to use commercially acceptable means to protect your
                Personal Information, we cannot guarantee its absolute security. <br />
                We take reasonable steps to protect the personal information we collect. Your
                information is held on secure servers. <br />
                Our employees, agents, contractors are required to maintain the confidentiality of
                all personal information. <br />
                You are responsible for the security of and access to your own computer/device. You
                should ensure that you always properly close the access to the Website.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Advertisements</h2>
              <p className="">
                Ads appearing on our Website may be delivered to users by advertising partners, who
                may set cookies. These cookies allow the ad server to recognize your computer each
                time they send you an online advertisement to compile information about you or
                others who use your computer. This information allows ad networks to, among other
                things, deliver targeted advertisements that they believe will be of most interest
                to you. This Privacy Policy covers the use of cookies by{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> and does not cover the
                use of cookies by any advertisers.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Links To External Sites</h2>
              <p className="">
                Our Website may contain links to external sites that are not operated by us. If you
                click on a third party link, you will be directed to that third party&apos;s site.
                We strongly advise you to review the Privacy Policy and terms and conditions of
                every site you visit. We have no control over, and assume no responsibility for the
                content, privacy policies or practices of any third party sites, products or
                services.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Aggregated Statistics</h2>
              <p className="">
                <span className="text-orange-500 font-bold">AngelsHub</span> may collect statistics
                about the behavior of visitors to its website.
                <span className="text-orange-500 font-bold">AngelsHub</span> may display this
                information publicly or provide it to others. However,
                <span className="text-orange-500 font-bold">AngelsHub</span> does not disclose your
                personally-identifying information.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Cookies</h2>
              <p className="">
                To enrich and perfect your online experience,{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> uses “Cookies”, similar
                technologies and services provided by others to display personalized content,
                appropriate advertising and store your preferences on your computer. <br />A cookie
                is a string of information that a website stores on a visitor&apos;s computer, and
                that the visitor&apos;s browser provides to the website each time the visitor
                returns. <span className="text-orange-500 font-bold">AngelsHub</span> uses cookies
                to help <span className="text-orange-500 font-bold">AngelsHub</span> identify and
                track visitors, their usage of https://www.angelshub.com/, and their website access
                preferences. <span className="text-orange-500 font-bold">AngelsHub</span> visitors
                who do not wish to have cookies placed on their computers should set their browsers
                to refuse cookies before using{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> websites, with
                the drawback that certain features of{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> websites may not
                function properly without the aid of cookies. <br />
                By continuing to navigate our website without changing your cookie settings, you
                hereby acknowledge and agree to{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> use of cookies.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Privacy Policy Changes</h2>
              <p className="">
                Although most changes are likely to be minor,{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> may change its Privacy
                Policy from time to time, and in{" "}
                <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> sole discretion.{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> encourages visitors to
                frequently check this page for any changes to its Privacy Policy. Your continued use
                of this site after any change in this Privacy Policy will constitute your acceptance
                of such change.
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
