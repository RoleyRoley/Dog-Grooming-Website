import React from 'react';

const Services = () => {
    const servicesList = [
        { name: 'Basic Grooming', description: 'Includes bath, brush, and nail trimming.' },
        { name: 'Full Grooming', description: 'Includes everything in basic grooming plus haircut.' },
        { name: 'De-shedding Treatment', description: 'Helps reduce shedding and keeps your pet’s coat healthy.' },
        { name: 'Puppy Grooming', description: 'Gentle grooming for puppies under 6 months.' },
        { name: 'Specialty Services', description: 'Includes teeth cleaning, ear cleaning, and more.' },
    ];

    return (
        <div className="services">
            <h2>Our Services</h2>
            <ul>
                {servicesList.map((service, index) => (
                    <li key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;