import React, { Component } from 'react';

class Clicked extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked }); 
    }

    render() {
        return (
            <>
                <h3>
                    03 State - Clicked
                </h3>
                <p 
                    onClick={ this.handleClick }
                >
                    { this.state.clicked ? "Clicked" : "Not clicked" }
                </p>
            </>
        );
    }
}

export default Clicked;