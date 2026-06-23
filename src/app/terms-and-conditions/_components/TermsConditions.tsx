import SiteForm from "@/app/_components/form/AHSiteForm";
import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";

export default function TermsConditions() {
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
            <h1 className="text-white font-bold text-4xl md:text-7xl">Terms and Conditions</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full">
          <div className="grid gap-8 text-white">
            <p className="">
              These terms and conditions outline the rules and regulations for the use of website{" "}
              <span className="text-orange-500 font-bold">https://www.angelshub.com/</span>{" "}
              (hereinafter - Website). The following terminology applies to these Terms and
              Conditions, Privacy Policy and Disclaimer Notice and any and all other statements in
              this Website: “You” and “Your” refers to you, the person accessing this Website and
              accepting these Terms and conditions.{" "}
              <span className="text-orange-500 font-bold">“AngelsHub”</span>, “Ourselves”, “We”,
              “Our” and “Us”, refers to <span className="text-orange-500 font-bold">AngelsHub</span>
              . “Party”, “Parties”, or “Us”, refers to both you and ourselves, or either you or
              ourselves. Any use of the above terminology or other words in the singular, plural,
              capitalization and/or he/she or they, are taken as interchangeable and therefore as
              referring to the same. <br /> <br />
              By accessing the Website you accept these terms and conditions in full. Do not
              continue to use the Website if you do not accept all of the terms and conditions
              stated on this page. <br /> <br />
              Hyperlinking to our Content
            </p>

            <ul className="grid gap-4 list-outside list-decimal text-left pl-6">
              <li className="pl-2">
                The following organizations may link to our Web site without our prior written
                approval:
                <ul className="list-outside list-alpha">
                  <li className="pl-2">Government agencies;</li>
                  <li className="pl-2">Search engines;</li>
                  <li className="pl-2">News organizations;</li>
                </ul>
              </li>
              <p className="">
                Online directory distributors when they list us in the directory may link to our
                Website in the same manner as they hyperlink to the websites of other listed
                businesses; and Systemwide Accredited Businesses except soliciting non-profit
                organizations, charity shopping malls, and charity fundraising groups which may not
                hyperlink to our Web site.
              </p>
              <li className="pl-2">
                These organizations may link to our Website, to publications or to other Website
                information so long as the link:
                <ul className="list-outside list-alpha">
                  <li className="pl-2">is not in any way misleading;</li>
                  <li className="pl-2">
                    does not falsely imply sponsorship, endorsement or approval of the linking party
                    and its products or services; and
                  </li>
                  <li className="pl-2">
                    fits within the context of the linking party&apos;s site.
                  </li>
                </ul>
              </li>
              <li className="pl-2">
                We may consider and approve in our sole discretion other link requests from the
                following types of organizations:
                <ul className="list-outside list-alpha">
                  <li className="pl-2">
                    commonly-known consumer and/or business information sources such as Chambers of
                    Commerce, American Automobile Association, AARP and Consumers Union;
                  </li>
                  <li className="pl-2">dot.com community sites;</li>
                  <li className="pl-2">
                    associations or other groups representing charities, including charity giving
                    sites,
                  </li>
                  <li className="pl-2">online directory distributors;</li>
                  <li className="pl-2">internet portals;</li>
                  <li className="pl-2">
                    accounting, law and consulting firms whose primary clients are businesses; and
                  </li>
                  <li className="pl-2">educational institutions and trade associations.</li>
                </ul>
              </li>
            </ul>

            <div className="">
              <p className="">
                Decision of approval or denial of any link requests shall at all times remain our
                sole and exclusive discretion, however we may (but are not obliged to) take the
                following criteria into account when taking the decision:
              </p>
              <ul className="list-outside list-alpha pl-6">
                <li className="pl-2">
                  the link would not reflect unfavourably on us or our accredited businesses (for
                  example, trade associations or other organizations representing inherently suspect
                  types of business, such as work-at-home opportunities, shall not be allowed to
                  link);
                </li>
                <li className="pl-2">
                  the organization does not have an unsatisfactory record with us;
                </li>
                <li className="pl-2">
                  the benefit to us from the visibility associated with the hyperlink outweighs the
                  absence of it; and
                </li>
                <li className="pl-2">
                  where the link is in the context of general resource information or is otherwise
                  consistent with editorial content in a newsletter or similar product furthering
                  the mission of the organization.
                </li>
              </ul>
            </div>

            <div className="">
              <p className="">
                These organizations may link to our home page, to publications or to other Website
                information as long as the link:
              </p>
              <ul className="list-outside list-alpha pl-6">
                <li className="pl-2">is not in any way misleading;</li>
                <li className="pl-2">
                  does not falsely imply sponsorship, endorsement or approval of the linking party
                  and it&apos;s products or services; and
                </li>
                <li className="pl-2">fits within the context of the linking party&apos;s site.</li>
              </ul>
            </div>

            <p className="">
              If you are among the organizations listed in paragraph 2 above and are interested in
              linking to our website, you must notify us by sending an e-mail to{" "}
              <a
                href="mailto:info@angelshub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-bold hover:underline"
              >
                info@angelshub.com
              </a>
              . Please include your name, your organization name, contact information (such as a
              phone number and/or e-mail address) as well as the URL of your site, a list of any
              URLs from which you intend to link to our Web site, and a list of the URL(s) on our
              site to which you would like to link. Allow 2-3 weeks for a response.
            </p>

            <div className="">
              <p className="">Approved organizations may hyperlink to our Website as follows:</p>
              <ul className="list-outside list-alpha pl-6">
                <li className="pl-2">By use of our corporate name; or</li>
                <li className="pl-2">
                  By use of the uniform resource locator (URL address) being linked to; or
                </li>
                <li className="pl-2">
                  By use of any other description of our Website or material being linked to that
                  makes sense within the context and format of content on the linking party&apos;s
                  site.
                </li>
              </ul>
            </div>

            <p className="">
              No use of <span className="text-orange-500 font-bold">AngelsHub&apos;s</span> logo or
              other artwork will be allowed for linking in absence of a trademark license agreement.
            </p>

            <div className="">
              <h2 className="font-bold">Iframes</h2>
              <p className="">
                Without prior approval and express written permission, you may not create frames
                around our Website or any pages thereof or use other techniques that alter in any
                way the visual presentation or appearance of our Website.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Intellectual Property Rights</h2>
              <p className="">
                For the purposes of these Terms and Conditions, “Intellectual Property Rights” means
                any and all intellectual property rights, whether registered or unregistered,
                including but not limited to any patents, trademarks, domain names, URLs, design
                rights, copyright, product names and logos, processes, trade secrets, confidential
                information or any similar rights in any jurisdiction. <br />{" "}
                https://www.angelshub.com/ shall retain and be assigned all rights, title, interest
                and Intellectual Property Rights in relation to the content found on the Website.
              </p>
              <div className="">
                <p className="">
                  Except as otherwise provided in these Terms and Conditions, you must not:
                </p>
                <ul className="list-outside list-alpha pl-6">
                  <li className="pl-2">
                    reproduce, modify, translate or create derivative works of any content of the
                    Website;
                  </li>
                  <li className="pl-2">
                    sell, license, sublicense, rent, lease, distribute, copy, publicly display,
                    publish, adapt or edit any content of the Website;
                  </li>
                  <li className="pl-2">
                    circumvent or disable any security or technical features of the content of the
                    Website. site.
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <h2 className="font-bold">Reservation of Rights</h2>
              <p className="">
                We reserve the right at any time and in its sole discretion to request that you
                remove all links or any particular link to our Website. You agree to immediately
                remove all links to our Website upon such request. We also reserve the right to
                amend these Terms and conditions at any time. By continuing to link to our Web site,
                you agree to be bound to and abide by these terms and conditions.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Removal of links from our website</h2>
              <p className="">
                If you find any link on our Website or any linked web site objectionable for any
                reason, you may contact us about this. We will consider requests to remove links but
                will have no obligation to do so or to respond directly to you. <br />
                Whilst we endeavour to ensure that the information on this Website is correct, we do
                not warrant its completeness or accuracy; nor do we commit to ensuring that the
                Website remains available or that the material on the Website is kept up to date.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Content Liability</h2>
              <p className="">
                We shall have no responsibility or liability for any content appearing on your user
                interface. You agree to indemnify and defend us against all claims arising out of or
                based upon your user interface. No link(s) may appear on any page on your user
                interface or within any context containing content or materials that may be
                interpreted as libellous, obscene or criminal, or which infringes, otherwise
                violates, or advocates the infringement or other violation of, any third party
                rights.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold">Disclaimer</h2>
              <p className="">
                This Website is designed to obtain information in a manner that will not compromise
                your security or reveal personal information about you.{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> does not accept any
                liability for any loss or damage, whether direct or consequential, for information,
                other than that being requested and in the appropriate input areas, being posted on
                this Website through any of the forms that are present on this Website now, or might
                be added in the future. <br /> You are responsible for all activity that occurs via
                your computer or another device that you use to access and use the Website.
              </p>
              <div className="">
                <p className="">
                  Thus <span className="text-orange-500 font-bold">AngelsHub</span>, its affiliates
                  or employees before you or anyone else are not responsible for:
                </p>
                <ul className="list-outside list-alpha pl-6">
                  <li className="pl-2">
                    Any loss of use, data, goodwill, or profits, whether or not foreseeable;
                  </li>
                  <li className="pl-2">
                    Any special, incidental, indirect, consequential, or punitive damages whatsoever
                    (even if we have been advised of the possibility of these damages);
                  </li>
                  <li className="pl-2">
                    Any damages resulting from loss of use, data, or profits, whether or not
                    foreseeable;
                  </li>
                  <li className="pl-2">
                    Any damages based on any theory of liability, including breach of contract or
                    warranty, negligence or other tortious action, or arising from any other claim
                    arising out of or in connection with your use of or access to the Website;
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="">
                  To the maximum extent permitted by applicable law, we exclude all representations,
                  warranties and conditions relating to our Website and the use of this Website
                  (including, without limitation, any warranties implied by law in respect of
                  satisfactory quality, fitness for purpose and/or the use of reasonable care and
                  skill). Nothing will:
                </p>
                <ul className="list-outside list-alpha pl-6">
                  <li className="pl-2">
                    limit or exclude our liability for death or personal injury resulting from
                    negligence;
                  </li>
                  <li className="pl-2">
                    limit or exclude our liability for fraud or fraudulent misrepresentation;
                  </li>
                  <li className="pl-2">
                    exclude any of our liabilities that may not be excluded under applicable law.
                  </li>
                </ul>
              </div>
              <p className="">
                No liabilities or responsibility is accepted for any errors or omissions that may be
                present in the Website or any loss or damage resulting from such errors or
                omissions, whether direct or consequential or whether such entry is made by
                <span className="text-orange-500 font-bold">AngelsHub</span>, its employees,
                authorized agents or by any person having access to this Website. In the case of
                such errors or omissions, the only remedy available to you is the rectification of
                such an error or omission by{" "}
                <span className="text-orange-500 font-bold">AngelsHub</span> or any of its
                authorized representatives. <br />
                To the extent that the Website and the information and services on the Website are
                provided free of charge, we will not be liable for any loss or damage of any nature.
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
