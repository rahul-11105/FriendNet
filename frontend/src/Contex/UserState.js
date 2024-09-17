import context from "./UserContext";
import { useEffect, useState } from "react";

import React from 'react'

export default function UserState(props) {

  const [frnd,setfrnd] = useState([]);
  const [LoginFlag,setLoginFlag] = useState(true);
  const[userfriends,setuserfriends] = useState([]);

  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    userpass: ''
});
  
    
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
 

  const getFriends = async ()=>{
    const res = await fetch("http://localhost:8000/users/friends",{
        method: 'get'
    }).then(async(res)=>{
        const data = await res.json();
        setfrnd(data);
    })
    .catch((err)=>{
      setfrnd([]);
        
    });
  }
  useEffect(()=>{
    getFriends();
  },[]);
  return (
   <>
   <context.Provider value={{getFriends, setFormData, setuserfriends, userfriends ,formData, frnd, LoginFlag}}>
    {props.children}
   </context.Provider>
   </>
  )
}
