"use client";
import Link from "next/link";
import BrandLogo from "./ah-brand-logo";
import HamburgerButton from "./ah-hamburger-button";

export default function Topnavs() {
  return (
    <>
      <div className="absolute z-50 left-24 top-14">
        <BrandLogo />
      </div>
      <div className="fixed z-30 top-10 right-24">
        <div className="grid grid-flow-col gap-1 items-center bg-black rounded-lg p-2">
          <Link
            href="/"
            className="flex items-center text-white space-x-2 border rounded-lg px-6 py-2"
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
          <HamburgerButton />
        </div>
      </div>
    </>
  );
}
