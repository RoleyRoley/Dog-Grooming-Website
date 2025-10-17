import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import dogGrooming from '../../assets/images/IMG_7295.jpeg';
import './Hero.css';
import BookingButton from '../shared/BookingButton';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-screen lg:pt-3"
        >
            {/* Background Image with responsive positioning */}
            <div className="absolute inset-0">
                <img
                    src={dogGrooming}
                    alt="Dog Grooming"
                    className="w-full h-full object-cover xl:object-[center_30%]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content remains the same */}
            <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        Professional Dog Grooming Services
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                        Expert grooming with a gentle touch
                    </p>
                    <div className="space-x-4">
                        <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"/>
                        <Link
                            to="/services"
                            className="bg-white hover:bg-opacity-90 text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;