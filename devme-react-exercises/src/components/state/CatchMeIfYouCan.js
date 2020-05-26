import React, { Component } from 'react';
class CatchMeIfYouCan extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state
        // just a plain old JavaScript object
        this.state = {
            position: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        }

    handleClick() {
        const { jump } = this.props; // get jump size from props

        this.setState({ position: this.state.position + jump }); 
    }

    render() {
        return (<button onClick={ this.handleClick } style={{
            transform: `translateY(${this.state.position}px)`
        }}>Catch Me</button>)
    }
}
export default CatchMeIfYouCan;
