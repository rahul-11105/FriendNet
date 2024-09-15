import React from 'react'
import UserLogo from './UserLogo'
import "../public/UsersFnd.css";

export default function UsersFnd() {
  return (
    <>
    <section id="yourFriends">
    <h2>Your Friends</h2>
    <ul id="uFriends">
       <li><UserLogo/><span id='name'>Jane Doe (2 mutual friends)</span><button class="RemoveFriend">Remove Friend</button></li>
    </ul>
  </section>
  </>
  )
}
