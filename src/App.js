import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList';
import apiResponse from './api.js'

class App extends Component {

  state = {
    api: apiResponse
  }

  // fetchDogs = () => {
  //   return this.setState({
  //     api: apiResponse
  //   })
  // }

  render() {
    // console.log(this.state.api)
    //   console.log(this.state.api.apiResponse)
    return (
      <div className="app">
        <DogsList allDogs={this.state.api.apiResponse} />
      </div>
    );
  }
}

export default App;
