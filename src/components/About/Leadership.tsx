"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leaders = [
  { name: "Dr. Aisha Suleiman", role: "Principal", image: "/assets/founder1.jpg" },
  { name: "Mr. Ibrahim Adamu", role: "Head Teacher - Primary", image: "/assets/founder1.jpg" },
  { name: "Mrs. Fatima Musa", role: "Head Teacher - Secondary", image: "/assets/founder1.jpg" },
];

export default function LeadershipSection() {
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
          School Leadership
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Meet the passionate leaders guiding our school community and shaping the future of our students.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <Image
                src={leader.image}
                alt={leader.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-xl font-semibold mb-1" style={{ color: "var(--turaath-green)" }}>
              {leader.name}
            </h4>
            <span className="text-gray-500">{leader.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
