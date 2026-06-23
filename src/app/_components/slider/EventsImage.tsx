"use client";
import { Event } from "@/models";
import { classNames } from "@/utils";
import Image from "next/image";

export default function EventImage({ events, isSPin }: { events: Event[]; isSPin: boolean }) {
  return (
    <div className="event-images hidden md:flex items-center absolute bg-angel-blue left-0 w-[296px] h-[200px] rounded-3xl border-8 border-angel-blue-600 overflow-hidden -ml-[1px]">
      <svg
        className={classNames(isSPin ? "block" : "hidden", "animate-spin m-auto")}
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
      </svg>
      {events.map((event) => (
        <Image
          key={`event-image-${event.id}`}
          className="event-img absolute object-cover object-center left-7"
          src={event.coverImage.url}
          alt="BEGE 2023 Sofia"
          loading="lazy"
          width={event.coverImage.width}
          height={event.coverImage.height}
        />
      ))}
    </div>
  );
}
