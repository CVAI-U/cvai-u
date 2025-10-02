'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center transition-all duration-500
        ${scrolled ? 'backdrop-blur-md shadow-md bg-white/80' : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <motion.img
        src="images/CVAI-U_logo.png"
        alt="Logo"
        className={`transition-all duration-500 rounded-xl cursor-pointer
          ${scrolled ? 'w-8 h-8 md:w-10 md:h-10 max-md:w-8 max-md:h-8' : 'w-12 h-12 md:w-14 md:h-14 max-md:w-10 max-md:h-10'}
        `}
        onClick={scrollToTop}
      />

      {/* Title */}
      <motion.button
        onClick={scrollToTop}
        className={`ml-4 font-bold transition-all duration-500 text-black cursor-pointer
          ${scrolled ? 'text-base md:text-lg sm:text-xs max-sm:text-sm' : 'text-base md:text-lg sm:text-xs max-sm:text-sm'}
        `}
        whileHover={{ scale: 1.05, color: '#3B82F6' }} // subtle hover animation
      >
        {scrolled ? 'CVAI-U' : 'Computer Vision & AI Club'}
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav className="ml-auto hidden md:flex items-center space-x-6">
        <button onClick={() => scrollToSection('projects')} className="text-black hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Projects</button>
        <button onClick={() => scrollToSection('members')} className="text-black hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Members</button>
        <button onClick={() => scrollToSection('contact')} className="text-black hover:text-blue-400 transition-colors duration-300 text-sm md:text-base">Contact</button>
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
          <Menu className="size-8 sm:size-6 md:size-7 max-sm:size-5" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full right-4 mt-0 bg-white rounded-md shadow-lg p-4 space-y-3 md:hidden w-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <button onClick={() => scrollToSection('projects')} className="block text-black hover:text-blue-500 text-base max-sm:text-sm w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('members')} className="block text-black hover:text-blue-500 text-base max-sm:text-sm w-full text-left">Members</button>
            <button onClick={() => scrollToSection('contact')} className="block text-black hover:text-blue-500 text-base max-sm:text-sm w-full text-left">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
