import React, { Component } from 'react';

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        return (
            <>
                <label>Enter characters to know their length:</label>
                <input 
                    type="text" 
                    onChange={(e) => this.handleChange(e)}
                    value={ this.state.input }
                >
                </input>
                <p>
                    Length: { this.state.input.length }
                </p>
            </>
        );
    }
}

export default Length;