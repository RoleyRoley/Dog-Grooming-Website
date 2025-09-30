import React from 'react';

const BookingButton = () => {
    const handleBooking = () => {
        window.open('https://third-party-booking-system.com', '_blank');
    };

    return (
        <button onClick={handleBooking} style={styles.button}>
            Book Now
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: '#ff69b4', // Pink color
        color: '#fff', // White text
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
};

export default BookingButton;