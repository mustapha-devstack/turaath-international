"use client";

import { motion } from "framer-motion";

export default function GoogleMap() {
  return (
    <motion.section
      className="py-20 px-8 md:px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: "var(--turaath-green)" }}
      >
        Find Us Here
      </h2>
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890!2d-122.41941508468215!3d37.77492977975898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c12345678%3A0x1234567890abcdef!2sSchool%20Address!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          className="w-full h-96 border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Turaath School Location"
        ></iframe>
      </div>
    </motion.section>
  );
}
