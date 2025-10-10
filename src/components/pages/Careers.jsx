import React from 'react';

const opportunities = [
  {
    title: "Table Rental for Groomers",
    description: (
      <>
        Are you a self-employed dog groomer looking for a professional, friendly space to work from?<br />
        <span className="font-semibold text-primary">The Dog and Collar</span> offers table rental in our modern salon, with flexible terms and a supportive environment.
      </>
    ),
    points: [
      "Bring your own clients",
      "Access to salon facilities and amenities",
      "Flexible rental options",
    ],
    emailText: "Interested? Email us at",
  },
  {
    title: "Work Experience",
    description: (
      <>
        If you’re passionate about dogs and want to learn more about the grooming industry, we offer opportunities for work experience in our salon.
      </>
    ),
    points: [
      "Gain hands-on experience in a real salon",
      "Learn from experienced groomers",
      "Supportive and friendly environment",
    ],
    emailText: "To enquire, please email",
  },
];

const Careers = () => (
  <section className="py-20 px-4 bg-white min-h-screen">
    <div className="max-w-4xl mx-auto bg-gray-50 rounded-3xl shadow-xl p-6 sm:p-10 md:p-14">
      <h1 className="text-4xl font-bold text-primary mb-4 text-center">Opportunities at The Dog and Collar</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">
        While we are not currently hiring employed staff, we welcome independent groomers and those seeking experience in the industry!
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {opportunities.map((op, idx) => (
          <div
            key={op.title}
            className="bg-white rounded-2xl shadow flex flex-col items-center p-6 h-full"
          >
            <h2 className="text-2xl font-semibold text-secondary mb-3 text-center">{op.title}</h2>
            <p className="text-gray-700 text-center mb-3">{op.description}</p>
            <ul className="list-disc list-outside pl-6 text-left text-gray-600 mb-4 w-full max-w-xs mx-auto">
              {op.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-gray-700 text-center mt-auto">
              {op.emailText}{' '}
              <a href="mailto:thedogandcollar@gmail.com" className="text-primary underline">
                thedogandcollar@gmail.com
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Careers;