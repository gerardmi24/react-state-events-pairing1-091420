import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList';
import BarkCounter from './Components/BarkCounter';

class App extends Component {

  state = {
    dogArray: []
  }
  
  componentDidMount() { 
    fetch("http://localhost:8000/dogs")
    .then(rspec => rspec.json())
    .then(dogArray => this.setState({
      dogArray: dogArray
    })
      )
  }

  render() {
    // console.log(this.state.dogArray)
    return (
      <div className="app">
        <DogsList dogArray={this.state.dogArray} />
        <BarkCounter dogArray={this.state.dogArray} />
      </div>
    );
  }
}

export default App;
