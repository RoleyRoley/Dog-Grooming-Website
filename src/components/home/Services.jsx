import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: 'Full Grooming',
            description: 'Complete grooming package including bath, haircut, and styling for all breeds.',
            icon: '✂️',
        },
        {
            title: 'Bath & Brush',
            description: 'Refresh your pet with our thorough cleaning and brushing service.',
            icon: '🛁',
        },
        {
            title: 'Nail Trimming',
            description: 'Keep your pet comfortable with professional nail care.',
            icon: '💅',
        },
        {
            title: 'Spa Treatment',
            description: 'Luxury pampering session for the most relaxing experience.',
            icon: '✨',
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
                        Discover our range of professional grooming services, tailored to make your pet look and feel amazing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-pink-100 hover:bg-pink-200 rounded-2xl p-8 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="text-5xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 group"
                    >
                        <span>View All Services</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;