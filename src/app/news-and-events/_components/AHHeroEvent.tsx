"use client";
import { Event } from "@/models";
import { transformTagsToUpparcase } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./AHDateFormatter";

export default function HeroEvent({
  createdAt,
  coverImage,
  eventTitle,
  eventTags,
  eventDescription,
  eventSlug,
}: Event) {
  const altText = coverImage.caption
    ? coverImage.caption
    : coverImage.fileName
        .replace(/\.[^\/.]+$/, "")
        .split("-")
        .join(" ");
  return (
    <div className="relative grid grid-flow-row w-full justify-self-center place-self-stretch xl:grid-flow-col drop-shadow-2xl overflow-hidden rounded-lg">
      <div className="relative w-full min-w-full min-h-80 xl:min-w-[656px] lg:min-h-[370px]">
        <Image
          className="object-cover object-left-top"
          src={coverImage.url}
          alt={altText}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <div className="grid content-center gap-4 px-10 py-6 bg-black text-white">
        <Link
          as={`/news-and-events/${eventSlug}`}
          href="/news-and-events/[slug]"
          className="hover:underline"
        >
          <h3 className="text-xl font-semibold md:text-3xl">{eventTitle}</h3>
        </Link>
        <p className="flex items-center text-xs md:text-sm truncate ...">
          <DateFormatter dateString={createdAt} /> <span className="mx-2">|</span>{" "}
          {transformTagsToUpparcase(eventTags).join(", ")}
        </p>
        <p className="text-sm md:text-base">{eventDescription}</p>
      </div>
    </div>
  );
}
