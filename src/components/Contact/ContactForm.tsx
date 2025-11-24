"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("/api/contact", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      className="bg-[#EAF4EE] py-20 px-8 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-[#007F5F]">
        Contact Us
      </h2>
      <p className="text-[#064E3B] text-center mb-10 max-w-2xl mx-auto">
        Have questions or want to reach out? Fill out the form below and we will get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-[#D4AF37]/10 text-[#064E3B] border border-[#00e0a8] placeholder-[#064E3B] focus:outline-none focus:ring-2 focus:ring-[#007F5F] transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-[#D4AF37]/10 text-[#064E3B] border border-[#00e0a8] placeholder-[#064E3B] focus:outline-none focus:ring-2 focus:ring-[#007F5F] transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full h-36 p-3 rounded-lg bg-[#D4AF37]/10 text-[#064E3B] border border-[#00e0a8] placeholder-[#064E3B] focus:outline-none focus:ring-2 focus:ring-[#007F5F] transition"
        />

        {status && (
          <p className="mt-2 text-center text-[#064E3B]">{status}</p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 rounded-xl bg-[#007F5F] hover:bg-[#D4AF37] text-[#EAF4EE] font-semibold transition-all"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
