"use client";
import AHLink from "@/components/ui/AHLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function SolutionsGrid({
  href,
  img,
  title,
  desc,
  alt,
  sizes,
}: {
  href: string;
  img: string;
  title: string;
  desc: string;
  alt: string;
  sizes: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const circleRef = useRef<HTMLDivElement>(null!);

  useGSAP((context, contextSafe) => {
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(circleRef.current, {
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
    <Link href={href} legacyBehavior passHref>
      <AHLink
        href={href}
        ref={linkRef}
        target="_blank"
        className="solution grid content-start border-y border-white/20 gap-8 py-8"
      >
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="relative w-full h-[360px] bg-angel-blue-950 rounded-xl overflow-hidden">
          <Image
            className="absolute z-0 object-cover object-center h-full w-full"
            src={img}
            alt={alt}
            fill
            sizes={sizes}
          />
          <div
            ref={circleRef}
            className="absolute bottom-3 right-3 rounded-full p-3 bg-angel-orange inline-flex items-center hover:backdrop-blur-sm"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10H10M10 10H18M10 10V2M10 10V18" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <p className="text-white">{desc}</p>
      </AHLink>
    </Link>
  );
}
