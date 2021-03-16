// State: selection
// state: inputs/name/email/birthday/picture
// get searchBarInput
// post  addPerson
// put editEmail
// delete delEmail
// props searchbar
// state Selectedperson
// map
import React, { Component } from 'react';
import axios from 'axios'
import Header from './Components/Header.js'
import SearchBar from './Components/SearchBar.js'
import Selection from './Components/Selection.js'

import './App.css';


//https://pokeapi.co/api/v2/pokemon/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      single: [],
      name: '',
      id: '',
      height:''
    }
  }
  componentDidMount = () => {
  axios.get("/api/pokemon")
      .then((res) => {
        this.setState({pokemon: res.data });
        // console.log(this.state.pokemon)
      })
      .catch((err) => console.log(err));
  }
  addPokemon = (pokemon) => {
    axios
      .post("/api/pokemon/", { pokemon: pokemon })
      .then(res => {
        this.setState({ single: res.data });
      })
      .catch((err) => console.log(err));
  }
  editName = (id, newName) => {
    let body = { name: newName }
    axios
      .put(`https://pokeapi.co/api/v2/pokemon/${id}`, body)
      .then((res) => {
        this.setState({ single: res.data });
      })
      .catch((err) => console.log(err));
  }
  closePerson = (id) => {
    axios.delete(`/api/people/${id}`)
      .then(res => {
        this.setState({ single: [] })
        .catch(err => console.log(err))
    })
  }
  
  render() {
    console.log(this.state.pokemon)
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div id="sectionCard">
      <Selection id='selection'
            pokemon={this.state.pokemon}
            single={this.state.single}
            name={this.state.name}
        />
        </div>
      </div>
    );
  }
}

export default App;
