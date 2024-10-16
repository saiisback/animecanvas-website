import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Checkout() {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bag Section */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Bag</h2>
          <p className="text-sm text-gray-500 mb-4">
            Items in your bag not reserved - check out now to make them yours.
          </p>

          {/* Product Item */}
          <div className="flex items-center border-t border-gray-200 pt-4">
            {/* Product Image */}
            <div className="w-24 h-24 flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="anime.jpg" // Replace with your product image URL
                alt="Dropset Trainer Shoes"
              />
            </div>


            {/* Product Info */}
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-bold text-gray-800">
                DROPSET TRAINER SHOES
              </h3>
              <p className="text-sm text-gray-500">Men's Road Running Shoes</p>
              <p className="text-sm text-gray-500">
                Enamel Blue/University White
              </p>
              <div className="flex items-center mt-2">
                <p className="text-sm text-gray-500 mr-4">Size 10</p>
                <p className="text-sm text-gray-500">Quantity 1</p>
              </div>
            </div>

            {/* Price and Icons */}
            <div className="flex flex-col items-end justify-between">
              <p className="text-lg font-bold text-blue-600">$130.00</p>
              <div className="flex items-center space-x-4 mt-2">
                {/* Delete Icon */}
                <button className="text-gray-400 hover:text-red-500">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Order Summary Section */}
        <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-6">
          {/* Summary Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>1 ITEM</p>
            <p>$130.00</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-2">
            <p>Delivery</p>
            <p>$6.99</p>
          </div>
          <div className="flex justify-between text-gray-800 mb-4">
            <p>Sales Tax</p>
            <p>-</p>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
            <p>Total</p>
            <p>$136.99</p>
          </div>

          {/* Checkout Button */}
          <Link href="/payment">
            <button className="w-full bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800">
              CHECKOUT
            </button>
          </Link>

          {/* Promo Code Link */}
          <p className="text-center text-gray-500 mt-4 cursor-pointer hover:underline">
            Use a promo code
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
