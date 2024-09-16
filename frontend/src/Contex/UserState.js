import context from "./UserContext";
import { useEffect, useState } from "react";

import React from 'react'

export default function UserState(props) {

  const [frnd,setfrnd] = useState([]);
  const [LoginFlag,setLoginFlag] = useState(true);
  const [isLoginActive, setIsLoginActive] = useState("no");
  const [cancel,setcancel] = useState(true);
    
  const handleSignUp = async ()=>{
    const res = await fetch("",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name:"rahul"  // Replace with the actual user name you're sending
      })
    })

  }
  const handleLoginClick = () => {
      setIsLoginActive("login");
  };

  const handleSignUpClick = () => {
    setIsLoginActive("signup");
};
  
  const handleCancelClick = ()=>{
    console.log("clicked");
      setcancel(true);
  }

  const getFriends = async ()=>{
    const res = await fetch("http://localhost:8000/users//friends",{
        method: 'get'
    }).then(async(res)=>{
        const data = await res.json();
        setfrnd(data);
    })
    .catch((err)=>{
        res.send(<h1>no user</h1>)
        
    });
  }
  return (
   <>
   <context.Provider value={{getFriends, frnd, LoginFlag, isLoginActive, handleLoginClick, handleSignUpClick, handleCancelClick, cancel }}>
    {props.children}
   </context.Provider>
   </>
  )
}
