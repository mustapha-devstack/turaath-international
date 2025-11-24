"use client";

import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    title: "Nursery School",
    icon: <Baby size={40} className="text-[var(--turaath-gold)]" />,
    desc: "Where curiosity begins! We nurture creativity and social growth through guided play and foundational learning.",
  },
  {
    title: "Primary School",
    icon: <BookOpen size={40} className="text-[var(--turaath-gold)]" />,
    desc: "Building knowledge and confidence with a balanced blend of academics, culture, and values-based education.",
  },
  {
    title: "Secondary School",
    icon: <GraduationCap size={40} className="text-[var(--turaath-gold)]" />,
    desc: "Preparing leaders of tomorrow with critical thinking, innovation, and lifelong learning excellence.",
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-[var(--turaath-dark)]"
      id="programs"
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
          Our Programs
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          From early discovery to lifelong learning — each stage of Turaath
          School nurtures knowledge, character, and creativity.
        </p>
      </motion.div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center"
          >
            <div className="mb-5">{program.icon}</div>
            <h3
              className="text-2xl font-semibold mb-3"
              style={{ color: "var(--turaath-green)" }}
            >
              {program.title}
            </h3>
            <p className="text-gray-600">{program.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
