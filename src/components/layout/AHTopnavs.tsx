"use client";
import { classNames } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";
import SocailIcon from "../ui/AHSocialIcon";
import BrandLogo from "./AHBrandLogo";
import AHLink from "../ui/AHLink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Topnavs() {
  const [backdrop, setBackdrop] = useState(false);
  const [fill, setFill] = useState("#FFFFFF");
  const isOpen = useRef<boolean>(true);
  const wrapMenuRef = useRef<HTMLDivElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const menuContainRef = useRef<HTMLDivElement>(null!);
  const bookDemoRef = useRef<HTMLDivElement>(null!);
  const arrowRef = useRef<SVGSVGElement>(null!);
  const hamburgerTl = useRef<GSAPTimeline>(null!);
  const hoverTL = useRef<GSAPTimeline>(null!);

  useGSAP(
    (_context, contextSafe) => {
      const hamburgerLines = gsap.utils.toArray<HTMLSpanElement>(".hamburger-line");
      const linkButtons = wrapMenuRef.current.querySelector<HTMLAnchorElement>(".link-buttons")!;
      const scheduleLink = wrapMenuRef.current.querySelector<HTMLAnchorElement>(".schedule-link")!;
      const hamburgerWraper =
        wrapMenuRef.current.querySelector<HTMLAnchorElement>(".hamburger-wraper")!;
      const mobileLinkButtons =
        wrapMenuRef.current?.querySelector<HTMLDivElement>(".mobile-link-buttons")!;
      const menuItems = menuContainRef.current.querySelectorAll(".main-nav-item")!;
      const accordionGroups = gsap.utils.toArray<HTMLDivElement>(".accordion-group");
      const accordionMenus = gsap.utils.toArray<HTMLDivElement>(".accordion-menu");
      const menuToggles = accordionGroups.map(createAnimation);
      hamburgerTl.current = gsap.timeline({ paused: true });
      hoverTL.current = gsap.timeline({ paused: true });
      gsap.set(arrowRef.current, { opacity: 0.75 });

      hoverTL.current
        .to(arrowRef.current, {
          keyframes: {
            "0%": { transform: "translateX(0)", opacity: 0.75 },
            "50%": { transform: "translateX(50%)", opacity: 1 },
            "100%": { transform: "translateX(0)", opacity: 0.75 },
            easeEach: "none",
          },
          duration: 0.8,
          repeat: -1,
          yoyo: true,
        })
        .reverse();

      const onEnter = contextSafe!((evt: MouseEvent) => {
        setFill("#fe5f00");
        hoverTL.current.reversed(false);
      });

      const onLeave = contextSafe!((evt: MouseEvent) => {
        setFill("#FFFFFF");
        hoverTL.current.reversed(true).progress(0).revert();
      });

      bookDemoRef.current.addEventListener("mouseenter", onEnter);
      bookDemoRef.current.addEventListener("mouseleave", onLeave);

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
          setBackdrop(true);
        } else {
          hamburgerTl.current.reverse();
          isOpen.current = true;
          setBackdrop(false);
        }
      });

      btnRef.current.addEventListener("click", clickOnHamburger);

      accordionMenus.forEach((menu) => {
        menu.addEventListener("click", (evt: MouseEvent) => {
          toggleMenu(menu);
          evt.stopPropagation();
        });
      });

      function toggleMenu(clickedMenu: HTMLDivElement) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
      }

      function createAnimation(element: HTMLDivElement) {
        const menu = element.querySelector(".accordion-menu");
        const box = element.querySelector(".accordion-content");
        const plus = element.querySelector(".font-light");

        gsap.set(box, { height: "auto", paddingBottom: 8, paddingTop: 20 });
        gsap.set(plus, { rotate: 45, transformOrigin: "50% 50%" });

        const accordionTl = gsap.timeline({ paused: true });

        accordionTl
          .from(plus, { rotate: 0, ease: "sine.in", duration: 0.5 })
          .from(
            box,
            { height: 0, paddingBottom: 0, paddingTop: 0, duration: 0.7, ease: "back.in" },
            "<"
          )
          .reverse();

        return function (clickedMenu: HTMLDivElement) {
          if (clickedMenu === menu) {
            accordionTl.reversed(!accordionTl.reversed());
          } else {
            accordionTl.reverse();
          }
        };
      }

      return () => {
        btnRef.current.removeEventListener("click", clickOnHamburger);
        bookDemoRef.current.removeEventListener("mouseenter", onEnter);
        bookDemoRef.current.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: wrapMenuRef.current }
  );

  return (
    <>
      <div
        ref={wrapMenuRef}
        className="fixed z-40 flex items-center pt-4 mr-8 lg:mr-16 top-0 right-0"
      >
        <div className="relative hidden link-buttons z-10 lg:inline-block rounded-lg py-2 pl-2 lg:pr-[59px] lg:-mr-[59px] bg-black">
          <Link href="/contact" passHref legacyBehavior>
            <AHLink
              className="demo-link inline-block min-h-11 text-white space-x-2 border rounded-lg px-4 py-2 hover:text-angel-orange"
              href="/contact"
            >
              <div ref={bookDemoRef} className="flex items-center space-x-2 text-nowrap">
                <span>Book a Demo</span>
                <svg
                  ref={arrowRef}
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
                      fill={fill}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_697_1585">
                      <rect width="16" height="13" fill={fill} transform="translate(0 0.299805)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </AHLink>
          </Link>
          <Link
            href="/"
            className="schedule-link text-nowrap hidden text-angel-orange ml-4 bg-angel-blue rounded-lg px-4 py-2 hover:text-white"
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
          <div className="menu-contain bg-angel-orange pt-28 lg:pt-36 w-screen lg:w-full h-full overscroll-none overflow-y-scroll">
            <Link href="/" passHref legacyBehavior>
              <BrandLogo
                className="lg:hidden bg-angel-orange w-full h-24 top-0 absolute z-30 px-6 py-8"
                href="/"
              />
            </Link>
            <ul className="grid w-full grid-flow-row divide-y px-10 md:px-20 pb-16 divide-white/50 text-nowrap text-white text-xl lg:text-3xl font-semibold">
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Products</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <Link href="/sportsbook" className="footer-menu" passHref legacyBehavior>
                    <AHLink className="hover:text-white/65" href="/sportsbook">
                      Sportsbook
                    </AHLink>
                  </Link>
                  <Link href="/online-casino" className="footer-menu" passHref legacyBehavior>
                    <AHLink className="hover:text-white/65" href="/online-casino">
                      Online Casino
                    </AHLink>
                  </Link>
                  <Link href="/crypto-solutions" className="footer-menu" passHref legacyBehavior>
                    <AHLink className="hover:text-white/65" href="/crypto-solutions">
                      Crypto Solutions
                    </AHLink>
                  </Link>
                  <Link
                    href="/affiliate-agent-system"
                    className="footer-menu"
                    passHref
                    legacyBehavior
                  >
                    <AHLink className="hover:text-white/65" href="/affiliate-agent-system">
                      Affiliate and Agent System
                    </AHLink>
                  </Link>
                </div>
              </li>
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Solutions</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <Link href="/website-api" className="footer-menu hover:text-white/65">
                    Website API
                  </Link>
                  <Link href="/turnkey-system" className="footer-menu hover:text-white/65">
                    Turnkey-System
                  </Link>
                  <Link href="/managed-services" className="footer-menu hover:text-white/65">
                    Managed Services
                  </Link>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center space-x-3">
                  <span>Angel Investment</span>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>About Us</span>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center space-x-3">
                  <Link href="/contact" className="footer-menu" passHref legacyBehavior>
                    <AHLink href="/contact">Contact Us</AHLink>
                  </Link>
                </div>
              </li>
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6 lg:hidden">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Useful Links</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <a href="/" className="footer-menu hover:text-white/65">
                    Events
                  </a>
                  <a href="/" className="footer-menu hover:text-white/65">
                    Careers
                  </a>
                  <a href="/" className="footer-menu hover:text-white/65">
                    Demo
                  </a>
                </div>
              </li>
            </ul>
            <div className="flex mobile-link-buttons mx-auto items-center justify-center flex-col space-y-8 max-w-80 sm:max-w-md lg:hidden">
              <Link href="/contact" passHref legacyBehavior>
                <AHLink
                  className="bg-white text-angel-orange rounded-full px-11 py-4 text-center w-full hover:underline"
                  href="/contact"
                >
                  <span className="uppercase">BOOK A MEETING</span>
                </AHLink>
              </Link>
              <Link
                href="/"
                className="bg-black rounded-full px-11 py-4 text-white text-center w-full hover:underline"
              >
                <span className="uppercase">Schedule a meeting</span>
              </Link>
              <div className="social-icons flex flex-col items-center gap-6 md:flex-row">
                <div className="grid grid-flow-col gap-3">
                  <SocailIcon
                    href="https://www.linkedin.com/company/angelshub/"
                    name="linkedin"
                    bg="bg-angel-orange"
                  />
                  <SocailIcon
                    href="https://www.instagram.com/angelshub_official/"
                    name="instegram"
                    bg="bg-angel-orange"
                  />
                  <SocailIcon
                    href="https://twitter.com/angelshubcom"
                    name="twitter"
                    bg="bg-angel-orange"
                  />
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
            <div className="hidden gap-12 bg-[#0F0F0F] px-20 py-12 lg:grid">
              <div className="flex items-baseline space-y-9 w-full flex-col md:justify-between md:flex-row xl:space-x-16">
                <div className="grid gap-4 text-white">
                  <span className="footer-menu font-bold text-xl place-self-auto">
                    Useful Links
                  </span>
                  <a href="/" className="footer-menu place-self-auto">
                    Events
                  </a>
                  <a href="/" className="footer-menu place-self-auto">
                    Careers
                  </a>
                  <a href="/" className="footer-menu place-self-auto">
                    Demo
                  </a>
                </div>
                <div className="social-icons flex flex-col items-center space-y-6">
                  <div className="grid grid-flow-col gap-3">
                    <SocailIcon
                      href="https://www.linkedin.com/company/angelshub/"
                      name="linkedin"
                      bg="bg-[#0F0F0F]"
                    />
                    <SocailIcon
                      href="https://www.instagram.com/angelshub_official/"
                      name="instegram"
                      bg="bg-[#0F0F0F]"
                    />
                    <SocailIcon
                      href="https://twitter.com/angelshubcom"
                      name="twitter"
                      bg="bg-[#0F0F0F]"
                    />
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
              <div className="bg-[#2E2E2E] flex justify-center items-center rounded-3xl w-full h-80">
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27 16.5L0.749998 32.5215L0.75 0.47853L27 16.5Z" fill="#D9D9D9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          backdrop ? "flex" : "hidden",
          "fixed z-30 top-0 left-0 bottom-0 right-0 inset-0 w-full h-full opacity-30 bg-black"
        )}
      ></div>
    </>
  );
}
