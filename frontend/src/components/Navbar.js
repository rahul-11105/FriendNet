import React from 'react'
import '../public/Navbar.css';
import logo from "../public/Two-Friends-Logo.webp"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div > 
        <img className='logoimg' src={logo}></img>
      </div>
      <div className="logo">
        FriendNet
      </div>
      <div className='Login2'>
            <button className='loginbtn' >
                <Link to="/login">Login</Link>
            </button>
            <button className='signupbtn'>
                <Link to="/signup">SignUp</Link>
            </button>
    </div>
    </nav>
    </>
  )
}
