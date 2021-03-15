// props selection, searchbar fn
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    }
  }
  handleInput = val => {
    this.setState({ searchInput: val })

  }
  render() {
    return (
      <section>
        <div className="searchBar">
          <p className="searchText">Search:</p>
          <input type="search" placeholder="Type Name Here">
          </input>
        </div>
        <div id='viewer'>

        </div>
      </section>
    );
  }
}
export default SearchBar