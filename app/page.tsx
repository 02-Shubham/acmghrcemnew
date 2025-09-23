import React from "react";
import Hero from "@/components/hero-section"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const content = [
  {
    title: "ACM GHRCEM",
    description:"ACM is a hub where innovation sparks and entrepreneurial dreams take shape. We bring together curious minds and aspiring changemakers to foster creativity and collaboration.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Mission",
    description:
      "Our mission is to empower students to turn ideas into impactful ventures through events, workshops, and mentorship, cultivating a strong entrepreneurial spirit.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ACMlogo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Vision",
    description:
      "We envision a community where every student has the tools and support to transform their vision into reality, driving innovation and shaping a brighter future.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--blue-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];

export default function Page(): JSX.Element {
  return (
    <div>
      <div className="bg-[rgba(16,18,24,1)]">
       <Hero />
       <div>
       <h1 className=" m-10 text-7xl text-center font-bold">Testimonial</h1>
       <AnimatedTestimonialsDemo/>
       </div>
      </div>
    </div>
  );
}