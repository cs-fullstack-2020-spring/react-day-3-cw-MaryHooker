import React,{Component} from 'react';
import Movies from './Movies';
import Albums from './Albums';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieArray:[],
            albumArray:[],
         }
    }

    
    render() { 
        //prompt user for favorite movies and albums
        let favMov = prompt('What is your favorite movie?')
        let secMov = prompt('What is your second favorite movie?')
        //push to above array
        this.state.movieArray.push(favMov);
        this.state.movieArray.push(secMov);
        let favAlb = prompt('What is your favorite album?')
        let secAlb = prompt('What is your second favorite album?')
        //push to above array
        this.state.albumArray.push(favAlb);
        this.state.albumArray.push(secAlb);
        //sanity
        console.log(this.state.movieArray)
        console.log(this.state.albumArray)
        return ( 
            <div className='container'>
                <h1>This is a list of your favorite movies and albums</h1>
                <div className='movies'>
                    {/* pass arrays down to child components */}
                <Movies movieArray={this.state.movieArray}/>
                </div>
                <div className='albums'>
                <Albums albumArray={this.state.albumArray}/>
                </div>
            </div>
         );
    }
}
 
export default Favorites;