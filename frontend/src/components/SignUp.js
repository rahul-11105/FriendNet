import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "../public/SignUp.css";
import context from '../Contex/UserContext';

export default function SignUp() {
    const {formData, setFormData} = useContext(context);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
        alert("Form submitted");
    };

    return (
        <div className='master1'>
            <div className="main">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter name"
                            id="name"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            name="useremail"
                            placeholder="example@gmail.com"
                            id="email"
                            value={formData.useremail}
                            onChange={handleChange}
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="userpass"
                            placeholder="Password"
                            id="pass"
                            value={formData.userpass}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-user-lock"></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                    </div>
                    <button type="submit" className="btn"><Link to="/home">signup</Link></button>
                    <div className='sbtn'>
                        <button type='button' className='cancel'>
                            <Link to="/home">Cancel</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
