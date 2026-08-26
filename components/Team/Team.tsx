"use client";

import React, { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  Linkedin,
  Mail,
  Users,
  Github,
  Award,
  History,
  Search,
  Sparkles,
  ShieldCheck,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Teams, TeamMember } from "../../libs/team-data";
import { currentTeamMembers, previousYearLeads, facultyAdvisors } from "../../libs/team-data";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { tsParticles } from "@tsparticles/engine";

interface TeamClientProps {
  initialTeams?: Teams;
}

export default function TeamClient({ initialTeams }: TeamClientProps) {
  const [selectedYear, setSelectedYear] = useState<"current" | "previous" | "all">("current");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(tsParticles);
  }, []);

  const displayedMembers = useMemo(() => {
    let list: TeamMember[] = [];

    if (selectedYear === "current") {
      list = [...facultyAdvisors, ...currentTeamMembers];
    } else if (selectedYear === "previous") {
      list = previousYearLeads;
    } else {
      list = [...facultyAdvisors, ...currentTeamMembers, ...previousYearLeads];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.role.toLowerCase().includes(q) ||
          (m.department && m.department.toLowerCase().includes(q)) ||
          (m.branchYear && m.branchYear.toLowerCase().includes(q)) ||
          m.bio.toLowerCase().includes(q) ||
          m.team.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedYear, searchQuery]);

  const getAvatarGradient = (name: string) => {
    const gradients = [
      "from-blue-600 to-indigo-800",
      "from-cyan-600 to-blue-800",
      "from-emerald-600 to-teal-900",
      "from-purple-600 to-indigo-900",
      "from-rose-600 to-pink-900",
      "from-amber-600 to-orange-900",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % gradients.length;
    return gradients[index];
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen pt-20 text-white relative overflow-hidden bg-[#0a0d14]">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#60a5fa" },
            links: {
              color: "#3b82f6",
              distance: 140,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 0.4,
              straight: false,
            },
            number: {
              density: { enable: true, area: 900 },
              value: 35,
            },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
          },
          detectRetina: true,
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header Section */}
      <section className="py-12 relative z-10">
        <div className="px-4 mx-auto text-center max-w-5xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-sm font-medium mb-5 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            ACM Student Chapter &bull; GHRCEM Pune
          </motion.div>

          <motion.h1
            className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {selectedYear === "previous" ? "Previous Year Leadership (2024–25)" : "Meet Our Chapter Team"}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {selectedYear === "previous"
              ? "Honoring our founding student leads whose vision, technical rigor, and leadership built and propelled ACM GHRCEM."
              : "The passionate innovators, engineers, creators, and faculty advisors leading ACM GHRCEM."}
          </motion.p>

          {/* Quick Year Toggle Banner & Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center p-1 rounded-xl bg-gray-900/90 border border-gray-800 backdrop-blur-md shadow-inner">
              <button
                onClick={() => setSelectedYear("current")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedYear === "current"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Current Team (2025–26)
              </button>

              <button
                onClick={() => setSelectedYear("previous")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  selectedYear === "previous"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-500/20"
                    : "text-gray-400 hover:text-amber-300"
                }`}
              >
                <History className="w-3.5 h-3.5" />
                Previous Leads (2024–25)
              </button>

              <button
                onClick={() => setSelectedYear("all")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedYear === "all"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                All Members
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search team member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-900/90 border border-gray-700/80 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-md"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative z-10 pb-20 px-4 max-w-7xl mx-auto">
        {/* Section Notice for Previous Year Leads */}
        {selectedYear === "previous" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-gray-900/40 border border-amber-600/30 flex items-center gap-4 text-amber-200"
          >
            <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-semibold text-sm sm:text-base text-amber-300">
                ACM GHRCEM Leadership &bull; Academic Year 2024–2025
              </h2>
              <p className="text-xs sm:text-sm text-amber-200/80">
                Recognizing the former student executive board and team leads who paved the way and led key initiatives for the chapter.
              </p>
            </div>
          </motion.div>
        )}

        {/* Members Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedYear}-${searchQuery}`}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {displayedMembers.map((member: TeamMember, index: number) => {
              const hasPhoto =
                member.publishPhoto !== false &&
                member.image &&
                member.image.trim() !== "" &&
                !failedImages[member.id];
              const isLead = member.isLead;
              const isFaculty = member.team === "Faculty Advisors";
              const isPreviousLead = member.team === "Previous Leads" || member.year === "2024-2025";

              return (
                <motion.div
                  key={member.id}
                  id={`team-member-${member.id}`}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col justify-between bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-black/90 backdrop-blur-sm ${
                    isFaculty
                      ? "border-amber-500/30 hover:border-amber-400/60 shadow-lg hover:shadow-amber-500/10"
                      : isPreviousLead
                      ? "border-amber-500/20 hover:border-amber-400/50 shadow-lg hover:shadow-amber-500/10"
                      : isLead
                      ? "border-blue-500/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/10"
                      : "border-gray-800 hover:border-gray-700 shadow-md hover:shadow-blue-500/5"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                >
                  <div>
                    {/* Header Image / Avatar Container */}
                    <div className="relative h-60 w-full overflow-hidden bg-gray-950 flex items-center justify-center">
                      {hasPhoto ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={member.image!}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                            onError={() => {
                              setFailedImages((prev) => ({ ...prev, [member.id]: true }));
                            }}
                          />
                        </div>
                      ) : (
                        /* Styled Privacy-Conscious / Placeholder Avatar */
                        <div
                          className={`w-full h-full bg-gradient-to-br ${getAvatarGradient(
                            member.name
                          )} flex flex-col items-center justify-center relative p-6`}
                        >
                          <div className="w-20 h-20 rounded-full bg-black/30 border border-white/20 flex items-center justify-center shadow-inner mb-2 group-hover:scale-110 transition-transform duration-300">
                            {member.publishPhoto === false ? (
                              <ShieldCheck className="w-10 h-10 text-white/90" />
                            ) : (
                              <User className="w-10 h-10 text-white/90" />
                            )}
                          </div>
                          <span className="text-2xl font-bold tracking-wider text-white">
                            {getInitials(member.name)}
                          </span>
                          <span className="text-xs text-white/80 font-medium mt-1">
                            {member.department || member.team}
                          </span>
                          {member.publishPhoto === false && (
                            <span className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded bg-black/40 text-gray-300 backdrop-blur-xs">
                              Verified Member
                            </span>
                          )}
                        </div>
                      )}

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        {isFaculty ? (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                            Faculty Advisor
                          </span>
                        ) : isPreviousLead ? (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                            Former Lead (2024–25)
                          </span>
                        ) : isLead ? (
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40 backdrop-blur-md">
                            Chapter Lead
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900/70 text-gray-300 border border-gray-700/60 backdrop-blur-md">
                            {member.team}
                          </span>
                        )}

                        {member.branchYear && (
                          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-black/60 text-gray-300 border border-white/10 backdrop-blur-md truncate max-w-[140px]">
                            {member.branchYear}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-5">
                      <div className="mb-3">
                        <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {member.name}
                        </h2>
                        <p
                          className={`text-sm font-medium ${
                            isFaculty
                              ? "text-amber-400"
                              : isPreviousLead
                              ? "text-amber-300"
                              : "text-blue-400"
                          }`}
                        >
                          {member.role}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-4 leading-relaxed min-h-[4rem]">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Footer / Social Links */}
                  <div className="px-5 pb-5 pt-3 border-t border-gray-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn Profile`}
                          className="p-2 rounded-lg bg-gray-800/60 text-gray-400 hover:text-blue-400 hover:bg-blue-950/40 border border-gray-700/50 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} GitHub Profile`}
                          className="p-2 rounded-lg bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-700/50 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.mail && (
                        <a
                          href={`mailto:${member.mail}`}
                          aria-label={`Email ${member.name}`}
                          className="p-2 rounded-lg bg-gray-800/60 text-gray-400 hover:text-emerald-400 hover:bg-emerald-950/40 border border-gray-700/50 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <span className="text-[11px] text-gray-500 font-mono">
                      {member.year || (isPreviousLead ? "2024–25" : "2025–26")}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {displayedMembers.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            <Users className="w-12 h-12 mx-auto mb-3 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-300">No members found</h3>
            <p className="text-sm text-gray-500 mt-1">Try clearing your search query or selecting a different category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
