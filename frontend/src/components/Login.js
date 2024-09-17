import React, { useContext } from 'react'
import "../public/Login.css";
import context from '../Contex/UserContext';

import { Link } from 'react-router-dom';

export default function Login() {

    const {formData, setFormData} = useContext(context);

    const handleChange1 = (e) => {
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
    <>
    <div className='master'>
    <div className="main">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" name='username' placeholder="Username"  onChange={handleChange1}/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password"/>
                <i className='bx bxs-lock-alt'></i>
                </div> 
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit" className="btn"><Link to="/home">Login</Link></button>

                <div className="register-link">
                    <p>Don't have an account? <Link style={{color:"pink"}} to="/signup">Register</Link></p>
                </div>
                <div className='lbtn'>
                <button className='cancel'><Link to="/home">cancel</Link></button>
                </div>
        </form>
    </div>
    </div>
    
    </>
  )
}
