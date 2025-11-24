"use client";

import { motion } from "framer-motion";
import { Target, Eye, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: <Target size={36} className="text-[var(--turaath-gold)]" />,
    title: "Mission",
    desc: "Empowering students to excel academically, develop strong character, and embrace lifelong learning."
  },
  {
    icon: <Eye size={36} className="text-[var(--turaath-gold)]" />,
    title: "Vision",
    desc: "To be a leading school that blends heritage, innovation, and academic excellence, shaping future leaders."
  },
  {
    icon: <BookOpen size={36} className="text-[var(--turaath-gold)]" />,
    title: "Core Values",
    desc: "Integrity, Discipline, Curiosity, Creativity, and Respect are at the heart of everything we do."
  }
];

export default function MissionVisionValues() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: "var(--turaath-green)" }}>
          Mission, Vision & Core Values
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We are committed to nurturing excellence from day one. Our guiding principles shape our culture, teaching methods, and student development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[var(--turaath-light)] p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="mb-4">{pillar.icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--turaath-green)" }}>
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
