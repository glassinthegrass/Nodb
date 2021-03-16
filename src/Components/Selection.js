

import React, { Component } from 'react'

class Selection extends Component{
  handleClick = () => {
      const { pokemon } = this.props;
      let selectedPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight:pokemon.weight
      }
    this.props.addPokemon(selectedPokemon)
    this.setState({ single: selectedPokemon })
}
  render() {
  const { pokemon } = this.props;
  const mappedPokemon = pokemon.map((pokemon, i) => (
    <div id="selectionLayer1" >
      
      <div id="cardHeader">

        <img className="icon" src={pokemon.sprites.front_default} alt={pokemon.name} />
        
        <div className="selectionText">
            #{pokemon.id} ||| {pokemon.name.toUpperCase()}
        </div>
      </div>

      <div id="cardIconName">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} onClick={this.handleClick} />{pokemon.name}
      </div>
      
      <div>
      Height: {pokemon.height}
      </div>
    </div>
      
  ));
  return (
        
    <div className="list">
      <h3>the gang</h3>
        {mappedPokemon}
    </div>
    )
}
}
export default Selection