import React, { Component } from 'react';

class Transform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            input: +e.currentTarget.value,
        });
    }

    render() {
        const { input } = this.state
        const { transform } = this.props;

        return (
            <>
                <label>
                    Input:
                    <input 
                        type="number"
                        value={ input }
                        onChange={ this.handleChange }
                    />
                </label>
                <p>Result: { transform(input) }</p>
            </>
        )
    }
}
export default Transform;
