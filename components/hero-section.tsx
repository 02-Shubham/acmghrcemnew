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
    title: "",
    link: "/",
    thumbnail:
      "/ACMlogo1.png",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event1.jpg", 
  },
  {
    title: "",
    link: "/",
    thumbnail:"/event5.jpg",
  },
 
  {
    title: "",
    link: "/",
    thumbnail:"/event3.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event5.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event7.jpg",
  },
 
  {
    title: "",
    link: "/",
    thumbnail:
      "/event6.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event4.png",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event8.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event9.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event10.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event8.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event6.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event9.jpg",
  },
  {
    title: "",
    link: "/",
    thumbnail:
      "/event5.jpg",
  },
];