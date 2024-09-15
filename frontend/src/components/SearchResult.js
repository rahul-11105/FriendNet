import React, { useState, useEffect } from 'react';
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
        const res = await fetch("http://localhost:8000/users/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Name: name  // Replace with the actual user name you're sending
          })
        });

        const userData = await res.json();
        setUsers(userData); 
      } catch (err) {
        setError(err.message);
      }
    };

    if (name) {
      fetchUsers();
    }
  }, [name]); // Include name in the dependency array to run effect when name changes

  return (
    <>
      <section id="results">
        <h2>Search Results</h2>
        <ul id="searchResults">
          {/* Render fetched users */}
          {users.length > 0 ? (
            users.map(user => <Search key={user._id} name={user.Name} />)
          ) : (
            <p>Oops! No users found</p>
          )}
        </ul>
      </section>
    </>
  );
}
