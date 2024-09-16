import React, {useContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Recommendation from './components/Recommendation';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import UserState from './Contex/UserState';
import context from './Contex/UserContext';

function App() {

  const c = useContext(context);


  // Function to handle login button click
  const handleClick = () => {
    c.handleCancelClick();
  };

  return (
    <UserState>

     <>
      {/* Show the navbar regardless */}
      <Navbar />

      {/* Conditionally render components based on whether login is active */}
      {(c.cancel)==true ? (
        <>
          <SearchBar/>
          <Recommendation/>
          <UserProfile/>
        </>
      ) : (
        <Login/>
      )}
    </>

    </UserState>
    
  );
}

export default App;
