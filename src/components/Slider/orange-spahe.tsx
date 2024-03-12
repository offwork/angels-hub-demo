import { MutableRefObject } from "react";

export default function OrangeShape({ elRef, className }: { elRef: MutableRefObject<SVGSVGElement>, className: string }) {
  return (
    <>
      <svg
        ref={elRef}
        className={className}
        width="1431"
        height="1116"
        viewBox="0 0 1431 1116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.80627 603.621L76.452 924.168C105.587 1058.26 220.282 1140.63 332.253 1107.87L801.704 970.51C825.555 963.532 847.748 950.705 866.341 933.155L1109.65 703.477L1348.14 478.343C1350.99 475.721 1353.6 473.169 1356.25 470.653C1416.78 410.244 1445.7 306.925 1423.27 203.698C1392.69 62.9204 1278.21 -25.3387 1167.84 6.95305L427.359 222.589L157.024 301.176C45.0013 333.697 -22.2782 469.564 6.8567 603.658L6.80627 603.621Z"
          fill="#FE5F00"
        />
      </svg>
    </>
  );
}
