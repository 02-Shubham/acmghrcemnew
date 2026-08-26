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
    title: "ACM Welcome Session",
    link: "/",
    thumbnail: "/ACMlogo1.png",
  },
  {
    title: "Code Odyssey Hackathon",
    link: "/",
    thumbnail: "/event1.jpg", 
  },
  {
    title: "Tech Conclave & Panels",
    link: "/",
    thumbnail: "/event5.jpg",
  },
  {
    title: "AI & ML Bootcamp",
    link: "/",
    thumbnail: "/event3.jpg",
  },
  {
    title: "Innovation Summit",
    link: "/",
    thumbnail: "/event5.jpg",
  },
  {
    title: "Web3 & Cloud Workshop",
    link: "/",
    thumbnail: "/event7.jpg",
  },
  {
    title: "Cyber Security CTF",
    link: "/",
    thumbnail: "/event6.jpg",
  },
  {
    title: "National Tech Fest",
    link: "/",
    thumbnail: "/event4.png",
  },
  {
    title: "Developer Day Workshop",
    link: "/",
    thumbnail: "/event8.jpg",
  },
  {
    title: "Robotics & IoT Showcase",
    link: "/",
    thumbnail: "/event9.jpg",
  },
  {
    title: "Annual Tech Awards",
    link: "/",
    thumbnail: "/event10.jpg",
  },
  {
    title: "Open Source Hack Night",
    link: "/",
    thumbnail: "/event8.jpg",
  },
  {
    title: "UI/UX Design Jam",
    link: "/",
    thumbnail: "/event6.jpg",
  },
  {
    title: "Data Science Sprint",
    link: "/",
    thumbnail: "/event9.jpg",
  },
  {
    title: "Founders & Alumni Meetup",
    link: "/",
    thumbnail: "/event5.jpg",
  },
];