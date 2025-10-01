import React from 'react';

const BookingButton = ({ className = '' }) => (
    <a
        href="https://app.toplinedogs.co.uk/public/online-bookings?salon=MmYzMmY5OWYtNjg3Yi00ODM0LTczYjItMDhkYzI4NzgwMTc5"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
    >
        Book Now
    </a>
);

export default BookingButton;