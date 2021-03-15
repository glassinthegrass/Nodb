//state: slelectedPerson
// add Person fn
// clearPerson fn
// props selectedPerson
// import React, { Component } from "react";
// import SearchBar from "./SearchBar.js";
// import Header from "./Header.js";

// class Selection extends Component {
//   constructor() {
//     super();
//     this.state = {
//       person: []
//     };
//   }
//   handleClick = (e => {
//     this.setState({ person: })
//   }

//   render() {
//     return (
//       <section id="selection" className="selectionLayer1">
//             <div onClick={(e) => this.handleClick(this.props.people.id)} className="selectionLayer2">
//                 <header id='cardHeader'>
//                     <h6 id='cardHeaderText' >Name</h6>
//                 </header>
//           <div className="selectionLayer3">
          
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
// export default Selection 

import React from 'react';
import Card from './Card.js'

const Selection = props => {
  const mappedPeople = props.people.map(
    (person, i) => (
      <Card key={i} person={person}/>
      
    ))
  return (
    <section id="selection" className="selectionlayer1">
      <h3>The Clan</h3>
      <div className='flex'>{mappedPeople}</div>
    </section>
  )
}
export default Selection