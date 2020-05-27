import React, { Component } from 'react';

class RollCall extends Component {
    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        // just a plain old JavaScript object
        this.state = {
            nameIndex: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { names } = this.props; // get names from props

        // there is another slick way to do this with modulo/modulus 
        this.setState({
            nameIndex: (this.state.nameIndex + 1) % names.length,
        });
        // if (currentIndex + 1 === colours.length) {
        //     this.setState({ colourIndex: 0 });
        // } else {
        //     this.setState({ colourIndex: currentIndex + 1 }); 
        // }
    }

    render() {
        const { names } = this.props;
        let name = names[this.state.nameIndex];

        return (
            <>
                <p>
                    { name }
                </p>
                <button 
                    onClick={ this.handleClick }
                >
                    Next
                </button>
            </>
        );  
    }
}

export default RollCall
