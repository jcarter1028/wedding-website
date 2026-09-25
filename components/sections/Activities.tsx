"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../Title";
import Text from "../Text";
import BackgroundAnimation from "../BackgroundAnimation";

export default function Activities() {
  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative isolate">
        <BackgroundAnimation />
        <FadeIn className="relative z-10">
          <Title title="Things to do in the area" />
          <div className="relative z-10 backdrop-blur-sm">
            <Text text="There’s plenty to do in and around Montafon, so we’d highly recommend spending an extra few days in the area! Mountain activities include hiking, mountain biking, via ferratas, hut stays and spa hotels." />
            <Text bold size="xl" text="Staying in Golm" />
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center my-10">
              {/* Image */}
              <figure className="w-full lg:w-1/2">
                <Image
                  src="/images/uaineonslide.jpeg"
                  alt="Golm"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-600 font-light">
                  Slides in Golm
                </figcaption>
              </figure>
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
              <figure className="w-full lg:w-1/2 order-1 lg:order-2">
                <Image
                  src="/images/mountaincart.jpg"
                  alt="Mountain carts"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-600 font-light">
                  Mountain carts in Gargellen
                </figcaption>
              </figure>
            </div>

            <Text bold size="xl" text="Beyond Montafon" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center my-10">
              {/* Image */}
              <figure className="w-full lg:w-1/2">
                <Image
                  src="/images/Quinten.jpeg"
                  alt="Quinten, Walensee"
                  width={800}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
                <figcaption className="mt-2 text-center text-sm text-gray-600 font-light">
                  Walensee, Switzerland
                </figcaption>
              </figure>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <Text
                  alignment="left"
                  text="If you’re staying for longer, there’s even more to explore beyond Montafon. Lake Constance, Bregenzerwald, Feldkirch, Bludenz, Liechtenstein and Switzerland are all within easy reach. "
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
