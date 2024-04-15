import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

const Navigation = () => {
    return (
        <Navbar
            links={[
                <Link key={1} className="nav-link text-light nav" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav-link text-light nav" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav-link text-light nav" to="/contact">
                    Contact
                </Link>,
                <Link key={4} className="nav-link text-light nav" to="/resume">
                    Resume
                </Link>,
            ]}
        />
    );
};

export default Navigation;