import React from 'react'

const SearchItem = () => {
  return (
   <form className="searchForm">
    <label htmlFor="search">Search</label>
    <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='search Items'
        />
   </form>
  )
}

export default SearchItem
