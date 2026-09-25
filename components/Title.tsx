"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <h2 className="font-script text-4xl md:text-7xl text-center text-sage-700 my-16">
      {title}
    </h2>
  );
}
