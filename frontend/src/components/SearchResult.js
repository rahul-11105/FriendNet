import React from 'react'
import "../public/searchResult.css";

export default function SearchResult() {
  return (
    <>
    <section id="results">
    <h2>Search Results</h2>
    <ul id="searchResults">
      <li>John Doe <button class="addFriend">Add Friend</button></li>
    </ul>
  </section></>
  )
}
