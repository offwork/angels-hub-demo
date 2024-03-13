import AngelsHubSVG from "../Products/ah-svg";
import SocailIcon from "../Team/ah-social-icon";
import AngelsHubFlatSVG from "./ah-flat-svg";
import Providers from "./ah-providers";
import Image from "next/image";
import Plus18 from "../../../public/images/18-plus.svg";
import Amblem from "./ah-amblem";

export default function Footer() {
  return (
    <div className="relative w-full py-60">
      <div className="absolute z-0 w-full top-[300px] overflow-hidden">
        <AngelsHubSVG />
      </div>
      <Providers />
      <div className="relative grid place-items-center gap-20 w-full mt-72">
        <AngelsHubFlatSVG />
        <div className="container text-center w-full text-white">
          <div className="inline-flex gap-8">
            <h2 className="font-bold text-4xl">ARE YOU READY TO START?</h2>
            <h3 className="text-2xl">It&apos;s fast, free and very easy!</h3>
          </div>
        </div>
        <div className="grid gap-4 text-white min-w-[672px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            className="w-full bg-transparent indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="w-full bg-transparent indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            autoComplete="off"
            className="w-full bg-transparent indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
          />
          <input
            type="text"
            name="message"
            placeholder="Leave Us a Message"
            autoComplete="off"
            className="w-full bg-transparent indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
          />
          <a
            href="#"
            className="bg-angel-blue rounded-full border text-center border-white px-20 py-7 mt-4"
          >
            <span className="text-sm text-white">
              Get good service from experts
            </span>
          </a>
        </div>
      </div>
      <div className="relative grid gap-16 container w-full mt-40">
        <div className="flex items-center space-x-11">
          <div className="inline-flex space-x-3 items-center">
            <SocailIcon name="linkedin" />
            <SocailIcon name="instegram" />
            <SocailIcon name="twitter" />
          </div>
          <a
            href="mailto:info@angelshub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 text-white hover:underline"
          >
            info@angelshub.com
          </a>
        </div>

        <div className="grid grid-flow-col gap-20">
          <div className="grid text-white">
            <a href="/" className="font-bold text-xl">
              Useful Links
            </a>
            <a href="/" className="">
              Angel Investment
            </a>
            <a href="/" className="">
              Events
            </a>
            <a href="/" className="">
              Careers
            </a>
            <a href="/" className="">
              Demo
            </a>
            <a href="/" className="">
              Contact Us
            </a>
          </div>
          <div className="grid text-white">
            <a href="/" className="font-bold text-xl">
              Solutions
            </a>
            <a href="/" className="">
              White Label
            </a>
            <a href="/" className="">
              Turnkey System
            </a>
            <a href="/" className="">
              Managed Services
            </a>
            <a href="/" className="">
              Angels Payments
            </a>
          </div>
          <div className="grid text-white">
            <a href="/" className="font-bold text-xl">
              Products
            </a>
            <a href="/" className="">
              Sportsbook
            </a>
            <a href="/" className="">
              Online Casino
            </a>
            <a href="/" className="">
              Crypto Solutions
            </a>
            <a href="/" className="">
              Affiliate and Agent System
            </a>
            <a href="/" className="">
              CRM
            </a>
          </div>
        </div>

        <a href="/" className="text-white">
          Terms and Conditions & Privacy Policy
        </a>
        <div className="flex items-center justify-between text-white">
          <div className="inline-flex space-x-4 items-center">
            <Image src={Plus18} alt="18 Plus" />
            <p className="text-sm">
              The Website Content Is Not Intended For An Audience Under 18 Years
              Of Age
            </p>
          </div>
          <p className="text-sm">
            Copyright © AngelsHub 2023 All rights reserved
          </p>
        </div>
      </div>
      <Amblem className="absolute z-0 bottom-0 left-1/2 -translate-x-1/2" />
    </div>
  );
}
