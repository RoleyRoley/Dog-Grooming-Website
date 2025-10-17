import React, { useState } from 'react';
import { motion, time } from 'framer-motion';

// Example images (replace with your own)
import owner1 from '../../assets/images/Image.jpeg';
import timeline1 from '../../assets/images/Salon Photos/homesalonout.jpeg';
import timeline2 from '../../assets/images/Salon Photos/homesalonout2.jpeg';
import timeline3 from '../../assets/images/Salon Photos/homesalontable.jpeg';
import timeline4 from '../../assets/images/Salon Photos/posthomesalon.jpeg';
import timeline5 from '../../assets/images/Salon Photos/newsalontables.jpeg';
import timeline6 from '../../assets/images/Salon Photos/newsalon.jpg';
import timeline7 from '../../assets/images/Salon Photos/newsalonbaths.jpeg';

const team = [
  { name: "Anna Pavey", role: "Co-Owner & Head Groomer", photo: owner1 },
  { name: "Sian Leigh Hobbs", role: "Co-Owner & Head Groomer", photo: owner1 },
  // Add more staff here
];

const timeline = [
  {
    year: "2021",
    description: "Started in a home salon. Our journey began with a passion for dogs and a single grooming table in a cozy home setting.",
    images: [timeline1, timeline2, timeline3], 
  },
  {
    year: "2023",
    description: "Relocated to a new high street salon. With growing demand, we moved to a bright, modern space in the heart of town.",
    images: [timeline4], 
  },
  {
    year: "2025",
    description: "Merged with a local groomer and formed a limited company. The salon was redesigned to offer even more comfort and style for our furry clients.",
    images: [timeline5, timeline6, timeline7], 
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' }
  }),
};

// Enhanced Carousel Component for both Desktop and Mobile
const ImageCarousel = ({ images, year, isDesktop = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative ${isDesktop ? 'w-80 h-96' : 'w-full max-w-xs'} mx-auto`}>
      {/* Image Container */}
      <div className="overflow-hidden rounded-2xl shadow-xl border-2 border-primary/20">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${year} - Photo ${idx + 1}`}
              className={`${isDesktop ? 'w-80 h-96' : 'w-full h-96'} object-cover flex-shrink-0`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const About = () => (
  <section className="py-16 px-4 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto">
      {/* Meet the Team */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Meet the Team</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="flex flex-col items-center w-48"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 bg-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-secondary">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Ethos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Ethos</h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          At The Dog and Collar, we believe every dog deserves gentle, compassionate care and a little bit of pampering. 
          Our mission is to create a welcoming, stress-free environment where pets and owners feel at home, and every groom leaves tails wagging!
        </p>
      </motion.div>

      {/* Business Timeline */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Journey</h2>
        <div className="relative">
          {/* Central vertical line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 z-0"></div>
          
          <div className="flex flex-col gap-24">
            {timeline.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={event.year}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeIn}
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-start">
                    {/* Left Side */}
                    <div className={`w-1/2 flex ${isLeft ? 'justify-end pr-12' : 'justify-start pl-12'}`}>
                      {isLeft ? (
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-primary/10 max-w-md w-full mt-8">
                          <div className="text-primary font-bold text-2xl mb-4">{event.year}</div>
                          <div className="text-gray-700 text-base leading-relaxed">{event.description}</div>
                        </div>
                      ) : (
                        <ImageCarousel images={event.images} year={event.year} isDesktop={true} />
                      )}
                    </div>

                    {/* Center Timeline Dot */}
                    <div className="relative z-10 flex items-center justify-center mt-20">
                      <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg"></div>
                    </div>

                    {/* Right Side */}
                    <div className={`w-1/2 flex ${!isLeft ? 'justify-start pl-12' : 'justify-end pr-12'}`}>
                      {!isLeft ? (
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-primary/10 max-w-md w-full mt-8">
                          <div className="text-primary font-bold text-2xl mb-4">{event.year}</div>
                          <div className="text-gray-700 text-base leading-relaxed">{event.description}</div>
                        </div>
                      ) : (
                        <ImageCarousel images={event.images} year={event.year} isDesktop={true} />
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full">
                    {/* Year Badge */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-xl">
                        {event.year}
                      </div>
                    </div>
                    
                    {/* Text Card */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-primary/10 mb-6">
                      <div className="text-gray-700 text-base text-center leading-relaxed">{event.description}</div>
                    </div>

                    {/* Image Carousel */}
                    <ImageCarousel images={event.images} year={event.year} isDesktop={false} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;