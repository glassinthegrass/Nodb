import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header.js";
import SearchBar from "./Components/SearchBar.js";
import Selection from "./Components/Selection.js";
import Viewer from "./Components/Viewer.js";

import "./App.css";

//https://pokeapi.co/api/v2/pokemon/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:{},
      pokemon: [],
      name: "",
      id: "",
      height: ""
    };
  }
  componentDidMount() {
    this.getPokemon()
    console.log(this.state.pokemon)
  }
  getPokemon = () => {
    axios.get(`/api/pokemon`)
      .then((res) => {
          this.setState({ pokemon: res.data })
        })
      .catch(err => console.log(err))
}
  getSelected = () => {
    axios
      .get(`/api/selected`)
      .then((res) => {
        this.setState({ selected: res.data });
      })
      .catch((err) => console.log(err));
  };
  editName = (id, newName) => {
    let body = { name: newName };
    axios
      .put(`/api/selected/${id}`, body)
      .then((res) => {
        this.setState({ selected: res.data.selected });
        this.setState({ pokemon: res.data.pokemon });
      })
      .catch((err) => console.log(err));
  };
  closePerson = () => {
    axios.delete(`/api/selected`)
      .then((res) => {
        this.setState({ pokemon: res.data })
          })
        .catch((err) => console.log(err));  
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />

        <Selection
          id="selection"
          close={this.closePerson}
          edit={this.editName}
          pokemon={this.state.pokemon}
        />
        <div id="viewer">
          <Viewer
            selected={this.state.pokemon}
            edit={this.editName}
            close={this.closePerson}
            add={this.getSelected}
          />
        </div>
      </div>
    );
  }
}
export default App;
