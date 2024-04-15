import React from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

const Navigation = () => {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={2} className="nav-link text-light" to="/contact">
                    Contact
                </Link>,
                <Link key={2} className="nav-link text-light" to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
};

export default Navigation;