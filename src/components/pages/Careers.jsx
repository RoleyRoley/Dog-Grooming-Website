import React from 'react';

const Careers = () => (
  <section className="py-24 px-4 lg:px-16 xl:px-32 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-display font-bold text-secondary mb-8">Careers at Paw Perfect</h1>
      <p className="text-lg text-gray-700 mb-8">
        We’re always looking for passionate, animal-loving professionals to join our team!
      </p>
      <h2 className="text-xl font-bold text-primary mb-2">Current Openings</h2>
      <ul className="list-disc list-inside text-gray-700 mb-8">
        <li>Dog Groomer (Full Time)</li>
        <li>Receptionist (Part Time)</li>
        {/* Add more roles as needed */}
      </ul>
      <p className="text-gray-700">
        To apply, please send your CV and a short cover letter to <a href="mailto:info@doggrooming.com" className="text-primary underline">info@doggrooming.com</a>.
      </p>
    </div>
  </section>
);

export default Careers;