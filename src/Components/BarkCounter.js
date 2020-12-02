import React, { Component } from 'react';

class BarkCounter extends Component {

    state = {
        count: 0
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>
                <h2> Current Count: {this.state.count} </h2>
            </div>
        )
    }
}

export default BarkCounter;