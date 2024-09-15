import context from "./UserContext";
import { useEffect, useState } from "react";

import React from 'react'

export default function UserState(props) {

  const [frnd,setfrnd] = useState([]);
  
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
   <context.Provider value={{getFriends, frnd}}>
    {props.children}
   </context.Provider>
   </>
  )
}
