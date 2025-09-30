import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Layout from './components/layout/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    );
};

export default App;