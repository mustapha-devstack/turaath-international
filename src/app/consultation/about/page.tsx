"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutConsultation() {
  return (
    <main className="w-full overflow-hidden bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-8 md:px-20 bg-[var(--turaath-dark)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            About Our{" "}
            <span className="text-[var(--turaath-gold)]">
              Consultation Services
            </span>
          </motion.h1>

          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Turaath Consultation Services is dedicated to strengthening
            educational institutions, empowering parents, and guiding students
            toward academic and personal excellence.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[var(--turaath-green)] mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              We are a team of experienced educational professionals committed
              to building structured academic systems and long-term strategies
              that promote excellence.
            </p>
            <p className="text-gray-600">
              Our expertise spans curriculum development, institutional
              organization, performance improvement, and strategic educational
              planning.
            </p>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/team-meeting.jpg"
              alt="Consultation team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-light)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--turaath-green)] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide structured, data-driven, and culturally grounded
              educational consultation that enhances institutional quality and
              student success.
            </p>
          </div>

          <div className="p-10 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--turaath-green)] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a leading educational advisory partner across Nigeria
              and beyond, known for excellence, integrity, and measurable
              impact.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-bold text-[var(--turaath-green)]">
            Our Approach
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We combine strategy, assessment, and long-term mentorship to ensure
            sustainable academic transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Assessment & Diagnosis",
              desc: "Comprehensive review of academic systems and institutional structure."
            },
            {
              title: "Strategic Planning",
              desc: "Development of clear, measurable, and achievable educational goals."
            },
            {
              title: "Implementation Support",
              desc: "Hands-on guidance and monitoring for lasting improvement."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-[var(--turaath-light)] rounded-2xl shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-[var(--turaath-dark)] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-dark)] text-white text-center">
        <h2 className="text-4xl font-bold mb-12">
          Who We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Private & Public Schools",
            "Educational Organizations",
            "Parents & Students"
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-[var(--turaath-gold)]">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-green)] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Excellence Together
        </h2>
        <p className="mb-8">
          Discover how our consultation services can transform your academic
          institution or educational journey.
        </p>

        <Link
          href="/consultation/book"
          className="bg-[var(--turaath-gold)] text-[var(--turaath-dark)] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Schedule a Consultation
        </Link>
      </section>

    </main>
  );
}
