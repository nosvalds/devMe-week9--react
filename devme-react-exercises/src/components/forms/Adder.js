import React, { Component } from 'react';
import ListItem from './components/ListItem';

class Adder extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: "",
            values: [],
            sum: 0 
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    clickHandler() {
        const { input } = this.state;
        let newSum = +this.state.sum + +input;
        this.setState({ 
                        values: [...this.state.values, +input], // use spread operator to concatenate inputValue onto values array. Can't use concat because we shouldn't modify state that way.
                        sum: newSum,
                        input: "" // clear input for user experience
                    });
    }

    render() {
        const { input, values, sum } = this.state;
        return (
            <>
                <label>Add the things:</label>
                <ul>
                    { values.map((value, index) => (
                        <ListItem key={ index } content={ value }/>
                    ))}
                </ul>
                <p>Sum: { sum }</p>
                <input 
                    type="number" 
                    onChange={(e) => this.handleChange(e)}
                    value={ input }
                >
                </input>
                <button 
                    onClick={this.clickHandler}
                >
                    Add
                </button>
            </>
        );
    }
}

export default Adder;