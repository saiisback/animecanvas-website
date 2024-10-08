import FeaturedProducts from "@/components/featuredProducts";
import ProductsDisplay from "@/components/productsDisplay";
import React from "react";

function listingPage() {
  return (
    <div>
      <img
        src="hero.png"
        alt="hero"
        className="w-[1200px] m-3 h-52 rounded-3xl "
      />
      <div className="m-5">
        <div>
          <h1 className="text-xl font-bold">Anime Canvas shirts</h1>
          <p>20 items</p>
        </div>
      </div>
      <div className="m-5 flex">
  <div className="flex flex-col border-r-2 border-gray-500 w-1/4">
    <h1 className="font-bold text-xl uppercase">Filters</h1>
    <h2 className="font-bold text-lg mt-3">Size</h2>
    <div className="flex flex-wrap">
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">S</button>
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">M</button>
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">L</button>
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">XL</button>
    </div>
    <h2 className="font-bold text-lg mt-3">Colors</h2>
    <div>
      <button className="border-black border-2 rounded-xl p-5 m-1 bg-black" />
      <button className="border-black border-2 rounded-xl p-5 m-1 bg-white" />
    </div>
    <h2 className="font-bold text-lg mt-3">Category</h2>
    <div>
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">Anime</button>
      <button className="border-black border-2 rounded-xl px-4 py-3 m-1">Motorsports</button>
    </div>
  </div>

  <div className="flex-grow">
    <ProductsDisplay />
  </div>
</div>

    </div>
  );
}

export default listingPage;
