"use client";
import Image from "next/image"
import { classNames } from "@/utils";
import { MutableRefObject } from "react";

export default function BlueShape({
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
        style={{ width: "1332px", height: "1386px" }}
        className={`${className}`}
      >
        <Image
          className={classNames(bg ? "brightness-150 opacity-100" : "saturate-200 opacity-40")}
          src="/images/blue-shape.svg"
          fill
          alt=""
        />
      </div>
    </>
  );
}
