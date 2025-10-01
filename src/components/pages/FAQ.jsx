import React from 'react';

const FAQ = () => (
  <section className="py-24 px-4 lg:px-16 xl:px-32 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-display font-bold text-secondary mb-8">Frequently Asked Questions</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">How do I book an appointment?</h2>
          <p className="text-gray-700">You can book online through our website or call us directly. Visit our Contact page for details.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">What should I bring to my appointment?</h2>
          <p className="text-gray-700">Just bring your dog! If your pet has special needs or allergies, let us know in advance.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Do you groom all breeds?</h2>
          <p className="text-gray-700">Yes, we welcome all breeds and sizes. Our team is experienced with a wide variety of coats and temperaments.</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  </section>
);

export default FAQ;