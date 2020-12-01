import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList';
import apiResponse from './api.js'

class App extends Component {

  state = {
    api: []
  }

  fetchDogs = () => {
    return this.setState({
      api: apiResponse
    })
  }

  render() {
    console.log(this.state.api)
    return (
      <div className="app">
        <DogsList fetchDogs={this.fetchDogs()} />
      </div>
    );
  }
}

export default App;
