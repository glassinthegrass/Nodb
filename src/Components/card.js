import React, { Component } from "react";
import axios from 'axios'
// import SearchBar from "./SearchBar.js";
// import Header from "./Header.js";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:{},
    };
  }
  handleClick = () => {
    const { pokemon } = this.props;
    let newSelected = {
      id: pokemon.id,
      name: pokemon.name,
      frontImage: pokemon.sprites.front_default,
      backImage: pokemon.sprites.back_default,
      height: pokemon.height,
      weight: pokemon.weight,
    };
    
    this.addSelected(newSelected);
  };
  addSelected = (pokemon) => {
    axios
      .post(`/api/selected`, { pokemon: pokemon })
      .then((res) => {
        this.setState({ selected: res.data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    // console.log(this.state.selected)
    return (
      <div id="cardHeader" onClick={this.handleClick}>
        <div id='cardContent'>
          <img
            className="icon"
            src={this.props.pokemon.sprites.front_default}
            alt={this.props.pokemon.name}
          />
          #{this.props.pokemon.id} ||| {this.props.pokemon.name}
        </div>
      </div>
    );
  }
};

export default Card