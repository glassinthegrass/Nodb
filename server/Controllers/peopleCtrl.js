// const axios = require('axios');
// const port = 3111
// const people = []
// module.exports = {
//     getPeople: (req, res) => {
//         const copyArray = [];
//         const person = req.params.personId



//         console.log(person);
//         axios.get(`http://localhost:${port}/api/people/${person}`)
//             .then(res => {
//                 copyArray.push(res.data)
//                 res.status(200).send(copyArray)
//             })
//         .catch(err => res.status(500).send(err))
//     }
// }

let people = [
  {
    id: "1",
    firstName: "Merrill",
    lastName: "Andersen",
    birthday: "12-11-1947",
    email: "merrillandersen@gmail.com",
    picture: "http://localhost:3111/server/Photos2/1.jpg",
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
  },
];


let id = 11;
module.exports = {
  getPeople: (req, res) => {
    res.status(200).send(people);
  },
  addPerson: (req, res) => {
    const { firstName, lastName, birthday, email, picture } = req.body;
    people.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      email: email,
      picture: picture,
    });

    id++;
    res.status(200).send(people);
  },
  editEmail: (req, res) => {
    const { id } = req.params;
    const { email, firstName, lastName, birthday, picture } = req.body;

    let index = null;
    people.forEach((ele, i) => {
      if (ele.id === +id) {
        index = i
      }
    })
    let newPerson = { ...req.params }
    
   newPerson = {
      id: +id,
      firstName,
      lastName,
      birthday,
      email,
      picture
    }

    people.splice(index,1,newPerson)
    res.status(200).send(people)
  },
  deletePerson: (req, res) => {
    const { id } = req.params;
    let index = null;
    people.forEach((ele, i) => {
      if (ele.id === +id) {
        index = i
      }
    })

    people.splice(index,1);
    res.status(200).send(people);
  },
};