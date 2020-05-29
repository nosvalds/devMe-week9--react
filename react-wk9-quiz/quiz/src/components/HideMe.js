import React, { Component } from 'react';

class EvenClicks extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state which is # of clicks
        this.state = {
            clicked: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true }); // set to true once clicked
    }

    render() {
        const { clicked } = this.state;
        const { children } = this.props;
        return (
            <>
                <h3>
                    Quiz 04 - Hide Me
                </h3>
                { clicked ? null : // if clicked = true hide, else show children from props
                <p 
                    onClick={ this.handleClick }
                >
                    { children }
                </p>}
            </>
        );
    }
}

export default EvenClicks;