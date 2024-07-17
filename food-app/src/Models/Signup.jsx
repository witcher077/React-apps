import React from 'react'
import { useState } from 'react'

function Signup() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        localStorage.setItem('email', userData['email']);
        localStorage.setItem('password', userData['password']);
    }

    return (
        <form className='signup-form' onSubmit={HandleSubmit} >
 <div className="name-label">
                <label htmlFor="first-name">Name</label>
                <input onChange={HandleChange} value={userData.firstName} name='firstName' type="text" id='first-name' placeholder='John' />
            </div>
          <div className="lastname-label">
                <label htmlFor="last-name">Last Name</label>
                <input onChange={HandleChange} value={userData.lastName} name='lastName' type="text" id='last-name' placeholder='Doe' />
            </div>
            <div className="email-label">
                <label htmlFor="email">Email</label>
                <input onChange={HandleChange} value={userData.email} name='email' type="email" id='email' placeholder='example@domain.com' />
            </div>
            <div className="password-label">
                <label htmlFor="password">Password</label>
                <input onChange={HandleChange} value={userData.password} name='password' type="password" id='password' placeholder='********' />
            </div>
            <div className="submit">
                <button className='submit-btn' type='submit'>Create Account</button>
            </div>
        </form>
    )
}

export default Signup