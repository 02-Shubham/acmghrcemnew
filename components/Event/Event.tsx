"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Code,
  Archive,
  Search,
  Sparkles,
  ExternalLink,
  Tag,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "past" | "future";
  imageUrl?: string;
  tag?: string;
}

export default function EventsPage({
  initialEvents = [],
}: {
  initialEvents?: Event[];
}) {
  const [activeFilter, setActiveFilter] = useState<"all" | "future" | "past">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return initialEvents.filter((event) => {
      const matchesFilter =
        activeFilter === "all" || event.type === activeFilter;
      const matchesSearch =
        !searchQuery.trim() ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [initialEvents, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#07090e] text-white">
      {/* Header Section */}
      <section className="relative px-4 sm:px-6 max-w-7xl mx-auto text-center pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ACM GHRCEM Events</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-white display-title tracking-tight max-w-4xl mx-auto"
        >
          Hackathons, Workshops &{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            Tech Conclaves.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our flagship tech initiatives, coding competitions, hands-on bootcamps, and networking summits.
        </motion.p>

        {/* Filter Controls & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          {/* Apple-style Segmented Control */}
          <div className="flex items-center p-1 rounded-2xl bg-[#0e131d] border border-white/10 shadow-inner">
            {[
              { id: "all", label: "All Events", icon: <Archive className="w-3.5 h-3.5" /> },
              { id: "future", label: "Upcoming", icon: <Code className="w-3.5 h-3.5" /> },
              { id: "past", label: "Past Events", icon: <Clock className="w-3.5 h-3.5" /> },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as "all" | "future" | "past")}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 apple-btn ${
                    isActive
                      ? "text-white font-semibold shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="eventFilterPill"
                      className="absolute inset-0 rounded-xl bg-blue-600 border border-blue-400/40 shadow-md shadow-blue-500/20"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.icon}
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#0e131d] border border-white/10 rounded-2xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Events Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-8">
        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 glass-panel rounded-3xl border border-white/10 max-w-lg mx-auto p-8"
            >
              <Archive className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-1">No Events Found</h3>
              <p className="text-sm text-gray-400">
                Try adjusting your search or switching filters to find events.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`${activeFilter}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
                >
                  {/* Event Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#0c1017]">
                    {event.imageUrl ? (
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-indigo-900/30">
                        <Code className="w-12 h-12 text-blue-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e131d] via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md border ${
                          event.type === "future"
                            ? "bg-blue-500/80 text-white border-blue-400/50 shadow-md shadow-blue-500/20"
                            : "bg-gray-800/80 text-gray-300 border-gray-700"
                        }`}
                      >
                        {event.type === "future" ? "Upcoming" : "Completed"}
                      </span>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4 text-xs text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>

                    {/* CTA Link */}
                    <div className="pt-4 border-t border-white/5">
                      {event.type === "future" ? (
                        <Link
                          href="/contactus"
                          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center shadow-md shadow-blue-500/20 apple-btn flex items-center justify-center gap-2"
                        >
                          <span>Register Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      ) : (
                        <div className="flex items-center justify-between text-xs text-gray-400 py-1">
                          <span className="font-medium">Session Recap</span>
                          <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            View Details <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
