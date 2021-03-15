const express = require('express'),
  peopleCtrl = require('./Controllers/peopleCtrl.js'),
  port = 3111,
  app = express();
    
app.use(express.json())

app.get('/api/people/', peopleCtrl.getPeople);
app.post('/api/people/', peopleCtrl.addPerson);
app.put('/api/people/:id', peopleCtrl.editEmail);
// app.put('/api/people/:id', peopleCtrl.deleteEmail);
app.delete('/api/people/:id/', peopleCtrl.deletePerson)


// endpoint
// app.get('/api/people',)

// app.get('/api/people', (req, res) => {
//     console.log(req.query)

//     if (req.query.personId) {
//         const targetIndex = people.findIndex((person) => person.id === +req.query.personId);
//         res.status(200).send(people[targetIndex]);
//     } else {
//         res.status(200).send({
//             people
//         })
//     }
// })

// app.get('/api/people/:personId', (req, res) => {
//     const targetIndex = people.findIndex(person => person.id === +req.params.personId)
//     res.status(200).send(people[targetIndex])
// })

app.listen(port, () => {
    console.log(`Tonight we dine in Hell, otherwise known as port ${port}`)
})