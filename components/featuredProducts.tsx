import React from "react";

// Define a custom type for Product
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Onepiece Goku shirt",
    price: "$125",
    imageUrl: "anime.jpg",
  },
  {
    id: 2,
    name: "Baki Hanma shirt",
    price: "$125",
    imageUrl: "anime.jpg",
  },
  {
    id: 3,
    name: "mob psycho shirt",
    price: "$125",
    imageUrl: "anime.jpg",
  },
  {
    id: 4,
    name: "motorcycle shirt",
    price: "$125",
    imageUrl: "anime.jpg",
  },
];

// ProductCard component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <div className="bg-white flex rounded-lg p-10 shadow-lg border-gray-200 relative">
        {/* New Badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs py-1 px-2 rounded z-10 drop-shadow-md animate-pulse">
          New
        </span>

        {/* Product Image */}
        <img
          className="w-auto h-auto relative z-0"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      {/* Product Name */}
      <h3 className="text-lg font-bold mb-2 text-gray-900">{product.name}</h3>

      {/* View Product Button with Price */}
      <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition font-bold w-full items-center">
        <span>VIEW PRODUCT</span>
      </button>
    </div>
  );
};

// FeaturedProducts component
const FeaturedProducts: React.FC = () => {
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
      <div className="flex gap-12 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
