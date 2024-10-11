"use client"
import React, { useState } from "react";

interface Product {
  name: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  category: string;
  arrival?: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  isOpen: boolean;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, isOpen }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity

  // Increase quantity function
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity function, but not less than 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-fadeIn">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-2xl w-full flex transform animate-scaleIn">
        <span className="absolute top-2 right-2 cursor-pointer text-4xl m-3" onClick={onClose}>
          &times; {/* Close icon */}
        </span>
        <img src={product.image} alt={product.name} className="h-40 w-40 object-cover rounded-md m-9" />
        <div className="flex-1 pr-6">
          <h2 className="font-bold text-xl mb-2">{product.name}</h2>
          <p className="text-lg font-semibold">Price: ${product.price.toFixed(2)}</p>

          <div className="mt-4">
            <h3 className="font-bold">Available Sizes:</h3>
            <div className="flex mt-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  className={`border-2 border-black py-1 px-3 rounded mr-2 ${
                    selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                  } hover:scale-105 transition-transform duration-200`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Choose Color:</h3>
            <div className="flex mt-2">
              {product.color.map((color) => (
                <button
                  key={color}
                  className={`border-2 border-black py-1 px-3 rounded mr-2 ${
                    selectedColor === color ? "bg-black text-white" : "bg-white text-black"
                  } hover:scale-105 transition-transform duration-200`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold">Quantity:</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={decreaseQuantity}
                className="border-2 border-black bg-white text-black px-3 py-1 rounded mr-2 hover:scale-105 transition-transform duration-200"
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="border-2 border-black bg-white text-black px-3 py-1 rounded ml-2 hover:scale-105 transition-transform duration-200"
              >
                +
              </button>
            </div>
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
