import React, { useContext } from 'react'
import "../public/Login.css";
import context from '../Contex/UserContext';

export default function Login() {
    const {handleCancelClick, cancel} = useContext(context);
    const handle = ()=>{
        handleCancelClick();
    }
  return (
    <>
    <div className='master'>
    <div class="main">
        <form action="">
            <h1>Login</h1>
            <div class="input-box">
                <input type="text" placeholder="Username"/>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password"/>
                <i class='bx bxs-lock-alt'></i>
                </div> 
                <div class="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit" class="btn">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
                <div className='lbtn'>
                <button className='cancel' onClick={handle} >cancel</button>
                </div>
                
        </form>
    </div>
    </div>
    
    </>
  )
}
