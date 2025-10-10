import React from 'react';

const Careers = () => (
  <section className="py-20 px-4 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-8 md:p-14">
      <h1 className="text-4xl font-bold text-primary mb-4 text-center">Opportunities at The Dog and Collar</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        While we are not currently hiring employed staff, we welcome independent groomers and those seeking experience in the industry!
      </p>
      <div className="space-y-10">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-secondary mb-2 text-center">Table Rental for Groomers</h2>
          <p className="text-gray-700 text-center mb-2">
            Are you a self-employed dog groomer looking for a professional, friendly space to work from?
            <br />
            <span className="font-semibold text-primary">The Dog and Collar</span> offers table rental in our modern salon, with flexible terms and a supportive environment.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-center mb-2">
            <li>Bring your own clients</li>
            <li>Access to salon facilities and amenities</li>
            <li>Flexible rental options</li>
          </ul>
          <p className="text-gray-700 text-center">
            Interested? Email us at <a href="mailto:thedogandcollar@gmail.com" className="text-primary underline">thedogandcollar@gmail.com</a>
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-secondary mb-2 text-center">Work Experience</h2>
          <p className="text-gray-700 text-center mb-2">
            If you’re passionate about dogs and want to learn more about the grooming industry, we offer opportunities for work experience in our salon.
          </p>
          <ul className="list-disc list-inside text-gray-600 text-center mb-2">
            <li>Gain hands-on experience in a real salon</li>
            <li>Learn from experienced groomers</li>
            <li>Supportive and friendly environment</li>
          </ul>
          <p className="text-gray-700 text-center">
            To enquire, please email <a href="mailto:thedogandcollar@gmail.com" className="text-primary underline">thedogandcollar@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Careers;