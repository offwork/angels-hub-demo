import AHLink from "@/components/ui/AHLink";
import { CoverImage } from "@/models";
import Image from "next/image";

export default function EventNavigation({
  label,
  coverImage,
  className,
  eventTitle,
  eventSlug,
}: {
  label: string;
  className: string;
  coverImage: CoverImage;
  eventTitle: string;
  eventSlug: string;
}) {
  const altText = coverImage.caption
    ? coverImage.caption
    : coverImage.fileName
        .replace(/\.[^\/.]+$/, "")
        .split("-")
        .join(" ");
  return (
    <AHLink href={`/news-and-events/${eventSlug}`} className={className}>
      <span>{label}</span>
      <div className="relative w-40 h-40 inline-block rounded-3xl overflow-hidden sm:w-48 sm:h-48">
        <Image
          className="absolute object-cover object-left-top"
          src={coverImage.url}
          alt={altText}
          sizes="(min-width: 640px) 192px, 160px"
          fill
        />
      </div>
      <h3 className="font-semibold text-white max-w-sm md:text-xl xl:max-w-md 3xl:max-w-lg">
        {eventTitle}
      </h3>
    </AHLink>
  );
}
