import React from 'react'
import context from '../Contex/UserContext';
import { useContext,useState } from 'react';
import "../public/SignUp.css";
import App from '../App';

export default function SignUp() {

    const [formData, setFormData] = useState({
        username: '',
        useremail: '',
        userpass: ''
      });

    const {handleCancelClick, cancel} = useContext(context);

    const handlesubmit = (e)=>{
          //e.preventDefault();
          alert("form submmitted");
    }

    const handle = ()=>{
       console.log("ohhhhhhhhkkkkkkkk");
       handleCancelClick();
    }

  return (
      <>
    
    <div className='master1'>
                <div class="main">
                    <form onSubmit={handlesubmit}>
                        <h1>sign-up</h1>
                        <div class="input-box">
                            <input type="text" name="username" placeholder="enter name" id="name"/>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="input-box">
                            <input type="text" name="useremail" placeholder="example@gmail.com" id="email"/>
                            <i class='bx bxs-user'></i>
                        </div>
                        <div class="input-box">
                            <input type="text" name="userpass" placeholder="password" id="pass"/>
                            <i class="fa-solid fa-user-lock"></i>
                            </div>
                            <div class="remember-forgot">
                                <label><input type="checkbox"/>Remember me</label>
                            </div>
                            <button type="submit" class="btn">signup</button>
                    <div className='sbtn'>
                            <button type='button' className='cancel' onClick={handle} >cancel</button>
                    </div>
                    </form>
                    
                </div>
    </div>

    
    </>
  )
}
