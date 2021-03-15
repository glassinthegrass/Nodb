// State: selection
// state: inputs/name/email/birthday/picture
// get searchBarInput
// post  addPerson
// put editEmail
// delete delEmail
// props searchbar
// state Selectedperson
// map
import React, { Component } from 'react';
import axios from 'axios'
import Header from './Components/Header.js'
// import Viewer from './Components/Viewer.js'
// import Card from './Components/Card.js'
import SearchBar from './Components/SearchBar.js'
import Selection from './Components/Selection.js'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      selection: [],
    }
  }
  componentDidMount = () => {
    axios.get('/api/people')
      .then(res => {
      this.setState({selection: res.data})
      })
    .catch(err => console.log(err))
  }
  addPerson = person => {
    axios.post('/api/people', { person: person })
      .then(res => {
        this.setState({ people: res.data })
      })
    .catch(err => console.log(err))
  }
  editEmail = (id, newEmail) => {
    const {firstName,lastName,birthday,email,picture} = newEmail
    let body = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      email: email,
      picture: picture
    };
    axios.put(`/api/people/${id}`, body)
      .then(res => {
      this.setState({people: res.data})
      })
    .catch(err => console.log(err))
  }
  deletePerson = (id) => {
    axios.delete(`/api/people/${id}`)
      .then(res => {
        this.setState({ people: res.data })
        .catch(err => console.log(err))
    })
  }
  render() {
    console.log(this.state.people)
    return (
      <div className="App">
        <Header />
        <SearchBar people={this.state.selection}/>
        <Selection people={this.state.selection}/>
      </div>
    );
  }
}

export default App;
