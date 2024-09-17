import {React,useContext} from 'react'
import UserLogo from './UserLogo'
import context from '../Contex/UserContext';

export default function Search(props) {

  const {userfriends,setuserfriends} = useContext(context);
    const handleclick = ()=>{
      setuserfriends([...userfriends,props.name]);
    };

  return (
    <>
      <li><UserLogo/><p>{props.name}</p><button onClick={handleclick} class="addFriend">Add Friend</button></li>
    </>
  )
}
