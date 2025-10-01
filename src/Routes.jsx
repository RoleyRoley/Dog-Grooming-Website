import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/home/Hero';
import ServicesHome from './components/home/Services';
import Reviews from './components/home/Reviews';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import News from './components/pages/News';
import Services from './components/pages/Services';
import FAQ from './components/pages/FAQ';
import Careers from './components/pages/Careers';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero />
          <ServicesHome />
          <Reviews />
        </>
      }
    />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/news" element={<News />} />
    <Route path="/services" element={<Services />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/careers" element={<Careers />} />
    {/* Optionally add a 404 page */}
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default AppRoutes;