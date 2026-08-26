"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const getCardRotation = (index: number) => {
    const rotations = [-4, 4, -6, 5, -3, 6, -5, 3];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-4xl mx-auto antialiased px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        {/* Card Stack */}
        <div className="relative h-72 sm:h-80 w-full max-w-sm mx-auto md:max-w-none">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: getCardRotation(index),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.65,
                  scale: isActive(index) ? 1 : 0.94,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : getCardRotation(index),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? 0 : 8,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: getCardRotation(index),
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute inset-0 origin-bottom rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quote & Author Info */}
        <div className="flex flex-col justify-between py-2">
          <motion.div
            key={active}
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -15,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <Quote className="w-5 h-5" />
            </div>

            <motion.p className="text-base sm:text-xl text-gray-200 leading-relaxed font-normal">
              &ldquo;{testimonials[active].quote}&rdquo;
            </motion.p>

            <div className="mt-6 pt-4 border-t border-white/10">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {testimonials[active].name}
              </h3>
              <p className="text-xs sm:text-sm text-blue-400 font-medium mt-0.5">
                {testimonials[active].designation}
              </p>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 pt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 active:scale-[0.95] border border-white/10 flex items-center justify-center text-white transition-all apple-btn"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 active:scale-[0.95] border border-white/10 flex items-center justify-center text-white transition-all apple-btn"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-xs text-gray-400 font-medium ml-2">
              {active + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
