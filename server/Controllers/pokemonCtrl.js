const axios = require('axios')
let single = []
let pokemon = []

module.exports = {
  getPokemon: (req, res) => {
    for (let i = 1; i <= 151; ++i) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => pokemon.push(res.data))
        .catch(err => console.log(err));
    }
    res.status(200).send(pokemon);
  },
  addPokemon: (req, res) => {
    const { pokemon } = req.body
    single.push(pokemon)
    res.status(200).send(single)
  },
  editName: (req, res) => {
    const { name } = req.body
    single.name = name
    res.status(200).send(single)
  },
  closePokemon: (req, res) => {
    single = []
    res.status(200).send(single)
  }
}