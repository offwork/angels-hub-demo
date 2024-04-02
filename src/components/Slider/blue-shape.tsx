"use client"

import { MutableRefObject } from "react";

export default function BlueShape({ elRef, className, bg }: { elRef: MutableRefObject<SVGSVGElement>, className: string, bg: string }) {
  return (
    <>
      <svg
        ref={elRef}
        className={className}
        width="1332"
        height="1386"
        viewBox="0 0 1332 1386"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1302.01 414.401L1159.57 128.112C1099.99 8.34829 970.267 -34.5383 870.263 32.4634L448.435 315.084C428.778 328.254 411.852 346.188 399.007 367.458L217.585 667.854L41.1386 960.013C39.0178 963.437 37.1122 966.718 35.1493 969.98C-8.86424 1047.28 -12.3693 1155.83 33.4995 1248.03C96.0537 1373.76 226.954 1422.38 325.523 1356.34L987.11 914.23L1228.67 752.957C1328.79 686.17 1361.53 534.146 1301.95 414.382L1302.01 414.401Z"
          fill={bg}
        />
      </svg>
    </>
  );
}
