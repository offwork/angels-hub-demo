"use client";
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
}: {
  title: string;
  href: string
  description: string;
  image: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null!);
  const arrowRef = useRef<SVGSVGElement>(null!);

  useGSAP((context, contextSafe) => {
    gsap.set(arrowRef.current, { opacity: 0.75 });
    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(arrowRef.current, {
        keyframes: {
          '0%': { transform: 'translateX(0)', opacity: 0.75 },
          '50%': { transform: 'translateX(50%)', opacity: 1 },
          '100%': { transform: 'translateX(0)', opacity: 0.75 },
          easeEach: "none"
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
    <Link ref={linkRef} href={href} className="horizontal-item snap-always snap-center relative bg-black py-10 shadow-3xl xl:py-14 md:max-w-xl lg:max-w-2xl xl:min-w-[818px] xl:h-[412px] rounded-[30px]">
      <div className="flex items-baseline mb-10 mt-8 xl:mb-11 xl:mt-0">
        <span className="w-2.5 h-12 bg-angel-orange-500 mr-8"></span>
        <h3 className="text-white font-bold text-4xl xl:text-5xl xl:max-w-lg xl:leading-tight">
          {title}
        </h3>
      </div>
      <div className="grid gap-10 text-white px-11 xl:px-0 xl:gap-11 xl:ml-11 xl:max-w-[472px]">
        <p className="font-medium text-base xl:max-w-md">{description}</p>
        <div className="flex items-center  space-x-2 text-sm">
          <span>Learn More</span>
          <svg
            className="relative"
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
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_697_1585">
                <rect width="16" height="13" fill="white" transform="translate(0 0.299805)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <Image
        className="absolute object-contain object-center w-28 h-28 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:hidden"
        src={image}
        width={255}
        height={243}
        alt="Sportsbook"
      />
      <Image
        className="absolute object-contain object-center top-1/2 -translate-y-1/2 translate-x-8 right-0 hidden xl:block xl:w-56 xl:h-56 4xl:w-64 4xl:h-auto"
        src={image}
        width={255}
        height={243}
        alt="Sportsbook"
      />
    </Link>
  );
}
