"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/programs" },
  { name: "Admission", href: "/admission" },
  { name: "Gallery", href: "/gallery" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <Facebook size={24} />, href: "https://facebook.com" },
  { icon: <Instagram size={24} />, href: "https://instagram.com" },
  { icon: <Twitter size={24} />, href: "https://twitter.com" },
  { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-white text-[var(--turaath-dark)] pt-16 pb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo.png"
            alt="Turaath Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <p className="text-gray-700 text-sm max-w-xs">
            Turaath International School is committed to nurturing excellence, combining
            heritage, innovation, and global values for the leaders of tomorrow.
          </p>

          <div className="flex gap-4 mt-2">
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
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[var(--turaath-green)] font-semibold text-lg mb-4">
            Quick Links
          </h3>
          {quickLinks.map((link, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={link.href} className="text-gray-700 hover:text-[var(--turaath-green)] transition-colors">
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[var(--turaath-green)] font-semibold text-lg mb-4">
            Contact Info
          </h3>
          <p className="text-gray-700">123 Heritage Rd, City, Country</p>
          <p className="text-gray-700">+123 456 7890</p>
          <p className="text-gray-700">info@turaathschool.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm border-t border-gray-200 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Turaath International School. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
