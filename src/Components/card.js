import React, { Component } from "react";
// import SearchBar from "./SearchBar.js";
// import Header from "./Header.js";

class Card extends Component {
  render() {
    const { single } = this.props
    return (
      <div id="viewer">
        <div>
          <h2>{this.props.pokemon}</h2>
        </div>
      </div>

    );
  }
}
export default Card;
