"use client";
import SocailIcon from "../Team/ah-social-icon";
import AngelsHubFlatSVG from "./ah-flat-svg";
import Image from "next/image";
import Plus18 from "../../../public/images/18-plus.svg";
import Amblem from "./ah-amblem";
import { forwardRef } from "react";
import ButtonFill from "../ui/ah-button-fill";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils";


const Footer = forwardRef<HTMLDivElement, {}>(
  (_props, ref) => {
    const pathname = usePathname();
    return (
      <div ref={ref} className="relative w-full overflow-hidden pb-16 xl:pb-40">
        <div className={classNames(
          pathname !== "/contacxt" ? "relative grid place-items-center gap-12 mt-0 w-full md:mt-10 xl:gap-20 xl:mt-56" : "relative grid place-items-center gap-12 mt-28 w-full xl:gap-20 xl:mt-56"
        )}>
        <AngelsHubFlatSVG className="word-logo relative w-full" />
        <div className={classNames(
          pathname !== "/contact" ? "container text-center w-full text-white" : "hidden"
        )}>
          <div className="grid grid-flow-row justify-items-stretch gap-4 lg:place-items-center lg:gap-8 lg:grid-flow-col">
            <h2 className="title font-bold text-2xl lg:justify-self-end xl:text-4xl">ARE YOU READY TO START?</h2>
            <h3 className="caption text-sm lg:justify-self-start xl:text-2xl">Share your ideas with us!</h3>
          </div>
          <p className="mt-6 text-center text-white">Our team is ready 24/7 to answer all your questions and provide the best technical support services.</p>
          <div className="grid gap-4 mx-auto text-white w-full mt-10 lg:mt-20 lg:min-w-[672px] lg:max-w-2xl">
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              className="w-full form-element bg-angel-blue indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full form-element bg-angel-blue indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              autoComplete="off"
              className="w-full form-element bg-angel-blue indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
            />
            <input
              type="text"
              name="message"
              placeholder="Leave Us a Message"
              autoComplete="off"
              className="w-full form-element bg-angel-blue indent-14 py-6 rounded-full border border-white/30 focus:outline-none focus:border-white"
            />
            <div className="form-element grid justify-items-stretch">
              <ButtonFill href="" label="SEND" bg="bg-angel-blue" size="large" />
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(
        pathname !== "/contact" ? "relative container grid gap-16 w-full mt-40" : "relative container grid gap-16 w-full mt-0 xl:mt-10"
      )}>
        <div className="social-icons flex flex-col items-center gap-6 md:flex-row">
          <div className="grid grid-flow-col gap-3">
            <SocailIcon name="linkedin" bg="bg-angel-blue" />
            <SocailIcon name="instegram" bg="bg-angel-blue" />
            <SocailIcon name="twitter" bg="bg-angel-blue" />
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

        <div className="relative z-10 grid gap-9 place-self-start w-full md:justify-items-stretch md:grid-flow-col xl:gap-20">
          <div className="grid gap-4 text-white md:justify-self-start">
            <span className="footer-menu font-bold text-xl">
              Useful Links
            </span>
            <a href="/" className="footer-menu hover:underline">
              Angel Investment
            </a>
            <a href="/" className="footer-menu hover:underline">
              Events
            </a>
            <a href="/" className="footer-menu hover:underline">
              Careers
            </a>
            <a href="/" className="footer-menu hover:underline">
              Demo
            </a>
            <Link href="/contact" className="footer-menu hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="grid gap-4 text-white md:justify-self-center">
            <span className="footer-menu font-bold text-xl">
              Solutions
            </span>
            <a href="/" className="footer-menu hover:underline">
              White Label
            </a>
            <a href="/" className="footer-menu hover:underline">
              Turnkey System
            </a>
            <a href="/" className="footer-menu hover:underline">
              Managed Services
            </a>
            <a href="/" className="footer-menu hover:underline">
              Angels Payments
            </a>
          </div>
          <div className="grid gap-4 text-white md:justify-self-end">
            <span className="footer-menu font-bold text-xl">
              Products
            </span>
            <Link href="/sportsbook" className="footer-menu hover:underline">
              Sportsbook
            </Link>
            <Link href="/online-casino" className="footer-menu hover:underline">
              Online Casino
            </Link>
            <Link href="/crypto-solutions" className="footer-menu hover:underline">
              Crypto Solutions
            </Link>
            <Link href="/affiliate-agent-system" className="footer-menu hover:underline">
              Affiliate and Agent System
            </Link>
          </div>
        </div>

        <a href="/" className="relative z-10 text-white privacy-policy hover:underline">
          Terms and Conditions & Privacy Policy
        </a>
        <div className="relative z-10 grid grid-flow-row gap-11 text-white justify-items-stretch lg:place-items-center lg:grid-flow-col lg:gap-0">
          <div className="website-content inline-flex space-x-4 items-center lg:justify-self-start">
            <Image src={Plus18} alt="18 Plus" />
            <p className="text-sm">
              The Website Content Is Not Intended For An Audience Under 18 Years
              Of Age
            </p>
          </div>
          <p className="copyright text-sm text-center md:text-left lg:justify-self-end">
            Copyright © AngelsHub 2024 All rights reserved
          </p>
        </div>
      </div>
      <Amblem className="amblem absolute z-0 -bottom-[9%] left-0 w-full xl:bottom-0" />
      </div>
    );
  }
);

Footer.displayName = "AHFooter";

export default Footer
