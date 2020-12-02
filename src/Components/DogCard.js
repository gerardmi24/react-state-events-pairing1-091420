import React, { Component } from 'react';

class DogCard extends Component {

  state = {
    clicked: false
  }

  dogBark = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // console.log(this.props.dog)
    return (
      <div className="card">
      <span className="content">
        <h2>{this.props.dog.name}</h2>
        <img alt="Dogs" src={this.props.dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.dogBark} >Bark</button>
        {this.state.clicked? <h2>Bark</h2>: null}
      </span>
    </div>
    )
  }
}

export default DogCard;
