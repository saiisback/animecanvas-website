"use client";
import Hero from "@/components/hero";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import FeaturedProducts from "@/components/featuredProducts";
import Review from "@/components/review";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: dropsRef, inView: dropsInView } = useInView({ threshold: 0.3 });
  const { ref: categoriesRef, inView: categoriesInView } = useInView({ threshold: 0.3 });
  const { ref: reviewRef, inView: reviewInView } = useInView({ threshold: 0.3 });

  const controlsHero = useAnimation();
  const controlsDrops = useAnimation();
  const controlsCategories = useAnimation();
  const controlsReview = useAnimation();

  useEffect(() => {
    if (heroInView) {
      controlsHero.start({ opacity: 1, y: 0 });
    } else {
      controlsHero.start({ opacity: 0, y: 50 });
    }
  }, [heroInView, controlsHero]);

  useEffect(() => {
    if (dropsInView) {
      controlsDrops.start({ opacity: 1, y: 0 });
    } else {
      controlsDrops.start({ opacity: 0, y: 50 });
    }
  }, [dropsInView, controlsDrops]);

  useEffect(() => {
    if (categoriesInView) {
      controlsCategories.start({ opacity: 1, y: 0 });
    } else {
      controlsCategories.start({ opacity: 0, y: 50 });
    }
  }, [categoriesInView, controlsCategories]);

  useEffect(() => {
    if (reviewInView) {
      controlsReview.start({ opacity: 1, y: 0 });
    } else {
      controlsReview.start({ opacity: 0, y: 50 });
    }
  }, [reviewInView, controlsReview]);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsHero}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* Featured Products Section */}
      <motion.div
        ref={dropsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsDrops}
        transition={{ duration: 0.8 }}
        id="Drops"
      >
        <FeaturedProducts />
      </motion.div>

      {/* Categories Section */}
      <div className="bg-black">
        <motion.div
          ref={categoriesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsCategories}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center align-middle px-10 py-20"
        >
          <h1 className="text-7xl text-white">Categories</h1>
          <motion.div
            className="bg-white text-black p-2 rounded"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/listing">
              <BsArrowUpRightSquareFill size={25} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 justify-end w-full pl-24"
          initial="hidden"
          animate="visible"
        >
          {/* Anime Category */}
          <motion.div
            className="bg-white rounded-tl-3xl p-10 shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={controlsCategories}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/anime.jpg"
              alt="Anime"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-1/2 h-auto object-contain mx-auto px-6"
            />
            <div className="flex justify-between items-center mt-16 mb-0">
              <h2 className="text-2xl text-black">Anime</h2>
              <motion.div whileHover={{ rotate: 90 }}>
                <BsArrowUpRightSquareFill size={30} />
              </motion.div>
            </div>
          </motion.div>

          {/* Motorsport Category */}
          <motion.div
            className="bg-white p-10 shadow-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={controlsCategories}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/motor.jpg"
              alt="Motorsport"
              width={600} // Adjust width as needed
              height={400} // Adjust height as needed
              className="w-1/2 h-auto object-contain mx-auto px-6"
            />
            <div className="flex justify-between items-center mt-16 mb-0">
              <h2 className="text-2xl text-black">Motorsport</h2>
              <motion.div whileHover={{ rotate: 90 }}>
                <BsArrowUpRightSquareFill size={30} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Review Section */}
      <motion.div
        ref={reviewRef}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsReview}
        transition={{ duration: 0.8 }}
      >
        <Review />
      </motion.div>
    </div>
  );
}
