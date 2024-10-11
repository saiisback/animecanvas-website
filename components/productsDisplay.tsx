"use client"
import React, { useState } from "react";
import ProductModal from "@/components/modals/productModal"; // Ensure this path is correct

interface Product {
  name: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  category: string;
  arrival?: string;
}

interface ProductsDisplayProps {
  products: Product[];
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className="relative border p-4 rounded-lg cursor-pointer" // Added cursor-pointer
            onClick={() => handleProductClick(product)} // Open modal on click
          >
            {/* "New" label */}
            {product.arrival === "New Arrival" && (
              <div className="absolute top-2 left-2 bg-black text-white text-xs font-bold py-1 px-2 rounded-md animate-pulse">
                New Arrival!!
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md mb-3"
            />
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-sm">Price: ${product.price}</p>
            <p className="text-sm">Available Sizes: {product.size.join(", ")}</p>
            <p className="text-sm">Colors: {product.color.join(", ")}</p>
            <p className="text-sm">Category: {product.category}</p>
            <button className="w-full mt-3 bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800">
              VIEW
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected product */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductsDisplay;
