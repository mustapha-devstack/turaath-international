"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--turaath-green)" }}>
          Our Story
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Turaath International School was founded by five visionary educators who shared a dream: 
          to create a school where heritage, values, and modern education combine to produce future leaders.
        </p>
        <p className="text-gray-700 text-lg">
          Though new, the school is built on strong principles: academic rigor, character development, and creativity. 
          Every decision, from curriculum design to classroom culture, reflects this commitment.
        </p>
      </motion.div>
    </section>
  );
}
