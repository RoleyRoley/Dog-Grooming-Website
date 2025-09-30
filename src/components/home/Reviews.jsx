import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: 'John Doe',
            text: 'Fantastic grooming service! My dog looks amazing and the staff was so friendly.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            text: 'Highly recommend! They took great care of my pup and he came back so happy.',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            text: 'Best grooming experience ever! The attention to detail is unmatched.',
        },
    ];

    return (
        <div className="reviews">
            <h2>Customer Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <strong>{review.name}</strong>
                        <p>{review.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;