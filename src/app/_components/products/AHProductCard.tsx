"use client";
import AHLink from "@/components/ui/AHLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function ProductCard({
  title,
  href,
  description,
  image,
  alt,
}: {
  title: string;
  href: string;
  description: string;
  image: string;
  alt: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const arrowRef = useRef<HTMLSpanElement>(null!);

  useGSAP((context, contextSafe) => {
    gsap.set(arrowRef.current, { opacity: 0.75 });
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(arrowRef.current, {
        keyframes: {
          "0%": { transform: "translateX(0)", opacity: 0.75 },
          "50%": { transform: "translateX(50%)", opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 0.75 },
          easeEach: "power3.inOut",
        },
        duration: 0.8,
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
    <Link href={href} legacyBehavior passHref>
      <AHLink
        ref={linkRef}
        href={href}
        target="_blank"
        className="horizontal-item relative text-white bg-black py-10 shadow-3xl xl:py-14 md:max-w-xl lg:max-w-2xl xl:min-w-[818px] xl:h-[412px] rounded-[30px]"
      >
        <div className="flex items-baseline mb-10 mt-8 xl:mb-11 xl:mt-0 xl:min-h-[120px]">
          <span className="w-2.5 h-12 bg-angel-orange-500 mr-6"></span>
          <h3 className="font-bold text-4xl xl:text-5xl xl:max-w-lg xl:leading-tight">
            {title}
          </h3>
        </div>
        <div className="grid gap-10 px-9 xl:px-0 xl:gap-9 xl:ml-11 xl:max-w-[472px]">
          <p className="font-medium text-base xl:max-w-md xl:min-h-24">{description}</p>
          <div className="flex items-center space-x-2 text-sm">
            <span>Learn More</span>
            <span ref={arrowRef} className="font-medium text-xl mt-0.5">&#10141;</span>
          </div>
        </div>
        <Image
          className="absolute object-contain object-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:hidden"
          src={image}
          width={112}
          height={112}
          alt={alt}
        />
        <Image
          className="absolute object-contain object-center top-1/2 -translate-y-1/2 translate-x-8 right-0 hidden xl:block"
          src={image}
          width={224}
          height={224}
          alt={alt}
        />
      </AHLink>
    </Link>
  );
}
