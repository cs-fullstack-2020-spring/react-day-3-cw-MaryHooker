import React,{Component} from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log('album component mounted')
    }

    render() {
        return (
            //iterate through the albums array
            <div>
                <h1>Albums</h1>
                  {
                    this.props.albumArray.map((album,index) =>{
                        return(
                            <div key={index}>
                                <h3>{album}</h3> 
                            </div>
                        )
                    }

                    )
                }
            </div>
        );
    }
}

export default Albums;