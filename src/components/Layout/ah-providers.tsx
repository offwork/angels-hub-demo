import { PROVIDERS } from "@/constant";
import Image from "next/image";

export default function Providers() {
  return (
    <div className="relative container grid gap-16 mx-auto w-full">
      <div className="relative z-10 grid mx-auto gap-5 text-center max-w-2xl">
        <h2 className="text-6xl text-white leading-tight">Gaming Providers</h2>
        <p className="text-center text-lg text-white">
          Lorem ipsum dolor sit amet consectetur. Sed sed varius ut sed sit sed
          commodo a ornare. Tellus viverra adipiscing volutpat habitasse quam
          fringilla tortor diam.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-6 place-items-center gap-y-5">
          {PROVIDERS.map((item, idx) => (
            <div
              key={`provider-${idx}`}
              className="relative rounded-lg bg-angel-blue-950 w-44 h-32"
            >
              <Image
                className="absolute z-0 bottom-0 object-contain object-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-80"
                src={item.image}
                width={120}
                height={60}
                alt={`provider-${idx}`}
              />
              <div className="absolute z-0 rounded-lg w-full h-full bg-angel-blue-900 mix-blend-screen"></div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-angel-blue h-48"></div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-angel-blue h-48"></div>
      </div>
    </div>
  );
}
