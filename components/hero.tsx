import React from 'react';
import Image from 'next/image';
import { BsCart } from 'react-icons/bs'; // Importing a cart icon

function Hero() {
  return (
    <div className="relative h-[500px] rounded-3xl mx-3 my-6 overflow-hidden">
      {/* Background Image */}
      <img
        className="object-cover w-full h-full rounded-3xl"
        src="/hero.png"
        alt="Hero Background"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-10">
        {/* Heading */}
        <h1 className="font-bold text-white text-6xl mb-4">
          JJK Collection
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg mb-6">
          Introducing the new JJK Collection. <br />
        </p>

        {/* Button */}
        <button className="flex items-center gap-2 bg-white text-black py-1.5 px-3 w-32   rounded-md font-semibold text-sm hover:bg-gray-200">
          <BsCart className="text-lg" /> {/* React Icon */}
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Hero;
