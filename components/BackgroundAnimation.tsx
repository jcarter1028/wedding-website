"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <>
      {/* Floral - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -top-12 -left-8 md:-left-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
      >
        <Image
          src="/images/mountain3.png"
          alt=""
          fill
          className="object-contain opacity-80"
          // style={{ transform: "rotate(-20deg)" }}
        />
      </motion.div>

      {/* Floral - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -top-12 -right-8 md:-right-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
      >
        <Image
          src="/images/mountain2.png"
          alt=""
          fill
          className="object-contain opacity-80"
          //style={{ transform: "rotate(25deg)" }}
        />
      </motion.div>
    </>
  );
}
