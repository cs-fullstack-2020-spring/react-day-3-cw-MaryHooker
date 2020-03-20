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
            <div>
                  {
                    this.props.albumArray.map((album,index) =>{
                        return(
                            <div key={index}>
                                <h3>favorite album: {album.favAlb}</h3>
                                <h3>second favorite: {album.secAlb}</h3>
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