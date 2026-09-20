"use client";

import FadeIn from "../FadeIn";
import { motion } from "framer-motion";
import Title from "../Title";
import Text from "../Text";

const weekend = [
  {
    day: "Friday",
    items: [
      {
        title: "Arrival at the chalet",
        description:
          "Make your way up to the chalet by lift or on foot. The last lift up is at 5pm, so please aim to arrive before then.",
        extra:
          "In case of emergency or delayed flights, we do have the possibility of getting one or two cars up the private access road — but please do not plan with this option. Aim to be there comfortably before 5!",
      },
      {
        title: "Dinner & drinks",
        description:
          "Catch up, and enjoy a simple dinner and drinks at the chalet.",
      },
    ],
  },
  {
    day: "Saturday",
    items: [
      {
        title: "The big day",
        description:
          "We are still defining the details for the day and will update this section soon.",
        extra: "The rough plan includes:",
        list: [
          "Breakfast at the chalet",
          "A short hike (optional)",
          "Lunch apéritif at a restaurant at the top of the mountain",
          "Celebration dinner at the chalet",
          "Chats, fun and games",
        ],
      },
    ],
  },
  {
    day: "Sunday",
    items: [
      {
        title: "Mountain brunch",
        description:
          "Brunch altogether at the chalet, included as part of the wedding.",
      },
      {
        title: "Make your way down the mountain",
        description:
          "There are some fun options for getting back down! Try the slides, mountain carts or Alpine Coaster — or, of course, hike or take the lift down.",
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <FadeIn>
          <div className="relative z-10">
            <Title title="Our Weekend" />

            <Text
              text="Here’s roughly what the weekend will look like (we will update this page in due course):"
              size="lg"
            />

            <div className="relative mt-14 md:mt-16">
              {/* Timeline line — LEFT */}
              <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage-200 via-sage-300 to-sage-200" />

              {/* Content — RIGHT */}
              <div className="pl-12 md:pl-20">
                {weekend.map((day, dayIndex) => (
                  <div
                    key={day.day}
                    className={
                      dayIndex !== weekend.length - 1 ? "mb-16 md:mb-20" : ""
                    }
                  >
                    {/* Day heading */}
                    <div className="mb-7 md:mb-8">
                      <h3 className="text-sage-700 text-3xl md:text-4xl font-semibold">
                        {day.day}
                      </h3>
                    </div>

                    {/* Events */}
                    <div className="space-y-7 md:space-y-8">
                      {day.items.map((item, itemIndex) => (
                        <FadeIn
                          key={`${day.day}-${item.title}`}
                          delay={itemIndex * 0.1}
                        >
                          <motion.div className="relative">
                            {/* Timeline dot — LEFT */}
                            <div className="absolute left-[-43px] md:left-[-66px] top-6 w-4 h-4 rounded-full bg-sage-400 border-4 border-cream-50" />

                            {/* Card — RIGHT */}
                            <div className="paper-card bg-white/80 backdrop-blur-sm shadow-md p-6 md:p-7 border border-sage-100/50">
                              <div className="text-sage-600 font-medium text-xl mb-2">
                                {item.title}
                              </div>

                              <div className="text-gray-600 text-base leading-relaxed">
                                {item.description}
                              </div>

                              {item.extra && (
                                <div className="text-gray-600 text-base leading-relaxed mt-3">
                                  {item.extra}
                                </div>
                              )}

                              {item.list && (
                                <ul className="mt-4 space-y-2 text-gray-600 text-base">
                                  {item.list.map((entry) => (
                                    <li key={entry} className="flex gap-3">
                                      <span>•</span>
                                      <span>{entry}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </motion.div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
