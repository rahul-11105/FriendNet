import React from 'react'
import "../public/SearchBar.css";


export default function SearchBar() {
  return (
    <>
    <section id="search">
    <h2>Search for Friends</h2>
    <input type="text" id="searchInput" placeholder="Search by name..."/>
    <button id="searchButton">Search</button>
    </section>
    </>
  )
}
