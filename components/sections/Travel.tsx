"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../Title";
import Text from "../Text";

export default function Travel() {
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
          <Title title="How to get there?" />

          <div className="relative z-10 backdrop-blur-sm">
            <Text
              alignment="left"
              text="Your first destination is Vandans, where you’ll find the Golmerbahn that takes you up to Haus Matschwitz, as described in the accommodation section."
            />
            <Text
              alignment="left"
              text="Travelling by car is probably the simplest option, especially if you’re travelling as a group. However, Vandans is also well connected by train, so public transport is a good option too. "
            />
            <Text bold alignment="center" text="By plane" size="xl" />

            <Text
              alignment="left"
              text="There are several airports within reach. Zürich, Memmingen and Innsbruck are probably the most useful, but it’s worth comparing flights and travel times before booking. Once you have landed, you will still need to make your way to Vandans, so we have included approximate timings for you. "
            />
            <div className="w-full overflow-x-auto my-8">
              <table className="w-full text-left text-gray-600">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 font-semibold">Airport</th>
                    <th className="px-4 py-3 font-semibold">Approx. by car</th>
                    <th className="px-4 py-3 font-semibold">
                      Approx. by public transport
                    </th>
                    <th className="px-4 py-3 font-semibold">Good to know</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                      Zürich (ZRH) 🇨🇭
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">2h</td>
                    <td className="px-4 py-4 whitespace-nowrap">3h</td>
                    <td className="px-4 py-4">
                      Lots of flights and excellent train connections
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                      Memmingen (FMM) 🇩🇪
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">1h30</td>
                    <td className="px-4 py-4 whitespace-nowrap">2h45</td>
                    <td className="px-4 py-4">
                      Often good for low-cost flights; car hire is easy, but
                      public transport connections are sparse.
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                      Innsbruck (INN) 🇦🇹
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">1h45</td>
                    <td className="px-4 py-4 whitespace-nowrap">2h30</td>
                    <td className="px-4 py-4">
                      Smaller airport; good option if you find a direct flight
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 font-semibold whitespace-nowrap">
                      Munich (MUC) 🇩🇪
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">3h</td>
                    <td className="px-4 py-4 whitespace-nowrap">4–5 hrs</td>
                    <td className="px-4 py-4">
                      Huge choice of flights, but a considerably longer journey
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Text bold alignment="center" text="By train" size="xl" />

            <Text
              alignment="left"
              text="Vandans has its own train station, with connections from across Austria and Switzerland. You can then either walk to the Golmerbahn station from the train (20min), or take the bus (10min). "
            />
            <Text bold alignment="left" text="Booking train tickets" />
            <Text
              alignment="left"
              text="For Austria and international journeys into Austria, check the ÖBB app. For journeys starting in Switzerland, also check the SBB app. It's often worth comparing the two. International apps such as** Trainline** can also let you book train tickets in the area, but may not have all options available. "
            />
            <Text
              italic
              alignment="left"
              text="SBB tip: Unless you have an annual Swiss Half Fare Travelcard, make sure you untick “half fare” when checking prices or booking via SBB.   "
            />

            <Text bold alignment="center" text="By car" size="xl" />

            <Text
              alignment="left"
              text="There is parking at the bottom of the Golmerbahn in Vandans, or after the first section of the lift in Latschau (see map in accommodation section). The parking is free, and you can park there over the whole weekend. "
            />
            <Text
              alignment="left"
              text="We recommend parking in Latschau if possible, which minimises the lift sections you need to take up. "
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
