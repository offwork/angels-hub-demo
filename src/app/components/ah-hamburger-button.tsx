"use client";
import { classNames } from "@/utils";
import { useState } from "react";

export default function HamburgerButton({ onClick }: { onClick?: () => void }) {
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <button
      onClick={toggle}
      className={classNames(
        toggled ? "bg-white" : "bg-angel-orange",
        "flex-row items-center rounded-lg py-4 px-3 min-h-11"
      )}
    >
      {toggled ? (
        <svg
          width="21"
          height="2"
          viewBox="0 0 21 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="20"
            y2="1"
            stroke="#FF5F00"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 31">
            <line
              id="Line 5"
              x1="1"
              y1="1"
              x2="20"
              y2="1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              id="Line 6"
              x1="1"
              y1="6"
              x2="20"
              y2="6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              id="Line 7"
              x1="1"
              y1="11"
              x2="20"
              y2="11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}
    </button>
  );
}
