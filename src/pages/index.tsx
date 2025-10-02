'use client';
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from '@/components/Projects';
import Members from '@/components/Members';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen bg-white bg-cover bg-center bg-fixed"
    >
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Members />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}