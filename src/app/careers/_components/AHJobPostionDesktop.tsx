"use client";
import { JOBS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef } from "react";
import CareersForm from "./AHCareersForm";

export default function JobPositionsDesktop() {
  gsap.registerPlugin(useGSAP, ScrollToPlugin);
  const jobPositionsRef = useRef<HTMLDivElement>(null!);
  const jobPositionsFirst = useRef<HTMLDivElement>(null!);
  const jobPositionsSecond = useRef<HTMLDivElement>(null!);
  const jobPositionsThird = useRef<HTMLDivElement>(null!);

  useGSAP(
    (_context, contextSafe) => {
      const jobRefFirst =
        jobPositionsRef.current.querySelector<HTMLButtonElement>("button.job-position-0")!;
      const jobRefSecond =
        jobPositionsRef.current.querySelector<HTMLButtonElement>("button.job-position-1")!;
      const jobRefThird =
        jobPositionsRef.current.querySelector<HTMLButtonElement>("button.job-position-2")!;

      const scrollToPostionFirst = contextSafe!(() => {
        gsap.to(jobPositionsRef.current, { duration: 1, scrollTo: jobPositionsFirst.current });
      });

      const scrollToPostionSeond = contextSafe!(() => {
        gsap.to(jobPositionsRef.current, { duration: 1, scrollTo: jobPositionsSecond.current });
      });

      const scrollToPostionThird = contextSafe!(() => {
        gsap.to(jobPositionsRef.current, { duration: 1, scrollTo: jobPositionsThird.current });
      });

      jobRefFirst.addEventListener("click", scrollToPostionFirst);
      jobRefSecond.addEventListener("click", scrollToPostionSeond);
      jobRefThird.addEventListener("click", scrollToPostionThird);

      return () => {
        if (jobRefFirst && jobRefSecond && jobRefThird) {
          jobRefFirst.removeEventListener("click", scrollToPostionFirst);
          jobRefSecond.removeEventListener("click", scrollToPostionSeond);
          jobRefThird.removeEventListener("click", scrollToPostionThird);
        }
      };
    },
    { scope: jobPositionsRef.current }
  );

  return (
    <div
      ref={jobPositionsRef}
      className="relative grid grid-flow-col h-svh overflow-y-scroll"
    >
      <div className="xl:min-w-96 relative">
        <div className="sticky top-10 max-h-[420px]">
          <h2 className="text-left text-white font-bold text-xl mb-8 sm:text-3xl">
            Open Job Positions
          </h2>
          {JOBS.map((job, idx) => (
            <button
              key={job.title}
              className={`job-position-${idx} relative block w-full pr-4 cursor-pointer`}
            >
              <div className="flex items-center justify-center flex-wrap py-9 border-b border-white/50 space-y-6 sm:lg:space-y-0 lg:items-start lg:justify-normal">
                <div className="relative block w-10 h-11">
                  <svg
                    className="absolute w-full z-0 top-0 left-0"
                    width="100%"
                    height="100%"
                    viewBox="0 0 370 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                      fill="#FF5F00"
                    />
                  </svg>
                </div>
                <div className="text-white block text-left sm:ml-6 ml-16">
                  <h3 className="text-lg mb-3 xl:text-xl">{job.title}</h3>
                  <span className="text-white/75 text-sm">{job.caption}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-flow-row gap-20 w-full bg-[#252525] pt-8 pb-20 px-8 xl:px-10">
        <div ref={jobPositionsFirst}>
          <CareersForm
            job={JOBS[0]}
            message="By submitting this application I confirm, that AngelsHub can store my personal details to be able to process with my job application."
          />
        </div>
        <div ref={jobPositionsSecond}>
          <CareersForm
            job={JOBS[1]}
            message="By submitting this application I confirm, that AngelsHub can store my personal details to be able to process with my job application."
          />
        </div>
        <div ref={jobPositionsThird}>
          <CareersForm
            job={JOBS[2]}
            message="By submitting this application I confirm, that AngelsHub can store my personal details to be able to process with my job application."
          />
        </div>
      </div>
    </div>
  );
}
