import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css';

const testimonials = [
    {
        name: "Sarah Johnson",
        review: "Absolutely fantastic service! My dog always comes back looking and smelling amazing. The staff are so caring and professional.",
        rating: 5,
        image: "/src/assets/images/IMG_1477.jpeg"
    },
    {
        name: "Mark Wilson",
        review: "Best grooming salon in the area. They really understand different breed requirements and are so gentle with nervous dogs.",
        rating: 5,
        image: "/src/assets/images/IMG_2149.jpeg"
    },
    {
        name: "Emma Thompson",
        review: "I wouldn't trust anyone else with my furry friend. The attention to detail is outstanding.",
        rating: 5,
        image: "/src/assets/images/IMG_7295.jpeg"
    },
    {
        name: "Sarah Johnson 2",
        review: "Absolutely fantastic service! My dog always comes back looking and smelling amazing. The staff are so caring and professional.",
        rating: 5,
        image: "/src/assets/images/IMG_1477.jpeg"
    },
    {
        name: "Mark Wilson 3",
        review: "Best grooming salon in the area. They really understand different breed requirements and are so gentle with nervous dogs.",
        rating: 5,
        image: "/src/assets/images/IMG_2149.jpeg"
    },
    {
        name: "Emma Thompson 4",
        review: "I wouldn't trust anyone else with my furry friend. The attention to detail is outstanding.",
        rating: 5,
        image: "/src/assets/images/IMG_7295.jpeg"
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
                    <div key={idx} className="px-4 py-8">
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
                    </div>
                ))}
            </Slider>
        </div>
    </section>
);

export default Reviews;