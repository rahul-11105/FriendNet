import React from 'react'
import { useContext } from 'react';
import UserLogo from './UserLogo'
import "../public/UsersFnd.css";
import context from '../Contex/UserContext';

export default function Frnd(props) {
  const {userfriends,setuserfriends} = useContext(context);
    const remove = ()=>{
      setuserfriends(userfriends.filter(friend => friend !== props.name));
    };
  return (
    <><li><UserLogo/><span id='name'>{props.name}</span><button onClick={remove} class="RemoveFriend">Remove Friend</button></li></>
  )
}
