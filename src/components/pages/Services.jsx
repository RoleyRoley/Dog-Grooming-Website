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

    const bathAndDryPricing = [
        { size: 'X-Small', price: 'From £30' },
        { size: 'Small', price: 'From £35' },
        { size: 'Medium', price: 'From £40' },
        { size: 'Large', price: 'From £45' },
        { size: 'X-Large', price: 'From £50' }
    ];

    const puppyPackages = [
        {
            name: 'Puppy Bubble Bath Bliss',
            price: '£65',
            description: '2 x Bath & blowdry experiences (before 6 months old)',
            features: ['Gentle cleansing, coat conditioning and cuddles', 'Ideal for early socialisation and sensory comfort']
        },
        {
            name: 'Puppy Confidence Spa',
            price: '£75',
            description: '1 x 30 mins meet & treat session + 2 x Bath & blowdry experiences (before 6 months old)',
            features: ['Soft introduction to grooming tools, dryers & table', 'All in a stress-free environment']
        },
        {
            name: 'The Ultimate Puppy Spa Journey',
            price: '£120',
            description: '1 x 30 mins meet & treat session + 2 x Bubble bath bliss sessions + 1 x first full groom at 6 months',
            features: ['Includes luxury haircut, hygiene tidy, ear cleanse', 'Designed for lifelong grooming ease']
        }
    ];

    const fullGroomIncludes = [
        'Bath and dry',
        'Choice of styling',
        'Nail clipping',
        'Ear cleaning',
        'Perfume'
    ];

    const bathAndDryIncludes = [
        'Thorough bath',
        'Professional blow dry',
        'Basic brush out',
        'Nail trim (if needed)',
        'Perfume'
    ];

    const spaPackageIncludes = [
        'Paw fizz',
        'Conditioner',
        'Treatment spray',
        'Facial'
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
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Full Groom</h2>
                        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                            Our full groom is the go-to service for most dogs - a full, head to tail pamper that keeps your pet comfortable, tidy and feeling their best.
                        </p>
                        
                        {/* Pricing Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Long Haired */}
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">Long Haired Breeds</h3>
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
                                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">Short Haired Breeds</h3>
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

                {/* Bath & Dry Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={2}
                    className="mb-16"
                >
                    <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Bath & Dry</h2>
                        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                            Our bath & dry service is perfect for a quick freshen-up to keep your dog looking and smelling great between full grooms.
                        </p>
                        
                        {/* Single Pricing Column */}
                        <div className="max-w-md mx-auto mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">Pricing</h3>
                                <div className="space-y-3">
                                    {bathAndDryPricing.map((item, index) => (
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
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                {bathAndDryIncludes.map((item, index) => (
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

                {/* Puppy Introduction Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={3}
                    className="mb-16"
                >
                    <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Puppy Introductions</h2>
                        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                            Our puppy intro sessions are designed to gently introduce your puppy to grooming, making their first experiences calm, positive and stress-free.
                        </p>
                        
                        {/* Puppy Session Pricing */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">1st Session</h3>
                                <div className="text-center">
                                    <span className="text-2xl font-bold text-primary">£25</span>
                                    <p className="text-gray-600 mt-2">X-Small to X-Large</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-semibold text-secondary mb-4 text-center">2nd Session</h3>
                                <div className="text-center">
                                    <span className="text-2xl font-bold text-primary">£35</span>
                                    <p className="text-gray-600 mt-2">X-Small to X-Large</p>
                                </div>
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="text-center">
                            <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" />
                        </div>
                    </div>
                </motion.div>

                {/* Puppy Packages Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={4}
                    className="mb-16"
                >
                    <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Puppy Intro Packages</h2>
                        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                            Our puppy intro packages offer discounted sessions when booked in bulk - the perfect way to save while helping your puppy build confidence and get comfortable with regular grooming.
                        </p>
                        
                        {/* Package Cards */}
                        <div className="grid lg:grid-cols-3 gap-8 mb-8">
                            {puppyPackages.map((pkg, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-secondary mb-2">{pkg.name}</h3>
                                        <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 text-center">{pkg.description}</p>
                                    <div className="space-y-2">
                                        {pkg.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start text-gray-700">
                                                <span className="text-primary mr-2 mt-0.5">✓</span>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Book Now Button */}
                        <div className="text-center">
                            <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" />
                        </div>
                    </div>
                </motion.div>

                {/* Extras Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={5}
                    className="mb-16"
                >
                    <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Extras</h2>
                        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                            Add a little extra care to your dog's visit with our range of Extras.
                        </p>
                        
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            {/* Emmi-pet Teeth Cleaning */}
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-bold text-secondary mb-4 text-center">Emmi-pet Teeth Cleaning</h3>
                                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                                    Our salon is fully certified in Emmi-pet ultrasonic teeth cleaning — a non-invasive treatment designed to improve your dog's oral hygiene without discomfort. Emmi-pet system uses ultrasonic technology to remove plaque and bacteria deep below the gum line, helping to prevent bad breath, gum disease, and tooth loss.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">1st Session</span>
                                        <span className="text-primary font-semibold">£50</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4">
                                        <span className="font-medium text-gray-700">Maintenance Sessions</span>
                                        <span className="text-primary font-semibold">£30</span>
                                    </div>
                                </div>
                                <div className="text-center mb-2">
                                    <p className="text-gray-600 text-sm">X-Small to X-Large (per dog)</p>
                                </div>
                            </div>

                            {/* Spa Package */}
                            <div className="bg-white rounded-2xl p-6 shadow">
                                <h3 className="text-xl font-bold text-secondary mb-4 text-center">Spa Packages</h3>
                                <p className="text-gray-700 text-sm mb-6 text-center">
                                    Give your pup the ultimate pampering with our all-in-one spa package.
                                </p>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-secondary mb-2 text-center">All-in-one Spa Package</h4>
                                    <div className="text-center mb-4">
                                        <span className="text-2xl font-bold text-primary">£10</span>
                                        <p className="text-gray-600 text-sm">X-Small to X-Large (per dog)</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h5 className="font-medium text-secondary mb-3 text-center">What's Included</h5>
                                    <div className="grid grid-cols-2 gap-2">
                                        {spaPackageIncludes.map((item, index) => (
                                            <div key={index} className="flex items-center text-gray-700">
                                                <span className="text-primary mr-2">✓</span>
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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