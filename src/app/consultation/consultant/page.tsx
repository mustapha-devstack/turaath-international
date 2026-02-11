"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConsultantsPage() {
  return (
    <main className="w-full bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="py-28 px-8 md:px-20 bg-[var(--turaath-dark)] text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Meet Our{" "}
          <span className="text-[var(--turaath-gold)]">
            Consultants
          </span>
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          A team of experienced educators and strategic advisors dedicated to
          academic excellence and institutional transformation.
        </p>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[var(--turaath-light)] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--turaath-dark)] mb-2">
                  {member.name}
                </h3>

                <p className="text-[var(--turaath-green)] font-medium mb-2">
                  Educational Consultant
                </p>

                <p className="text-gray-600 text-sm">
                  Specialization: {member.subjects}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-8 md:px-20 bg-[var(--turaath-green)] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Work With Our Expert Team
        </h2>

        <p className="mb-8 max-w-2xl mx-auto">
          Our consultants are ready to provide tailored solutions and strategic
          guidance for your academic and institutional needs.
        </p>

        <a
          href="/consultation/book"
          className="bg-[var(--turaath-gold)] text-[var(--turaath-dark)] px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Schedule a Consultation
        </a>
      </section>

    </main>
  );
}

/* ================= STAFF DATA ================= */

const staff = [
  { name: "SHITTU TAOFIQ ABDULLAHI", role: "Teacher - Secondary", subjects: "Early Learning, Arts", image: "/assets/founder1.jpg" },
  { name: "ABDULKAREEM JAMIU", role: "Teacher - Secondary", subjects: "History, Geography", image: "/assets/founder1.jpg" },
  { name: "ABDULLAHI MUHAMMAD RABIU", role: "Teacher - Secondary", subjects: "English, Mathematics", image: "/assets/founder1.jpg" },
  { name: "SIKIRU AZEEZAT IYABO", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "SANNI IDIAT SHADE", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "ABDUSSALAM HABIBULLAH", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "USMAN ZAINAB ABUBAKAR", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
];
