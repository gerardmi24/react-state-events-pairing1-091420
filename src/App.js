import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList';
import FavoriteDogs from './Containers/FavoriteDogs';
import apiResponse from './api.js';

class App extends Component {

  state = {
    api: apiResponse,
    favorites: []
  }

  addToFavs = (id) => {
    let newFavorites = this.state.api.apiResponse.find(el => el.id === id)
    this.setState({
      favorites: [...this.state.favorites, newFavorites]
  })
  }

  render() {
    console.log(this.state.favorites)
    //   console.log(this.state.api.apiResponse)
    return (
      <div className="app">
        <DogsList allDogs={this.state.api.apiResponse} addToFavs={this.addToFavs} />
        <FavoriteDogs favorites={this.state.favorites} />
      </div>
    );
  }
}

export default App;
