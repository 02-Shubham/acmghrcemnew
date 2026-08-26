import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Users2, Sparkles, Terminal } from "lucide-react";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden px-4 sm:px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mx-auto">
            <Sparkles className="w-4 h-4" />
            <span>Association for Computing Machinery</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white display-title tracking-tight max-w-5xl mx-auto">
            Engineering the <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              Future of Tech.
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            GHRCEM&apos;s premier student-run technology chapter. We build open-source projects, host national hackathons, and cultivate a community of elite developers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 apple-btn transition-colors"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/aboutus"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 apple-btn transition-colors"
            >
              <span>Our Story</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 glass-panel rounded-3xl">
          {[
            { label: "Active Members", value: "300+" },
            { label: "Hackathons Won", value: "15+" },
            { label: "Tech Talks", value: "40+" },
            { label: "Years Active", value: "5+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Core Pillars
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything we do revolves around these four foundational principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl space-y-4 apple-btn cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Technical Excellence</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mastering industry-standard frameworks, system design, and algorithmic problem-solving.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 apple-btn cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Collaborative Community</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Peer mentorship, pair programming, and a culture of lifting each other up.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 apple-btn cursor-default">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Applied Engineering</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Moving beyond theory to build tangible, deployed applications that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Member Stories
            </h2>
          </div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>
    </div>
  );
}