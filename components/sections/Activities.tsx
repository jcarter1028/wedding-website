"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../Title";
import Text from "../Text";

export default function Activities() {
  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
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
        <FadeIn>
          <Title title="Things to do in the area" />
          <div className="relative z-10 backdrop-blur-sm">
            <Text bold size="xl" text="What else is there to do" />
            <Text text="There’s plenty to do in and around Montafon, so we’d highly recommend spending an extra few days in the area! " />
            <Text text="Mountain activities include hiking, mountain biking, via ferratas, hut stays and spa hotels." />
            <Text bold size="xl" text="Staying in Golm" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center my-10">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/uaineonslide.jpeg"
                  alt="Golm"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-full lg:w-1/2">
                <Text
                  alignment="left"
                  text="Haus Matschwitz is right in the middle of the Golm adventure area, so there’s plenty to do without going far. There are lots of hiking options, a flying fox, and some fun ways to get back down the mountain — including the Alpine Coaster, mountain carts and giant slides."
                />

                <Text
                  alignment="left"
                  text="You can find details of the activities in Golm here:"
                />

                <a
                  href="https://www.golm.at/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline"
                >
                  www.golm.at
                </a>
              </div>
            </div>

            <Text bold size="xl" text="Explore the rest of Montafon" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center my-10">
              {/* Text */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <Text
                  alignment="left"
                  text="The Montafon Valley is much bigger than just Golm, with several other mountain areas and villages to explore. A few options include:"
                />

                <div className="my-6 text-gray-600">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        <strong>Gargellen</strong> – hiking, via ferratas and
                        mountain carts
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        <strong>Garfrescha</strong> – mountain walks and hikes
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        <strong>Silvretta / Bielerhöhe</strong> – high-mountain
                        scenery and alpine lakes
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span>•</span>
                      <span>
                        <strong>Kristberg & Silbertal</strong> – quieter
                        mountain walks and valley scenery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <Image
                  src="/images/mountaincart.jpg"
                  alt="Mountain carts"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </div>

            <Text bold size="xl" text="Beyond Montafon" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center my-10">
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/Quinten.jpeg"
                  alt="Quiten, Wallensee"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <Text
                  alignment="left"
                  text="If you’re staying for longer, there’s even more to explore beyond Montafon. Lake Constance, Bregenerwald, Feldkirch, Bludenz, Liechtenstein and Switzerland are all within easy reach. "
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
