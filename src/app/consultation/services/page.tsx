"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ConsultationServices() {
  return (
    <main className="w-full overflow-hidden bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="py-28 px-8 md:px-20 bg-[var(--turaath-dark)] text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Our{" "}
          <span className="text-[var(--turaath-gold)]">
            Consultation Services
          </span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Comprehensive educational advisory services designed to strengthen
          institutions, empower parents, and guide students toward excellence.
        </p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-[var(--turaath-light)] rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-semibold text-[var(--turaath-dark)] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <Link
                href={`/consultation/services/${service.slug}`}
                className="text-[var(--turaath-green)] font-medium flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-center">
        <h2 className="text-4xl font-bold text-[var(--turaath-green)] mb-12">
          Our Service Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Initial Consultation & Assessment",
            "Strategic Planning & Recommendation",
            "Implementation & Ongoing Support"
          ].map((step, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-[var(--turaath-gold)] mb-4">
                Step {i + 1}
              </h3>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-green)] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <p className="mb-8 max-w-2xl mx-auto">
          Partner with Turaath Consultation Services and take the next step
          toward structured academic growth and institutional excellence.
        </p>

        <Link
          href="/consultation/book"
          className="bg-[var(--turaath-gold)] text-[var(--turaath-dark)] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Book a Consultation
        </Link>
      </section>

    </main>
  );
}

/* ================= SERVICES DATA ================= */

const services = [
  {
    title: "Academic & Curriculum Advisory",
    slug: "academic-curriculum-advisory",
    description:
      "Strategic guidance in curriculum design, academic structure, and performance optimization to enhance student outcomes."
  },
  {
    title: "School Organizational Strategy",
    slug: "school-organizational-strategy",
    description:
      "Institutional restructuring, leadership alignment, and policy development for improved efficiency and sustainability."
  },
  {
    title: "Teacher Training & Development",
    slug: "teacher-training-development",
    description:
      "Professional development programs focused on modern pedagogy, classroom management, and instructional excellence."
  },
  {
    title: "Parent & Student Guidance",
    slug: "parent-student-guidance",
    description:
      "Personalized advisory sessions to support academic planning, career direction, and student well-being."
  },
  {
    title: "Performance Evaluation & Assessment",
    slug: "performance-evaluation-assessment",
    description:
      "Data-driven reviews and measurable frameworks to evaluate and improve institutional and student performance."
  },
  {
    title: "Educational Startup Advisory",
    slug: "educational-startup-advisory",
    description:
      "End-to-end consultation for establishing new schools or educational institutions with strong foundational systems."
  }
];
