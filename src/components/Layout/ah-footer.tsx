"use client";

import AngelsHubSVG from "../Products/ah-svg";
import SocailIcon from "../Team/ah-social-icon";
import AngelsHubFlatSVG from "./ah-flat-svg";
import Providers from "./ah-providers";
import Image from "next/image";
import Plus18 from "../../../public/images/18-plus.svg";
import Amblem from "./ah-amblem";

export default function Footer() {
  return (
    <div className="relative w-full overflow-hidden pb-16 xl:pb-40">
      <AngelsHubSVG className="absolute top-80 z-0 w-full md:top-2 lg:top-11 xl:top-80" />
      <Providers />
      <div className="relative grid place-items-center gap-12 xl:gap-20 w-full mt-56">
        <AngelsHubFlatSVG className="relative w-full hidden xl:block" />
        <div className="container text-center w-full text-white">
          <div className="grid grid-flow-row justify-items-stretch gap-4 lg:place-items-center lg:gap-8 lg:grid-flow-col">
            <h2 className="font-bold text-2xl lg:justify-self-end xl:text-4xl">ARE YOU READY TO START?</h2>
            <h3 className="text-sm lg:justify-self-start xl:text-2xl">It&apos;s fast, free and very easy!</h3>
          </div>
          <div className="grid gap-4 mx-auto text-white w-full mt-10 lg:mt-20 lg:min-w-[672px] lg:max-w-2xl">
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
              className="bg-angel-blue rounded-full border-2 text-center border-white px-20 py-7 mt-4 drop-shadow-xl hover:drop-shadow-none"
            >
              <span className="text-base font-medium text-white">
                SEND
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative container grid gap-16 w-full mt-40">
        {/* grid grid-flow-row gap-6 place-items-center xl:justify-items-stretch xl:grid-flow-col */}
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="grid grid-flow-col gap-3">
            <SocailIcon name="linkedin" />
            <SocailIcon name="instegram" />
            <SocailIcon name="twitter" />
          </div>
          <a
            href="mailto:info@angelshub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            info@angelshub.com
          </a>
        </div>

        <div className="grid gap-9 place-self-start w-full md:justify-items-stretch md:grid-flow-col xl:gap-20">
          <div className="grid gap-4 text-white md:justify-self-start">
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
          <div className="grid gap-4 text-white md:justify-self-center">
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
          <div className="grid gap-4 text-white md:justify-self-end">
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
        <div className="grid grid-flow-row gap-11 text-white justify-items-stretch lg:place-items-center lg:grid-flow-col lg:gap-0">
          <div className="inline-flex space-x-4 items-center lg:justify-self-start">
            <Image src={Plus18} alt="18 Plus" />
            <p className="text-sm">
              The Website Content Is Not Intended For An Audience Under 18 Years
              Of Age
            </p>
          </div>
          <p className="text-sm text-center md:text-left lg:justify-self-end">
            Copyright © AngelsHub 2023 All rights reserved
          </p>
        </div>
      </div>
      <Amblem className="absolute z-0 -bottom-[9%] w-full left-1/2 -translate-x-1/2 xl:bottom-0 lg:w-auto" />
    </div>
  );
}
