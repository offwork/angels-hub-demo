"use client";
import { Event } from "@/models";
import { transformTagsToUpparcase } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./AHDateFormatter";
import AHLink from "@/components/ui/AHLink";

export default function EventCard({
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
    <div className="grid grid-flow-row gap-9 content-start">
      <div className="relative min-h-56 h-56 inline-block rounded-xl overflow-hidden drop-shadow-xl sm:min-h-80 xl:min-h-56">
        <Image
          className="absolute object-cover object-left-top"
          src={coverImage.url}
          alt={altText}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <div className="grid gap-2.5 content-start">
        <Link
          as={`/news-and-events/${eventSlug}`}
          href="/news-and-events/[slug]"
          legacyBehavior
          passHref
        >
          <AHLink href={`/news-and-events/${eventSlug}`} className="text-white hover:underline">
            <h3 className="text-xl font-semibold md:text-2xl xl:text-3xl">{eventTitle}</h3>
          </AHLink>
        </Link>
        <p className="flex items-center text-xs text-white/50 md:text-sm truncate ...">
          <DateFormatter dateString={createdAt} /> <span className="mx-2">|</span>{" "}
          {transformTagsToUpparcase(eventTags).join(", ")}
        </p>
        <p className="text-white text-sm md:text-base">{eventDescription}</p>
      </div>
    </div>
  );
}
