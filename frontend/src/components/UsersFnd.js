import React, { useContext, useEffect, useState } from 'react';
import Frnd from './Frnd';
import "../public/UsersFnd.css";
import context from '../Contex/UserContext';

export default function UsersFnd(){
  const context1 = useContext(context);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    context1.getFriends().finally(() => setLoading(false)); // Fetch friends and update loading state
  }, []); 

  let arr = context1.userfriends;


  if (loading) {
    return <p>Loading friends...</p>; // Display while fetching
  }

  return (
    <>
      <section id="yourFriends">
        <h2>Your Friends</h2> 
        <ul id="uFriends">
          {arr.length > 0 ? (
            arr.map(user => <Frnd key={user._id} name={user} />) 
          ) : (
            <p>Oops! No friends found</p>
          )}
        </ul>
      </section>
    </>
  );
}
