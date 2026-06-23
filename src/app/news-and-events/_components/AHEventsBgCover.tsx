import Image from "next/image";
import EVENTS_ORANGE_SHAPE from "../../../../public/orange-shape.svg";
import EVENTS_MAIN from "../../../../public/slider-main-1.png";

export default function EventsBgCover() {
  return (
    <div className="absolute z-0 h-full w-full top-0 left-0 overflow-hidden">
      <div className="absolute z-0 w-full min-h-[854px] overflow-hidden bg-angel-blue">
        <div
          style={{
            maskImage:
              "linear-gradient(90deg,transparent,#0f38b4 50%,#0f38b4 60%,transparent 100%)",
          }}
          className="absolute z-0 w-full h-auto xl:scale-75 xl:top-0 xl:-translate-y-1/4 xl:-right-[20%] 2xl:scale-[0.6] 2xl:-top-[10%]"
        >
          <Image
            className="relative object-cover object-center w-full h-auto"
            src={EVENTS_MAIN}
            alt="AngelsHub news and event background"
            priority
          />
          <div className="absolute z-10 left-0 bottom-0 w-full h-3/5 bg-gradient-to-t from-angel-blue via-angel-blue via-35%"></div>
        </div>
        <Image
          className="absolute z-10 mix-blend-color -left-28 -top-36 sm:-left-36 sm:-top-56 md:-left-44 md:-top-80 lg:-left-28 lg:-top-[460px] xl:-left-40 2xl:-top-[600px]"
          src={EVENTS_ORANGE_SHAPE}
          alt="AngelsHub orange shape"
        />
        <div className="absolute z-10 left-0 bottom-0 w-full h-full bg-gradient-to-t from-angel-blue via-angel-blue via-25%"></div>
      </div>
    </div>
  );
}
