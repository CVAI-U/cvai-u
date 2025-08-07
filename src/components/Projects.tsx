'use client';
import { motion } from 'framer-motion';
import projects from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-gray-50 dark:bg-black text-center"
    >
      <motion.h2
        className="text-4xl md:text-3xl font-bold mb-10 max-sm:text-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            /> */}
            <h3 className="text-xl md:text-lg max-md:text-base font-semibold mb-2">{project.project}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-md:text-xs">{project.description}</p>
            {project.source ? (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm ax-md:text-xs block mb-1"
              >
                View More
              </a>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-sm max-md:text-xs block mb-1">No source</span>
            )}
            <p className="text-gray-600 dark:text-gray-300 text-sm max-md:text-xs">{project.Year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
