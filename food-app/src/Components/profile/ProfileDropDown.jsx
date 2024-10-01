import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../AuthContext/userContext';
import {toast } from 'react-toastify';


const ProfileDropDown = () => {
  const { setIsloggedIn } = useContext(UserContext);
  const nevigate = useNavigate()
  const logoutHandle = () => {
    toast.info('😞 You are loggedOut', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    localStorage.clear();
    setIsloggedIn(false);
    nevigate("/login")

  }
  return (
    <ul className='profile_dropDown'>
      <li><Link to="/profile">profile</Link></li>
      <li><Link to="/profile">setting</Link></li>
      <li onClick={logoutHandle}>
        <Link >logout</Link>
      </li>
    </ul>
  )
}

export default ProfileDropDown;