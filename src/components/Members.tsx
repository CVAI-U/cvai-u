'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import members from '@/data/members';

// dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Members() {
  const [initialSlide, setInitialSlide] = useState(0);

  useEffect(() => {
    setInitialSlide(Math.floor(Math.random() * members.length));
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4, // default desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide,
    centerMode: true,       // ✅ centers the slides
    centerPadding: '0px',   // ✅ no extra padding around center
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, centerMode: true, centerPadding: '0px' } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true, centerPadding: '0px' } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: '0px' } },
    ],
  };

  function capitalize(word: string): string {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function capitalizeEachWord(text: string): string {
    return text
      .split(' ')
      .map(word => capitalize(word))
      .join(' ');
  }

  return (
    <section
      id="members"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-white text-center"
    >
      <motion.h2
        className="text-gray-800 text-4xl md:text-3xl font-bold mb-10 max-sm:text-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Members
      </motion.h2>

      <div className="w-full max-w-7xl">
        <Slider {...sliderSettings}>
          {members.map((member, index) => (
            <div key={index} className="flex justify-center px-3">
              <motion.div
                className="bg-gray-100 rounded-xl shadow p-6 text-center min-h-[250px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={`${member.first_name} ${member.last_name}`}
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-gray-900 text-xl max-sm:text-lg font-semibold">
                  {capitalizeEachWord(member.title) +
                    ' ' +
                    capitalizeEachWord(member.first_name) +
                    ' ' +
                    capitalizeEachWord(member.last_name)}
                </h3>
                <p className="max-sm:text-base text-gray-500">{member.role}</p>
                <a
                  className="text-sm max-sm:text-xs text-gray-500 hover:text-blue-500 block mt-1 break-all"
                  href={`mailto:${member.email}`}
                >
                  {member.email}
                </a>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
