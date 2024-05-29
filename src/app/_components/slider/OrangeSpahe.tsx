"use client";
import Image from "next/image"
import { classNames } from "@/utils";
import { MutableRefObject } from "react";

export default function OrangeShape({
  elRef,
  className,
  bg,
}: {
  elRef: MutableRefObject<HTMLDivElement>;
    className: string;
    bg?: string;
}) {
  return (
    <>
      <div
        ref={elRef}
        className={`${className}`}
      >
        <Image
          className={classNames(bg ? "opacity-100" : "contrast-200 opacity-30", "object-center")}
          src="/images/orange-shape.svg"
          width={1431}
          height={1116}
          alt=""
        />
      </div>
    </>
  );
}
