"use client"
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CircleButton() {
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const circleRef = useRef<SVGSVGElement>(null!);

  useGSAP((context, contextSafe) => {
    // gsap.set(linkRef.current, { backgroundColor: "transparent", backgroundSize: "200% 200%", transformOrigin: "50% 50%" });
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(linkRef.current, {
        opacity: 0.3,
        rotate: 90,
        duration: 0.6,
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
    <Link ref={linkRef} href="/" className="absolute bottom-3 right-3 rounded-full p-3 bg-angel-orange inline-flex items-center hover:backdrop-blur-sm">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVG">
          <path
            id="Vector"
            d="M2 10H10M10 10H18M10 10V2M10 10V18"
            stroke="white"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </Link>
  );
}
