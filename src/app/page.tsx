import Platform from "@/components/Platform/ah-platform";
import Products from "@/components/Products/ah-products";
import BannerController from "@/components/Slider/banner-controller";
import Slider from "@/components/Slider/slider";
import Solutions from "@/components/Solutions/ah-solutions";
import Team from "@/components/Team/ah-team";

export default function Home() {
  return (
    <>
      <div className="relative z-10 w-full h-screen">
        <Slider>
          <BannerController />
        </Slider>
      </div>
      <div className="relative z-10 container mx-auto mt-32">
        <Solutions />
      </div>
      <Products />
      <Platform />
      <Team />
      <button className="fixed z-20 flex space-x-2 items-center bottom-4 right-24">
        <span className="text-white text-lg">Scroll</span>
        <svg
          className="motion-safe:animate-bounce"
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M6.05519 13.7163C6.17649 13.7157 6.29643 13.6906 6.40778 13.6425C6.51914 13.5943 6.61962 13.5242 6.70319 13.4363L11.8362 8.30127C12.0312 8.09927 12.1172 7.88927 12.1172 7.66927C12.1172 7.16927 11.7662 6.81027 11.2892 6.81027C11.0392 6.81027 10.8292 6.91227 10.6722 7.06827L8.89119 8.82627L6.82119 11.0913L6.93019 9.27927L6.93019 1.80927C6.93019 1.28627 6.57019 0.926269 6.05519 0.926269C5.54719 0.926269 5.18819 1.28627 5.18819 1.80927L5.18819 9.27827L5.29719 11.0903L3.22719 8.82527L1.44519 7.06727C1.36478 6.98524 1.26876 6.92015 1.16279 6.87583C1.05682 6.83152 0.943049 6.80889 0.828188 6.80927C0.352188 6.80927 0.000187601 7.16927 0.000187579 7.66927C0.00375908 7.90202 0.099405 8.12388 0.266187 8.28627L5.41419 13.4343C5.49659 13.5216 5.59571 13.5915 5.70566 13.6398C5.8156 13.688 5.93412 13.7137 6.05419 13.7153L6.05519 13.7163Z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
}
