import React from 'react';

const Services = () => {
    const servicesList = [
        'Full Grooming',
        'Bath and Brush',
        'Nail Trimming',
        'Ear Cleaning',
        'Teeth Brushing',
        'Flea and Tick Treatment',
        'Specialty Grooming (e.g., for specific breeds)',
    ];

    return (
        <div className="services">
            <h2>Our Services</h2>
            <ul>
                {servicesList.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
};

export default Services;