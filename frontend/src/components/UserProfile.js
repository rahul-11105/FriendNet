import React from 'react'
import "../public/UserProfile.css";
import UserLogo from './UserLogo';
import logo from "../public/user_img.jpg"
import Friends from './Friends';

export default function UserProfile() {
  return (
    <div className='main2'>
      <div className='profile'>
        <img className='ulogo' src={logo}></img>
        <div className='uinfo'>
            <p>
                user_name
            </p>
            <p>
                user_emain
            </p>
        </div>
      </div>
      <Friends></Friends>
    </div>
  )
}
