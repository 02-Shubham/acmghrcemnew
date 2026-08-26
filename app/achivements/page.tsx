"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  Medal,
  Star,
  Users2,
  Code2,
  Globe2,
  CheckCircle,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function AchievementsPage() {
  const highlights = [
    {
      metric: "15+",
      label: "Hackathon Victories",
      sub: "National & State level podium finishes",
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
    },
    {
      metric: "5+",
      label: "Research Publications",
      sub: "IEEE & ACM conference presentations",
      icon: <Award className="w-6 h-6 text-blue-400" />,
    },
    {
      metric: "1000+",
      label: "Students Upskilled",
      sub: "Across coding camps and tech workshops",
      icon: <Users2 className="w-6 h-6 text-cyan-400" />,
    },
    {
      metric: "100%",
      label: "Chapter Growth",
      sub: "Consistent year-on-year community engagement",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    },
  ];

  const majorAchievements = [
    {
      badge: "National Hackathon Championship",
      title: "Smart India Hackathon & National Tech Sprints",
      date: "2024 - 2025",
      description:
        "ACM GHRCEM member teams secured top podium positions in Smart India Hackathon and prestigious state-level technical symposia, developing impactful AI-driven civic and healthcare prototypes.",
      tags: ["Hackathon", "AI & Civic Tech", "National Winner"],
    },
    {
      badge: "Flagship Event Hosting",
      title: "Code Odyssey & Tech Conclave 2024",
      date: "Fall 2024",
      description:
        "Organized one of the region's largest student tech summits featuring 48 hours of intense coding, 500+ participants from 20+ colleges, and panel keynotes from seasoned Silicon Valley & Indian tech leaders.",
      tags: ["Flagship Event", "500+ Attendees", "Inter-College"],
    },
    {
      badge: "Academic & Research Recognition",
      title: "ACM Digital Library & Research Mentorship Pods",
      date: "2024 - 2025",
      description:
        "Formed structured research circles where undergraduate students collaborated with faculty advisors on Deep Learning and Cloud Computing research, successfully authoring indexed papers.",
      tags: ["Research", "Peer Review", "Publications"],
    },
    {
      badge: "Community Outreach & Inclusivity",
      title: "First-Year Developer Bootcamps & Mentorship",
      date: "Annual Initiative",
      description:
        "Trained over 400+ freshman and sophomore students with zero-to-one developer bootcamps covering Web Development, Git/GitHub, Data Structures, and Open Source contributions.",
      tags: ["Upskilling", "Mentorship", "Community"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#07090e] text-white">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto text-center pt-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Chapter Milestones & Honors</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white display-title tracking-tight max-w-4xl mx-auto"
        >
          Celebrating Excellence &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Student Triumphs.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A testament to the dedication, technical prowess, and relentless spirit of our ACM GHRCEM members, mentors, and advisors.
        </motion.p>
      </section>

      {/* Metrics Banner */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {item.metric}
                </h3>
                <p className="text-sm font-semibold text-white mt-1">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Major Achievements Showcase */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto py-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Medal className="w-3.5 h-3.5" />
            <span>Hall of Fame</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Accomplishments
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Notable victories, community initiatives, and academic contributions.
          </p>
        </div>

        <div className="space-y-6">
          {majorAchievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-[11px] font-medium text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Connect Prompt */}
        <div className="mt-16 text-center glass-panel p-8 rounded-3xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-2">
            Want to be part of our next big milestone?
          </h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
            Join ACM GHRCEM today and build projects that make national headlines.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 apple-btn"
          >
            <span>Connect With Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
