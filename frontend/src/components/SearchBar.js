import React, { useState } from 'react';
import "../public/SearchBar.css";
import SearchResult from './SearchResult';

export default function SearchBar() {
  const [name, setName] = useState(''); // Initialize state with an empty string

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const inp = event.target.elements.searchInput.value; // Get the input value from the form
  
    setName(inp); // Update the state with the new name
    event.target.reset(); // Clear the input field after submission
  };
  

  return (
    <>
      <section id="search">
        <h2>Search for Friends</h2>
        <form method='post' onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search by name..." 
            name="searchInput" // Ensure the input has a name attribute
          />
          <button id="searchButton" type='submit'>Search</button>
        </form>
      </section>
      {/* Pass the searched name as a prop to SearchResult */}
      <SearchResult name={name} />
    </>
  );
}
