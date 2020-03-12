import React, { Component } from 'react';

class Albums extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Child component mounted');
    }

    render() {

        return (
            <div>
                <h1> My Favorite Albums</h1>

                {
                    albumList.map((album) => {
                        return <h3>{this.props.album}</h3>
                    })
                }

            </div>
        )
    }
}

export default Albums;