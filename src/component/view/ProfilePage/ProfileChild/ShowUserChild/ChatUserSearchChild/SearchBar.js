import React from 'react'

const SearchBar = () => {
  return (
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search User" aria-label="Search User" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
  )
}

export default SearchBar