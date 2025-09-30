import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="fixed w-full top-0 z-50">
        
            <Navbar />
        </header>
    );
};

export default Header;