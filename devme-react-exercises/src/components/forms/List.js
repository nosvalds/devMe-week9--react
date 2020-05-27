import React, { Component } from 'react';
import ListItem from './components/ListItem'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            inputValue: ""
        }

        this.clickHandler = this.clickHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    clickHandler() {
        this.setState({ listItems: [...this.state.listItems, this.state.inputValue], // use spread operator to concatenate inputValue onto listItems array. Can't use concat because we shouldn't modify state that way.
                        inputValue: "" // clear input for user experience
                    });
    }

    handleChange(e) {
        this.setState({ inputValue: e.currentTarget.value });
    }

    render() {
        const { inputValue, listItems } = this.state;
        return (
            <>
                <h4>My List:</h4>
                <ul>
                    { listItems.map((value, index) => (
                        <ListItem key={ index } content={ value }/>
                    ))}
                </ul>
                <label>Add to the list:</label>
                <input
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={ inputValue }
                >
                </input>
                <button 
                    onClick={this.clickHandler}
                >
                    Add
                </button>
            </>
        )
    }
}
export default List;
