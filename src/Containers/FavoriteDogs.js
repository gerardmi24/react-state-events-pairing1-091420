import React, { Component } from 'react';
import DogCard from '../Components/DogCard';

class FavoriteDogs extends Component {

    showDogs = () => {
        console.log(this.favorites)
        return this.props.favorites.map((favDog) => <DogCard key={favDog.id} dog={favDog} />)
    }

    render() {
        return (
            <div>
                <h1> Top Dogs </h1>
                {this.showDogs()}
            </div>
        )
    }
}

export default FavoriteDogs;