import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Recommendation from './components/Recommendation';
import Login from './components/Login';

function App() {
  // State to track whether login is active or not
  const [isLoginActive, setIsLoginActive] = useState(false);

  // Function to handle login button click
  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  return (
    <>
      {/* Show the navbar regardless */}
      <Navbar />

      {/* Conditionally render components based on whether login is active */}
      {!isLoginActive ? (
        <>
          <SearchBar />
          <Recommendation />
          {/* Add a button to trigger the login display */}
          <button onClick={handleLoginClick}>Login</button>
        </>
      ) : (
        <Login/>
      )}
    </>
  );
}

export default App;
