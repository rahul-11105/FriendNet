import React from 'react'
import UserLogo from './UserLogo'


export default function Search(props) {
  return (
    <>
      <li><UserLogo/><p>{props.name}</p><button class="addFriend">Add Friend</button></li>
    </>
  )
}
