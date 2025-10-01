import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;