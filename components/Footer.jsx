"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { ArrowUpRight, Check, Send, Sparkles } from "lucide-react";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-[#05070a] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md">
                <Image
                  src="/ACMlogo1.png"
                  alt="ACM GHRCEM Logo"
                  fill
                  className="object-contain p-0.5 bg-[#0e131d]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  ACM GHRCEM
                </span>
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold">
                  Official Student Chapter
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Advancing computing as a science and profession at G H Raisoni College of Engineering and Management, Pune. Empowering the next generation of engineers through hackathons, research pods, and peer mentorship.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
                { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
                { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all duration-150 apple-btn"
                >
                  <span className="text-sm">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-300 font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-white transition-colors">
                  About Our Chapter
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-white transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/achivements" className="hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-300 font-semibold mb-4">
              ACM Global
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <a
                  href="https://www.acm.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ACM Headquarters</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://india.acm.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ACM India Council</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dl.acm.org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>ACM Digital Library</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-white transition-colors">
                  Membership Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter Subscribe */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-300 font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Get notified about upcoming hackathons, tech talks, and recruitment cycles.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your college email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold apple-btn flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
                >
                  <span>Subscribe to Updates</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ACM Student Chapter GHRCEM Pune. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500">
            Crafted with precision &bull; Driven by Student Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
