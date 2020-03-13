import React, { Component } from 'react';
import Favorites from './Favorites';

class Movies extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Child component mounted');
    }

    render() {
        
        return (
            <div>
                <h1>My Favorite Movies:</h1>
                {
                    this.props.movieList.map((movie) => {
                        return <h3>{movie}</h3>
                    })
                }
               
            </div>
        )
    }
}

export default Movies;