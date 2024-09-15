import React from 'react'
import "../public/searchResult.css";
import UserLogo from './UserLogo';

export default function Recommendation() {
  return (
    <>
    <section id="recommendations">
    <h2>Friend Recommendations</h2>
    <ul id="recommendedFriends">
       <li><UserLogo/><p>Jane Doe (2 mutual friends)</p> <button class="addFriend">Add Friend</button></li>
    </ul>
  </section>
    </>
  )
}
