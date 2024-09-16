import React, {useContext, useState } from 'react'
import "../public/UserProfile.css";
import context from '../Contex/UserContext';
import logo from "../public/user_img.jpg"
import Friends from './Friends';
import SignUpAndLogin from './SignUpAndLogin';

export default function UserProfile() {
  
  const c = useContext(context);
  const F = c.LoginFlag;

  return (
    <div className='main2'>
      <div className='profile'>
        <img className='ulogo' src={logo}></img>
        {!F ? (<div className='uinfo'>
            <p>
                user_name
            </p>
            <p>
                user_emain
            </p>
        </div>):(<SignUpAndLogin></SignUpAndLogin>)}
      </div>
      <Friends></Friends>
    </div>
  )
}
