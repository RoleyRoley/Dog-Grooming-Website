import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingButton from '../shared/BookingButton';

const News = () => {
    // Easy to update - just add new items to this array
    const newsItems = [
        {
            id: 1,
            type: 'announcement',
            title: 'Emmi-pet Teeth Cleaning Service Now Available!',
            date: '2025-10-15',
            content: 'We\'re excited to announce that we\'re now fully certified in Emmi-pet ultrasonic teeth cleaning! This gentle, non-invasive treatment helps improve your dog\'s oral hygiene without stress or discomfort.',
            image: null,
            featured: true,
            tags: ['Services', 'Health']
        },
        {
            id: 2,
            type: 'update',
            title: 'Extended Opening Hours',
            date: '2025-10-10',
            content: 'Due to popular demand, we\'ve extended our Saturday opening hours! We\'re now open from 8:00 AM to 6:00 PM on Saturdays to better serve you and your furry friends.',
            image: null,
            featured: false,
            tags: ['Schedule', 'Hours']
        },
        {
            id: 3,
            type: 'seasonal',
            title: 'Christmas Grooming Bookings Open',
            date: '2025-10-01',
            content: 'Get your pup ready for the holidays! Christmas grooming appointments are now available. Book early to secure your preferred time slot during our busiest season.',
            image: null,
            featured: false,
            tags: ['Seasonal', 'Booking']
        },
        {
            id: 4,
            type: 'tip',
            title: 'Winter Coat Care Tips',
            date: '2025-09-28',
            content: 'As the weather gets colder, here are some tips to keep your dog\'s coat healthy: brush regularly to prevent matting, use a moisturizing shampoo, and consider a protective coat for outdoor walks.',
            image: null,
            featured: false,
            tags: ['Tips', 'Winter Care']
        },
        {
            id: 5,
            type: 'celebration',
            title: 'Thank You for 1000+ Happy Customers!',
            date: '2025-09-20',
            content: 'We\'re thrilled to celebrate grooming over 1000 happy dogs! Thank you to all our wonderful customers who trust us with their furry family members. Here\'s to many more tail-wagging transformations!',
            image: null,
            featured: false,
            tags: ['Milestone', 'Thank You']
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'announcement', 'update', 'seasonal', 'tip', 'celebration'];

    const getTypeIcon = (type) => {
        const icons = {
            announcement: '📢',
            update: '🔄',
            seasonal: '🎄',
            tip: '💡',
            celebration: '🎉'
        };
        return icons[type] || '📝';
    };

    const getTypeColor = (type) => {
        const colors = {
            announcement: 'bg-blue-100 text-blue-800',
            update: 'bg-green-100 text-green-800',
            seasonal: 'bg-red-100 text-red-800',
            tip: 'bg-yellow-100 text-yellow-800',
            celebration: 'bg-purple-100 text-purple-800'
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    };

    const filteredNews = selectedCategory === 'all' 
        ? newsItems 
        : newsItems.filter(item => item.type === selectedCategory);

    const featuredNews = newsItems.filter(item => item.featured);
    const regularNews = filteredNews.filter(item => !item.featured);

    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' }
        }),
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-UK', options);
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
                    <h1 className="text-4xl font-bold text-primary mb-4">News & Updates</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay up to date with the latest news, announcements, and helpful tips from The Dog and Collar
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={1}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Featured News */}
                {featuredNews.length > 0 && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                        custom={2}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-8">Featured</h2>
                        <div className="grid gap-8">
                            {featuredNews.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="bg-gradient-to-r from-primary/10 to-pink-100 rounded-3xl p-8 border border-primary/20"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="text-3xl">{getTypeIcon(item.type)}</span>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                                </span>
                                                <span className="text-gray-500 text-sm">{formatDate(item.date)}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-secondary mb-3">{item.title}</h3>
                                            <p className="text-gray-700 text-base leading-relaxed mb-4">{item.content}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-1 bg-white/70 text-gray-600 text-xs rounded-lg"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Regular News Grid */}
                {regularNews.length > 0 && (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                        custom={3}
                        className="mb-16"
                    >
                        <h2 className="text-2xl font-bold text-secondary mb-8">Recent Updates</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularNews.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={fadeIn}
                                    custom={index}
                                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mb-3">{formatDate(item.date)}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.content}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={4}
                    className="text-center bg-gray-50 rounded-3xl p-12"
                >
                    <h2 className="text-2xl font-bold text-secondary mb-4">Ready to Book Your Next Appointment?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Don't miss out on our latest services and seasonal offerings. Book your appointment today!
                    </p>
                    <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" />
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={5}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl font-bold text-secondary mb-4">Stay in the Loop</h3>
                    <p className="text-gray-600 mb-6">
                        Want to be the first to know about new services, seasonal offers, and grooming tips?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default News;