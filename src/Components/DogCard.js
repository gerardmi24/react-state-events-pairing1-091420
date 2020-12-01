import React, { Component } from "react";

class DogCard extends Component {

  render() {
    return (
      <div className="card">
      <span className="content">
        <h2> Hi </h2>
        <img alt="" src={""} />
      </span>
      <span className="bark">
        <button>Bark</button>
      </span>
    </div>
    )
  }
}

export default DogCard;
