"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/programs" },
    { name: "Admission", href: "/admission" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all backdrop-blur-md ${
        scrolled ? "bg-white/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between h-16">
        {/* Logo Only */}
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.png" // square PNG logo
              alt="Turaath School Logo"
              width={50}
              height={50}
              className="rounded-md shadow-md"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navigation.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                href={item.href}
                className="text-gray-700 font-medium transition-colors"
              >
                {item.name}
              </Link>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[var(--turaath-gold)] transition-all group-hover:w-full"></span>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg w-full absolute top-16 left-0"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {navigation.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 font-medium py-2 hover:text-[var(--turaath-green)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
