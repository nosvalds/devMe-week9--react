import React, { Component } from 'react';

class Transform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            result: "Start Typing...",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { transform } = this.props;
        let curInput = +e.currentTarget.value;
        this.setState({ 
            input: curInput,
            result: transform(curInput)
        });
    }

    render() {
        const { result, input } = this.state
        return (
            <>
                <label>
                    Input:
                </label>
                <input 
                    type="number"
                    value={ input }
                    onChange={ this.handleChange }
                />
                <p>Result: { result }</p>
            </>
        )
    }
}
export default Transform;
