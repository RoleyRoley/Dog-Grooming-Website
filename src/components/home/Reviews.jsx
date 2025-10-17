import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css';

import img1 from '../../assets/images/IMG_1477.jpeg';
import img2 from '../../assets/images/IMG_2149.jpeg';
import img3 from '../../assets/images/IMG_7295.jpeg';
import img4 from '../../assets/images/social media logo salon.png';


const testimonials = [
    {
        name: "Willow",
        review: "Willow always looks and smells amazing after every groom! I wouldn't take her anywhere else!",
        rating: 5,
        image: img4
    },
    {
        name: "Lena",
        review: "I certainly recommend trusting your canine family member to the Dog and Collar.",
        rating: 5,
        image: img4
    },
    {
        name: "Tessa",
        review: "Very caring and gentle with my dog, wanting to give her the best experience. Tessa came out of it looking lovely.",
        rating: 5,
        image: img4
    },
    {
        name: "Barney",
        review: "I wouldn’t trust anyone else to cut his hair or brush his teeth now...I couldn’t recommend more.",
        rating: 5,
        image: img4
    },
    {
        name: "Helga",
        review: "They really care about what they do and I trust them completely with Helga! She comes out looking amazing and smelling delicious!",
        rating: 5,
        image: img4
    },
    {
        name: "Ivy",
        review: "Ivy was pampered and loved being groomed.",
        rating: 5,
        image: img4
    },
    {
        name: "Reggie",
        review: "I cannot thank The Dog and Collar enough for such an amazing job with my boy Reggie. Would definitely recommend to all my friends and family.",
        rating: 5,
        image: img4
    },
    {
        name: "",
        review: "100% recommend, the ladies are so friendly and helpful, by far the best dog groomers. Thank you ladies so much!",
        rating: 5,
        image: img4
    },
    {
        name: "Suki",
        review: "We took Suki for her first groom since we rescued her. She was very nervous but when picked her up she was so happy and looked gorgeous.",
        rating: 5,
        image: img4
    },


];

const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    fade: false, // Make sure this is false or removed
    centerMode: true,
    centerPadding: '0px'
};

const Reviews = () => (
    <section className="pt-24 pb-44 px-4 lg:px-16 xl:px-32 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-secondary mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it – hear from our happy customers and their pets!
                </p>
            </div>
            <Slider {...settings}>
                {testimonials.map((testimonial, idx) => (
                    <motion.div
                        key={idx}
                        className="px-4 py-8"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center relative">
                            <span className="absolute left-6 top-6 text-4xl text-primary opacity-30">“</span>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-primary mb-4 shadow"
                            />
                            <p className="text-gray-700 italic text-lg mb-6 z-10">
                                {testimonial.review}
                            </p>
                            <div className="flex items-center mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                    </svg>
                                ))}
                            </div>
                            <h3 className="font-bold text-secondary text-lg">{testimonial.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    </section>
);

export default Reviews;