"use client";
import { PRODUCTS } from "@/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ProductCard from "./AHProductCard";

export default function ProductSlider() {
  gsap.registerPlugin(useGSAP);
  const hPinRef = useRef<HTMLDivElement>(null!);
  const productsRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      function getHorizontalScrollAmount() {
        const totalScrollWidth = hPinRef.current.scrollWidth;
        const visibleWidth = hPinRef.current.clientWidth;
        return visibleWidth - totalScrollWidth;
      }

      const mediaMatcher = gsap.matchMedia();
      mediaMatcher.add(
        {
          isDesktop: `(min-width: 1280px) and (prefers-reduced-motion: no-preference)`,
        },
        (context) => {
          const { isDesktop } = context.conditions!;
          if (isDesktop) {
            gsap.to(hPinRef.current, {
              x: () => getHorizontalScrollAmount(),
              ease: "none",
              duration: 2,
              scrollTrigger: {
                trigger: productsRef.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
              },
            });
          }
        }
      );

      return () => {
        mediaMatcher.revert();
      };
    },
    { scope: productsRef }
  );

  return (
    <div
      ref={productsRef}
      className="horizontal-scroll relative z-10 w-full inline-block py-28 overflow-hidden"
    >
      <div className="relative z-10 grid gap-5 w-full text-center mb-6">
        <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
        <h2 className="text-3xl text-white mx-auto leading-tight max-w-[315px] md:max-w-none xl:text-6xl">
          Discover Innovation with Angelshub: <br className="hidden md:block" /> Introducing Our
          Cutting-Edge Products
        </h2>
      </div>
      <div className="hidden absolute xl:block z-0 w-[150%] -rotate-[8deg] bottom-40 left-1/2 -translate-x-1/2 h-[480px] bg-angel-orange rounded-tr-full rounded-bl-full 6xl:w-full"></div>
      <div className="relative z-10 w-full overflow-hidden">
        <div
          ref={hPinRef}
          className="horizontal-items relative z-10 snap-x snap-mandatory w-full grid grid-flow-row place-items-center px-6 py-24 gap-20 xl:grid-flow-col"
        >
          {PRODUCTS.map((product) => (
            <ProductCard {...product} key={product.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
