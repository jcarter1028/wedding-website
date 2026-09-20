"use client";

import { useState } from "react";
import FadeIn from "../FadeIn";
import weddingData from "@/config/wedding-data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Title from "../Title";
import Text from "../Text";

export default function Accommodation() {
  const { faq } = weddingData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-24 md:pt-28 pb-20 md:pb-32 px-4 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <FadeIn>
          <Title title="Accommodation" />
          <p className="text-center text-gray-600 text-lg font-light">
            We’ll all be staying at Haus Matschwitz for the weekend.
          </p>
          <div className="relative w-full h-64 md:h-96 my-4">
            <Image
              src="/images/hausmatschwitz.png"
              alt="Wedding Venue"
              fill
              className="object-cover"
              priority
            />
          </div>
          <Text
            alignment="left"
            text="Due to the mountain location, lift times and the venue requirements, the accommodation is for a minimum of two nights."
          />
          <Text
            alignment="left"
            text="There is enough space for everyone to stay at Haus Matschwitz.
            However, as most of the rooms are family rooms for four people, some
            groups may need to share a room with other guests they know. See
            photo below for example room."
          />
          <div className="relative w-full h-64 md:h-96 my-4">
            <Image
              src="/images/room.png"
              alt="Family room"
              fill
              className="object-cover"
              priority
            />
          </div>
          <Text alignment="left" text="The accommodation costs are: " />
          <div className="my-6 text-gray-600">
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span>•</span>
                <span>
                  <strong>Adults:</strong> €70 per night + €25 for Friday's
                  dinner
                </span>
              </li>

              <li className="flex gap-3">
                <span>•</span>
                <span>
                  <strong>Children 8–14:</strong> €44 per night + €15 for
                  Friday's dinner
                </span>
              </li>

              <li className="flex gap-3">
                <span>•</span>
                <span>
                  <strong>Children 3–7:</strong> €30 per night + €12 for
                  Friday's dinner
                </span>
              </li>

              <li className="flex gap-3">
                <span>•</span>
                <span>
                  <strong>Children under 3:</strong> free
                </span>
              </li>
            </ul>
          </div>
          <Text
            alignment="left"
            text="Guests cover the cost of their accommodation for both nights and dinner on Friday evening. All food costs will be covered as part of the wedding celebration on the Saturday."
          />
          <Text
            alignment="left"
            text="Once we have the RSVPs, we’ll be able to work out the room setup options. You’ll then book your accommodation directly with the venue once the room arrangements are finalised. We’ll stay in touch with everyone throughout the process to help coordinate this."
          />
          <Text
            alignment="left"
            text="If, for whatever reason, staying for two nights isn’t possible for you, just let us know and we’ll do our best to work something out with you."
          />
          <Text bold text="Thinking of staying a little longer?" />
          <Text
            alignment="left"
            text="If you’re considering staying for four nights or more, please let us know! The venue also has other well-priced 4 or 6 people private chalets that can be booked, although these have different booking requirements. "
          />
          <Text bold text="How to get up the mountain? " />
          <Text
            alignment="left"
            text="There are three sections to the Golmerbahn lift. You can park at the very bottom in Vandans, or  between the first and second sections in Latschau. Haus Matschwitz is at the top of the second section. (See map.) "
          />
          <Text
            alignment="left"
            text="The car parks by the lift are free, and you can park there for several days. "
          />

          <div className="w-full max-w-lg mx-auto my-6">
            <Image
              src="/images/golmerbahnmap.png"
              alt="Map showing the Golmerbahn and Haus Matschwitz"
              width={800}
              height={1200}
              className="w-full h-auto"
              priority
            />
          </div>
          <Text
            alignment="left"
            text="The Golmerbahn charges per section (around €13 per section, or €35 for an unlimited day pass). We therefore recommend parking in Latschau, where you only need to take one lift section to reach Haus Matschwitz. If you are travelling by public transport, it may be more practical to get the additional gondola from Vandans as this has better access to public transport."
          />
          <Text
            alignment="left"
            text="We’re currently in touch with the venue and lift provider to see what discounts or special rates might be available for wedding guests."
          />
          <Text
            alignment="left"
            text="If you’d prefer to walk, there are several hiking routes up to Haus Matschwitz — just bear in mind that it’s a proper mountain walk! "
          />
        </FadeIn>
      </div>
    </section>
  );
}
