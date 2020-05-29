import React, { Component } from 'react';

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            input: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { input } = this.state;
        const { length } = this.props;
        let curLength = input.length;

        return (
            <>
                <label>MinimumLength
                    <input 
                        type="text" 
                        onChange={ this.handleChange }
                        value={ input }
                        >
                    </input>
                </label>
                { curLength < length ? <p>Too short!</p> : null}
            </>
        );
    }
}

export default MinimumLength;