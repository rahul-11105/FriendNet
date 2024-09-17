import React, { useState, useEffect,useContext} from 'react';
import "../public/searchResult.css";
import Search from './Search';


export default function SearchResult(props) {
  const [users, setUsers] = useState([]); // State to store fetched users
  const [error, setError] = useState(null); // State to handle errors
  const { name } = props; // Destructure name from props


  useEffect(() => {
    // Fetch users when the name prop changes
    
    const fetchUsers = async () => { 
      try { 
        const res = await fetch("https://friend-netbackend-iq237wxug-rahul-11105s-projects.vercel.app/users/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Name: name  // Replace with the actual user name you're sending
          })
        });  
        
        const userData = await res.json();
        if (userData) {
          setUsers(userData); 
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (name) {
      fetchUsers();
    }
    setUsers([]);
  }, [name]); // Include name in the dependency array to run effect when name changes

  return (
    <>
      <section id="results">
        <h2>Search Results</h2>
        <ul id="searchResults">
          {/* Render fetched users */}
          {users.length>0? (
            users.map(user => <Search key={user._id} name={user.Name} />)
          ) : (
            <p>{`Oops! No users found with name '${name}'`}</p>
          )}
        </ul>
      </section>
    </>
  );
}
