"use client"

import Image from "next/image";
import WAVE from "../../../public/images/abstract-wave.png";
import AngelsHubSVG from "./ah-svg";
import { PRODUCTS } from "@/constant";
import ProductCard from "./ah-product-card";

export default function Products() {
  return (
    <div className="relative z-10 w-full mt-28">
      <div className="relative z-10 grid gap-5 text-center">
        <h3 className="text-3xl text-angel-orange-500 font-medium">Products</h3>
        <h2 className="text-6xl text-spray leading-tight">
          Do you have a good idea but <br /> still not sure{" "}
          <span className="text-white">where to start?</span>
        </h2>
      </div>
      <div className="relative z-10 w-full h-full grid grid-flow-col py-24 px-6 gap-16 overflow-hidden">
        {PRODUCTS.map((product) => (
          <div key={product.title}>
            <ProductCard title={product.title} description={product.description} image={product.image} />
          </div>
        ))}
      </div>
      <div className="absolute z-0 w-full -top-4 overflow-hidden">
        <Image
          className="relative z-10 mix-blend-lighten bg-angel-blue opacity-10"
          src={WAVE}
          alt="Products wave"
        />
        <AngelsHubSVG className="absolute z-0 bottom-0 w-full" />
      </div>
    </div>
  );
}
