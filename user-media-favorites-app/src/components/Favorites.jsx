import React, { Component } from 'react';
import Movies from './Movies';
import Albums from './Albums';

class Favorites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Prompt the user for their favorite movie and second favorite movie
        let favMovie = prompt('What is your favorite movie?');
        let secondFavMovie = prompt('What is your second favorite movie?');
        //create an empty array to hold the users favorite movies
        let movieArray = [];
        //call the empty array and push to store the users 2 favorite movies inside
        movieArray.push(favMovie);
        movieArray.push(secondFavMovie);
        //sanity
        // console.log(movieArray);
        //Prompt the user for their favorite album and second favorite album
        let favAlbum = prompt('What is your favorite album?');
        let secondFavAlbum = prompt('What is your second favorite album?');
        //create an empty array to hold the users favorite albums
        let albumArray = [];
        //call the empty array and push to store the users 2 favorite albums inside
        albumArray.push(favAlbum);
        albumArray.push(secondFavAlbum);
        //sanity
        // console.log(albumArray);
         
        return (
            <div className='container'>
                <h1 className='header'> This is a list of your favorite movies and albums</h1>
                <Movies movieList={movieArray} className='moviess'/>
                <Albums albumList={albumArray} className='albumss'/>
            </div>
        )
    }
}

export default Favorites;
