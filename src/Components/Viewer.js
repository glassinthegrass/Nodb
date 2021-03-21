
import React, { Component } from 'react'

class Viewer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pokemon: {},
          isEditing: false,
          name: ''
      }
  }
    componentDidUpdate() {
    this.props.add()
    }
    handleEdit = (id) => {
        this.props.edit(id, this.state.name)
        this.handleToggle()
    }
    handleToggle = () => {
this.setState({isEditing: !this.state.isEditing})
    }
    handleClear = () => {
        this.props.close()
        this.setState({name: ''})
    }
    handleInput = (e) => {
        this.setState({ name: e })
    }

    render() {
    
        const { selected } = this.props
        console.log(selected)
        return (
            <div >
        
          
            <div id="selectedPanel">
              <img src={selected.backImage} alt={selected.name} />
                    {selected.name} <img src={selected.frontImage} alt={selected.id} />
                </div>
                <div >
                    {this.state.isEditing ? (<div>
                        <input value={this.state.name} onChange={(e) => this.handleInput(e.target.value)} />
                        <button onClick={() => this.handleEdit(selected.id)}>Submit</button>
                    </div>
                    ) : (
                        <div>
                            <p>{this.state.name}</p>
                            <button onClick={this.handleToggle}>Edit</button>
                        </div>
                    )}
                    <button onClick={this.handleToggle}>Clear</button>
                    </div>
              </div>
        );
  }
}

export default Viewer