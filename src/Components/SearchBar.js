// props selection, searchbar fn
import React from 'react';

const SearchBar = () => {
    return (
      <section>
        <div className="searchBar">
          <p className="searchText">Search:</p>
          <input type="search" placeholder="Type Name Here"></input>
            </div>
            <div id='viewer'>

            </div>
      </section>
    );
}

export default SearchBar