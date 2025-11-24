"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const staff = [
  { name: "SHITTU TAOFIQ ABDULLAHI", role: "Teacher - Secondary", subjects: "Early Learning, Arts", image: "/assets/founder1.jpg" },
  { name: "ABDULKAREEM JAMIU", role: "Teacher - Secondary", subjects: "History, Geography", image: "/assets/founder1.jpg" },
  { name: "ABDULLAHI MUHAMMAD RABIU", role: "Teacher - Secondary", subjects: "English, Mathematics", image: "/assets/founder1.jpg" },
  { name: "SIKIRU AZEEZAT IYABO", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "SANNI IDIAT SHADE", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "ABDUSSALAM HABIBULLAH", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
  { name: "USMAN ZAINAB ABUBAKAR", role: "Teacher - Secondary", subjects: "Biology, Chemistry", image: "/assets/founder1.jpg" },
];

export default function StaffSection() {
  return (
    <section className="py-20 px-8 md:px-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: "var(--turaath-green)" }}>
          Our Officials
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Dedicated educators shaping the minds and hearts of our students.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {staff.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[var(--turaath-light)] p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-lg font-semibold mb-1" style={{ color: "var(--turaath-green)" }}>
              {member.name}
            </h4>
            <span className="text-gray-500 mb-2">{member.role}</span>
            <p className="text-gray-600 text-sm">{member.subjects}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
