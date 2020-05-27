import React, { Component } from 'react';

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { input } = this.state;
        let pwLength = input.length;
        let color = "";

        if (pwLength > 0 && pwLength < 9) {
            color = "red";
        } else if (pwLength > 0 && pwLength < 16) {
            color = "orange";
        } else if (pwLength >= 16) {
            color = "green"
        }

        return (
            <div
                style={{
                    backgroundColor: color
                }}
            >
                <label>Check your password strength:</label>
                <input 
                    type="password" 
                    onChange={(e) => this.handleChange(e)}
                    value={ this.state.input }
                >
                </input>
            </div>
        );
    }
}

export default PasswordStrength;