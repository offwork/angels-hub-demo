"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Plus18 from "../../../public/18-plus.svg";
import AHLink from "../ui/AHLink";
import SocailIcon from "../ui/AHSocialIcon";
import Amblem from "./AHAmblem";
import AngelsHubFlatSVG from "./AHFlatSvg";

export default function Footer({ children }: { children?: ReactNode }) {
  return (
    <div className="footer relative w-full overflow-hidden pb-16 xl:pb-40">
      <div className="relative grid place-items-center gap-12 w-full mt-28 xl:gap-20">
        <AngelsHubFlatSVG className="word-logo relative w-full max-h-28 lg:max-h-max" />
        {children}
      </div>
      <div className="relative container grid gap-16 w-full mt-40">
        <div className="social-icons flex flex-col items-center gap-6 md:flex-row">
          <div className="grid grid-flow-col gap-3">
            <SocailIcon
              href="https://www.linkedin.com/company/angelshub/"
              name="linkedin"
              bg="bg-angel-blue"
            />
            <SocailIcon
              href="https://www.instagram.com/angelshub_official/"
              name="instegram"
              bg="bg-angel-blue"
            />
            <SocailIcon href="https://twitter.com/angelshubcom" name="twitter" bg="bg-angel-blue" />
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
          <div className="grid gap-4 text-white place-content-start md:justify-self-start">
            <span className="footer-menu font-bold text-xl">Useful Links</span>
            <Link href="/about" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/about">
                <span className="">About Us</span>
              </AHLink>
            </Link>
            <Link href="/angel-investment" passHref legacyBehavior>
              <AHLink href="/angel-investment" className="footer-menu hover:underline">
                Angel Investment
              </AHLink>
            </Link>
            <Link href="/news-and-events" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/news-and-events">
                <span className="">News & Events</span>
              </AHLink>
            </Link>
            <Link href="/careers" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/careers">
                <span className="">Careers</span>
              </AHLink>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/contact">
                <span className="">Demo</span>
              </AHLink>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/contact">
                <span className="">Contact Us</span>
              </AHLink>
            </Link>
          </div>
          <div className="grid gap-4 text-white place-content-start md:justify-self-center">
            <span className="footer-menu font-bold text-xl">Solutions</span>
            <Link href="/white-label" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/white-label">
                <span className="">White Label</span>
              </AHLink>
            </Link>
            <Link href="/turnkey-system" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/turnkey-system">
                <span className="">Turnkey-System</span>
              </AHLink>
            </Link>
            <Link href="/managed-services" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/managed-services">
                <span className="">Managed Services</span>
              </AHLink>
            </Link>
          </div>
          <div className="grid gap-4 text-white place-content-start md:justify-self-end">
            <span className="footer-menu font-bold text-xl">Products</span>
            <Link href="/sportsbook" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/sportsbook">
                <span className="">Sportsbook</span>
              </AHLink>
            </Link>
            <Link href="/online-casino" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/online-casino">
                <span className="">Online Casino</span>
              </AHLink>
            </Link>
            <Link href="/crypto-solutions" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/crypto-solutions">
                <span className="">Crypto Solutions</span>
              </AHLink>
            </Link>
            <Link href="/affiliate-agent-system" passHref legacyBehavior>
              <AHLink className="footer-menu hover:underline" href="/affiliate-agent-system">
                <span className="">Affiliate and Agent System</span>
              </AHLink>
            </Link>
          </div>
        </div>

        <div className="relative flex items-center select-none max-w-fit z-10 text-white space-x-3">
          <Link href="/terms-and-conditions" passHref legacyBehavior>
            <AHLink className="footer-menu hover:underline" href="/terms-and-conditions">
              <span className="">Terms and Conditions</span>
            </AHLink>
          </Link>
          <span>&</span>
          <Link href="/privacy-policy" passHref legacyBehavior>
            <AHLink className="footer-menu hover:underline" href="/privacy-policy">
              <span className="">Privacy Policy</span>
            </AHLink>
          </Link>
        </div>

        <div className="relative z-10 grid grid-flow-row gap-11 text-white justify-items-stretch lg:place-items-center lg:grid-flow-col lg:gap-0">
          <div className="website-content inline-flex space-x-4 items-center lg:justify-self-start">
            <Image src={Plus18} alt="Content 18 Plus" />
            <p className="text-sm">
              The Website Content Is Not Intended For An Audience Under 18 Years Of Age
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
