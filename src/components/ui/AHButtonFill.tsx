"use client";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type BTN_SIZE = "small" | "medium" | "large";

export default function ButtonFill({
  bg,
  href,
  label,
  size,
  selector,
}: {
  href: string;
  label: string;
  bg: string;
  size: BTN_SIZE;
  selector?: string
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
          small: (
            <a
              type="button"
              ref={linkRef}
              className={`cursor-pointer ${selector} relative rounded-full max-w-fit h-auto p-0.5`}
            >
              <div
                className={`relative z-10 w-full h-full rounded-full ${bg} text-white px-11 py-4 text-center`}
              >
                <span className="select-none uppercase">{label}</span>
              </div>
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
            </a>
          ),
          medium: (
            <Link
              href={href}
              ref={linkRef}
              className="relative rounded-full max-w-fit h-auto p-0.5"
            >
              <div
                className={`relative z-10 w-full h-full rounded-full ${bg} text-white px-11 py-4 text-center`}
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
              className="relative grow rounded-full w-full h-auto p-0.5 drop-shadow-xl bg-white"
            >
              <div
                className={`relative z-10 w-full h-full rounded-full ${bg} text-white px-10 py-7 text-center lg:px-20`}
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
