import React from 'react'
import '../style/register.css'

function Register() {
    return (
        <div className="register-box">
            <h1>Register</h1>
            <form className="register-form">
                <label>Username</label>
                <input/>
            </form>
            <form className="register-form">
                <label>Fullname</label>
                <input/>
            </form>
            <button className="btn-submit">Register</button>
        </div>
    )
}

export default Register
