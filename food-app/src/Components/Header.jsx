import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const isAuthenticated = Boolean(sessionStorage.getItem('email'));
    const logoutHandle= ()=>{
        sessionStorage.clear()

    }
    return (
        <div className='header-navbar-container'>
            <ul className='header-navbar'>
                <NavLink to='/'><li className={`nav-links`}>Home</li></NavLink>
                <NavLink to='/products'><li className={`nav-links`}>Products</li></NavLink>
                <NavLink to='/services'><li className={`nav-links`}>Services</li></NavLink>
                <NavLink to='/about-us'><li className={`nav-links`}>About-us</li></NavLink>
                {isAuthenticated ? <NavLink to='/login'><li onClick={logoutHandle} className={`nav-links`}>Logout</li></NavLink>:  <NavLink to='/signup'><li className={`nav-links`}>Resister</li></NavLink>}
            </ul>
        </div>
    )
}

export default Header