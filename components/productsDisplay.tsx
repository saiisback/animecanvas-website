// ProductsDisplay.tsx
import React from "react";

// Define the type for the products array
interface Product {
  name: string;
  price: number;
  image: string;
  size: string[];
  color: string[];
  
}

interface ProductsDisplayProps {
  products: Product[];  // Ensure the products prop is expected
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.name} className="border p-4 rounded-lg">
          <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md mb-3" />
          <h2 className="font-bold">{product.name}</h2>
          <p className="text-sm">Price: ${product.price}</p>
          <p className="text-sm">Available Sizes: {product.size.join(", ")}</p>
          <p className="text-sm">Colors: {product.color.join(", ")}</p>
          <button className="w-full mt-3 bg-black text-white py-2 rounded-lg font-bold hover:bg-gray-800">
              VIEW
            </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
