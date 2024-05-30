"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { classNames } from "@/utils";

export default function ButtonSend({
  bg,
  label,
  available,
  action,
}: {
  label: string;
  bg: string;
  available: boolean;
  action: string;
}) {
  const btnRef = useRef<HTMLButtonElement>(null!);
  useGSAP((_context, contextSafe) => {
    const gradientBg = btnRef.current.querySelector<HTMLDivElement>(".bg-anim");
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

    btnRef.current.addEventListener("mouseenter", onEnter);
    btnRef.current.addEventListener("mouseleave", onLeave);

    return () => {
      btnRef.current.removeEventListener("mouseenter", onEnter);
      btnRef.current.removeEventListener("mouseleave", onLeave);
    };
  });

  return (
    <>
      <button
        ref={btnRef}
        type="submit"
        className={classNames(
          available ? "cursor-pointer" : "cursor-not-allowed",
          "relative block rounded-full w-full h-full p-0.5 drop-shadow-xl bg-white"
        )}
      >
        <div
          className={`relative z-20 w-full h-full rounded-full ${bg} text-white px-10 py-7 text-center lg:px-20`}
        >
          <span className="text-sm select-none uppercase">{label}</span>
        </div>
        <span className="absolute z-20 flex items-center justify-end top-1/2 -translate-y-1/2 right-10">
          {
            {
              PENDING: (
                <svg
                  className="animate-spin"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_157_3319)">
                    <path
                      d="M11 1.83337V3.66671"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5837 3.06152L14.667 4.64924"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9388 6.41675L17.3511 7.33341"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.1668 11H18.3335"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9388 15.5834L17.3511 14.6667"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5837 18.9385L14.667 17.3508"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11 20.1667V18.3334"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.41699 18.9385L7.33366 17.3508"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.06152 15.5834L4.64924 14.6667"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.8335 11H3.66683"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.06152 6.41675L4.64924 7.33341"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.41699 3.06152L7.33366 4.64924"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_3319">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ),
              SUCCESS: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_157_3337)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 11C0 8.08262 1.15893 5.28473 3.22183 3.22183C5.28473 1.15893 8.08262 0 11 0C13.9174 0 16.7153 1.15893 18.7782 3.22183C20.8411 5.28473 22 8.08262 22 11C22 13.9174 20.8411 16.7153 18.7782 18.7782C16.7153 20.8411 13.9174 22 11 22C8.08262 22 5.28473 20.8411 3.22183 18.7782C1.15893 16.7153 0 13.9174 0 11H0ZM10.3723 15.708L16.7053 7.79093L15.5613 6.87573L10.1611 13.6239L6.336 10.4368L5.39733 11.5632L10.3723 15.7095V15.708Z"
                      fill="#1AD598"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_157_3337">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ),
              FAILED: (
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.837 3.21742C14.5472 -1.07247 7.50732 -1.07247 3.21742 3.21742C-1.07247 7.50732 -1.07247 14.5472 3.21742 18.837C7.50732 23.1269 14.4372 23.1269 18.727 18.837C23.0169 14.5472 23.1269 7.50732 18.837 3.21742ZM14.1072 15.6471L11.0272 12.5672L7.94731 15.6471L6.40735 14.1072L9.48727 11.0272L6.40735 7.94731L7.94731 6.40735L11.0272 9.48727L14.1072 6.40735L15.6471 7.94731L12.5672 11.0272L15.6471 14.1072L14.1072 15.6471Z"
                    fill="#EA3A3D"
                  />
                </svg>
              ),
            }[action]
          }
        </span>
        <div className="absolute bg-anim top-0 left-0 z-0 w-full h-full bg-gradient-to-tr from-angel-orange from-25% to-angel-blue-500 to-75% rounded-full"></div>
      </button>
    </>
  );
}
