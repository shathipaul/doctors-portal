import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content">
            <div>
                <h4 className='text-2xl font-bold'>Doctors Portal</h4>
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Depression Therapy</a>
                <a className="link link-hover">Family Practice</a>
                <a className="link link-hover">Individual Coaching</a>
                <a className="link link-hover">Couples Therapy</a>
                <a className="link link-hover">Group Therapy</a>
                <a className="link link-hover">Anxiety Treatment</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <p><Link to='/'>Home</Link></p>
                <p><Link to='/'>Appointment</Link></p>
                <p><Link to='/'>Review</Link></p>
                <p><Link to='/'>Contact</Link></p>
                <p><Link to='/'>Login</Link></p>
            </div>
        </footer>
    );
};

export default Footer;