'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6 dark:bg-black"
    >
      <motion.h1
        className="text-4xl md\:text-3xl font-bold mb-6 max-sm:text-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to <span className="text-blue-600 dark:text-blue-300">CVAI-U</span>
      </motion.h1>
      <motion.p
        className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl max-md:text-base mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join our mission to explore the world of computer vision and artificial intelligence.
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Explore Projects
      </motion.a>
    </section>
  );
}
