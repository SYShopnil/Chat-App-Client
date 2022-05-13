import React from 'react'

const SearchBar = (
  {
    searchBy,
    setSearchBy,
    searchHandler
  }
) => {
  return (
    <div class="input-group mb-3">
        <input 
        type="text" 
        className="form-control" 
        placeholder="Search User" 
        aria-label="Search User" 
        aria-describedby="button-addon2"
        value = {searchBy}
        onChange = {(e) => setSearchBy (e.target.value) }
        />
        <button 
        className="btn btn-outline-secondary" 
        type="button" 
        id="button-addon2"
        onClick = {(e) => searchHandler(e)}
        >Search</button>
    </div>
  )
}

export default SearchBar