"use client";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import SocailIcon from "./Team/ah-social-icon";
import { classNames } from "@/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Topnavs() {
  const [backdrop, setBackdrop] = useState(false);
  const isOpen = useRef<boolean>(true);
  const wrapMenuRef = useRef<HTMLDivElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const menuContainRef = useRef<HTMLDivElement>(null!);
  const hamburgerTl = useRef<GSAPTimeline>(null!);

  useGSAP(
    (context, contextSafe) => {
      const hamburgerLines =
        gsap.utils.toArray<HTMLSpanElement>(".hamburger-line");
      const linkButtons =
        wrapMenuRef.current.querySelector<HTMLAnchorElement>(".link-buttons");
      const scheduleLink =
        wrapMenuRef.current.querySelector<HTMLAnchorElement>(".schedule-link");
      const hamburgerWraper =
        wrapMenuRef.current.querySelector<HTMLAnchorElement>(
          ".hamburger-wraper"
        );
      const mobileLinkButtons =
        wrapMenuRef.current.querySelector<HTMLDivElement>(
          ".mobile-link-buttons"
        );
      const menuItems =
        menuContainRef.current.querySelectorAll(".main-nav-item");
      hamburgerTl.current = gsap.timeline({ paused: true });

      hamburgerTl.current
        .set(scheduleLink, { display: "inline-block", width: 0, autoAlpha: 0 })
        .set(menuItems, { xPercent: -20, autoAlpha: 0 })
        .set(mobileLinkButtons, { xPercent: -20, autoAlpha: 0 })
        .set(menuContainRef.current, {
          display: "none",
          height: 0,
          width: 0,
        })
        .addLabel("mainMenu")
        .to(
          linkButtons,
          {
            x: -326,
            paddingRight: "8px",
            marginRight: 0,
            ease: "power4.out",
          },
          "mainMenu"
        )
        .to(scheduleLink, { width: "auto", autoAlpha: 1 }, "mainMenu")
        .to(hamburgerWraper, { backgroundColor: "#FFFFFF" }, "mainMenu")
        .to(hamburgerLines[1], { opacity: 0 }, "<0.3")
        .to(
          hamburgerLines[0],
          { y: 5, rotate: 45, backgroundColor: "#fe5f00", ease: "expo.inOut" },
          "mainMenu"
        )
        .to(
          hamburgerLines[2],
          {
            y: -5,
            rotate: -45,
            backgroundColor: "#fe5f00",
            ease: "expo.inOut",
          },
          "mainMenu"
        )
        .to(
          mobileLinkButtons,
          {
            xPercent: 0,
            autoAlpha: 1,
          },
          "mainMenu"
        )
        .to(
          menuContainRef.current,
          {
            height: "100vh",
            width: "100%",
            display: "block",
            onComplete: () => {
              isOpen.current = false;
            },
          },
          "mainMenu"
        );

      menuItems.forEach((elm, idx) => {
        hamburgerTl.current.to(
          elm,
          { xPercent: 0, autoAlpha: 1, ease: "sine.inOut" },
          `mainMenu+=${idx * 0.1}`
        );
      });

      const clickOnHamburger = contextSafe!(() => {
        if (isOpen.current) {
          hamburgerTl.current.play();
          setBackdrop(true)
        } else {
          hamburgerTl.current.reverse();
          isOpen.current = true;
          setBackdrop(false)
        }
      });

      btnRef.current.addEventListener("click", clickOnHamburger);

      return () => {
        btnRef.current.removeEventListener("click", clickOnHamburger);
      };
    },
    { scope: wrapMenuRef }
  );

  return (
    <>
      <div
        ref={wrapMenuRef}
        className="fixed z-40 flex items-center pt-4 mr-8 lg:mr-16 top-0 right-0"
      >
        <div className="relative hidden link-buttons z-10 lg:inline-block rounded-lg py-2 pl-2 lg:pr-[59px] lg:-mr-[59px] bg-black">
          <Link
            href="/"
            className="demo-link inline-block min-h-11 text-white space-x-2 border rounded-lg px-4 py-2"
          >
            <div className="flex items-center space-x-2 text-nowrap">
              <span>Book a Demo</span>
              <svg
                className="motion-safe:animate-pulse"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="svg" clipPath="url(#clip0_697_1585)">
                  <path
                    id="Vector"
                    d="M15.5966 7.07958C15.596 6.95827 15.5709 6.83834 15.5228 6.72698C15.4747 6.61562 15.4046 6.51514 15.3166 6.43158L10.1816 1.29858C9.97964 1.10358 9.76964 1.01758 9.54964 1.01758C9.04964 1.01758 8.69064 1.36858 8.69064 1.84558C8.69064 2.09558 8.79264 2.30558 8.94864 2.46258L10.7066 4.24358L12.9716 6.31358L11.1596 6.20458H1.68964C1.16664 6.20458 0.806641 6.56458 0.806641 7.07958C0.806641 7.58758 1.16664 7.94658 1.68964 7.94658H11.1586L12.9706 7.83758L10.7056 9.90758L8.94764 11.6896C8.86561 11.77 8.80052 11.866 8.75621 11.972C8.7119 12.0779 8.68926 12.1917 8.68964 12.3066C8.68964 12.7826 9.04964 13.1346 9.54964 13.1346C9.78239 13.131 10.0043 13.0354 10.1666 12.8686L15.3146 7.72058C15.402 7.63817 15.4719 7.53905 15.5201 7.42911C15.5684 7.31917 15.5941 7.20064 15.5956 7.08058L15.5966 7.07958Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_697_1585">
                    <rect
                      width="16"
                      height="13"
                      fill="white"
                      transform="translate(0 0.299805)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>
          <Link
            href="/"
            className="schedule-link text-nowrap hidden text-angel-orange ml-4 bg-angel-blue rounded-lg px-4 py-2"
          >
            <span>Schedule a meeting</span>
          </Link>
        </div>
        <button ref={btnRef} className="relative z-10 inline-block p-2">
          <div className="hamburger-wraper grid bg-angel-orange gap-[3px] rounded-lg py-4 px-3 min-h-11">
            <span className="hamburger-line relative bg-white w-[19px] h-[2px]"></span>
            <span className="hamburger-line relative bg-white w-[19px] h-[2px]"></span>
            <span className="hamburger-line relative bg-white w-[19px] h-[2px]"></span>
          </div>
        </button>
        <div
          ref={menuContainRef}
          className="absolute hidden z-0 overflow-hidden top-0 -right-8 lg:-right-16 min-w-max lg:min-w-[890px]"
        >
          <div className="menu-contain bg-angel-orange pt-28 lg:pt-36 w-screen lg:w-full h-full overflow-y-scroll">
            <div className="relative block mobile-link-buttons z-10 right-0 px-8 mb-10 lg:px-20 lg:hidden">
              <div className="grid grid-flow-col gap-2 rounded-lg p-2 w-full bg-black">
                <Link
                  href="/"
                  className="min-h-11 text-white flex items-center justify-center text-sm text-nowrap space-x-2 border rounded-lg px-4 py-2"
                >
                  <span>Book a Demo</span>
                  <svg
                    className="motion-safe:animate-pulse"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="svg" clipPath="url(#clip0_697_1585)">
                      <path
                        id="Vector"
                        d="M15.5966 7.07958C15.596 6.95827 15.5709 6.83834 15.5228 6.72698C15.4747 6.61562 15.4046 6.51514 15.3166 6.43158L10.1816 1.29858C9.97964 1.10358 9.76964 1.01758 9.54964 1.01758C9.04964 1.01758 8.69064 1.36858 8.69064 1.84558C8.69064 2.09558 8.79264 2.30558 8.94864 2.46258L10.7066 4.24358L12.9716 6.31358L11.1596 6.20458H1.68964C1.16664 6.20458 0.806641 6.56458 0.806641 7.07958C0.806641 7.58758 1.16664 7.94658 1.68964 7.94658H11.1586L12.9706 7.83758L10.7056 9.90758L8.94764 11.6896C8.86561 11.77 8.80052 11.866 8.75621 11.972C8.7119 12.0779 8.68926 12.1917 8.68964 12.3066C8.68964 12.7826 9.04964 13.1346 9.54964 13.1346C9.78239 13.131 10.0043 13.0354 10.1666 12.8686L15.3146 7.72058C15.402 7.63817 15.4719 7.53905 15.5201 7.42911C15.5684 7.31917 15.5941 7.20064 15.5956 7.08058L15.5966 7.07958Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_697_1585">
                        <rect
                          width="16"
                          height="13"
                          fill="white"
                          transform="translate(0 0.299805)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="/"
                  className="text-nowrap text-angel-orange text-sm flex justify-center items-center bg-angel-blue rounded-lg px-4 py-2"
                >
                  <span>Schedule a meeting</span>
                </Link>
              </div>
            </div>
            <ul className="grid w-full grid-flow-row divide-y px-8 lg:px-20 pb-16 divide-white/50 text-nowrap text-white text-xl lg:text-3xl font-semibold">
              <li className="main-nav-item py-4 lg:py-6">
                <a href="" className="">
                  Products
                </a>
              </li>
              <li className="main-nav-item py-4 lg:py-6">
                <a href="" className="">
                  Solutions
                </a>
              </li>
              <li className="main-nav-item py-4 lg:py-6">
                <a href="" className="">
                  Angel Investment
                </a>
              </li>
              <li className="main-nav-item py-4 lg:py-6">
                <a href="" className="">
                  About Us
                </a>
              </li>
              <li className="main-nav-item py-4 lg:py-6">
                <a href="" className="">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="grid gap-12 bg-[#0F0F0F] px-8 lg:px-20 py-12">
              <div className="grid gap-9 place-self-start w-full md:justify-items-stretch md:grid-flow-col xl:gap-20">
                <div className="grid gap-4 text-white md:justify-self-start">
                  <a href="/" className="footer-menu font-bold text-xl">
                    Useful Links
                  </a>
                  <a href="/" className="footer-menu">
                    Angel Investment
                  </a>
                  <a href="/" className="footer-menu">
                    Events
                  </a>
                  <a href="/" className="footer-menu">
                    Careers
                  </a>
                  <a href="/" className="footer-menu">
                    Demo
                  </a>
                  <a href="/" className="footer-menu">
                    Contact Us
                  </a>
                </div>
                <div className="grid gap-4 text-white md:justify-self-center">
                  <a href="/" className="footer-menu font-bold text-xl">
                    Solutions
                  </a>
                  <a href="/" className="footer-menu">
                    White Label
                  </a>
                  <a href="/" className="footer-menu">
                    Turnkey System
                  </a>
                  <a href="/" className="footer-menu">
                    Managed Services
                  </a>
                  <a href="/" className="footer-menu">
                    Angels Payments
                  </a>
                </div>
                <div className="grid gap-4 text-white md:justify-self-end">
                  <a href="/" className="footer-menu font-bold text-xl">
                    Products
                  </a>
                  <a href="/" className="footer-menu">
                    Sportsbook
                  </a>
                  <a href="/" className="footer-menu">
                    Online Casino
                  </a>
                  <a href="/" className="footer-menu">
                    Crypto Solutions
                  </a>
                  <a href="/" className="footer-menu">
                    Affiliate and Agent System
                  </a>
                  <a href="/" className="footer-menu">
                    CRM
                  </a>
                </div>
              </div>
              <div className="bg-[#2E2E2E] flex justify-center items-center rounded-3xl w-full h-80">
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 16.5L0.749998 32.5215L0.75 0.47853L27 16.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
              <div className="social-icons flex flex-col items-center gap-6 md:flex-row">
                <div className="grid grid-flow-col gap-3">
                  <SocailIcon name="linkedin" bg="bg-[#0F0F0F]" />
                  <SocailIcon name="instegram" bg="bg-[#0F0F0F]" />
                  <SocailIcon name="twitter" bg="bg-[#0F0F0F]" />
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
            </div>
          </div>
        </div>
      </div>
      <div className={classNames(
        backdrop ? "flex": "hidden",
        "fixed z-30 top-0 left-0 bottom-0 right-0 inset-0 w-full h-full opacity-30 bg-black"
      )}></div>
    </>
  );
}
