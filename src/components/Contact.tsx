'use client';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-6 py-20"
    >
      <div className="max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Paragraph + CTA */}
        <motion.div
          className="flex flex-col justify-between space-y-12 text-gray-800 dark:text-gray-100 text-xl max-sm:text-sm max-sm:text-center leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Row 1: Paragraph */}
          <div>
            <p>
              Whether you're a student interested in AI, a researcher looking for collaboration, 
              or a company seeking to integrate computer vision solutions—CVAI-U is open to meaningful partnerships.
              Reach out to us for project opportunities, support, or any inquiries. We’re here to help and innovate together.
            </p>
          </div>

          {/* Row 2: CTA */}
          <div className="text-center items-center">
            <h2 className="text-4xl max-sm:text-2xl font-bold mb-4 text-black dark:text-white">Get In Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">We'd love to hear from you or collaborate on exciting AI projects!</p>
            <a
              href="mailto:your_email@example.com"
              className="inline-block bg-blue-600 text-white dark:bg-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Right Column: Google Map (below on mobile) */}
        <motion.div
          className="w-full h-96 rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.737963165058!2d104.88738557474418!3d11.562161944153132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512552e261a9%3A0x3b9dc648af32f9e6!2sInstitute%20of%20Technology%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1694696451195!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
