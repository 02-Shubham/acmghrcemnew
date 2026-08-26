"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Calendar, Users, Trophy } from "lucide-react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apple-grade critically damped spring configuration
  const springConfig = { stiffness: 220, damping: 28, mass: 0.8 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [12, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [-500, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[280vh] py-24 sm:py-32 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-[#07090e] via-[#0b0f17] to-[#07090e]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 mb-12 sm:mb-16">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row1-${idx}-${product.title}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-16 space-x-8 sm:space-x-12">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`row2-${idx}-${product.title}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`row3-${idx}-${product.title}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 w-full left-0 top-0 z-20">
      {/* Chapter Tag Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        <span>Association for Computing Machinery • Student Chapter</span>
      </motion.div>

      {/* Main Apple-style Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white display-title tracking-tight max-w-4xl"
      >
        Innovate. Build. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
          Shape the Future.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-base sm:text-lg md:text-xl mt-6 text-gray-300/90 leading-relaxed"
      >
        Welcome to <strong className="text-white font-semibold">ACM GHRCEM</strong>. We empower students, engineers, and creators through premier hackathons, peer mentorship, technical workshops, and real-world project incubation.
      </motion.p>

      {/* Quick Interactive Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Link
          href="/events"
          className="px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all duration-200 apple-btn flex items-center gap-2 group"
        >
          <span>Explore Chapter Events</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/teams"
          className="px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-gray-200 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-200 apple-btn"
        >
          Meet The Team
        </Link>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="h-80 sm:h-96 w-[22rem] sm:w-[28rem] relative flex-shrink-0 rounded-2xl overflow-hidden glass-card group cursor-pointer"
    >
      <Link href={product.link} className="block w-full h-full relative">
        <Image
          src={product.thumbnail}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          alt={product.title}
        />
        {/* Subtle Dark Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

        {/* Card Metadata & Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/30 border border-blue-400/40 text-[10px] uppercase font-bold tracking-wider text-blue-200 mb-2 backdrop-blur-md">
            ACM Initiative
          </div>
          <h3 className="text-white text-base sm:text-lg font-bold tracking-tight line-clamp-2 drop-shadow-md">
            {product.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
