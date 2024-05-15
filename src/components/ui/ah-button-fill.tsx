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
}: {
  href: string;
  label: string;
  bg: string;
  size: BTN_SIZE;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null!);

  useGSAP((context, contextSafe) => {
    gsap.set(linkRef.current, { backgroundColor: "transparent", backgroundSize: "200% 200%", transformOrigin: "50% 50%" });
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(linkRef.current, {
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
      hoverTL.reversed(false);
    });

    const onLeave = contextSafe!((evt: MouseEvent) => {
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
            <Link
              href={href}
              ref={linkRef}
              className="bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full max-w-fit p-0.5"
            >
              <div
                className={`w-full h-full rounded-full ${bg} text-white px-11 py-4 text-center hover:bg-white hover:text-angel-orange`}
              >
                <span className="select-none uppercase">{label}</span>
              </div>
            </Link>
          ),
          medium: (
            <Link
              href={href}
              ref={linkRef}
              className="bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full max-w-fit p-0.5"
            >
              <div
                className={`w-full h-full rounded-full ${bg} text-white px-11 py-4 text-center hover:bg-white hover:text-angel-orange`}
              >
                <span className="select-none uppercase">{label}</span>
              </div>
            </Link>
          ),
          large: (
            <Link
              href={href}
              ref={linkRef}
              className="grow bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full p-0.5 drop-shadow-xl"
            >
              <div
                className={`w-full h-full rounded-full ${bg} text-white px-10 py-7 text-center outline outline-offset-1 outline-2 outline-white lg:px-20 hover:bg-white hover:outline-0 hover:text-angel-orange`}
              >
                <span className="text-sm select-none uppercase">{label}</span>
              </div>
            </Link>
          ),
        }[size]
      }
    </>
  );
}
