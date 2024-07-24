import React from 'react'
import { useState } from 'react';
import { Link} from 'react-router-dom';


function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errMsg, setErrMsg] = useState({});

    const HandleChange = (e) => {
        setErrMsg({});
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        if(formValidation(userData)){
        localStorage.setItem('email', userData['email']);
        localStorage.setItem('password', userData['password']);}
    }
    const formValidation = (userData) => {
        const errors = {};
        if (!userData.email) {
            errors.email = "Please Enter Your Email"
        }
        if (!userData.password) {
            errors.password = "Please Enter Your Password"
        }
        if (userData.password) {
            if (!(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(userData.password))) {
                errors.password = "Please Enter a vailid Password"
            }
        }
        if (userData.email) {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email))) {
                errors.email = "Please Enter a vailid Password";
            }
        }
        setErrMsg(errors)
    }

    return (
        <form className='signup-form' onSubmit={HandleSubmit} >
            <div className="email-label">
                <label htmlFor="email">Email</label>
                <input onChange={HandleChange} value={userData.email} name='email' type="email" id='email' placeholder='example@domain.com' />
                {errMsg.email && <span className='errorMsg'>{errMsg.email}</span>}
            </div>
            <div className="password-label">
                <label htmlFor="password">Password</label>
                <input onChange={HandleChange} value={userData.password} name='password' type="password" id='password' placeholder='********' />
                {errMsg.password && <span className='errorMsg'>{errMsg.password}</span>}
            </div>
            <div className="submit">
                <p>Don't have an account?<Link to='/signup' className='login-signup_link'> Register here</Link> </p>
            </div>
            <div className="submit">
                <button className='submit-btn' type='submit'>Login</button>
            </div>
        </form>
    )
}

export default Login;