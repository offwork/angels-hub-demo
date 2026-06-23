import Footer from "@/components/layout/AHFooter";
import BrandLogo from "@/components/ui/AHBrandLogo";
import AHLink from "@/components/ui/AHLink";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./AHContactForm";

export default function Contact() {
  return (
    <div className="relative h-full w-full overscroll-none overflow-visible">
      <Link href="/" passHref legacyBehavior>
        <AHLink href="/" className="cursor-pointer absolute ml-5 lg:ml-12 top-8 z-30">
          <BrandLogo />
        </AHLink>
      </Link>

      <div className="relative px-5 w-full bg-angel-blue overflow-hidden pb-28">
        <div className="relative z-30 mt-40 mb-24 xl:mt-36 block mx-auto w-full">
          <div className="flex justify-center items-center">
            <span className="w-2.5 h-12 bg-angel-orange mr-4 sm:mr-8"></span>
            <h1 className="text-white font-bold text-4xl md:text-7xl">Contact Us</h1>
          </div>
        </div>
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="relative z-10 flex bg-black w-full h-full rounded-3xl pt-40 pb-16 sm:pt-56 lg:pt-72 lg:pb-24">
            <div className="relative z-10 grid place-content-end gap-9 text-center mx-auto mb-14 px-4 sm:px-9">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Do you want to share your iGaming ideas with us?
              </h2>
              <p className="md:text-2xl text-angel-orange">
                Our team is ready 24/7 to answer all your questions and{" "}
                <br className="hidden lg:block" /> provide the best technical support services.
              </p>
              <p className="md:text-lg text-white/75">
                Are you interested in finding out more about our offering?{" "}
                <br className="hidden lg:block" /> Please complete the form below and our team will
                reach out to you as soon as possible.
              </p>
              <ContactForm message="Your message has been sent successfully." />
            </div>
            <div className="absolute z-0 min-w-full h-full p-0.5">
              <Image
                className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-[14%] w-2/5 h-auto -top-40 sm:-top-56 sm:w-1/4 lg:-top-72 lg:w-[240px] lg:h-auto"
                src="/contact-img.png"
                width={240}
                height={427}
                alt="Share your iGaming ideas"
              />
            </div>
          </div>
        </div>
        <div className="absolute block w-full top-0 inset-x-0 h-2/6 md:h-2/4 xl:h-3/4 overflow-hidden">
          <Image
            className="relative z-0 object-cover mix-blend-luminosity h-full w-auto md:w-full"
            src="/supportsbook-main.png"
            width={1728}
            height={1268}
            loading="lazy"
            alt="AngelsHub About background"
            />
          <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-10%"></div>
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

      <Footer />
    </div>
  );
}
