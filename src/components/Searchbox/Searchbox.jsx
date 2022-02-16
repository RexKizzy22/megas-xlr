import React from "react";

function Searchbox({onSearch}) {
  return (
    <div className="pa2">
        <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search for your fav"
            onChange={onSearch}
        />
    </div>
  )
}

export default Searchbox;