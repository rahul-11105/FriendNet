import React from 'react'
import UserLogo from './UserLogo'
import "../public/UsersFnd.css";

export default function Frnd(props) {
    
  return (
    <><li><UserLogo/><span id='name'>{props.name}</span><button class="RemoveFriend">Remove Friend</button></li></>
  )
}
