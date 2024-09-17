import React, {useContext, useState } from 'react'
import "../public/UserProfile.css";
import context from '../Contex/UserContext';
import logo from "../public/user_img.jpg"
import Friends from './Friends';


export default function UserProfile() {
   
  const {LoginFlag,formData}=useContext(context);

  return (
    <>
          <div className='main2'>
          <div className='profile'>
            <img className='ulogo' src={logo}></img>
           <div className='uinfo'>
                <p>
                    Name:{(formData.username?(formData.username):(<span>U are not loged in..!</span>))}
                </p>
                <p>
                    Email:{(formData.useremail?(formData.useremail):(<span>" _________________ "</span>))}
                </p>
            </div>
          </div>
          </div>
    {/* <div className='main2'>
      <div className='profile'>
        <img className='ulogo' src={logo}></img>
        {!LoginFlag ? (<div className='uinfo'>
            <p>
                {formData.username}
            </p>
            <p>
                {formData.useremail}
            </p>
        </div>):(<SignUpAndLogin></SignUpAndLogin>)}
      </div>
      <Friends></Friends>
    </div> */}
    </>
    
  )
}
