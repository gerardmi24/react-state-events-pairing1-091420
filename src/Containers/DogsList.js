import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogsList extends Component {

  renderDogs = () => {
    return this.fetchDogs.map((dog) => <DogCard dog={dog} key={dog.id} />)
  }

  render() {


    return <div className="list">
        {this.renderDogs()}
      </div>;
  }
}

export default DogsList;
