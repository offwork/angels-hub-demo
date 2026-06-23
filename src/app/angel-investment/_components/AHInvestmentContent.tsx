"use client";
import ButtonFill from "@/components/ui/AHButtonFill";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { useRef } from "react";
import ANGEL_INVESTMENT_BRONZE from "../../../../public/bronze-cordon.png";
import ANGEL_INVESTMENT_GOLD from "../../../../public/gold-cordon.png";
import ANGEL_INVESTMENT_SILVER from "../../../../public/silver-cordon.png";

export default function InvestmentContent() {
  gsap.registerPlugin(useGSAP, ScrollToPlugin);
  const scrollContainerRef = useRef<HTMLDivElement>(null!);
  const bronzeButton = useRef<HTMLDivElement>(null!);
  const silverButton = useRef<HTMLDivElement>(null!);
  const goldButton = useRef<HTMLDivElement>(null!);

  useGSAP(
    (_context, contextSafe) => {
      const scrollToInvestmentForm = contextSafe!(() => {
        gsap.to(window, { duration: 1, scrollTo: ".investment-form" });
      });

      bronzeButton.current.addEventListener("click", scrollToInvestmentForm);
      silverButton.current.addEventListener("click", scrollToInvestmentForm);
      goldButton.current.addEventListener("click", scrollToInvestmentForm);

      return () => {
        if (bronzeButton && silverButton && goldButton) {
          bronzeButton.current.removeEventListener("click", scrollToInvestmentForm);
          silverButton.current.removeEventListener("click", scrollToInvestmentForm);
          goldButton.current.removeEventListener("click", scrollToInvestmentForm);
        }
      };
    },
    { scope: scrollContainerRef }
  );

  return (
    <div
      ref={scrollContainerRef}
      className="relative z-10 w-full -mt-2 mb-28 sm:-mt-28 md:-mt-44 xl:-mt-60 3xl:-mt-40"
    >
      <div className="container grid grid-flow-row xl:grid-flow-col gap-8">
        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="absolute left-6 -top-1 w-8 h-16">
            <Image
              className="relative z-0 object-cover object-center w-full h-auto"
              src={ANGEL_INVESTMENT_BRONZE}
              alt="Angels investment bronze"
            />
          </div>
          <div className="flex justify-center bg-black w-full h-full rounded-3xl py-8 overflow-hidden">
            <div className="flex flex-col space-y-10">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white text-center lg:px-28">
                BRONZE
              </h2>
              <div className="block px-4">
                <ul className="grid w-full pl-10 text-white text-base">
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Waived setup fee</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Whitelabel or Turnkey Solution</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div ref={bronzeButton} className="flex flex-1 items-end mx-auto">
                <ButtonFill
                  className="bg-angel-orange text-white"
                  size="apply"
                  href="/"
                  selector="bronze"
                  label="CONTACT US"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="absolute left-6 -top-1 w-8 h-16">
            <Image
              className="relative z-0 object-cover object-center w-full h-auto"
              src={ANGEL_INVESTMENT_SILVER}
              alt="Angels investment silver"
            />
          </div>
          <div className="flex justify-center bg-black w-full h-full rounded-3xl py-8 overflow-hidden">
            <div className="flex flex-col space-y-10">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white text-center lg:px-28">
                SILVER
              </h2>
              <div className="block px-4">
                <ul className="grid w-full pl-10 text-white text-base">
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Waived setup fee</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Waived setup fee</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Grace period on Payment Processing fees</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Grace period on Casino Vendors fees</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div ref={silverButton} className="flex flex-1 items-end mx-auto">
                <ButtonFill
                  className="bg-angel-orange text-white"
                  size="apply"
                  href="/"
                  selector="silver"
                  label="CONTACT US"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto z-30 max-w-full lg:max-w-5xl rounded-3xl bg-gradient-to-br from-angel-orange from-10% to-angel-blue-500 to-95% p-0.5 drop-shadow-2xl lg:drop-shadow-5xl">
          <div className="absolute left-6 -top-1 w-8 h-16">
            <Image
              className="relative z-0 object-cover object-center w-full h-auto"
              src={ANGEL_INVESTMENT_GOLD}
              alt="Angels investment gold"
            />
          </div>
          <div className="flex justify-center bg-black w-full h-full rounded-3xl py-8 overflow-hidden">
            <div className="flex flex-col space-y-10">
              <h2 className="text-3xl px-8 lg:text-4xl font-bold text-white text-center lg:px-28">
                GOLD
              </h2>
              <div className="block px-4">
                <ul className="grid w-full pl-10 text-white text-base">
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Waived setup fee</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Whitelabel or Turnkey Solution</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Grace period on Payment Processing fees</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Grace period on Casino Vendors fees</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Operational Funding</span>
                    </div>
                  </li>
                  <li className="py-4 select-none">
                    <div className="flex items-start">
                      <span className="-ml-5 mr-2 lg:-ml-8 lg:mr-3 font-light">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.145 22.291C17.3002 22.291 22.29 17.3012 22.29 11.146C22.29 4.99077 17.3002 0.000976562 11.145 0.000976562C4.9898 0.000976562 0 4.99077 0 11.146C0 17.3012 4.9898 22.291 11.145 22.291Z"
                            fill="#2A2A2A"
                          />
                          <path
                            d="M10.4013 15.3566C10.147 15.3566 9.90459 15.2474 9.73371 15.0566L5.22724 10.0247C4.8974 9.65513 4.93118 9.08884 5.29877 8.76099C5.66835 8.43115 6.23465 8.46493 6.5625 8.83252L10.3238 13.0299L15.0807 6.37545C15.3688 5.97408 15.9272 5.88069 16.3285 6.16682C16.7299 6.45493 16.8233 7.01327 16.5372 7.41465L11.1306 14.9791C10.9716 15.1997 10.7212 15.3368 10.451 15.3527C10.4351 15.3527 10.4192 15.3527 10.4033 15.3527L10.4013 15.3566Z"
                            fill="#30F07D"
                          />
                        </svg>
                      </span>
                      <span>Affiliate & Marketing Services</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div ref={goldButton} className="flex flex-1 items-end mx-auto">
                <ButtonFill
                  className="bg-angel-orange text-white"
                  size="apply"
                  href="/"
                  selector="gold"
                  label="CONTACT US"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
