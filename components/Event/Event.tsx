"use client";
import { PinContainer } from "../ui/3d-pin";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Code, Archive } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: "past" | "future";
  imageUrl?: string;
}

export default function EventsPage({ initialEvents = [] }: { initialEvents?: Event[] }) {
  const [activeFilter, setActiveFilter] = useState<"all" | "past" | "future">("all");

  const filteredEvents = initialEvents.filter(
    (event) => activeFilter === "all" || event.type === activeFilter
  );

  return (
    <div className="min-h-screen pt-16 text-white relative overflow-hidden bg-[rgba(16,18,24,1)]">
      {/* Header Section */}
      <section className="py-20 relative z-10 text-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.h1
            className="mb-6 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            ACM Events
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
          >
            Explore our past achievements and upcoming opportunities 🚀
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-16 relative z-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.nav
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
          >
            {["all", "past", "future"].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter as "all" | "past" | "future")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter === "all" && <Archive className="w-6 h-6" />}
                {filter === "past" && <Clock className="w-6 h-6" />}
                {filter === "future" && <Code className="w-6 h-6" />}
                <span className="capitalize">{filter} Events</span>
              </motion.button>
            ))}
          </motion.nav>

          {/* Event Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {filteredEvents.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-12">
                  No events found in this category.
                </div>
              ) : (
                filteredEvents.map((event, index) => (
                  <div key={event.id} className="h-[40rem] w-full flex items-center justify-center">
                    <PinContainer title="/" href="">
                      <motion.div
                        className="overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-xl mx-auto max-w-[400px] max-h-[600px] w-[300px] border border-gray-700"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                      >
                        {event.imageUrl && (
                          <motion.img
                            src={event.imageUrl}
                            alt={event.title}
                            className="object-cover w-full h-72"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        <div className="p-6">
                          <motion.h3
                            className="mb-2 text-2xl font-bold text-blue-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {event.title}
                          </motion.h3>
                          <div className="mb-4 space-y-2 text-gray-300">
                            <motion.div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-blue-400" />
                              <span className="text-sm">{event.date}</span>
                            </motion.div>
                            <motion.div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-blue-400" />
                              <span className="text-sm">{event.time}</span>
                            </motion.div>
                            <motion.div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-blue-400" />
                              <span className="text-sm">{event.location}</span>
                            </motion.div>
                          </div>
                          <motion.p className="mb-4 text-gray-300 text-sm">
                            {event.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </PinContainer>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
