"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-20">
      {/* Background Image */}
      <Image
        src="/assets/students2.jpg"
        alt="Students learning"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-green-900/50 to-green-600/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-white flex flex-col items-start">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
        >
          Contact <span className="text-[var(--turaath-gold)] drop-shadow-lg">Turaath International School</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl mb-6 drop-shadow"
        >
          Rooted in Heritage, Driven by Innovation
        </motion.p>
      </div>
    </section>
  );
}
