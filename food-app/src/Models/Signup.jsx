import React from 'react'

function Signup() {
  return (
        <form className='signup-form'>
            <div className="name-label">
                <label htmlFor="first-name">Name</label>
                <input type="text" id='first-name' placeholder='John'/>
            </div>
            <div className="lastname-label">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id='last-name' placeholder='Doe'/>
            </div>
            <div className="email-label">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='example@domain.com'/>
            </div>
            <div className="password-label">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='********'/>
            </div>
            <div className="submit">
                <button className='submit-btn' type='submit'>Create Account</button>
            </div>
        </form>
  )
}

export default Signup