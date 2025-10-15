import React from 'react';
import { motion } from 'framer-motion';

// Example images (replace with your own)
import owner1 from '../../assets/images/Image.jpeg';
import timeline1 from '../../assets/images/IMG_1477.jpeg';
import timeline2 from '../../assets/images/IMG_2149.jpeg';
import timeline3 from '../../assets/images/IMG_7295.jpeg';

const team = [
  { name: "Alex Smith", role: "Co-Owner & Head Groomer", photo: owner1 },
  { name: "Jamie Lee", role: "Co-Owner & Salon Manager", photo: owner1 },
  // Add more staff here
];

const timeline = [
  {
    year: "2021",
    description: "Started in a home salon. Our journey began with a passion for dogs and a single grooming table in a cozy home setting.",
    image: timeline1,
  },
  {
    year: "2023",
    description: "Relocated to a new high street salon. With growing demand, we moved to a bright, modern space in the heart of town.",
    image: timeline2,
  },
  {
    year: "2025",
    description: "Merged with a local groomer and formed a limited company. The salon was redesigned to offer even more comfort and style for our furry clients.",
    image: timeline3,
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

const About = () => (
  <section className="py-16 px-4 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto">
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
        <div className="flex flex-col gap-16">
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
                className={`flex flex-col md:flex-row items-center md:items-stretch gap-8`}
              >
                {/* Text Side */}
                <div className={`md:w-1/2 ${isLeft ? 'md:order-1' : 'md:order-2'} order-1 flex flex-col justify-center`}>
                  <div className="text-primary font-bold text-lg mb-2">{event.year}</div>
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-primary/10 text-gray-700 text-base text-center md:text-left">
                    {event.description}
                  </div>
                </div>
                {/* Image Side */}
                <div className={`md:w-1/2 ${isLeft ? 'md:order-2' : 'md:order-1'} order-2 flex justify-center items-center`}>
                  <img
                    src={event.image}
                    alt={event.year}
                    className="w-full max-w-xs md:max-w-md h-48 md:h-56 object-cover rounded-2xl shadow-lg border-2 border-primary/20"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;