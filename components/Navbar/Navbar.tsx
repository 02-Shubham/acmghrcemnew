"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as HoverCard from "@radix-ui/react-hover-card";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { app } from "@/app/Auth/firebase";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Update the type here

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // This will now accept User | null
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const menuItems = (
    <>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <Link href="/">
          <span>Home</span>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>Events</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <HoverCard.Root openDelay={100} closeDelay={100}>
          <HoverCard.Trigger asChild>
            <span>Meet Our Team</span>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="bg-black text-white  mt-[22px] w-[200px] z-50 border-[1px] border-[#757061] rounded-lg cursor-pointer p-3">
              <div>
                <motion.div
                  whileHover={{ backgroundColor: "#333332" }}
                  className="p-2 rounded-lg cursor-pointer"
                >
                  <span className="font-bold">Core Team</span>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#333332" }}
                  className="p-2 rounded-lg cursor-pointer"
                >
                  <span className="font-bold">Technical Team</span>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#333332" }}
                  className="p-2 rounded-lg cursor-pointer"
                >
                  <span className="font-bold">PR Team</span>
                </motion.div>
                <motion.div
                  whileHover={{ backgroundColor: "#333332" }}
                  className="p-2 rounded-lg cursor-pointer"
                >
                  <span className="font-bold">Management Team</span>
                </motion.div>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>Club Gallery</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>Club Achievements</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>Blogs</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, color: "#1e90ff" }}
        whileTap={{ scale: 0.9 }}
        className="mx-4 cursor-pointer"
      >
        <span>About Us</span>
      </motion.div>

      {/* Show Join Us/Logout based on authentication */}
      {user ? (
        <motion.div
          whileHover={{ scale: 1.1, color: "#1e90ff" }}
          whileTap={{ scale: 0.9 }}
          className="mx-4 cursor-pointer"
          onClick={handleLogout}
        >
          <span>Logout</span>
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.1, color: "#1e90ff" }}
          whileTap={{ scale: 0.9 }}
          className="mx-4 cursor-pointer"
        >
          <HoverCard.Root openDelay={100} closeDelay={100}>
            <HoverCard.Trigger asChild>
              <span>Join Us</span>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content className="bg-black text-white  mt-[22px] w-[120px] z-50 border-[1px] border-[#757061] rounded-lg cursor-pointer p-3">
                <div>
                  <motion.div
                    whileHover={{ backgroundColor: "#333332" }}
                    className="p-2 rounded-lg cursor-pointer"
                  >
                    <Link href="/Auth/Signup">
                      <span className="font-bold">Signup</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ backgroundColor: "#333332" }}
                    className="p-2 rounded-lg cursor-pointer"
                  >
                    <Link href="/Auth/Login">
                      <span className="font-bold">Login</span>
                    </Link>
                  </motion.div>
                </div>
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </motion.div>
      )}
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
          className="w-3/4 p-5 rounded-full border-[#757061] border-[1px] hidden xl:inline-block bg-black"
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
          <span className="text-2xl font-bold">Logo</span>
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
            className="absolute  left-0 w-full bg-black text-white p-5 flex flex-col"
          >
            {menuItems}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Navbar;
