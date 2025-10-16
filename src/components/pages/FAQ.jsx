import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    // Easy to update - just add new FAQs to this array
    const faqs = [
        {
            id: 1,
            category: 'Booking',
            question: 'How do I book an appointment?',
            answer: 'You can book online through our website using our booking system, or call us directly at [phone number]. We recommend booking in advance, especially during busy periods like holidays.'
        },
        {
            id: 2,
            category: 'Preparation',
            question: 'What should I bring to my appointment?',
            answer: 'Just bring your dog! We provide all grooming supplies and equipment. If your pet has special needs, allergies, or behavioral concerns, please let us know when booking so we can prepare accordingly.'
        },
        {
            id: 3,
            category: 'Services',
            question: 'Do you groom all breeds and sizes?',
            answer: 'Yes, we welcome all breeds and sizes from tiny Chihuahuas to gentle giants like Great Danes. Our experienced team is trained to work with various coat types and temperaments, ensuring every dog receives appropriate care.'
        },
        {
            id: 4,
            category: 'Pricing',
            question: 'How much does grooming cost?',
            answer: 'Our pricing varies based on your dog\'s size, coat type, and the service you choose. Full grooms start from £35 for short-haired breeds and £45 for long-haired breeds. Visit our Services page for complete pricing details.'
        },
        {
            id: 5,
            category: 'Services',
            question: 'How long does a grooming appointment take?',
            answer: 'A full groom typically takes 2-4 hours depending on your dog\'s size, coat condition, and behavior. Bath & dry services usually take 1-2 hours. We\'ll give you an estimated pickup time when you drop off.'
        },
        {
            id: 6,
            category: 'Preparation',
            question: 'Should I feed my dog before the appointment?',
            answer: 'We recommend a light meal 2-3 hours before the appointment. Avoid feeding your dog immediately before grooming as some dogs can get anxious or nauseous. Always ensure they\'ve had water throughout the day.'
        },
        {
            id: 7,
            category: 'Health',
            question: 'What if my dog has fleas or skin conditions?',
            answer: 'Please inform us of any known health issues when booking. We can work with mild skin conditions and offer flea treatments, but severe cases may require veterinary attention first. We\'ll always discuss options with you.'
        },
        {
            id: 8,
            category: 'Behavior',
            question: 'My dog is nervous/aggressive. Can you still groom them?',
            answer: 'We have experience with anxious and reactive dogs. Please inform us about your dog\'s temperament when booking. We offer puppy introduction sessions to help nervous dogs get comfortable, and we use gentle handling techniques.'
        },
        {
            id: 9,
            category: 'Services',
            question: 'Do you offer nail trimming only?',
            answer: 'Yes! While we don\'t list it as a separate service, we can do nail trims as part of our bath & dry service or as an add-on. Please call us to discuss your specific needs.'
        },
        {
            id: 10,
            category: 'Booking',
            question: 'What is your cancellation policy?',
            answer: 'We require at least 24 hours notice for cancellations. Last-minute cancellations or no-shows may incur a fee. We understand emergencies happen, so please call us to discuss your situation.'
        },
        {
            id: 11,
            category: 'Health',
            question: 'Do you require vaccinations?',
            answer: 'Yes, we require up-to-date vaccinations for the safety of all pets in our salon. Please bring proof of current rabies, DHPP, and Bordetella vaccinations, or have your vet send records directly.'
        },
        {
            id: 12,
            category: 'Services',
            question: 'What\'s included in the Emmi-pet teeth cleaning?',
            answer: 'Our Emmi-pet ultrasonic teeth cleaning is a gentle, non-invasive treatment that removes plaque and bacteria below the gum line. It\'s stress-free with no anesthesia required. The first session is £50, with maintenance sessions at £30.'
        }
    ];

    const [openFAQ, setOpenFAQ] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', ...new Set(faqs.map(faq => faq.category))];

    const filteredFAQs = selectedCategory === 'all' 
        ? faqs 
        : faqs.filter(faq => faq.category === selectedCategory);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' }
        }),
    };

    return (
        <section className="py-16 px-4 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our grooming services, booking process, and policies
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
                            {category === 'all' ? 'All Questions' : category}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={2}
                    className="space-y-4"
                >
                    {filteredFAQs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeIn}
                            custom={index}
                            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg font-medium">
                                        {faq.category}
                                    </span>
                                    <h3 className="font-semibold text-secondary text-lg">{faq.question}</h3>
                                </div>
                                <motion.div
                                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>
                            </button>
                            
                            <AnimatePresence>
                                {openFAQ === faq.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-4">
                                            <div className="pt-2 border-t border-gray-100">
                                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeIn}
                    custom={3}
                    className="mt-16 text-center bg-gray-50 rounded-3xl p-8"
                >
                    <h2 className="text-2xl font-bold text-secondary mb-4">Still Have Questions?</h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Can't find what you're looking for? We're here to help! Get in touch with us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                        <a
                            href="tel:+44-xxx-xxx-xxxx"
                            className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-full hover:bg-opacity-90 transition-all duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;