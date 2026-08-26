"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Award,
  Target,
  Compass,
  Users,
  Code,
  Laptop,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ActivityTimeline } from "@/components/ActivityTimeline";

export default function AboutUsPage() {
  const milestones = [
    {
      year: "2024",
      title: "Chapter Inception",
      description: "ACM Student Chapter established at GHRCEM with founding faculty advisors and student leads to pioneer a vibrant computing culture.",
    },
    {
      year: "2024-25",
      title: "Code Odyssey & First Major Events",
      description: "Hosted over 15+ high-impact hackathons, seminars, and hands-on workshops with 1000+ total student participants.",
    },
    {
      year: "2025-26",
      title: "Scale, Expansion & National Recognition",
      description: "Expanded core verticals including AI/ML research pods, Cloud & Web3 incubation, UI/UX sprints, and cross-college tech competitions.",
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: "Mission",
      description: "To advance computing as a science and profession, providing students with access to premier learning resources, technical challenges, and career-shaping mentorship.",
    },
    {
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      title: "Vision",
      description: "To build a benchmark student community recognized nationally for fostering top-tier software engineers, researchers, and technological innovators.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      title: "Inclusivity & Growth",
      description: "Welcoming students from every academic branch and experience level, cultivating an environment where curious beginners evolve into confident leaders.",
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      title: "Applied Engineering",
      description: "Prioritizing hands-on projects, algorithmic mastery, open-source development, and tangible solutions to real-world problems.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#07090e] text-white">
      {/* Header Banner */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto text-center pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>About ACM GHRCEM</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white display-title tracking-tight max-w-4xl mx-auto"
        >
          Pioneering the Next Generation of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Tech Innovators.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          The Association for Computing Machinery (ACM) Student Chapter at G H Raisoni College of Engineering and Management is dedicated to advancing technology, fostering innovation, and bridging academic learning with industry standards.
        </motion.p>
      </section>

      {/* Values & Pillars Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chapter Overview & Highlights */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-16">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Chapter Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Empowering Students Beyond Classroom Boundaries
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Our chapter actively organizes technical symposiums, hands-on development bootcamps, competitive programming leagues, and industry guest lectures. We believe in learning by building and succeeding as a cohesive collective.
            </p>

            <ul className="space-y-3">
              {[
                "Global ACM Student Membership benefits & ACM Digital Library access",
                "Hands-on Project Mentorship by senior leads and alumni mentors",
                "Flagship hackathons with real cash prizes and startup incubation",
                "Active domain verticals: Tech, Design, Event Management, PR & Treasury",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              <Link
                href="/teams"
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 apple-btn flex items-center gap-2"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/events"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-semibold border border-white/15 apple-btn"
              >
                View Chapter Events
              </Link>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/ACMlogo.png"
              alt="ACM GHRCEM"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg">ACM GHRCEM Chapter</p>
              <p className="text-gray-300 text-xs mt-1">G H Raisoni College of Engineering and Management, Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Timeline Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Laptop className="w-3.5 h-3.5" />
            <span>Chapter Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Journey & Milestones
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Tracing our growth from a budding student club to an active chapter.
          </p>
        </div>

        <ActivityTimeline />
      </section>
    </div>
  );
}
