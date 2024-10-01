import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import {toast } from 'react-toastify';

function Signup() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
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

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const isValid = Object.keys(formValidation(userData)).length === 0 ? true : false;
        console.log(isValid);
        if (isValid) {
            try {
                await axios.post("http://localhost:8000/signup", userData)
                    .then(res => {
                        if (res.data === "exist") {
                            toast.info('😲 User Already exixt', {
                                position: "top-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored"
                                });
                            
                            navigate("/login")
                        }
                        else{
                            toast.success('😊 User Resistered Successfully', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                                });
                            navigate("/login")
                        }
                    })
            }
            catch (e) {
                alert(e)
            }

            navigate("/login")
            
        }
    }
    const formValidation = (userData) => {
        const errors = {};
        if (!userData.firstName) {
            errors.firstName = "Please Enter Your first name"
        }
        if (!userData.lastName) {
            errors.lastName = "Please Enter Your Last name"
        }
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
        return errors
    }

    return (
        <form className='signup-form' onSubmit={HandleSubmit} >
            <div className="name-label">
                <label htmlFor="first-name">Name</label>
                <input onChange={HandleChange} value={userData.firstName} name='firstName' type="text" id='first-name' placeholder='John' />
                {errMsg.firstName && <span className='errorMsg'>{errMsg.firstName}</span>}
            </div>
            <div className="lastname-label">
                <label htmlFor="last-name">Last Name</label>
                <input onChange={HandleChange} value={userData.lastName} name='lastName' type="text" id='last-name' placeholder='Doe' />
                {errMsg.lastName && <span className='errorMsg'>{errMsg.lastName}</span>}
            </div>
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
                <p>Already registered ?<Link to='/login' className='login-signup_link'> Login here</Link> </p>
            </div>
            <div className="submit">
                <button className='submit-btn' type='submit'>Create Account</button>
            </div>
        </form>
    )
}

export default Signup