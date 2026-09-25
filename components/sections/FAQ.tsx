"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BackgroundAnimation from "../BackgroundAnimation";
import Title from "../Title";
import Text from "../Text";

export default function FAQ() {
  const { faq } = weddingData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <BackgroundAnimation />
        <FadeIn>
          <Title title="FAQ" />
          <Text text="Got questions? We've got answers!" />
        </FadeIn>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="paper-card bg-white/80 backdrop-blur-sm shadow-md overflow-hidden border border-sage-100/50"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-sage-100/50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-800 pr-4">
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-sage-500 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pt-3 pb-5 text-gray-700 leading-relaxed font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
