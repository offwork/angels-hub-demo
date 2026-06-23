"use client";
import { classNames } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import BrandAmblem from "../ui/AHBrandAmblem";
import BrandLogo from "../ui/AHBrandLogo";
import AHLink from "../ui/AHLink";
import SocailIcon from "../ui/AHSocialIcon";
import Link from "next/link";

export default function Topnavs() {
  const [backdrop, setBackdrop] = useState(false);
  const isOpen = useRef<boolean>(true);
  const wrapMenuRef = useRef<HTMLDivElement>(null!);
  const backdropRef = useRef<HTMLDivElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const menuContainRef = useRef<HTMLDivElement>(null!);
  const openMenuRef = useRef<HTMLDivElement | null>(null!);
  const stickyLogoRef = useRef<HTMLDivElement>(null!);
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
      const customLink = gsap.utils.toArray<HTMLAnchorElement>(".custom-link")!;
      const menuToggles = accordionGroups.map(createAnimation);
      hamburgerTl.current = gsap.timeline({ paused: true });
      hoverTL.current = gsap.timeline({ paused: true });

      /*==========================     STICKY LOGO SCROLL     ========================*/
      const stickyEnd = gsap
        .timeline({
          scrollTrigger: {
            trigger: document.querySelector<HTMLDivElement>(".footer")!,
            start: "center 25%",
            toggleActions: "play none none reverse",
            preventOverlaps: true,
          },
        })
        .fromTo(stickyLogoRef.current, { xPercent: 0, opacity: 1 }, { opacity: 0, xPercent: -100 });
      const stickyStart = gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapMenuRef.current,
            start: "center",
            end: () => wrapMenuRef.current.offsetHeight + "=600",
            toggleActions: "play none none reverse",
            preventOverlaps: true,
          },
        })
        .fromTo(stickyLogoRef.current, { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1 });
      /*===========================     STICKY LOGO END     ==========================*/

      hamburgerTl.current
        .set(scheduleLink, { display: "inline-block", width: 0, autoAlpha: 0 })
        .set(menuItems, { yPercent: -50, autoAlpha: 0 })
        .set(mobileLinkButtons, { yPercent: -50, autoAlpha: 0 })
        .set(menuContainRef.current, {
          display: "none",
          height: 0,
          width: 0,
        })
        .addLabel("mainMenu")
        .to(
          linkButtons,
          {
            xPercent: -113,
            paddingRight: "8px",
            marginRight: 0,
            backgroundColor: "#FFFFFF",
            ease: "power3.inOut",
          },
          "mainMenu"
        )
        .to(scheduleLink, { width: "auto", autoAlpha: 1 }, "mainMenu")
        .to(hamburgerWraper, { backgroundColor: "#FFFFFF" }, "mainMenu")
        .to(hamburgerLines[1], { opacity: 0 }, "<0.3")
        .to(hamburgerLines[0], { y: 5, rotate: 45, ease: "expo.inOut" }, "mainMenu")
        .to(
          hamburgerLines[2],
          {
            y: -5,
            rotate: -45,
            ease: "expo.inOut",
          },
          "mainMenu"
        )
        .to(
          mobileLinkButtons,
          {
            yPercent: 0,
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
              if (openMenuRef.current) {
                openMenuRef.current = null;
              }
            },
          },
          "mainMenu"
        );

      menuItems.forEach((elm, idx) => {
        hamburgerTl.current.to(
          elm,
          { yPercent: 0, autoAlpha: 1, ease: "power4.out", duration: 1.1, stagger: 0.1 },
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
          if (openMenuRef.current) {
            toggleMenu(openMenuRef.current);
          }
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
        openMenuRef.current = clickedMenu;
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

      const clickOnBackdrop = contextSafe!(() => {
        hamburgerTl.current.reverse();
        isOpen.current = true;
        setBackdrop(false);
        if (openMenuRef.current) {
          toggleMenu(openMenuRef.current);
        }
      });

      customLink.forEach((anchor) => {
        anchor.addEventListener("click", clickOnBackdrop)
      })

      backdropRef.current.addEventListener("click", clickOnBackdrop);

      return () => {
        btnRef.current.removeEventListener("click", clickOnHamburger);
        customLink.forEach((anchor) => {
          anchor.removeEventListener("click", clickOnBackdrop)
        })
      };
    },
    { scope: wrapMenuRef.current }
  );

  return (
    <>
      <div ref={stickyLogoRef} className="fixed z-50 top-5 opacity-0 rounded-r-lg overflow-hidden">
        <AHLink href="/" className="relative block w-16 h-12">
          <BrandAmblem className="absolute top-0 left-0 w-full h-auto" />
        </AHLink>
      </div>
      <div
        ref={wrapMenuRef}
        className="fixed z-40 flex items-center pt-4 mr-8 lg:mr-16 top-0 right-0"
      >
        <div className="relative hidden link-buttons z-10 lg:inline-block rounded-lg py-2.5 pl-2 lg:pr-[59px] lg:-mr-[59px] bg-angel-orange">
          <Link
            className="demo-link inline-block text-white rounded-lg px-4 py-2.5 bg-angel-blue hover:text-angel-orange"
            href="/contact"
            target="_blank"
          >
            <span>Book a Demo</span>
          </Link>
          <Link
            className="schedule-link text-nowrap hidden text-angel-orange ml-4 bg-white border border-angel-blue-300 rounded-lg px-4 py-2 hover:text-angel-blue"
            href="/contact"
            target="_blank"
          >
            <span>Schedule a Meeting</span>
          </Link>
        </div>
        <button
          ref={btnRef}
          className="relative z-10 inline-block p-2"
          role="button"
          aria-label="Hamburger Menu"
          aria-labelledby="Hamburger"
        >
          <div className="hamburger-wraper grid bg-white gap-[3px] rounded-lg py-4 px-3">
            <span className="hamburger-line relative bg-angel-blue w-[19px] h-[2px]"></span>
            <span className="hamburger-line relative bg-angel-blue w-[19px] h-[2px]"></span>
            <span className="hamburger-line relative bg-angel-blue w-[19px] h-[2px]"></span>
          </div>
        </button>
        <div
          ref={menuContainRef}
          className="absolute hidden z-0 overflow-hidden top-0 -right-8 border-l border-white/50 lg:-right-16 min-w-max lg:min-w-[890px]"
        >
          <div className="menu-contain bg-angel-orange pt-28 lg:pt-36 w-screen lg:w-full h-full overscroll-none overflow-y-scroll">
            <AHLink
              href="/"
              className="lg:hidden bg-angel-orange w-full h-24 top-0 absolute z-30 px-6 py-8"
            >
              <BrandLogo />
            </AHLink>
            <ul className="grid w-full grid-flow-row divide-y px-10 md:px-20 pb-16 divide-white/50 text-nowrap text-white text-xl lg:text-3xl font-semibold">
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Products</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <AHLink className="hover:text-white/65" href="/sportsbook">
                    Sportsbook
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/online-casino">
                    Online Casino
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/crypto-solutions">
                    Crypto Solutions
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/affiliate-agent-system">
                    Affiliate and Agent System
                  </AHLink>
                </div>
              </li>
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Solutions</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <AHLink className="hover:text-white/65" href="/white-label">
                    White Label
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/turnkey-system">
                    Turnkey-System
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/managed-services">
                    Managed Services
                  </AHLink>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center space-x-3">
                  <AHLink href="/angel-investment" className="footer-menu">
                    Angel Investment
                  </AHLink>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center">
                  <AHLink href="/about">About Us</AHLink>
                </div>
              </li>
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>News & Events</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <AHLink className="hover:text-white/65" href="/news-and-events/page/1">
                    View All
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/news-and-events/news/page/1">
                    News
                  </AHLink>
                  <AHLink
                    className="hover:text-white/65"
                    href="/news-and-events/press-releases/page/1"
                  >
                    Press Releases
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/news-and-events/articles/page/1">
                    Articles
                  </AHLink>
                  <AHLink className="hover:text-white/65" href="/news-and-events/events/page/1">
                    Events
                  </AHLink>
                </div>
              </li>
              <li className="cursor-pointer main-nav-item py-4 select-none lg:py-6">
                <div className="flex items-center space-x-3">
                  <AHLink href="/contact">Contact Us</AHLink>
                </div>
              </li>
              <li className="accordion-group cursor-pointer main-nav-item py-4 select-none lg:py-6 lg:hidden">
                <div className="accordion-menu flex items-center">
                  <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">+</span>
                  <span>Useful Links</span>
                </div>
                <div className="accordion-content pl-5 grid gap-6 text-lg text-white h-0 overflow-hidden">
                  <AHLink className="footer-menu hover:text-white/65" href="/news-and-events">
                    <span className="">News & Events</span>
                  </AHLink>
                  <AHLink href="/careers" className="footer-menu hover:text-white/65">
                    Careers
                  </AHLink>
                  <AHLink className="footer-menu hover:text-white/65" href="/contact">
                    <span className="">Demo</span>
                  </AHLink>
                </div>
              </li>
            </ul>
            <div className="relative grid mobile-link-buttons mx-auto gap-8 justify-items-center px-6 lg:hidden">
              <AHLink
                className="bg-white text-angel-orange rounded-full px-11 py-4 text-center w-full hover:underline"
                href="/contact"
              >
                <span className="uppercase">BOOK A DEMO</span>
              </AHLink>
              <AHLink
                className="bg-black rounded-full px-11 py-4 text-white text-center w-full hover:underline"
                href="/contact"
              >
                <span className="uppercase">Schedule a Meeting</span>
              </AHLink>
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
            <div className="hidden gap-12 px-20 py-12 lg:grid">
              <div className="flex items-baseline space-y-9 w-full border-t border-white/50 flex-col md:justify-between md:flex-row xl:space-x-16">
                <div className="grid gap-4 text-white">
                  <span className="footer-menu font-bold text-xl place-self-auto">
                    Useful Links
                  </span>
                  <AHLink href="/careers" className="footer-menu hover:underline">
                    Careers
                  </AHLink>
                  <AHLink className="footer-menu place-self-auto hover:underline" href="/contact">
                    <span className="">Demo</span>
                  </AHLink>
                </div>
                <div className="social-icons flex flex-col items-center space-y-6">
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
            </div>
          </div>
        </div>
      </div>
      <div
        ref={backdropRef}
        className={classNames(
          backdrop ? "flex" : "hidden",
          "fixed z-30 bottom-0 cursor-pointer inset-0 opacity-30 bg-black"
        )}
      ></div>
    </>
  );
}
