import context from "./UserContext";
import { useEffect, useState } from "react";

import React from 'react'

export default function UserState(props) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2dmszVGNsclBpbFJpcDlDNFozQm52bnMiLCJpYXQiOjE3MjY1NjUwNzAsImF1ZCI6ImZyaWVuZC1uZXRiYWNrZW5kLWlxMjM3d3h1Zy1yYWh1bC0xMTEwNXMtcHJvamVjdHMudmVyY2VsLmFwcCIsInVzZXJuYW1lIjoicmFodWwtMTExMDUiLCJzdWIiOiJzc28tcHJvdGVjdGlvbiJ9.T8mxKtbi-NSGqSX7VVmv4uVkFWBfqkIOppVqKyuRJ9k"
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
    const res = await fetch("https://friendnet-backend.onrender.com/users/friends",{
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    }).then(async(res)=>{
        const data = await res.json();
        console.log(data);
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
