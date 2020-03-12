import React, {Component} from 'react';

 class Favorites extends Component{
     constructor(props){
         super(props);
     }

     render(){
        //Prompt the user for their favorite movie and second favorite movie
        let favMovie = prompt('What is your favorite movie?');
        let secondFav = prompt('What is your second favorite movie?');
        //create an empty array to hold the users answers
        let movieArray = [];
        //call the empty array and push to store the users 2 favorite movies inside
        movieArray.push(favMovie);
        movieArray.push(secondFav);
        //sanity
        console.log(movieArray);
        
        return(
            <div>
                <h1> This is a list of your favorite movies and albums</h1>
            </div>
        )
    }
 }

 export default Favorites;
