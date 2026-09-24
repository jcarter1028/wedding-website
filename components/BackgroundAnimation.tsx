"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
      {/* Floral - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -top-12 -left-8 md:-left-16 w-40 md:w-52 h-40 md:h-52 pointer-events-none z-0"
      >
        <Image
          src="/images/Floral 1.png"
          alt=""
          fill
          className="object-contain opacity-80"
          style={{ transform: "rotate(-20deg)" }}
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
          src="/images/Floral 2.png"
          alt=""
          fill
          className="object-contain opacity-80"
          style={{ transform: "rotate(25deg)" }}
        />
      </motion.div>

      {/* Floral - Middle Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute top-1/2 -left-6 md:-left-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
      >
        <Image
          src="/images/floral 3.png"
          alt=""
          fill
          className="object-contain opacity-75"
          style={{ transform: "rotate(30deg)" }}
        />
      </motion.div>

      {/* Floral - Middle Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-1/2 -right-6 md:-right-12 w-36 md:w-48 h-36 md:h-48 pointer-events-none z-0"
      >
        <Image
          src="/images/floral 4.png"
          alt=""
          fill
          className="object-contain opacity-75"
          style={{ transform: "rotate(-35deg)" }}
        />
      </motion.div>

      {/* Floral - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute -bottom-10 -left-8 md:-left-16 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
      >
        <Image
          src="/images/Floral 2.png"
          alt=""
          fill
          className="object-contain opacity-73"
          style={{ transform: "rotate(140deg)" }}
        />
      </motion.div>

      {/* Floral - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute -bottom-10 -right-8 md:-right-16 w-44 md:w-56 h-44 md:h-56 pointer-events-none z-0"
      >
        <Image
          src="/images/Floral 1.png"
          alt=""
          fill
          className="object-contain opacity-73"
          style={{ transform: "rotate(-140deg) scaleX(-1)" }}
        />
      </motion.div>

      {/* Extra Floral - Upper Center Left */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-[20%] left-8 md:left-16 w-28 md:w-36 h-28 md:h-36 pointer-events-none z-0"
      >
        <Image
          src="/images/floral 4.png"
          alt=""
          fill
          className="object-contain opacity-70"
          style={{ transform: "rotate(50deg)" }}
        />
      </motion.div>

      {/* Extra Floral - Lower Center Right */}
      <motion.div
        initial={{ opacity: 0, rotate: 15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-[25%] right-8 md:right-16 w-28 md:w-36 h-28 md:h-36 pointer-events-none z-0"
      >
        <Image
          src="/images/floral 3.png"
          alt=""
          fill
          className="object-contain opacity-70"
          style={{ transform: "rotate(-55deg)" }}
        />
      </motion.div>
    </div>
  );
}
