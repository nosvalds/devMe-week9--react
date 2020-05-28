import React, { Component } from 'react';

class TempConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempC: 0,
            tempF: 32
        }
        this.handleChangeC = this.handleChangeC.bind(this);
        this.handleChangeF = this.handleChangeF.bind(this);
    }

    handleChangeF(e) {
        let tempF = e.currentTarget.value;
        let tempC = (tempF - 32) * (5 / 9);
        this.setState({
            tempC: tempC,
            tempF: tempF
        })
    }

    handleChangeC(e) {
        let tempC = e.currentTarget.value;
        let tempF = tempC * (9 / 5) + 32;
        this.setState({
            tempC: tempC,
            tempF: tempF
        })
    }

    render() {
        const { tempC, tempF } = this.state;
        return (
            <>
                <div>
                    <label>°C</label>
                    <input 
                        type="number" 
                        onChange={ this.handleChangeC }
                        value={ tempC }
                    >
                    </input>
                </div>
                <div>
                    <label>°F</label>
                    <input 
                        type="number"
                        onChange={ this.handleChangeF } 
                        value={ tempF }
                    >
                    </input>
                </div>
            </>
        )
    }
}

export default TempConverter;