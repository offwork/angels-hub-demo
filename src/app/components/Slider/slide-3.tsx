"use client";
import Image from "next/image";
import BALL_3 from "../../../../public/images/slider-ball-3.png";
import SLIDER_PIC_3 from "../../../../public/images/slider-main-3.png";
import AHLink from "../ah-link";

export default function Slide3() {
  return (
    <>
      <Image
        className="absolute z-20 object-contain right-[4%] bottom-[10%]"
        src={SLIDER_PIC_3.src}
        priority
        width={796}
        height={778}
        alt="Slider picture 1"
      />
      <video
        loop
        muted
        autoPlay
        playsInline
        className="absolute object-cover object-center z-0 top-1/2 left-1/2 w-full h-full -translate-y-1/2 -translate-x-1/2"
      >
        <source src="/videos/slider-video-3.mp4" type="video/mp4" />
      </video>
      <svg
        className="absolute z-10 mix-blend-color -left-[10%] -top-[40%]"
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
      <svg
        className="absolute z-10 mix-blend-hard-light -right-[15%] -bottom-[40%]"
        width="1332"
        height="1386"
        viewBox="0 0 1332 1386"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1302.01 414.401L1159.57 128.112C1099.99 8.34829 970.267 -34.5383 870.263 32.4634L448.435 315.084C428.778 328.254 411.852 346.188 399.007 367.458L217.585 667.854L41.1386 960.013C39.0178 963.437 37.1122 966.718 35.1493 969.98C-8.86424 1047.28 -12.3693 1155.83 33.4995 1248.03C96.0537 1373.76 226.954 1422.38 325.523 1356.34L987.11 914.23L1228.67 752.957C1328.79 686.17 1361.53 534.146 1301.95 414.382L1302.01 414.401Z"
          fill="#0F38B4"
        />
      </svg>
      <Image
        className="absolute z-10 object-contain left-[70%] top-[15%]"
        src={BALL_3.src}
        priority
        width={90}
        height={90}
        alt="Slider picture 1"
      />
      <div className="absolute z-20 bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-primary via-primary via-15%"></div>
      <div className="container absolute z-20 top-48 mx-auto px-44">
        <div className="grid max-w-3xl gap-14 text-white">
          <h1 className="text-8xl drop-shadow-[0_4px_3px_rgba(0,0,0,0.65)]">
            Home for NextGen <strong>iGaming Platform</strong>
          </h1>
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold">Everything under one roof.</h2>
            <p className="text-lg max-w-xl">
              AngelsHub is a technology and service provider for online gaming
              industry. We offer white label, turnkey, SAAS solutions, crypto
              solutions and much much more!
            </p>
          </div>
          <AHLink
            href="/"
            label="BOOK A MEETING"
            color="bg-secondary"
            fit={true}
            rounded="rounded-full"
            size="large"
          />
        </div>
      </div>
    </>
  );
}
