import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        this.state = {
            clicked: false // initially false (not clicked)
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: !this.state.clicked }); // swap boolean each time it's clicked so we go back and forth between the colors
    }

    render() {
        const { color } = this.props; // destructure color from props

        return (
            <>
                <h3>Click me to turn me { color }</h3>
                <div 
                    onClick={ this.handleClick } 
                    style={{
                        width: "200px",
                        height: "200px",
                        backgroundColor: this.state.clicked ? color : "green" // if state is false, green. If clicked is true set to color prop.
                    }}
                >
                </div>
            </>
        )
    }
}

Square.defaultProps = {
    color: "salmon"
}

export default Square;