import React from 'react'
import "../public/SignUpAndLogin.css";
import context from '../Contex/UserContext';
import { useContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function SignUpAndLogin() {


const c = useContext(context);
const handleClick = () => {
    c.handleLoginClick();
  };
  const handlesClick = () => {
    c.handleSignUpClick();
  };

  return (
    <>
    {(c.isLoginActive!=="login" && c.isLoginActive!=="signup" ) ? (
    <div className='Login'>
            <button className='loginbtn' onClick={handleClick} >
                Login
            </button>
            <button className='signupbtn' onClick={handlesClick}>
                SignUp
            </button>
    </div>
    ) :(
        (c.isLoginActive==="login") ? (<Login/>) : (<SignUp/>)
    )}
    </>
    
  )
}
