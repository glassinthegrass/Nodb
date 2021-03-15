const axios = require('axios');
const port = 3111

module.exports = {
    getPeople: (req, res) => {
        const copyArray = [];
        const person = req.params.personId

        console.log(person);
        axios.get(`http://localhost:${port}/api/people/${person}`)
            .then(res => {
                copyArray.push(res.data)
                res.status(200).send(copyArray)
            })
        .catch(err => res.status(500).send(err))
    }
}