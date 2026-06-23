import { CoverImage } from "@/models";
import Image from "next/image";
import DateFormatter from "../_components/AHDateFormatter";

export default function EventHeader({
  createdAt,
  coverImage,
  eventTitle,
}: {
  createdAt: string;
  coverImage: CoverImage;
  eventTitle: string;
}) {
  const altText = coverImage.caption
    ? coverImage.caption
    : coverImage.fileName
        .replace(/\.[^\/.]+$/, "")
        .split("-")
        .join(" ");
  return (
    <div className="grid gap-9 justify-items-center text-white">
      <h1 className="font-semibold text-center text-3xl">{eventTitle}</h1>
      <p className="font-light text-lg">
        <DateFormatter dateString={createdAt} />
      </p>
      <div className="relative w-full min-h-[508px] inline-block rounded-xl shadow-2xl overflow-hidden">
        <Image
          className="absolute object-cover object-left-top w-full h-full"
          src={coverImage.url}
          alt={altText}
          width={896}
          height={508}
        />
      </div>
    </div>
  );
}
