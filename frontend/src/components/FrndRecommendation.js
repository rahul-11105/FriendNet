import React from 'react'
import UserLogo from './UserLogo'
import "../public/UsersFnd.css";

export default function FrndRecommendation(props) {
    
  return (
    <><li><UserLogo/><span id='name'>{props.name}</span><button class="AddFriend">Add</button></li></>
  )
}
