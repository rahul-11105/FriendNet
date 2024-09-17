import React, { useContext } from 'react'
import UserLogo from './UserLogo'
import "../public/UsersFnd.css";
import context from '../Contex/UserContext';

export default function FrndRecommendation(props) {
  const {userfriends,setuserfriends} = useContext(context);
    const handleclick = ()=>{
      setuserfriends([...userfriends,props.name]);
    };
  return (
    <><li><UserLogo/><span id='name'>{props.name}</span><button onClick={handleclick} class="AddFriend">Add</button></li></>
  )
}
 