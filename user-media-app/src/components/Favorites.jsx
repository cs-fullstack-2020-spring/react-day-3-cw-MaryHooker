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
        let favMov = prompt('What is your favorite movie?')
        let secMov = prompt('What is your second favorite movie?')
        this.state.movieArray.push(favMov);
        this.state.movieArray.push(secMov);
        let favAlb = prompt('What is your favorite album?')
        let secAlb = prompt('What is your second favorite album?')
        this.state.albumArray.push(favAlb);
        this.state.albumArray.push(secAlb);
        //sanity
        console.log(this.state.movieArray)
        console.log(this.state.albumArray)
        return ( 
            <div className='container'>
                <h1>This is a list of you favorite movies and albums</h1>
                <div className='movies'>
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