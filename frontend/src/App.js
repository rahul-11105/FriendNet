import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Recommendation from './components/Recommendation';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import UserState from './Contex/UserState';
import context from './Contex/UserContext';
import SignUp from './components/SignUp';
import UsersFnd from './components/UsersFnd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed unused Link import


function App() {
  const c = useContext(context);


  return (
    <UserState>
      <Router>
        <Navbar />
        <SearchBar />
        <Recommendation />
        <UserProfile/>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/home' element={<></>} /> {/* Empty route component */}
        </Routes>
        <UsersFnd />
      </Router>
    </UserState>
  );
}

export default App;
