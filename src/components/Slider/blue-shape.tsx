"use client";

import { MutableRefObject } from "react";

export default function BlueShape({
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
        style={{ width: "1332px", height: "1386px" }}
        className={`${className}`}
      >
        <img
          className="contrast-200 opacity-50"
          src="/images/blue-shape.svg"
          alt=""
        />
      </div>
    </>
  );
}
