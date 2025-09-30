import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import News from './components/pages/News';
import Services from './components/pages/Services';
import Terms from './components/pages/Terms';
import Hero from './components/home/Hero';
import Layout from './components/layout/Layout';

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Hero} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/news" component={News} />
                    <Route path="/services" component={Services} />
                    <Route path="/terms" component={Terms} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default Routes;