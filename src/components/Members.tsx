'use client';
import { motion } from 'framer-motion';
import members from '@/data/members';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Members() {

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // desktop default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: Math.floor(Math.random() * members.length),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  }
    function capitalize(word: string): string {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function capitalizeEachWord(text: string): string {
    return text
      .split(" ")
      .map(word => capitalize(word))
      .join(" ");
  };

  return (
    <section
      id="members"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-white dark:bg-black text-center"
    >
      <motion.h2
        className="text-4xl md:text-3xl font-bold mb-10 max-sm:text-2xl"
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
            <div key={index} className="px-3">
              <motion.div
                className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.image}
                  alt={member.first_name + ' ' + member.last_name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl max-sm:text-lg font-semibold">{capitalizeEachWord(member.title) + ' ' + capitalizeEachWord(member.first_name) + ' ' + capitalizeEachWord(member.last_name)}</h3>
                <p className=" max-sm:text-base text-gray-500 dark:text-gray-300">{member.role}</p>
                <a className=' max-sm:text-base text-gray-500 dark:text-gray-300 hover:text-blue-500 block mt-1 break-all' href={`mailto:${member.email}`}>{member.email}</a>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}


