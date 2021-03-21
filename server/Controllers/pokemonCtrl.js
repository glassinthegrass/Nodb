const axios = require("axios");
let pokemon = [];
let selected ={}
module.exports = {
  getPokemon: (req, res) => {
    for (let i = 1; i <= 151; ++i) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => pokemon.push(res.data))
        .catch(err => console.log(err));
    }
    res.status(200).send(pokemon)
  },
  getSelected: (req, res) => {
    res.status(200).send(selected)
  },
  addPokemon: (req, res) => {
    const { id } = req.body.pokemon;
    let selectedIndex = pokemon.findIndex((ele) => +ele.id === +id);
    selected = pokemon[selectedIndex].splice([selectedIndex], 1, {});
    res.status(200).send(selected);
  },
  editName: (req, res) => {
    const { name } = req.body;
    selected[0].name = name;
    // selected = {...pokemonIndex}
    res.status(200).send(selected);
  },
  closePokemon: (req, res) => {
    pokemon.unshift(selected);
    
    res.status(200).send();
  },
};
