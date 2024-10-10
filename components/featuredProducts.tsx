import React from "react";
import { shirts } from '@/lib/shirts';  // Importing the product data

// FeaturedProducts component
const FeaturedProducts: React.FC = () => {
  // Filter products that have "New Arrival"
  const newArrivalShirts = shirts.filter(shirt => shirt.arrival === "New Arrival");

  return (
    <div className="mx-7 my-14 font-sans text-center max-w-6xl ">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold mb-6 text-left flex-grow">
          Don't Miss Out
          <br />
          New Drops
        </h1>
        <button className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-600 transition">
          Shop New Drops
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-3 gap-4">
        {newArrivalShirts.map((product) => (
          <div key={product.name} className="bg-white flex flex-col items-center rounded-lg p-4 shadow-lg border-gray-200 relative">
            {/* New Badge */}
            <span className="absolute top-3 left-3 bg-black text-white text-xs py-1 px-2 rounded z-10 drop-shadow-md animate-pulse">
              New
            </span>

            {/* Product Image */}
            <img
              className="w-auto h-40 object-cover rounded-md mb-3"
              src={product.image}
              alt={product.name}
            />

            {/* Product Name */}
            <h2 className="font-bold text-lg mb-2">{product.name}</h2>

          
            {/* View Product Button */}
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition font-bold w-full">
              VIEW PRODUCT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
