import Hero from "@/components/hero";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import FeaturedProducts from "@/components/featuredProducts";
import Image from "next/image";
import Review from "@/components/review";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <div className="bg-black">
        {/* Header Section */}
        <div className="flex justify-between items-center align-middle px-10 py-20">
          <h1 className="text-7xl text-white">Categories</h1>
          <div className="bg-white text-black  p-2 rounded">
            <BsArrowUpRightSquareFill size={25} />
          </div>
        </div>
        
        {/* Categories Section */}
        <div className="grid grid-cols-2 justify-end w-full pl-24">
          {/* Lifestyle Shoes */}

          <div className="bg-white rounded-tl-3xl p-10 shadow-lg">
            <img
              src="/anime.jpg"
              alt="Basketball Shoes"
              className="w-1/2 h-auto object-contain mx-auto px-6" // Adjust image size
            />

            <div className="flex justify-between items-center mt-16 mb-0">
              <h2 className="text-2xl text-black">Anime</h2>
              <BsArrowUpRightSquareFill size={30} />
            </div>
          </div>

          <div className="bg-white p-10 shadow-lg">
            <img
              src="/motor.jpg"
              alt="Basketball Shoes"
              className="w-1/2 h-auto object-contain mx-auto px-6" // Adjust image size
            />

            <div className="flex justify-between items-center mt-16 mb-0">
              <h2 className="text-2xl text-black">Motorsport</h2>
              <BsArrowUpRightSquareFill size={30} />
            </div>
          </div>
        </div>
        </div>
        <Review />
        <Footer/>
    </div>
  );
}
