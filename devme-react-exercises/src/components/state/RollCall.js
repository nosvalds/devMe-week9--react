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
        const { names } = this.props; // get jump size from props

        let currentIndex = this.state.nameIndex;

        if (currentIndex + 1 === names.length) {
            this.setState({ nameIndex: 0 });
        } else {
            this.setState({ nameIndex: currentIndex + 1 }); 
        }
    }

    render() {
        const { names } = this.props;

        return (<>
                <p>{ names[this.state.nameIndex] }</p>
                <button onClick={ this.handleClick }>Next</button>
                </>)
    }
}

export default RollCall
