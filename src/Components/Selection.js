import axios from 'axios'
import React, { Component } from 'react'
import Card from './Card'



class Selection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: []
    }
  }
  componentDidUpdate() {
    this.getSelected();
  }
  getSelected = () => {
    axios
      .get("/api/pokemon")
      .then((res) => {
        this.setState({ pokemon: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.pokemon)
    let mappedPokemon = this.state.pokemon.sort().map((pokemon, i) => {
      return(
      <Card key={i} pokemon={pokemon} />
    )
  });
console.log(this.state.pokemon)
    return (
      <div className="list">
        <h3>the gang</h3>
        {mappedPokemon}
      </div>
    );
  }
}
export default Selection