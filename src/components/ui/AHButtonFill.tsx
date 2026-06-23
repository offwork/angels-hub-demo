"use client";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { classNames } from "@/utils";

type BTN_SIZE = "normal" | "small" | "medium" | "large" | "apply" | "accordion";

export default function ButtonFill({
  className,
  href,
  label,
  size,
  selector,
  upDown = false,
  target,
}: {
  href: string;
  label: string;
  className: string;
  size: BTN_SIZE;
  selector?: string;
  upDown?: boolean;
  target?: HTMLAttributeAnchorTarget;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null!);

  useGSAP((context, contextSafe) => {
    const gradientBg = linkRef.current.querySelector<HTMLDivElement>(".absolute");
    gsap.set(gradientBg, {
      opacity: 0,
      backgroundColor: "transparent",
      backgroundSize: "200% 200%",
      transformOrigin: "50% 50%",
    });
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(gradientBg, {
        keyframes: {
          "0%": { backgroundPosition: "0% -100%" },
          "50%": { backgroundPosition: "-100% 0%" },
          "100%": { backgroundPosition: "0% -100%" },
        },
        duration: 1.6,
        repeat: -1,
        yoyo: true,
      })
      .reverse();

    const onEnter = contextSafe!((evt: MouseEvent) => {
      gsap.set(gradientBg, { opacity: 1 });
      hoverTL.reversed(false);
    });

    const onLeave = contextSafe!((evt: MouseEvent) => {
      gsap.set(gradientBg, { opacity: 0 });
      hoverTL.reversed(true).progress(0).revert();
    });

    linkRef.current.addEventListener("mouseenter", onEnter);
    linkRef.current.addEventListener("mouseleave", onLeave);

    return () => {
      linkRef.current.removeEventListener("mouseenter", onEnter);
      linkRef.current.removeEventListener("mouseleave", onLeave);
    };
  });

  return (
    <>
      {
        {
          normal: (
            <a
              ref={linkRef}
              type="button"
              className={`${selector} cursor-pointer relative block rounded-full max-w-fit h-auto p-0.5`}
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-11 py-4 text-center`}
              >
                <span className="select-none uppercase">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </a>
          ),
          accordion: (
            <a
              ref={linkRef}
              type="button"
              className="relative block cursor-pointer rounded-full max-w-fit h-auto p-0.5 bg-white"
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-9 py-3 flex items-center`}
              >
                <svg
                  className={classNames(upDown ? "rotate-180" : "rotate-0", "w-7 h-7")}
                  width="57"
                  height="30"
                  viewBox="0 0 57 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.5 1.50098L28.5 28.501L1.5 1.50098"
                    stroke="#939393"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </a>
          ),
          apply: (
            <a
              ref={linkRef}
              type="button"
              className="relative block cursor-pointer rounded-full max-w-fit h-auto p-0.5 bg-white"
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-9 py-3 text-center`}
              >
                <span className="select-none">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </a>
          ),
          small: (
            <Link
              href={href}
              ref={linkRef}
              target={target}
              className="relative block rounded-full max-w-fit h-auto p-0.5 bg-white"
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-9 py-3 text-center`}
              >
                <span className="select-none">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </Link>
          ),
          medium: (
            <Link
              href={href}
              ref={linkRef}
              target={target}
              className="relative rounded-full max-w-fit h-auto p-0.5"
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-11 py-4 text-center`}
              >
                <span className="select-none uppercase">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </Link>
          ),
          large: (
            <Link
              href={href}
              ref={linkRef}
              target={target}
              className="relative grow rounded-full w-full h-auto p-0.5 drop-shadow-xl bg-white"
            >
              <div
                className={`${className} relative z-10 w-full h-full rounded-full px-10 py-7 text-center lg:px-20`}
              >
                <span className="text-sm select-none uppercase">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </Link>
          ),
        }[size]
      }
    </>
  );
}
