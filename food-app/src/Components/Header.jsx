import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../AuthContext/userContext';
import ProfileDropDown from './profile/ProfileDropDown';
import logo from "../Assets/5319416.jpg";


const Header = () => {
    const { user } = useContext(UserContext);
    const { isloggedIn } = useContext(UserContext);
    const [open, setOpen] = useState(false);

    return (
        <div className='header-navbar-container'>
            <div><img width="120" src={logo} /></div>
            <ul className='header-navbar'>
                <NavLink to='/'><li className={`nav-links`}>Home</li></NavLink>
                {isloggedIn && <NavLink to='/addTask'><li className={`nav-links`}>Add Task</li></NavLink>}
                <NavLink to='/products'><li className={`nav-links`}>Products</li></NavLink>
                <NavLink to='/services'><li className={`nav-links`}>Services</li></NavLink>
                <NavLink to='/cart'><li className={`nav-links`}>cart</li></NavLink>
                {isloggedIn ?

                    <li onClick={() => { setOpen(!open) }} className={`nav-links profile`}><ProfileDropDown />
                        <img style={{ borderRadius: "50%", height: "40px" }} width="40" height="40" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <span>👋 {user}</span>

                    </li> : <NavLink to='/signup'><li className={`nav-links`}>Resister</li></NavLink>}
            </ul>
            <div class="ham-Burger-container">
                <div id="ham-Burger" class="ham-Burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Header