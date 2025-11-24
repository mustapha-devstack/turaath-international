"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpenText } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="py-20 px-8 md:px-20 bg-white text-[var(--turaath-dark)]"
      id="about"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "var(--turaath-green)" }}
          >
            About <span style={{ color: "var(--turaath-gold)" }}>Turaath</span>
          </h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Turaath International School is committed to nurturing excellence
            through a balanced education system that combines moral values,
            academic rigor, and modern innovation. Our vision is to raise
            confident learners who lead with integrity and creativity.
          </p>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <GraduationCap
                size={28}
                className="text-[var(--turaath-gold)] mt-1"
              />
              <div>
                <h4 className="font-semibold text-[var(--turaath-green)]">
                  Academic Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  We provide a dynamic curriculum that challenges and inspires
                  students to achieve their full potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4"
            >
              <Users size={28} className="text-[var(--turaath-gold)] mt-1" />
              <div>
                <h4 className="font-semibold text-[var(--turaath-green)]">
                  Character & Culture
                </h4>
                <p className="text-gray-600 text-sm">
                  We build character and uphold values that connect students to
                  their heritage and community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-start gap-4"
            >
              <BookOpenText
                size={28}
                className="text-[var(--turaath-gold)] mt-1"
              />
              <div>
                <h4 className="font-semibold text-[var(--turaath-green)]">
                  Lifelong Learning
                </h4>
                <p className="text-gray-600 text-sm">
                  Our holistic approach prepares students not just for exams but
                  for life-long discovery and contribution.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[450px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/students2.jpg"
              alt="Students in class"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
