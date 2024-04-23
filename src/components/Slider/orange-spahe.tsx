"use client";

import { MutableRefObject } from "react";

export default function OrangeShape({
  elRef,
  className,
}: {
  elRef: MutableRefObject<HTMLDivElement>;
  className: string;
}) {
  return (
    <>
      <div
        ref={elRef}
        style={{ width: "1431px", height: "1116px" }}
        className={`${className}`}
      >
        <img
          className="saturate-200 opacity-50"
          src="/images/orange-shape.svg"
          alt=""
        />
      </div>
    </>
  );
}
