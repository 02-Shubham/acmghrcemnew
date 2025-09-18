"use client";
import React from "react";
import { HeroParallax } from "@/components/hero-parallax";
import Demo from "./demo";

const Hero=()=> {
    return (
        <div className="bg-[rgba(16,18,24,1)]">
         <Demo />
         <HeroParallax products={products} />
        </div>
    );
};
export default Hero;


export const products = [
  {
    title: "Moonbeam",
    link: "/",
    thumbnail:
      "/ACMlogo1.png",
  },
  {
    title: "Cursor",
    link: "/",
    thumbnail:
      "/event1.jpg", 
  },
  {
    title: "Rogue",
    link: "/",
    thumbnail:"/event2.jpg",
  },
 
  {
    title: "Editorially",
    link: "/",
    thumbnail:"/event3.jpg",
  },
  {
    title: "Editrix AI",
    link: "/",
    thumbnail:
      "/event5.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/",
    thumbnail:
      "/event7.jpg",
  },
 
  {
    title: "Algochurn",
    link: "/",
    thumbnail:
      "/event6.jpg",
  },
  {
    title: "Aceternity UI",
    link: "/",
    thumbnail:
      "/event4.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "/",
    thumbnail:
      "/event8.jpg",
  },
  {
    title: "SmartBridge",
    link: "/",
    thumbnail:
      "/event9.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/",
    thumbnail:
      "/event10.jpg",
  },
  {
    title: "Creme Digital",
    link: "/",
    thumbnail:
      "/event8.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "/",
    thumbnail:
      "/event6.jpg",
  },
  {
    title: "Invoker Labs",
    link: "/",
    thumbnail:
      "/event9.jpg",
  },
  {
    title: "E Free Invoice",
    link: "/",
    thumbnail:
      "/event5.jpg",
  },
];