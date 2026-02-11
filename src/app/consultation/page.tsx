"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ConsultationHome() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen flex items-center px-8 md:px-20">
        <Image
          src="/assets/students2.jpg"
          alt="Consultation session"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-[var(--turaath-dark)]/70 to-[var(--turaath-green)]/50 z-10"></div>

        <div className="relative z-20 max-w-2xl text-white">
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Expert Educational{" "}
            <span className="text-[var(--turaath-gold)]">
              Consultation Services
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl mb-6 text-gray-100">
            Partnering with schools, parents, and organizations to build
            structured systems, academic excellence, and sustainable growth.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Link
              href="/consultation/book"
              className="bg-[var(--turaath-green)] px-6 py-3 rounded-xl text-white flex items-center gap-2 shadow-lg hover:bg-emerald-800 transition"
            >
              Book a Consultation <ArrowRight size={18} />
            </Link>

            <Link
              href="/consultation/services"
              className="border px-6 py-3 rounded-xl
              border-[var(--turaath-gold)] text-[var(--turaath-gold)]
              hover:bg-[var(--turaath-gold)] hover:text-[var(--turaath-dark)] transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-8 md:px-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-[var(--turaath-green)]">
            Our Consultation Services
          </h2>
          <p className="mt-4 text-gray-600">
            Tailored solutions designed to improve academic outcomes and
            institutional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Academic & Curriculum Advisory",
            "School Organizational Strategy",
            "Parent & Student Guidance",
          ].map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow-lg bg-[var(--turaath-light)] hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-[var(--turaath-dark)] mb-4">
                {service}
              </h3>
              <p className="text-gray-600 mb-4">
                Professional guidance structured to enhance learning systems and
                long-term growth.
              </p>
              <Link
                href="/consultation/services"
                className="text-[var(--turaath-green)] font-medium flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[var(--turaath-green)] mb-6">
              Why Choose Turaath Consultation?
            </h2>
            <ul className="space-y-4">
              {[
                "Experienced educational professionals",
                "Data-driven academic strategies",
                "Customized solutions for each institution",
                "Long-term mentorship & support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-[var(--turaath-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/team.jpg"
              alt="Consultation meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-20 px-8 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-[var(--turaath-green)] mb-10">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { value: "50+", label: "Institutions Guided" },
            { value: "200+", label: "Students Mentored" },
            { value: "95%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl shadow-md bg-[var(--turaath-light)]">
              <h3 className="text-4xl font-bold text-[var(--turaath-gold)]">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-dark)] text-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Book a Session",
            "Initial Assessment & Strategy",
            "Implementation & Follow-Up",
          ].map((step, i) => (
            <div key={i} className="p-6">
              <h3 className="text-2xl font-semibold text-[var(--turaath-gold)] mb-4">
                Step {i + 1}
              </h3>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-20 px-8 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-[var(--turaath-green)] mb-8">
          What Clients Say
        </h2>

        <div className="max-w-3xl mx-auto bg-[var(--turaath-light)] p-10 rounded-2xl shadow-lg">
          <p className="text-gray-700 italic mb-4">
            The consultation services transformed our school’s academic
            structure and significantly improved student performance.
          </p>
          <h4 className="font-semibold text-[var(--turaath-dark)]">
            — School Administrator
          </h4>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-green)] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Institution?
        </h2>
        <p className="mb-8">
          Let’s work together to build excellence and sustainable growth.
        </p>

        <Link
          href="/consultation"
          className="bg-[var(--turaath-gold)] text-[var(--turaath-dark)] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Schedule a Consultation
        </Link>
      </section>

    </main>
  );
}
