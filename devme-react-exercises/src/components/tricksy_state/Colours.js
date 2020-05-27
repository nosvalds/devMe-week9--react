import React, { Component } from 'react';

class Colours extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        // just a plain old JavaScript object
        this.state = {
            colourIndex: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { colours } = this.props; // get jump size from props

        let currentIndex = this.state.colourIndex;

        if (currentIndex + 1 === colours.length) {
            this.setState({ colourIndex: 0 });
        } else {
            this.setState({ colourIndex: currentIndex + 1 }); 
        }
    }

    render() {
        const { colours } = this.props; // destructure colors array from props
        let colour = colours[this.state.colourIndex];
        
        return (
            <div 
                onClick={ this.handleClick }
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: colour // return up to date color
                }}
            >
            </div>
        )
    }
}

export default Colours
