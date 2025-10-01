import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  // Smooth scroll to top
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-12 pb-6 px-0">
      {/* Full width background */}
      <div className="w-full">
        {/* Centered content with max width */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 px-4 max-w-6xl mx-auto">
          {/* Left: Logo only */}
          <div className="flex justify-center md:justify-start items-center md:w-1/3 pl-0 md:pl-8">
            <img
              src="/src/assets/images/social media logo salon.png"
              alt="Paw Perfect Logo"
              className="h-40 w-40 rounded-full object-cover"
            />
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col items-center gap-2 text-base md:w-1/3 mt-8 md:mt-0">
            <Link to="/services" className="hover:text-primary transition">Services</Link>
            <Link to="/gallery" className="hover:text-primary transition">Gallery</Link>
            <Link to="/news" className="hover:text-primary transition">News</Link>
            <Link to="/faq" className="hover:text-primary transition">FAQ</Link>
            <Link to="/careers" className="hover:text-primary transition">Careers</Link>
            <a
              href="/src/assets/The Dog and Collar T&C (2).pdf"
              download
              className="hover:text-primary transition"
            >
              Terms &amp; Conditions
            </a>
          </div>

          {/* Right: Where to Find Us, Social, Back to Top */}
          <div className="flex flex-col items-center md:w-1/3 mt-8 md:mt-0">
            <button
              onClick={() => navigate('/contact')}
              className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition mb-6"
            >
              Where to Find Us
            </button>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {/* ...facebook svg... */}
                <svg className="w-7 h-7 hover:text-primary transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-7 h-7 hover:text-primary transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-7 h-7 hover:text-primary transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
                </svg>
              </a>
            </div>
            <button
              onClick={handleBackToTop}
              className="text-sm underline hover:text-primary transition mt-4"
              aria-label="Back to top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Paw Perfect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;