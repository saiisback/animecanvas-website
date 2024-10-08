"use client"
import React, { useState } from "react";
import { shirts } from "@/lib/shirts"; // Import your shirts data
import ProductsDisplay from "@/components/productsDisplay";

function ListingPage() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Unique sizes, colors, and categories from the shirts data
  const uniqueSizes = Array.from(new Set(shirts.flatMap((shirt) => shirt.size)));
  const uniqueColors = Array.from(new Set(shirts.flatMap((shirt) => shirt.color)));
  const uniqueCategories = ["Anime", "Motorsports"]; // Add categories dynamically in the future

  // Function to handle size filter toggle
  const handleSizeToggle = (size: string) => {
    setSelectedSize((prevSizes) =>
      prevSizes.includes(size) ? prevSizes.filter((s) => s !== size) : [...prevSizes, size]
    );
  };

  // Function to handle color filter toggle
  const handleColorToggle = (color: string) => {
    setSelectedColor((prevColors) =>
      prevColors.includes(color) ? prevColors.filter((c) => c !== color) : [...prevColors, color]
    );
  };

  // Function to handle category filter toggle
  const handleCategoryToggle = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setSelectedSize([]);
    setSelectedColor([]);
    setSelectedCategory(null);
  };

  // Filtered shirts based on selected size, color, and category
  const filteredShirts = shirts.filter((shirt) => {
    const matchesSize = selectedSize.length === 0 || selectedSize.some((size) => shirt.size.includes(size));
    const matchesColor = selectedColor.length === 0 || selectedColor.some((color) => shirt.color.includes(color));
    const matchesCategory = !selectedCategory || shirt.name.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSize && matchesColor && matchesCategory;
  });

  return (
    <div>
      <img src="hero.png" alt="hero" className="w-[1200px] m-3 h-52 rounded-3xl" />

      {/* Header and Filters Reset */}
      <div className="m-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Anime Canvas shirts</h1>
          <p>{filteredShirts.length} items</p>
        </div>
        <button
          onClick={resetFilters}
          className="text-red-500 font-semibold border border-red-500 rounded-md px-4 py-2 hover:bg-red-500 hover:text-white"
        >
          Reset Filters
        </button>
      </div>

      <div className="m-5 flex">
        {/* Filters Section */}
        <div className="flex flex-col border-r-2 border-gray-500 w-1/4 pr-4">
          <h1 className="font-bold text-xl uppercase">Filters</h1>

          {/* Size Filter */}
          <h2 className="font-bold text-lg mt-3">Size</h2>
          <div className="flex flex-wrap">
            {uniqueSizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`border-black border-2 rounded-xl px-4 py-3 m-1 ${selectedSize.includes(size) ? 'bg-black text-white' : ''}`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Colors Filter */}
          <h2 className="font-bold text-lg mt-3">Colors</h2>
          <div className="flex">
            {uniqueColors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorToggle(color)}
                className={`border-black border-2 rounded-xl p-5 m-1 ${color === "Black" ? 'bg-black' : 'bg-white'} ${selectedColor.includes(color) ? 'ring-2 ring-blue-500' : ''}`}
              />
            ))}
          </div>

          {/* Categories Filter */}
          <h2 className="font-bold text-lg mt-3">Category</h2>
          <div>
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryToggle(category)}
                className={`border-black border-2 rounded-xl px-4 py-3 m-1 ${selectedCategory === category ? 'bg-black text-white' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display Section */}
        <div className="flex-grow">
          {/* Display Selected Filters */}
          <div className="m-5">
            {selectedSize.length > 0 && (
              <p className="text-sm">Selected Sizes: {selectedSize.join(", ")}</p>
            )}
            {selectedColor.length > 0 && (
              <p className="text-sm">Selected Colors: {selectedColor.join(", ")}</p>
            )}
            {selectedCategory && (
              <p className="text-sm">Selected Category: {selectedCategory}</p>
            )}
          </div>
          <div className="ml-5"><ProductsDisplay products={filteredShirts} /></div>
          
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
