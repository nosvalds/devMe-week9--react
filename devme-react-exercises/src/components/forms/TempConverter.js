import React, { Component } from 'react';

class TempConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempC: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.currentTarget.matches("#C")) {
            this.setState({ tempC: e.currentTarget.value });
        } else {
            let tempC = (e.currentTarget.value - 32) * (5 / 9);
            this.setState({ tempC: tempC });
        }
    }

    render() {
        const { tempC } = this.state;
        let tempF = tempC * (9 / 5) + 32;
        return (
            <>
                <label>°C</label>
                <input 
                    type="text" 
                    id="C"
                    onChange={(e) => this.handleChange(e)}
                    value={ tempC }
                >
                </input>
                <label>°F</label>
                <input 
                    type="text"
                    id="F" 
                    onChange={(e) => this.handleChange(e)}
                    value={ tempF }
                >
                </input>
            </>
        )
    }
}

export default TempConverter;