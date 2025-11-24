"use client";

import { motion } from "framer-motion";
import { Eye, Target, Globe, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: <Eye size={36} className="text-[var(--turaath-gold)]" />,
    title: "Our Vision",
    desc: "To be a leading school that harmonizes heritage, innovation, and academic excellence.",
  },
  {
    icon: <Target size={36} className="text-[var(--turaath-gold)]" />,
    title: "Our Mission",
    desc: "Empowering students to excel academically, grow in character, and embrace lifelong learning.",
  },
  {
    icon: <Globe size={36} className="text-[var(--turaath-gold)]" />,
    title: "Global Perspective",
    desc: "Fostering awareness and respect for diverse cultures and global citizenship from day one.",
  },
  {
    icon: <BookOpen size={36} className="text-[var(--turaath-gold)]" />,
    title: "Core Values",
    desc: "Integrity, discipline, creativity, and curiosity are at the heart of everything we do.",
  },
];

export default function PillarsSection() {
  return (
    <section
      className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-[var(--turaath-dark)]"
      id="pillars"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2
          className="text-4xl font-bold mb-3"
          style={{ color: "var(--turaath-green)" }}
        >
          Our Vision & Mission
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Though new, Turaath International School is founded on strong principles
          to guide students towards excellence, character, and innovation.
        </p>
      </motion.div>

      {/* Pillar Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
          >
            <div className="mb-4">{pillar.icon}</div>
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--turaath-green)" }}
            >
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
