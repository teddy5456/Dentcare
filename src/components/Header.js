import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this CSS file contains your styles

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        // Optionally close the menu after selecting an item on mobile
        if (window.innerWidth <= 767) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header>
            <h1>Dentplan</h1>
            <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i> {/* Font Awesome icons */}
            </button>
            <nav className={isMenuOpen ? 'open' : 'closed'}>
                <ul>
                    <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className={activeSection === 'faq' ? 'active' : ''} onClick={() => handleNavClick('faq')}>
                        <Link to="/faq">FAQ</Link>
                    </li>
                    <li className={activeSection === 'blog' ? 'active' : ''} onClick={() => handleNavClick('blog')}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={activeSection === 'team' ? 'active' : ''} onClick={() => handleNavClick('team')}>
                        <Link to="/team">Team</Link>
                    </li>
                    <li className={`book ${activeSection === 'book' ? 'active' : ''}`} onClick={() => handleNavClick('book')}>
                        <Link to="/book">Book Appointment</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
