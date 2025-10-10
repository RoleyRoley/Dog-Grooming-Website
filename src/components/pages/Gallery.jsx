import React, { useState } from 'react';

import img1 from '../../assets/images/IMG_1477.jpeg';
import img2 from '../../assets/images/IMG_2149.jpeg';
import img3 from '../../assets/images/IMG_7295.jpeg';

const galleryPhotos = [
    { src: img1, name: "Bella" },
    { src: img2, name: "Max" },
    { src: img3, name: "Luna" },
    { src: img1, name: "Bella" },
    { src: img2, name: "Max" },
    { src: img3, name: "Luna" },
    { src: img1, name: "Bella" },
    { src: img2, name: "Max" },
    { src: img3, name: "Luna" },
    { src: img1, name: "Bella" },
    { src: img2, name: "Max" },
    { src: img3, name: "Luna" },
    // ...add more
];

const Gallery = () => {
    const [lightbox, setLightbox] = useState({ open: false, photo: null });

    return (
        <section className="py-16 px-4 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-2 text-center">Our Gallery</h1>
                <p className="text-lg text-gray-600 mb-10 text-center">
                    Check out some of our happy clients!
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {galleryPhotos.map((photo, idx) => (
                        <button
                            key={idx}
                            className="relative group rounded-xl overflow-hidden shadow-lg focus:outline-none"
                            onClick={() => setLightbox({ open: true, photo })}
                        >
                            <img
                                src={photo.src}
                                alt={photo.name}
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold">{photo.name}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox overlay */}
            {lightbox.open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50"
                    onClick={() => setLightbox({ open: false, photo: null })}
                >
                    <button
                        className="absolute top-6 right-8 text-white text-4xl font-bold focus:outline-none"
                        onClick={e => { e.stopPropagation(); setLightbox({ open: false, photo: null }); }}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <img
                        src={lightbox.photo.src}
                        alt={lightbox.photo.name}
                        className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
                    />
                    <div className="mt-4 text-white text-2xl font-semibold drop-shadow">{lightbox.photo.name}</div>
                </div>
            )}
        </section>
    );
};

export default Gallery;