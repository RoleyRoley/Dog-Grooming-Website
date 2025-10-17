import React from 'react';
import Map from '../shared/Map';

const Contact = () => {
    return (
        <section className="py-10 px-2 sm:px-4 bg-white min-h-screen">
            <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-4 sm:p-8 md:p-14">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2 text-center">Contact Us</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 text-center">
                    We’d love to hear from you! Reach out to book, ask a question, or just say hello.
                </p>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                    {/* Contact Details */}
                    <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-secondary mb-1">Email</h2>
                            <a href="mailto:thedogandcollar@gmail.com" className="text-primary underline text-base sm:text-lg break-all">
                                thedogandcollar@gmail.com
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-secondary mb-1">Phone</h2>
                            <a href="tel:07541623364" className="text-primary underline text-base sm:text-lg">
                                (+44) 7541 623364
                            </a>
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-secondary mb-1">Address</h2>
                            <address className="not-italic text-base sm:text-lg text-gray-700 leading-relaxed">
                                95 High Street<br />
                                Haverhill, Suffolk<br />
                                CB9 8AN
                            </address>
                        </div>
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-secondary mb-1">Opening Times</h2>
                            <table className="text-gray-700 text-sm sm:text-base mx-auto md:mx-0">
                                <tbody>
                                    <tr>
                                        <td className="pr-4">Monday:</td>
                                        <td className="font-semibold">8:00 AM – 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Tuesday:</td>
                                        <td className="font-semibold">8:00 AM – 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Wednesday:</td>
                                        <td className="font-semibold">Closed</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Thursday:</td>
                                        <td className="font-semibold">8:00 AM – 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Friday:</td>
                                        <td className="font-semibold">8:00 AM – 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Saturday:</td>
                                        <td className="font-semibold">Closed</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">Sunday:</td>
                                        <td className="font-semibold">Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Interactive Map */}
                    <div className="flex-1 flex items-center justify-center w-full">
                        <div className="w-full h-96 sm:h-[28rem] rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-lg mx-auto">
                            <Map
                                address="95 High Street, Haverhill, CB9 8AN"
                                height={446}
                                zoom={16}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;