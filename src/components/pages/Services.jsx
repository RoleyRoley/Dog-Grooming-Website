import React from 'react';
import { motion } from 'framer-motion';
import BookingButton from '../shared/BookingButton';

const Services = () => {
    const fullGroomPricing = {
        longHaired: [
            { size: 'X-Small', price: 'From £45' },
            { size: 'Small', price: 'From £50' },
            { size: 'Medium', price: 'From £55' },
            { size: 'Large', price: 'From £65' },
            { size: 'X-Large', price: 'From £75' }
        ],
        shortHaired: [
            { size: 'X-Small', price: 'From £35' },
            { size: 'Small', price: 'From £40' },
            { size: 'Medium', price: 'From £45' },
            { size: 'Large', price: 'From £55' },
            { size: 'X-Large', price: 'From £65' }
        ]
    };

    const fullGroomIncludes = [
        'Bath and dry',
        'Choice of styling',
        'Nail clipping',
        'Ear cleaning',
        'Paw wax',
        'Breath freshener',
        'Perfume'
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' }
        }),
    };

    return (
        <section className="py-16 px-4 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional grooming services tailored to your pet's needs and size
                    </p>
                </motion.div>

                {/* Full Groom Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={1}
                    className="mb-16"
                >
                    <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Full Groom</h2>
                        
                        {/* Pricing Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Long Haired */}
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-primary mb-4 text-center">Long Haired Breeds</h3>
                                <div className="space-y-3">
                                    {fullGroomPricing.longHaired.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                            <span className="font-medium text-gray-700">{item.size}</span>
                                            <span className="text-primary font-semibold">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Short Haired */}
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-primary mb-4 text-center">Short Haired Breeds</h3>
                                <div className="space-y-3">
                                    {fullGroomPricing.shortHaired.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                            <span className="font-medium text-gray-700">{item.size}</span>
                                            <span className="text-primary font-semibold">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Includes Section */}
                        <div className="bg-white rounded-2xl p-6 shadow mb-6">
                            <h3 className="text-xl font-semibold text-secondary mb-4 text-center">What's Included</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {fullGroomIncludes.map((item, index) => (
                                    <div key={index} className="flex items-center text-gray-700">
                                        <span className="text-primary mr-2">✓</span>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="text-center">
                            <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;