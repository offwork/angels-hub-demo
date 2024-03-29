"use client"

import Image from "next/image";
import TEAM_MEMBER_1 from "../../../public/images/team-member-1.png";
import TEAM_MEMBER_2 from "../../../public/images/team-member-2.png";
import TEAM_MEMBER_3 from "../../../public/images/team-member-3.png";
import SocailIcon from "./ah-social-icon";

export default function Team() {
  return (
    <div className="relative container grid mx-auto w-full mt-56">
      <div className="grid border-y border-white/20 py-24">
        <div className="relative z-10 grid mx-auto gap-5 text-center max-w-2xl">
          <h2 className="text-6xl text-white leading-tight">
            Meet the leadership team
          </h2>
          <p className="text-center text-lg text-white">
            Lorem ipsum dolor sit amet consectetur. Sed sed varius ut sed sit
            sed commodo a ornare. Tellus viverra adipiscing volutpat habitasse
            quam fringilla tortor diam. Sit arcu.
          </p>
        </div>

        <div className="relative z-10 w-full h-full">
          <div className="relative grid grid-flow-col w-full pt-24 gap-8 overflow-hidden">
            <div className="grid gap-7">
              <div className="relative w-[370px] h-[360px]">
                <div className="absolute z-10 bg-angel-blue mix-blend-color w-full h-full"></div>
                <svg
                  className="absolute z-0 top-0 left-0 opacity-10"
                  width="370"
                  height="360"
                  viewBox="0 0 370 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                    fill="#FF5F00"
                  />
                </svg>
                <Image
                  className="absolute z-0 bottom-0 object-contain object-center left-1/2 -translate-x-1/2"
                  src={TEAM_MEMBER_1}
                  alt="team member 1"
                />
              </div>
              <div className="grid gap-7 text-white">
                <div>
                  <h3 className="font-bold text-2xl">Jane Cooper</h3>
                  <span className="text-lg">Chief Technology Officer</span>
                </div>
                <div className="inline-flex space-x-3">
                  <SocailIcon name="linkedin" />
                  <SocailIcon name="instegram" />
                  <SocailIcon name="twitter" />
                </div>
              </div>
            </div>
            <div className="grid gap-7">
              <div className="relative w-[370px] h-[360px]">
                <div className="absolute z-10 bg-angel-blue mix-blend-color w-full h-full opacity-0"></div>
                <svg
                  className="absolute z-0 top-0 left-0 opacity-100"
                  width="370"
                  height="360"
                  viewBox="0 0 370 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                    fill="#FF5F00"
                  />
                </svg>
                <Image
                  className="absolute z-0 bottom-0 object-contain object-center left-1/2 -translate-x-1/2"
                  src={TEAM_MEMBER_2}
                  alt="team member 1"
                />
              </div>
              <div className="grid gap-7 text-white">
                <div>
                  <h3 className="font-bold text-2xl">Kristen Watson</h3>
                  <span className="text-lg">Manager</span>
                </div>
                <div className="inline-flex space-x-3">
                  <SocailIcon name="linkedin" />
                  <SocailIcon name="instegram" />
                  <SocailIcon name="twitter" />
                </div>
              </div>
            </div>
            <div className="grid gap-7">
              <div className="relative w-[370px] h-[360px]">
                <div className="absolute z-10 bg-angel-blue mix-blend-color w-full h-full"></div>
                <svg
                  className="absolute z-0 top-0 left-0 opacity-10"
                  width="370"
                  height="360"
                  viewBox="0 0 370 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M369.991 68.9309C369.991 32.3302 338.232 2.50738 299.143 2.50738C271.572 2.50738 247.613 17.3479 235.926 39.0195L235.705 38.9309L195.604 127.637V68.0006C195.604 30.5227 165.034 0 127.489 0H68.3279C30.7919 0 0.221844 30.5227 0.221844 68.0095V160.774L0 291.06C0 327.661 31.7592 357.484 70.848 357.484C98.4188 357.484 122.378 342.643 134.065 320.972L134.286 321.06L174.387 232.354V291.991C174.387 329.477 204.957 360 242.502 360H301.663C339.208 360 369.778 329.477 369.778 291.991V199.226L370 68.9398L369.991 68.9309ZM172.399 179.619L141.696 247.54L114.738 307.177C114.427 307.885 114.116 308.541 113.815 309.206C106.405 324.489 89.9444 335.148 70.8924 335.148C44.9101 335.148 23.7817 315.372 23.7817 291.016L23.6042 127.646L23.5154 68.0095C23.5154 43.2989 43.6322 23.2132 68.3811 23.2132H127.542C152.291 23.2132 172.408 43.2989 172.408 68.0095V179.628L172.399 179.619ZM301.654 336.778H242.493C217.744 336.778 197.627 316.692 197.627 291.982V180.363L228.331 112.442L255.289 52.8057C255.6 52.0969 255.91 51.4412 256.212 50.7767C263.621 35.4932 280.082 24.8346 299.134 24.8346C325.117 24.8346 346.245 44.6102 346.245 68.9663L346.422 232.336L346.511 291.973C346.556 316.683 326.394 336.769 301.645 336.769L301.654 336.778Z"
                    fill="#FF5F00"
                  />
                </svg>
                <Image
                  className="absolute z-0 bottom-0 object-contain object-center left-1/2 -translate-x-1/2"
                  src={TEAM_MEMBER_3}
                  alt="team member 1"
                />
              </div>
              <div className="grid gap-7 text-white">
                <div>
                  <h3 className="font-bold text-2xl">Stephen Osmond</h3>
                  <span className="text-lg">Chief Finance Officer</span>
                </div>
                <div className="inline-flex space-x-3">
                  <SocailIcon name="linkedin" />
                  <SocailIcon name="instegram" />
                  <SocailIcon name="twitter" />
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE CONTROLLER */}
          <div className="absolute z-0 w-full flex justify-between items-center ml-auto mr-12 top-1/2 -translate-y-full">
            <button className="relative -translate-x-full xl:-ml-0 2xl:-ml-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="56"
                viewBox="0 0 30 56"
                fill="none"
              >
                <path d="M29 1L2 28L29 55" stroke="#939393" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="relative translate-x-full xl:-mr-0 2xl:-mr-8">
              <svg
                width="30"
                height="56"
                viewBox="0 0 30 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 8"
                  d="M0.999999 1L28 28L0.999999 55"
                  stroke="#939393"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
