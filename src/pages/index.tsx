import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import members from "@/data/members.json"
import project from "@/data/projects.json";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0.01);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function capitalize(word: string): string {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#members", label: "Members" },
    { href: "#contact", label: "Contact" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: Math.floor(Math.random() * members.length),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center scroll-smooth w-full" style={{ backgroundImage: 'url(images/background.jpg)' }}>
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Header */}
      <motion.header className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center transition-all duration-500 ${scrolled ? "backdrop-blur-md bg-black/60 shadow-md" : "bg-transparent"}`}>
        <motion.div className={`transition-all duration-500 ${scrolled ? "w-10 h-10" : "w-14 h-14"} relative`}>
          <Image
            src="/images/CVAI-U_logo.jpg"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
        <motion.a
          href="#"
          className={`ml-3 text-white font-bold transition-all duration-500
            ${scrolled ? "text-base sm:text-lg md:text-xl" : "text-lg sm:text-xl md:text-2xl"}`}
        >
          {scrolled ? "CVAI-U" : "Computer Vision & AI Club"}
        </motion.a>

        <motion.nav className="ml-auto flex items-center">
          {/* Hamburger menu for mobile */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
            {navLinks.map(({ href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                className="text-white hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2 }}
              >
                {label}
              </motion.a>
            ))}
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-16 right-6 bg-black/80 text-white rounded-lg p-4 flex flex-col space-y-3 sm:hidden shadow-lg z-50"
              >
                {navLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="hover:text-blue-400 text-sm"
                    onClick={() => setIsOpen(false)} // close on click
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>

      {/* Hero */}
      <section className="relative z-10 h-[90vh] flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to the Future of Intelligence
        </motion.h2>
        <motion.p className="text-base sm:text-lg max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          Join <strong>CVAI-U</strong>—the Computer Vision and Artificial Intelligence Unit—where innovation meets impact. Dive into the world of intelligent systems, machine learning, and real-time vision applications.
        </motion.p>
        <motion.a href="#projects" className="mt-6 sm:mt-8 px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm sm:text-lg font-semibold shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Discover Projects
        </motion.a>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-10 backdrop-blur-md bg-black/50 flex flex-col justify-center">
        <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Our Latest Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {project.map((item, index) => (
            <motion.div key={item.Project} className="bg-white/10 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <h4 className="text-xl font-semibold mb-2">{item.Project}</h4>
              <p className="text-sm mb-2">{item.Description}</p>
              <p className="text-xs italic text-gray-300 mb-2">Year: {item.Year}</p>
              {item.source && <a href={item.source} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline text-sm">View Source</a>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Members */}
      <section id="members" className="relative z-10 min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-black/60 text-white text-center flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Our Lead Members</h3>
        <div className="max-w-6xl mx-auto w-full">
          <Slider {...sliderSettings}>
            {members.map((member, i) => (
              <div key={i} className="px-4">
                <div className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md h-60 flex flex-col justify-center items-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image} 
                      width={80}
                      height={80}
                      crossOrigin="anonymous" 
                      referrerPolicy="no-referrer" 
                      alt={`${member["first name"][0].toUpperCase()}${member["last name"][0].toUpperCase()}`} 
                      className="w-full h-full rounded-full object-cover" 
                    />
                    {/* <img 
                      src={member.image} 
                      crossOrigin="anonymous" 
                      referrerPolicy="no-referrer" 
                      alt={`${member["first name"][0].toUpperCase()}${member["last name"][0].toUpperCase()}`} 
                      className="w-full h-full rounded-full object-cover" 
                    /> */}
                  </div>
                  <h4 className="text-base sm:text-xl font-semibold">{capitalize(member["title"]) + " " + member["last name"].toUpperCase() + " " + capitalize(member["first name"])}</h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 min-h-screen px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-blue-900/80 to-black/80 backdrop-blur-sm text-white text-center flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Be Part of the Movement</h3>
        <p className="max-w-lg mx-auto text-sm sm:text-base mb-6 sm:mb-8">We&apos;re a community of tech enthusiasts, problem solvers, and innovators. Learn, build, and lead with us.</p>
        <a href="mailto:cvai.reda.ams@gmail.com" className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all mb-6 text-sm sm:text-base">Join Now</a>
        <p className="text-xs sm:text-sm">Email: <a href="mailto:cvai.reda.ams@gmail.com" className="underline">cvai.reda.ams@gmail.com</a></p>
        <p className="text-xs sm:text-sm">GitHub: <a href="https://github.com/CVAI-U" className="underline">Computer Vision and AI Unit</a></p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 text-white text-xs sm:text-sm text-center py-4 sm:py-6">
        © 2025 CVAI-U, Applied Mathematics and Statistics, ITC
      </footer>
    </div>
  );
}
