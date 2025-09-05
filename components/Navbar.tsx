"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // import icons for the hamburger menu
import Link from "next/link";
// import logo from '../public/ACMlogo.jpg';
import Image from 'next/image';

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <Link href="/">
          <span>Home</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <Link href="/aboutus">
        <span>About Us</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <Link href="/events">
        <span>Events</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <Link href={"/teams"}>
            <span>Meet Our Team</span>
            </Link>
          </HoverCard.Trigger>
        </HoverCard.Root>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <Link href="/contactus">
        <span>Contact Us</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#ff8a00" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>Blogs</span>
      </motion.div>
    </>
  );

  return (
    <>
      {/* Big Screen Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[100vw] fixed top-0 z-50 mt-8 text-white  flex justify-center items-center"
      >
        <div
          className="w-8/12 p-5  bg-black rounded-full border-[#464646] border-[1px] hidden xl:inline-block"
          id="navBarDiv"
        >
          <div className="w-full h-full flex items-center justify-between px-5">
            {menuItems}
          </div>
        </div>
      </motion.div>

      {/* Hamburger Navbar */}
      <div className="w-[100vw] fixed top-0 z-50 mt-8 text-white  xl:hidden flex justify-between items-center px-4">
        <div className="flex items-center">
        {/* <Image src={logo} alt="College Club" width={50} height={50} /> */}
          {/* <span className="text-2xl font-bold"></span> */}
        </div>
        <div className="flex items-center">
          {isOpen ? (
            <AiOutlineClose
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          )}
        </div>
        {isOpen && (
          <motion.div
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            className="absolute top-16 left-0 w-full bg-black text-white p-10 gap-5 flex flex-col"
          >
            {menuItems}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Navbar;