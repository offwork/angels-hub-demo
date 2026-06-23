"use client";
import Image from "next/image";

export default function PlatformCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="platform-item grid snap-always snap-center relative p-6 shadow-2xl origin-center min-w-80 min-h-72 rounded-[20px] bg-[#0164B7] md:min-w-96 md:min-h-80 xl:min-w-[420px] 6xl:min-w-[484px]">
      <h3 className="text-4xl text-white font-medium max-w-64">{title}</h3>
      <div className="relative block place-self-end w-20 h-20">
        <Image className="absolute object-contain object-center w-full h-auto" src={image} alt={title} fill unoptimized />
      </div>
    </div>
  );
}
