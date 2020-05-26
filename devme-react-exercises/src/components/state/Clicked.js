import React, { Component } from 'react';

class Clicked extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        // just a plain old JavaScript object
        this.state = {
            clicked: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true }); 
    }

    render() {
        return (<p onClick={ this.handleClick }>
                { this.state.clicked ? "Clicked" : "Not clicked" }
                </p>)
    }
}

export default Clicked;