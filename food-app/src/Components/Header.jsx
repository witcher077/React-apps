import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-navbar-container'>
            <ul className='header-navbar'>
                <NavLink to='/'><li className={`nav-links`}>Home</li></NavLink>
                <NavLink to='/products'><li className={`nav-links`}>Products</li></NavLink>
                <NavLink to='/services'><li className={`nav-links`}>Services</li></NavLink>
                <NavLink to='/about-us'><li className={`nav-links`}>About-us</li></NavLink>
                <NavLink to='/resister'><li className={`nav-links`}>Resister</li></NavLink>
            </ul>
        </div>
    )
}

export default Header