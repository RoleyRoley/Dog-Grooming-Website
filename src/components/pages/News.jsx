import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingButton from '../shared/BookingButton';

const News = () => {
    // Easy to update - just add new items to this array
    const newsItems = [
        {
            id: 1,
            type: 'tip',
            title: 'Brush your Cockapoos!',
            date: '2025-10-15',
            content: 'Cockapoos have gorgeous coats that need regular brushing to stay healthy and tangle-free! Use a slicker brush daily to remove loose hair and prevent matting, followed by a metal comb to catch any missed tangles. Focus on areas like behind the ears, under the legs, and around the collar where mats form easily. Regular brushing keeps their coat soft and makes grooming visits much more comfortable!',
            image: null,
            featured: false,
            tags: ['Tips', 'Health']
        },
        {
            id: 2,
            type: 'seasonal',
            title: 'Christmas Grooming Bookings Open',
            date: '2025-08-12',
            content: 'Get your pup ready for the holidays! Christmas grooming appointments are now available. Book early to secure your preferred time slot during our busiest season.',
            image: null,
            featured: true,
            tags: ['Seasonal', 'Booking']
        },
        {
            id: 3,
            type: 'tip',
            title: 'Winter Coat Care Tips',
            date: '2025-10-17',
            content: 'As the weather gets colder, here are some tips to keep your dog\'s coat healthy: brush regularly to prevent matting and consider a protective coat for outdoor walks.',
            image: null,
            featured: false,
            tags: ['Tips', 'Winter Care']
        },
        {
            id: 4,
            type: 'celebration',
            title: '6 months since our merger!',
            date: '2025-10-07',
            content: 'Half a year since our merger and we\'re thrilled with the progress! The combined experience of our teams has allowed us to enhance our service quality, introduce new treatments like Emmi-pet teeth cleaning, and serve even more happy customers.',
            image: null,
            featured: false,
            tags: ['Milestone']
        },
        {
            id: 5,
            type: 'announcement',
            title: 'Exciting News: We\'ve Merged with Glamorous Grooms!',
            date: '2025-04-07',
            content: 'We\'re excited to announce our merger with Sian at Glamorous Grooms! This partnership will allows us to offer even more services and expertise to our valued clients.',
            image: null,
            featured: false,
            tags: ['Milestone']
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'announcement', 'update', 'seasonal', 'tip', 'celebration'];

    // Sort news items by date (newest first)
    const sortedNewsItems = [...newsItems].sort((a, b) => new Date(b.date) - new Date(a.date));

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

    // Filter the sorted news items
    const filteredNews = selectedCategory === 'all' 
        ? sortedNewsItems 
        : sortedNewsItems.filter(item => item.type === selectedCategory);

    const featuredNews = sortedNewsItems.filter(item => item.featured);
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
                    <h2 className="text-2xl font-bold text-secondary mb-2">Ready to Book Your Next Appointment?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Don't miss out on our latest services and seasonal offerings. Book your appointment today!
                    </p>
                    <BookingButton className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" />
                </motion.div>

                {/* WhatsApp Group Signup */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={5}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl font-bold text-secondary mb-4">Join Our WhatsApp Group</h3>
                    <p className="text-gray-600 mb-6">
                        Want to be the first to know about late cancellations, new services and seasonal offers? Join our WhatsApp community for instant updates!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://chat.whatsapp.com/Eh0gnCD2bkcEhJrn5f8RLM?mode=wwc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            Join WhatsApp Group
                        </a>
                        <p className="text-sm text-gray-500">
                            instant notifications about cancellations.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default News;