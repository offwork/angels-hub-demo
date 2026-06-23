"use client";
import SocailIcon from "@/components/ui/AHSocialIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import TEAM_MEMBER_1 from "../../../../public/Jane-Cooper.png";
import TEAM_MEMBER_2 from "../../../../public/Kristen-Watson.png";
import TEAM_MEMBER_3 from "../../../../public/Stephen-Osmond.png";

/* if (typeof window !== "undefined") {
} */

export default function Team() {
  gsap.registerPlugin(useGSAP);
  const teamContentRef = useRef<HTMLDivElement>(null!);
  const teamTl = useRef<GSAPTimeline>(null!);
  const prevBtnRef = useRef<HTMLButtonElement>(null!);
  const nextBtnRef = useRef<HTMLButtonElement>(null!);
  const teamItems = useRef<HTMLDivElement[]>(null!);
  const totalItems = useRef(0);
  const currentItems = useRef(0);
  const isAnimating = useRef(false);

  useGSAP(
    (context, contextSafe) => {
      const mediaMatcher = gsap.matchMedia();

      mediaMatcher.add("(max-width: 1023px)", (context) => {
        let previous: number;
        teamTl.current = gsap.timeline({ paused: true });
        teamItems.current = gsap.utils.toArray<HTMLDivElement>(".team-item");
        totalItems.current = teamItems.current.length;

        teamItems.current.forEach((elm, index) => {
          gsap.set(elm, {
            xPercent: 100 * index,
            opacity: index !== 0 ? 0 : 1,
          });
        });

        const navigate = contextSafe!((evt: MouseEvent) => {
          const btn = evt.currentTarget as HTMLButtonElement;
          const direction = btn.innerText === "Next" ? 1 : -1;
          if (isAnimating.current) return false;
          isAnimating.current = true;
          previous = currentItems.current;
          currentItems.current =
            direction === 1
              ? currentItems.current < totalItems.current - 1
                ? ++currentItems.current
                : 0
              : currentItems.current > 0
              ? --currentItems.current
              : totalItems.current - 1;

          const currentSlide = teamItems.current[previous];
          const upcomingSlide = teamItems.current[currentItems.current];


          teamTl.current = gsap
            .timeline({
              defaults: {
                duration: 0.9,
                ease: "expoScale(0.3,3,none)",
              },
              onStart: () => {},
              onComplete: () => {
                isAnimating.current = false;
              },
            })
            .addLabel("start", 0)
            .to(
              currentSlide,
              {
                xPercent: -direction * 100,
                scale: 0.7,
                opacity: 0,
              },
              "start"
            )
            .fromTo(
              upcomingSlide,
              {
                xPercent: direction * 100,
                scale: 0.7,
                opacity: 0,
              },
              {
                xPercent: 0,
                scale: 1,
                opacity: 1,
              },
              "start"
            );
        });

        prevBtnRef.current.addEventListener("click", navigate);
        nextBtnRef.current.addEventListener("click", navigate);

        return () => {
          if (currentItems.current !== 0) {
            currentItems.current = 0;
            previous = currentItems.current;
            teamItems.current.forEach((elm, index) => {
              gsap.set(elm, {
                xPercent: 100 * index,
                opacity: index !== 0 ? 0 : 1,
                scale: 1,
              });
            });
          }
          teamTl.current.revert();
          prevBtnRef.current.removeEventListener("click", navigate);
          nextBtnRef.current.removeEventListener("click", navigate);
        };
      });

      return () => {
        mediaMatcher.revert();
      };
    },
    { scope: teamContentRef.current }
  );

  return (
    <div className="team absolute mx-auto overflow-hidden w-full lg:container">
      <div className="grid place-items-center border-y border-white/20 py-20">
        <div className="relative z-10 grid gap-5 text-center">
          <h2 className="text-3xl text-white leading-tight xl:text-6xl">Meet Our Team</h2>
          <p className="text-white mx-auto text-sm max-w-[345px] md:max-w-lg lg:text-lg lg:max-w-2xl">
            Meet our industry experts dedicated to driving success. From pioneering minds to
            executives, each member brings insight and leadership to our organization. Get to know
            the leaders behind our innovation and excellence in the world of iGaming.
          </p>
        </div>
        <div className="hidden relative z-10 w-full h-full mx-auto overflow-hidden lg:block">
          <div className="relative z-0 w-full mt-24 grid justify-items-center grid-flow-col gap-2.5 min-h-[392px] xl:gap-6">
            <div className="relative grid gap-7 place-items-start">
              <div className="relative h-full w-56 xl:w-[278px] xl:h-[268px]">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-52 xl:h-52">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_1}
                    alt="Iago Boaventura - Sales Manager"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">Iago Boaventura</h3>
                  <span className="text-lg lg:text-base xl:text-lg">Sales Manager</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/iago-boaventura-5a1566156/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:Iago.boaventura@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>

            <div className="relative grid gap-7 place-items-start">
              <div className="relative h-full w-56 xl:w-[278px] xl:h-[268px]">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-52 xl:h-52">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_3}
                    alt="Seba Nader - Managing Director"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">Seba Nader</h3>
                  <span className="text-lg">Managing Director</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/seba-nader-0589468b/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:Seba.nader@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>

            <div className="relative grid gap-7 place-items-start">
              <div className="relative h-full w-56 xl:w-[278px] xl:h-[268px]">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 xl:w-52 xl:h-52">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_2}
                    alt="George Baghchejian - Business Development Manager"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">George Baghchejian</h3>
                  <span className="text-lg">Business Development Manager</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/george-baghchejian/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:George.baghchejian@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE TEAM UI */}
        <div className="relative z-10 flex items-center mt-24 w-[364px] h-[454px] sm:w-[440px] sm:h-[500px] mx-auto msd:w-[480px] md:h-[480px] lg:hidden">
          <div
            ref={teamContentRef}
            className="relative flex flex-col items-center z-0 w-full h-full overflow-hidden"
          >
            <div className="team-item absolute grid gap-7 place-items-center w-auto h-full mx-14">
              <div className="relative w-full h-full">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_1}
                    alt="Iago Boaventura - Sales Manager"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">Iago Boaventura</h3>
                  <span className="text-lg lg:text-base xl:text-lg">Sales Manager</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/iago-boaventura-5a1566156/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:Iago.boaventura@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>

            <div className="team-item absolute grid gap-7 place-items-center w-auto h-full mx-14">
              <div className="relative w-full h-full">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_3}
                    alt="Seba Nader - Managing Director"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">Seba Nader</h3>
                  <span className="text-lg">Managing Director</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/seba-nader-0589468b/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:Seba.nader@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>

            <div className="team-item absolute grid gap-7 place-items-center w-auto h-full mx-14">
              <div className="relative w-full h-full">
                <svg
                  className="relative w-full z-0 top-0 left-0"
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
                <div className="absolute z-0 w-36 h-36 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <Image
                    className="absolute w-full bottom-0 h-auto z-10"
                    src={TEAM_MEMBER_2}
                    alt="George Baghchejian - Business Development Manager"
                  />
                </div>
              </div>
              <div className="grid gap-7 text-center text-white xl:text-left">
                <div className="min-h-min lg:min-h-[84px] xl:min-h-min">
                  <h3 className="font-bold text-2xl lg:text-lg lx:text-2xl">George Baghchejian</h3>
                  <span className="text-lg">Business Development Manager</span>
                </div>
                <div className="flex items-center justify-center space-x-2 xl:justify-start">
                  <SocailIcon
                    href="https://www.linkedin.com/in/george-baghchejian/"
                    name="linkedin"
                    bg="bg-angel-blue"
                  />
                  <SocailIcon
                    href="mailto:George.baghchejian@angelshub.com"
                    name="email"
                    bg="bg-angel-blue"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SLIDE CONTROLLER */}
          <div className="absolute z-10 w-full flex justify-between items-center top-[40%] -translate-y-full lg:hidden">
            <button ref={prevBtnRef} className="relative">
              <span className="sr-only">Prev</span>
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
            <button ref={nextBtnRef} className="relative">
              <span className="sr-only">Next</span>
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
