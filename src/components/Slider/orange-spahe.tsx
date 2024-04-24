"use client";

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
        style={{ width: "1431px", height: "1116px" }}
        className={`${className}`}
      >
        <img
          className={classNames(bg ? "opacity-100" : "saturate-200 opacity-50")}
          src="/images/orange-shape.svg"
          alt=""
        />
      </div>
    </>
  );
}
