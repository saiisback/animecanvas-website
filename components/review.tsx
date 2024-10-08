"use client";

import React from "react";
import { AiFillStar } from "react-icons/ai"; // Importing the star icon
import { allreviews } from "@/lib/reviews"; // Import your reviews data

// Define the type for a single review
interface Review {
  name: string;
  text: string;
  profileImage: string;
  productImage: string;
  rating: number;
}

// ReviewCard component accepts props for each review
const ReviewCard: React.FC<Review> = ({
  name,
  text,
  profileImage,
  productImage,
  rating,
}) => {
  // Calculate how many full stars and half stars to display
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0; // true if rating has a half star

  return (
    <div className="bg-white rounded-lg p-6 shadow-md max-w-sm relative mb-6">
      {/* User Info */}
      <div className="flex items-center justify-between mb-4">
        {/* Review Title & Text */}
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600">{text}</p>
        </div>
        {/* User Profile Image */}
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={profileImage}
          alt={name}
        />
      </div>

      {/* Rating and Stars */}
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-500 mr-2">
          {/* Full Stars */}
          {Array(fullStars)
            .fill(0)
            .map((_, idx) => (
              <AiFillStar key={idx} className="w-5 h-5" />
            ))}
          {/* Half Star (if rating has a decimal) */}
          {halfStar && <AiFillStar className="w-5 h-5" style={{ opacity: 0.5 }} />}
        </div>
        <span className="text-gray-800 font-bold">{rating.toFixed(1)}</span>
      </div>

      {/* Product Image */}
      <div>
        <img
          className="w-full rounded-lg"
          src={productImage}
          alt="Product"
        />
      </div>
    </div>
  );
};

// Main Review component
const Review = () => {
  return (
    <div className="mx-7 my-14 font-sans text-center max-w-6xl ">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold mb-6 text-left flex-grow">
          REVIEWS
        </h1>
        <button className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-600 transition">
          SEE ALL
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {allreviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Review;
