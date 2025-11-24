"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Globe, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: <BookOpen size={40} className="text-[var(--turaath-gold)]" />,
    title: "Quality Education",
    desc: "Providing a well-rounded education that blends academics, ethics, and creativity.",
  },
  {
    icon: <Lightbulb size={40} className="text-[var(--turaath-gold)]" />,
    title: "Innovation & Growth",
    desc: "Encouraging curiosity and modern learning approaches that prepare students for the future.",
  },
  {
    icon: <Globe size={40} className="text-[var(--turaath-gold)]" />,
    title: "Global & Cultural Values",
    desc: "Instilling respect, discipline, and awareness of diverse cultures and global perspectives.",
  },
  {
    icon: <ShieldCheck size={40} className="text-[var(--turaath-gold)]" />,
    title: "Integrity & Discipline",
    desc: "Building responsible citizens grounded in moral strength and academic excellence.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-[var(--turaath-dark)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl font-bold mb-3"
          style={{ color: "var(--turaath-green)" }}
        >
          Why Choose Turaath?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We combine heritage and innovation to nurture excellence and build
          future leaders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                {value.icon}
              </motion.div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--turaath-green)" }}
              >
                {value.title}
              </h3>
              <p className="text-gray-600 text-base">{value.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
