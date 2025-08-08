'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects';
import { X } from 'lucide-react';

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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

      {/* Project Grid */}
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
            <h3 className="text-xl md:text-lg max-md:text-base font-semibold mb-2">
              {project.project}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-md:text-xs line-clamp-3">
              {project.description}
            </p>
            <button
              onClick={() => setSelectedProject(project)}
              className="text-blue-500 underline text-sm max-md:text-xs block mt-2"
            >
              View More
            </button>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-md:text-xs mt-1">
              {project.Year}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* X Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl max-md:text-xl font-bold mb-4">{selectedProject.project}</h2>
              <p className="text-base max-md:text-sm text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>

              {selectedProject.members && (
                <div className="mb-4">
                  <h3 className="font-semibold">Members:</h3>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-base max-md:text-sm">
                    {selectedProject.members.map((m: string, i: number) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.experience && (
                <div className="mb-4">
                  <h3 className="font-semibold">Experience:</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base max-md:text-sm">{selectedProject.experience}</p>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold">Images:</h3>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {selectedProject.images.map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Project ${i}`}
                        className="rounded-lg object-cover"
                      />
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.contact && (
                <div className="mb-4">
                  <h3 className="font-semibold">Contact:</h3>
                  <a
                    href={`mailto:${selectedProject.contact}`}
                    className="text-blue-500 underline text-base max-md:text-sm"
                  >
                    {selectedProject.contact}
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
