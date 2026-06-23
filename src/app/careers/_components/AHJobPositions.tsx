"use client";
import { Jobs } from "@/models";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import CareersForm from "./AHCareersForm";

export default function JobPositions({ jobs }: { jobs: Jobs[] }) {
  gsap.registerPlugin(useGSAP);
  const [jobPosition, setJobPosition] = useState(0);
  const jobsRef = useRef<HTMLDivElement>(null!);
  const mobileJobFormRef = useRef<HTMLDivElement>(null!);
  const careers = useRef<HTMLAnchorElement[]>(null!);
  const jobsBackRef = useRef<HTMLAnchorElement>(null!);

  useGSAP(
    (_context, contextSafe) => {
      careers.current = gsap.utils.toArray<HTMLAnchorElement>(".job-group")!;
      const careersTL = gsap
        .timeline({
          paused: true,
          defaults: { duration: 0.3, ease: "power2.inOut" },
        })
        .to(jobsRef.current, { xPercent: -100 })
        .to(mobileJobFormRef.current, { height: "auto" });

      const goToCareerForm = contextSafe!((evt: MouseEvent) => {
        evt.preventDefault();
        const anchor = evt.currentTarget as HTMLAnchorElement;
        setJobPosition(anchor.tabIndex);
        careersTL.play();
      });

      const goToBackJobs = contextSafe!((evt: MouseEvent) => {
        evt.preventDefault();
        careersTL.reverse();
      });

      if (careers.current) {
        careers.current.forEach((elm, idx) => {
          elm.addEventListener("click", goToCareerForm);
        });
      }

      if (jobsBackRef.current) {
        jobsBackRef.current.addEventListener("click", goToBackJobs);
      }

      return () => {
        if (careers.current) {
          careers.current.forEach((elm) => {
            elm.removeEventListener("click", goToCareerForm);
          });
        }

        if (jobsBackRef.current) {
          jobsBackRef.current.removeEventListener("click", goToBackJobs);
        }

        careersTL.revert();
      };
    },
    { scope: jobsRef }
  );

  return (
    <div ref={jobsRef} className="relative grid grid-cols-2 h-auto">
      <div
        style={{ gridArea: "1 / 1 / -1 / -1" }}
        className="relative grid divide-y divide-white/30 min-w-full"
      >
        {jobs.map((job, idx) => (
          <a
            type="button"
            key={job.title}
            className="relative block job-group cursor-pointer"
            tabIndex={idx}
          >
            <div className="grid gap-6 sm:px-5 md:px-8 py-9">
              <div className="grid grid-flow-col gap-3 auto-cols-max px-3 md:px-5 md:gap-8">
                <div className="relative inline-block w-10 h-12 sm:w-14 sm:h-16">
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
                <div className="inline-block text-white text-left">
                  <h3 className="text-lg mb-3 sm:text-2xl md:text-3xl">{job.title}</h3>
                  <span className="text-white/75 text-sm sm:text-lg md:text-xl">{job.caption}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        style={{ gridArea: "1 / 1 / -1 / -1" }}
        ref={mobileJobFormRef}
        className="relative min-w-full translate-x-full h-0"
      >
        <div className="flex px-3 sm:px-5 md:px-8">
          <a ref={jobsBackRef} type="button" className="cursor-pointer">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1.12009e-06 8.9948C0.000878152 9.175 0.0382278 9.35317 0.109801 9.51859C0.181374 9.68401 0.285695 9.83328 0.416495 9.95741L8.05476 17.5826C8.35524 17.8722 8.66761 18 8.99486 18C9.73861 18 10.2726 17.4786 10.2726 16.77C10.2726 16.3986 10.1209 16.0867 9.88884 15.8534L7.27383 13.2077L3.90466 10.1327L6.6 10.2946L20.6865 10.2946C21.4645 10.2946 22 9.75984 22 8.9948C22 8.24016 21.4645 7.70686 20.6865 7.70686L6.60149 7.70686L3.90615 7.86878L7.27532 4.79376L9.89033 2.14657C10.0123 2.02713 10.1092 1.88449 10.1751 1.72707C10.241 1.56965 10.2747 1.40064 10.2741 1.23001C10.2741 0.522902 9.73861 8.35423e-07 8.99486 7.70403e-07C8.64864 0.00530698 8.31863 0.147391 8.07708 0.395148L0.419473 8.04258C0.289567 8.165 0.185622 8.31224 0.113818 8.47557C0.042014 8.63889 0.00381359 8.81496 0.00148661 8.99331L-1.12009e-06 8.9948Z"
                fill="#FF5F00"
              />
            </svg>
          </a>
        </div>
        <CareersForm
          job={jobs[jobPosition]}
          message="By submitting this application I confirm, that AngelsHub can store my personal details to be able to process with my job application."
        />
      </div>
    </div>
  );
}
