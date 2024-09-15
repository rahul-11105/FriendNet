import React from 'react'
import Logo from "../public/user_img.jpg";
import "../public/UserLogo.css";

export default function UserLogo() {
  return (
    <div className='logo'>
        <img className='img' src={Logo} alt="User Icon" />
    </div>
  )
}
