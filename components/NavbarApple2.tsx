"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarApple2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/teams" },
    { name: "Achievements", href: "/achivements" },
    { name: "Contact", href: "/contactus" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-full flex justify-center px-4"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled 
              ? "bg-[#1d1d1f]/80 backdrop-blur-xl border border-white/10 shadow-2xl" 
              : "bg-black/40 backdrop-blur-md border border-white/10"
          } w-full max-w-5xl`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group apple-btn">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shadow-sm bg-white/10 flex items-center justify-center">
              <Image
                src="/ACMlogo1.png"
                alt="ACM GHRCEM"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-[13px] text-white tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                ACM GHRCEM
              </span>
              <span className="text-[10px] text-gray-400 font-medium leading-tight">
                Student Chapter
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors apple-btn ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill2"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contactus"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-gray-100 text-xs font-semibold rounded-full shadow-lg apple-btn"
            >
              <span>Join Us</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white apple-btn"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute inset-x-4 top-20 z-40 lg:hidden bg-[#1d1d1f]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`p-4 rounded-2xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive ? "bg-white/10 text-white border border-white/10" : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <ArrowRight className="w-4 h-4" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
