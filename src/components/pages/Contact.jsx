import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or would like to book an appointment, please reach out to us!</p>
            <h2>Contact Details</h2>
            <p>Email: info@doggroomingbusiness.com</p>
            <p>Phone: (123) 456-7890</p>
            <h2>Opening Times</h2>
            <p>Monday - Friday: 9 AM - 5 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
            <h2>Location</h2>
            <p>123 Dog Lane, Pet City, PC 12345</p>
            {/* Include the Map component here if needed */}
        </div>
    );
};

export default Contact;