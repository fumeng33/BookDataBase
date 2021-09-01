import React from 'react'

const SearchBar = ({placeholder}) => {

  return (
  <div className="searchBar">
    <input      
      className="searchInput"
      type="text"
      placeholder={placeholder}>
    </input>
    {/* <label for="books">Filter by type:</label>
    <select id="books">
      <option value="Fun Size">Fun Size</option>
      <option value="Succulents">Succulents</option>
      <option value="Cacti">Cacti</option>
      <option value="Trees">Trees</option>
    </select> */}
  </div>
  )
}

export default SearchBar
