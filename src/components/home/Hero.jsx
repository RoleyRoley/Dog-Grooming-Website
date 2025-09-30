import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
    return (
        <div className="hero">
            <h1>Welcome to Our Dog Grooming Service!</h1>
            <p>Your pet deserves the best care and grooming.</p>
            <button className="cta-button">Book Now</button>
        </div>
    );
};

export default Hero;