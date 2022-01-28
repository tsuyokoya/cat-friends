import React from 'react';



const SearchBox = ({ searchChange }) => {
  return (
    <div className = 'pa2'>
      <input
        //every time onChange event is triggered, call the searchChange function
        //searchChange is a prop - runs onSearchChange function in App
        onChange = {searchChange}
        className ='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search cats'>
      </input>
    </div>
  )
}














export default SearchBox;