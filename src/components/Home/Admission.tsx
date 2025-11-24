"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, PhoneCall, MapPin } from "lucide-react";

export default function AdmissionsSection() {
  return (
    <section
      className="py-20 px-8 md:px-20 bg-[var(--turaath-green)] text-white"
      id="admissions"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold mb-3" style={{ color: "var(--turaath-gold)" }}>
          Admissions Open
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Enroll your child today and be part of the Turaath International School family. 
          Join us in nurturing the next generation of leaders!
        </p>
      </motion.div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {[
          {
            icon: <PhoneCall size={28} className="text-[var(--turaath-gold)]" />,
            title: "Call Us",
            desc: "+234 800 123 4567",
          },
          {
            icon: <Mail size={28} className="text-[var(--turaath-gold)]" />,
            title: "Email Us",
            desc: "admissions@turaathschool.ng",
          },
          {
            icon: <MapPin size={28} className="text-[var(--turaath-gold)]" />,
            title: "Visit Us",
            desc: "123 Heritage Avenue, Abuja, Nigeria",
          },
        ].map((contact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white text-[var(--turaath-dark)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
          >
            <div className="mb-4">{contact.icon}</div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--turaath-green)" }}>
              {contact.title}
            </h3>
            <p className="text-gray-600 text-sm">{contact.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Enrollment Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/admission"
          className="inline-block px-8 py-4 rounded-xl font-semibold bg-[var(--turaath-gold)] text-[var(--turaath-dark)] hover:bg-amber-600 transition-colors shadow-lg"
        >
          Apply Now
        </Link>
      </motion.div>
    </section>
  );
}
