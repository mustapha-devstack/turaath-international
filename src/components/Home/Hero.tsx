"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-8 md:px-20">
      {/* Full Background Image */}
      <Image
        src="/assets/students2.jpg"
        alt="Students learning"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Stronger Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-900/60 to-green-600/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-xl text-white flex flex-col items-start">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
        >
          Welcome to{" "}
          <span className="text-[var(--turaath-gold)] drop-shadow-lg">
            Turaath International School
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 drop-shadow"
        >
          Rooted in Heritage, Driven by Innovation
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg mb-8 text-gray-100 drop-shadow"
        >
          Empowering young minds through quality education, cultural values, and
          modern learning methods across Nursery, Primary, and Secondary levels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4"
        >
          <button className="text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all bg-[var(--turaath-green)] hover:bg-emerald-800">
            Explore Our School <ArrowRight size={18} />
          </button>

          <button className="border px-6 py-3 rounded-xl transition-all
                             border-[var(--turaath-gold)] text-[var(--turaath-gold)]
                             hover:bg-[var(--turaath-gold)] hover:text-[var(--turaath-dark)]">
            Admissions Open
          </button>
        </motion.div>
      </div>
    </section>
  );
}
