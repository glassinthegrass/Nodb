const express = require('express')
let axios = require('axios')
let pokemonCtrl = require('./Controllers/pokemonCtrl.js')
let port = 3111
let app = express();
    
app.use(express.json())

app.get('/api/pokemon/', pokemonCtrl.getPokemon);
app.get('/api/selected', pokemonCtrl.getSelected)
app.post('/api/selected', pokemonCtrl.addPokemon);
app.put(`/api/selected/:id`, pokemonCtrl.editName);
app.delete(`/api/selected`, pokemonCtrl.closePokemon);



app.listen(port, () => {
    console.log(`Tonight we dine in Hell, otherwise known as port ${port}`)
})