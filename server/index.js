const express = require('express')
const app = express()
const port = 3111
app.use(express.json())
app.listen(port, () => {
    console.log(`Tonight we dine in Hell, otherwise known as port ${3111}`)
})

let people = [
  {
    id: 1,
    firstName: "Merrill",
    lastName: "Andersen",
    birthday: "12-11-1947",
    email: "merrillandersen@gmail.com",
    picture: "https://photos.app.goo.gl/dYNdh3XHfNCzTPqA9",
  },
  {
    id: 2,
    firstName: "Sharlene",
    lastName: "Andersen",
    birthday: "12-12-1949",
    email: "sharleneandersen@hotmail.com",
    picture: "https://photos.app.goo.gl/tGhQpy3DZoQw5xN67",
  },
  {
    id: 3,
    firstName: "Doug",
    lastName: "Andersen",
    birthday: "05-26-1974",
    email: "douglasandersen@hotmail.com",
    picture: "https://photos.app.goo.gl/85cXZ6GttBkfhwd88",
  },
  {
    id: 4,
    firstName: "Milagros",
    lastName: "Andersen",
    birthday: "09-01-1971",
    email: "milagroandersen@hotmail.com",
    picture: "https://photos.app.goo.gl/uwrJvoXfjN2vwa1F7",
  },
  {
    id: 5,
    firstName: "Alyssa",
    lastName: "Andersen",
    birthday: "08-12-1998",
    email: "alyssaandersen@gmail.com",
    picture: "https://photos.app.goo.gl/uTdKyYsCGuFoHSts8",
  },
  {
    id: 6,
    firstName: "Isaac",
    lastName: "Andersen",
    birthday: "11-26-2000",
    email: "isaacandersen@gmail.com",
    picture: "https://photos.app.goo.gl/4RdVj1HHSGeDKrrj8",
  },
  {
    id: 7,
    firstName: "Sam",
    lastName: "Andersen",
    birthday: "10-13-2002",
    email: "samandersen@gmail.com",
    picture: "https://photos.app.goo.gl/8zHq9fafVzsNCL5U8",
  },
  {
    id: 8,
    firstName: "Eva",
    lastName: "Andersen",
    birthday: "12-31-2005",
    email: "evaandersen@gmail.com",
    picture: "https://photos.app.goo.gl/KaE3C6eY1tx9kxGf7",
  },
  {
    id: 9,
    firstName: "Mindy",
    lastName: "Watson",
    birthday: "08-20-1975",
    email: "minminwatson@yahoo.com",
    picture: "https://photos.app.goo.gl/7GS8qn4nigqH3Kxc9",
  },
  {
    id: 10,
    firstName: "Brooks",
    lastName: "Watson",
    birthday: "09-21-1970",
    email: "browats@yahoo.com",
    picture: "https://photos.app.goo.gl/xrK93YcTKkUh6SbV6",
  }
];

// endpoint
// app.get('/api/people',)

app.get('/api/people', (req, res) => {
    console.log(req.query)

    if (req.query.personId) {
        const targetIndex = people.findIndex((person) => person.id === +req.query.personId);
        res.status(200).send(people[targetIndex]);
    } else {
        res.status(200).send({
            people: people
        })
    }
})

app.get('/api/people/:personId', (req, res) => {
    console.log(req.params)
    console.log(req.params.personId)
    console.log(typeof +req.params.userId)
    const targetIndex = people.findIndex(person => person.id === +req.params.personId)
    res.status(200).send(people[targetIndex])
})


