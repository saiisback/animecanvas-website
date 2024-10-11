// components/Preloader.tsx

import React from "react";
import { FaTshirt } from "react-icons/fa";
import { motion } from "framer-motion";

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Icon */}
      <FaTshirt size={80} className="text-black" />

      {/* AnimeCanvas Text */}
      <h1 className="mt-4 text-2xl font-bold text-black">AnimeCanvas</h1>

      {/* Dots Circling Animation */}
      <motion.div
        className="flex mt-6 space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <motion.span
          className="w-2.5 h-2.5 bg-black rounded-full"
          animate={{
            y: [0, -15, 0], // Increase the jump height
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8, // Increase the duration for a smoother effect
            ease: "easeInOut", // Smooth easing function
          }}
        />
        <motion.span
          className="w-2.5 h-2.5 bg-black rounded-full"
          animate={{
            y: [0, -15, 0], // Increase the jump height
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8, // Increase the duration for a smoother effect
            ease: "easeInOut", // Smooth easing function
            delay: 0.2,
          }}
        />
        <motion.span
          className="w-2.5 h-2.5 bg-black rounded-full"
          animate={{
            y: [0, -15, 0], // Increase the jump height
          }}
          transition={{
            repeat: Infinity,
            duration: 0.8, // Increase the duration for a smoother effect
            ease: "easeInOut", // Smooth easing function
            delay: 0.4,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
