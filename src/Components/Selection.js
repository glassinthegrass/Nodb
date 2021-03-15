//state: slelectedPerson
// add Person fn
// clearPerson fn
// props selectedPerson
import React, { Component } from "react";
// import SearchBar from "./SearchBar.js";
// import Header from "./Header.js";

class Selection extends Component {
  constructor() {
    super();
    this.state = {
      selection: [],
      selectedPerson: {},
      nameInput: "",
      birthdayInput: "",
      emailInput: "",
      picture: "",
    };
  }
  render() {
    return (
      <section id="selection" className="selectionLayer1">
            <div className="selectionLayer2">
                <header id='cardHeader'>
                    <h6 id='cardHeaderText' >Name</h6>
                </header>
          <div className="selectionLayer3">
          </div>
        </div>
      </section>
    );
  }
}
export default Selection 