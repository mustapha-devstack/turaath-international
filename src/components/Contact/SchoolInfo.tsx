"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function SchoolInfo() {
  return (
    <motion.section
      className="py-20 px-8 md:px-20 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-3xl font-bold mb-10 text-center"
        style={{ color: "var(--turaath-green)" }}
      >
        School Information
      </h2>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <MapPin size={36} className="text-[var(--turaath-gold)]" />
          <h3 className="font-semibold text-lg">Address</h3>
          <p className="text-gray-600 text-sm text-center">
            123 Heritage Rd, City, Country
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Phone size={36} className="text-[var(--turaath-gold)]" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600 text-sm">+123 456 7890</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Mail size={36} className="text-[var(--turaath-gold)]" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 text-sm">info@turaathschool.com</p>
        </div>
      </div>
    </motion.section>
  );
}
