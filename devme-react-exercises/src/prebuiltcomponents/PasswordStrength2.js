import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

class PasswordStrength2 extends Component {
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
        let pwLength = input.length;
        let style = "";

        if (pwLength > 0 && pwLength < 9) {
            style = "bg-danger";
        } else if (pwLength >= 9 && pwLength < 16) {
            style = "bg-warning";
        } else if (pwLength >= 16) {
            style = "bg-success"
        }

        return (
            <Form className="mb-2">
                <Form.Group 
                    controlId="formBasicPassword" 
                >
                    <Form.Label>Password Strength Tester</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={ this.handleChange }
                        value={ input }
                        className={ style }
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default PasswordStrength2;