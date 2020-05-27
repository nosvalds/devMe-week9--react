import React, { Component } from 'react';

class ToggleText extends Component {

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
        const { initial, alternate } = this.props; // destructure text from props

        return (
            <>
                <p>
                    { this.state.clicked ? alternate : initial }
                </p>
                <button
                    onClick={ this.handleClick }
                >
                    Toggle
                </button>
            </>
        );
    }
}

export default ToggleText