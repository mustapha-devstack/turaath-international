"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles } from "lucide-react";

const LOOKS = [
  {
    id: 1,
    title: "Emerald Grace",
    image: "/collections/lookbook/elegance.jpg",
    season: "Autumn 2025",
  },
  {
    id: 2,
    title: "Golden Hour",
    image: "/collections/lookbook/golden.jpg",
    season: "Spring 2025",
  },
  {
    id: 3,
    title: "Velvet Whisper",
    image: "/collections/lookbook/modesty.jpg",
    season: "Holiday 2025",
  },
  {
    id: 4,
    title: "Midnight Muse",
    image: "/collections/lookbook/elegance.jpg",
    season: "Resort 2025",
  },
  {
    id: 5,
    title: "Ivory Horizon",
    image: "/collections/lookbook/golden.jpg",
    season: "Summer 2025",
  },
  {
    id: 6,
    title: "Satin Bloom",
    image: "/collections/lookbook/modesty.jpg",
    season: "Spring 2025",
  },
  {
    id: 7,
    title: "Burgundy Mist",
    image: "/collections/lookbook/elegance.jpg",
    season: "Autumn 2025",
  },
  {
    id: 8,
    title: "Velvet Dreams",
    image: "/collections/lookbook/golden.jpg",
    season: "Holiday 2025",
  },
  {
    id: 9,
    title: "Urban Muse",
    image: "/collections/lookbook/modesty.jpg",
    season: "Winter 2025",
  },
  {
    id: 10,
    title: "Golden Bloom",
    image: "/collections/lookbook/elegance.jpg",
    season: "Summer 2025",
  },
  {
    id: 11,
    title: "Emerald Symphony",
    image: "/collections/lookbook/golden.jpg",
    season: "Spring 2025",
  },
  {
    id: 12,
    title: "Velvet Charm",
    image: "/collections/lookbook/modesty.jpg",
    season: "Autumn 2025",
  },
  {
    id: 13,
    title: "Nude Essence",
    image: "/collections/lookbook/elegance.jpg",
    season: "Resort 2025",
  },
  {
    id: 14,
    title: "Golden Shadow",
    image:"/collections/lookbook/golden.jpg",
    season: "Winter 2025",
  },
  {
    id: 15,
    title: "Emerald Royale",
    image: "/collections/lookbook/modesty.jpg",
    season: "Couture 2025",
  },
];

export default function LookbookPage() {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-[var(--brand-deep-green)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="mx-auto w-10 h-10 text-[var(--brand-gold)] mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight">
          Green Glamour Lookbook
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Discover the art of timeless elegance — a curated journey through 15
          signature looks of grace, color, and confidence.
        </p>
      </motion.div>

      {/* Mosaic Grid */}
      <div
        className="
        grid gap-4
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        auto-rows-[200px]
        md:auto-rows-[280px]
        "
      >
        {LOOKS.map((look, i) => (
          <motion.div
            key={look.id}
            className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group transition-all ${
              i % 5 === 0
                ? "col-span-2 row-span-2"
                : i % 7 === 0
                ? "col-span-3"
                : "col-span-1"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={look.image}
              alt={look.title}
              fill
              className="object-cover w-full h-full group-hover:brightness-90 transition"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-center">
              <Heart className="w-5 h-5 mb-2 text-[var(--brand-green)]" />
              <h3 className="text-lg font-semibold">{look.title}</h3>
              <p className="text-xs text-gray-200">{look.season}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Quote */}
      <motion.div
        className="mt-24 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <blockquote className="italic text-lg text-gray-700 leading-relaxed">
          “Elegance is when the inside is as beautiful as the outside.”
        </blockquote>
        <p className="text-[var(--brand-green)] mt-3 font-semibold">
          — Green Glamour Essence
        </p>
      </motion.div>
    </motion.div>
  );
}
