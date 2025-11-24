"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Code, Monitor } from "lucide-react";

export default function DeveloperSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: "var(--turaath-green)" }}>
          Developer & Tech Lead
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Meet the developer behind our website and tech systems. Responsible for building the online presence, integrating modern tools, and ensuring smooth digital experiences for Turaath International School.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white p-10 rounded-2xl shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            src="/assets/avatar.webp" // replace with your image
            alt="Developer"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-2" style={{ color: "var(--turaath-green)" }}>
            Mustapha Kasim
          </h3>
          <span className="text-gray-500 mb-4 block">Full Stack Developer & Tech Lead</span>
          <p className="text-gray-700 mb-4">
            I built the website and digital systems for Turaath International School using modern technologies including Next.js, React, TailwindCSS, and Framer Motion. I ensure a responsive, smooth, and interactive experience for parents, students, and staff.
          </p>

          <div className="flex gap-6 text-[var(--turaath-gold)]">
            <Cpu size={28} aria-label="Tech Enthusiast" />
            <Code size={28} aria-label="Full Stack Developer" />
            <Monitor size={28} aria-label="Website & Systems" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
