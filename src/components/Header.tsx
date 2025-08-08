'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center transition-all duration-500
        ${scrolled ? 'backdrop-blur-md shadow-md bg-white/80 dark:bg-black/80' : 'bg-transparent'}
      `}
    >
      {/* Logo */}
      <motion.img
        src="images/CVAI-U_logo.jpg"
        alt="Logo"
        className={`transition-all duration-500
          ${scrolled ? 'w-8 h-8 md:w-10 md:h-10 max-md:w-8 max-md:h-8' : 'w-12 h-12 md:w-14 md:h-14 max-md:w-10 max-md:h-10'}
        `}
      />

      {/* Title */}
      <motion.a
        href="#"
        className={`ml-4 font-bold transition-all duration-500
          text-black dark:text-white
          ${scrolled ? 'text-base md:text-lg sm:text-xs max-sm:text-sm' : 'text-base md:text-lg sm:text-xs max-sm:text-sm'}
        `}
      >
        {scrolled ? 'CVAI-U' : 'Computer Vision & AI Club'}
      </motion.a>

      {/* Desktop Navigation */}
      <motion.nav className="ml-auto hidden md:flex items-center space-x-6">
        <a
          href="#projects"
          className="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
        >
          Projects
        </a>
        <a
          href="#members"
          className="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
        >
          Members
        </a>
        <a
          href="#contact"
          className="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
        >
          Contact
        </a>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-2 text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* <motion.nav className="ml-auto hidden md:flex items-center space-x-6">
        {['projects', 'members', 'contact'].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}


      </motion.nav> */}

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black dark:text-white focus:outline-none">
          <Menu className="size-8 sm:size-6 md:size-7 max-sm:size-5" />
        </button>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-2 text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full right-4 mt-0 bg-white dark:bg-black rounded-md shadow-lg p-4 space-y-3 md:hidden w-30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <a href="#projects" className="block text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 text-base max-sm:text-sm">Projects</a>
            <a href="#members" className="block text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 text-base max-sm:text-sm">Members</a>
            <a href="#contact" className="block text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300 text-base max-sm:text-sm">Contact</a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
