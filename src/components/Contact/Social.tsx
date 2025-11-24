"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: <Facebook size={28} />, href: "https://facebook.com" },
  { icon: <Instagram size={28} />, href: "https://instagram.com" },
  { icon: <Twitter size={28} />, href: "https://twitter.com" },
  { icon: <Linkedin size={28} />, href: "https://linkedin.com" },
];

export default function SocialMedia() {
  return (
    <motion.section
      className="py-16 bg-[var(--turaath-light)] text-[var(--turaath-dark)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-3xl font-bold mb-8 text-center"
        style={{ color: "var(--turaath-green)" }}
      >
        Connect with Us
      </h2>

      <div className="flex justify-center gap-8">
        {socialLinks.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="text-[var(--turaath-gold)] transition-transform"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
