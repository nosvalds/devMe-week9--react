import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


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
            <Form>
                <Form.Group>
                    <Form.Label>°C</Form.Label>
                    <Form.Control 
                        type="number" 
                        onChange={ this.handleChangeC }
                        value={ tempC }
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>°F</Form.Label>
                    <Form.Control 
                        type="number"
                        onChange={ this.handleChangeF } 
                        value={ tempF }
                    >
                    </Form.Control>
                </Form.Group>
            </Form>
        )
    }
}

export default TempConverter;