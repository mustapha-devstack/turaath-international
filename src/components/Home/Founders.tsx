"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "SHITTU TAOFIQ ABDULLAHI",
    role: "Co-Founder",
    bio: "A visionary educator with 20+ years of experience in curriculum development and academic leadership.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "ABDULKAREEM JAMIU",
    role: "Co-Founder",
    bio: "Passionate about nurturing young minds, integrating creativity and critical thinking in early education.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "ABDULLAHI MUHAMMAD RABIU",
    role: "Co-Founder",
    bio: "Dedicated to fostering lifelong learning and innovation, guiding students to excel academically and socially.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "SIKIRU AZEEZAT IYABO",
    role: "Co-Founder",
    bio: "Committed to instilling values, cultural awareness, and character development in every student.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "SANNI IDIAT SHADE",
    role: "Co-Founder",
    bio: "Focuses on integrating modern learning tools and technology to enhance education for future leaders.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "ABDUSSALAM HABIBULLAH",
    role: "Co-Founder",
    bio: "Dedicated to fostering lifelong learning and innovation, guiding students to excel academically and socially.",
    image: "/assets/founder1.jpg",
  },
  {
    name: "USMAN ZAINAB ABUBAKAR",
    role: "Co-Founder",
    bio: "Passionate about nurturing young minds, integrating creativity and critical thinking in early education.",
    image: "/assets/founder1.jpg",
  },
];

export default function FoundersSection() {
  return (
    <section
      className="py-20 px-8 md:px-20 bg-[var(--turaath-light)] text-[var(--turaath-dark)]"
      id="founders"
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
          Our Founders
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Five visionary educators came together with a shared dream to establish
          Turaath International School — combining heritage, excellence, and innovation.
        </p>
      </motion.div>

      {/* Founder Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src={founder.image}
                alt={founder.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-semibold mb-1" style={{ color: "var(--turaath-green)" }}>
              {founder.name}
            </h4>
            <span className="text-sm text-gray-500 mb-3">{founder.role}</span>
            <p className="text-gray-600 text-sm">{founder.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
