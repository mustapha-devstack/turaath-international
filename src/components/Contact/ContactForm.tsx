"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.section
      className="bg-[var(--turaath-light)] py-20 px-8 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: "var(--turaath-green)" }}
      >
        Contact Us
      </h2>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Have questions or want to reach out? Fill out the form below and we will get back to you.
      </p>

      <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6 text-[var(--turaath-green)]">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--turaath-green)]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--turaath-green)]"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 rounded-lg px-4 py-3 h-36 focus:outline-none focus:ring-2 focus:ring-[var(--turaath-green)]"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[var(--turaath-green)] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-800 transition-all"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
