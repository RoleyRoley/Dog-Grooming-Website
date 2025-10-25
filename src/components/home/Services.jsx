import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Full Groom',
            description: 'Complete head-to-tail grooming with bath, styling, nail clipping, and ear cleaning.',
            icon: '✂️',
            priceRange: 'From £35',
        },
        {
            title: 'Bath & Dry',
            description: 'Perfect freshen-up service with thorough bath, blow dry, and basic brush out.',
            icon: '🛁',
            priceRange: 'From £30',
        },
        {
            title: 'Puppy Introductions',
            description: 'Gentle introduction sessions to help your puppy get comfortable with grooming.',
            icon: '🐶',
            priceRange: 'From £25',
        },
        {
            title: 'Spa Extras',
            description: 'Premium add-ons including teeth cleaning, paw fizz, facials, and treatment sprays.',
            icon: '✨',
            priceRange: 'From £10',
        }
    ];

    return (
        <section className="py-24 px-4 lg:px-16 xl:px-32 bg-gradient-to-b from-white to-pink-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-secondary mb-4">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional grooming services tailored to your pet's needs and size
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="bg-pink-100 hover:bg-pink-200 rounded-2xl p-8 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                                {service.description}
                            </p>
                            <div className="text-primary font-semibold text-lg">
                                {service.priceRange}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 group"
                    >
                        <span>View Full Pricing & Details</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;