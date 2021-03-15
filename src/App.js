// State: selection
// state: inputs/name/email/birthday/picture
// get searchBarInput
// post  addPerson
// put editEmail
// delete delEmail
// props searchbar
// state Selectedperson
// map

import './App.css';
import Header from './Components/Header.js'
import SearchBar from './Components/SearchBar.js'
import Selection from './Components/Selection.js'

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Selection />
    </div>
  );
}

export default App;
