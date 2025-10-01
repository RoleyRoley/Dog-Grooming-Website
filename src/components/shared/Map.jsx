import React from 'react';

const Map = ({ address = "95 High Street, Haverhill, CB9 8AN", height = 320, zoom = 16 }) => {
    // Encode the address for use in a URL
    const encodedAddress = encodeURIComponent(address);
    // Google Maps embed URL (no API key needed for basic embed)
    const src = `https://www.google.com/maps?q=${encodedAddress}&z=${zoom}&output=embed`;

    return (
        <iframe
            title="Our Location"
            src={src}
            width="100%"
            height={height}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

export default Map;