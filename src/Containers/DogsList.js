import React, { Component } from "react";
import DogCard from "../Components/DogCard.js";

class DogsList extends Component {

  renderDogs = () => {
    return this.props.dogArray.map(dog => <DogCard dog={dog} key={dog.id} />)
  }

  render() {
    // console.log(this.props.dogArray)
    return <div className="list">
      {this.renderDogs()}
      </div>;
  }
}

export default DogsList;
