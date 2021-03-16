const express = require('express')
let pokemonCtrl = require('./Controllers/pokemonCtrl.js')
let port = 3111
let app = express();
    
app.use(express.json())

app.get('/api/pokemon', pokemonCtrl.getPokemon);
app.post('/api/pokemon', pokemonCtrl.addPokemon);
app.put(`/api/pokemon/:id`, pokemonCtrl.editName);
app.delete(`/api/pokemon/:id`, pokemonCtrl.closePokemon);

app.listen(port, () => {
    console.log(`Tonight we dine in Hell, otherwise known as port ${port}`)
})