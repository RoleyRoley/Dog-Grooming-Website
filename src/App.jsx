import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Reviews from './components/home/Reviews';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <Services />
        <Reviews />
      </Layout>
    </Router>
  );
}

export default App;