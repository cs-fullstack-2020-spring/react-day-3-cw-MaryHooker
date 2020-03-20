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
            // iterate through the movies array
            <div>
                <h1>Movies</h1>
                {
                    this.props.movieArray.map((movie,index) =>{
                        return(
                            <div key={index}>
                                <h3>{movie}</h3>
                                
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