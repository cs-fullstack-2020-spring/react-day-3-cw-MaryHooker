import React,{Component} from 'react';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log('movie component mounted')
    }
    render() {
        return (
            <div>
                {
                    this.props.movieArray.map((movie,index) =>{
                        return(
                            <div key={index}>
                                <h3>favorite movie: {movie.favMov}</h3>
                                <h3>second favorite: {movie.secMov}</h3>
                            </div>
                        )
                    }

                    )
                }
            </div>
        );
    }
}

export default Movies;