import React, { Component } from 'react';
class FormsField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() {
        const { label, submit } = this.props;
        const { input } = this.state;
        let color = "";
        if (submit && input === "") {
            color = "red";
        }
        
        return (
            <div className="form-container">
                <label>{ label }</label>
                <input
                    type="text"
                    value={ input }
                    onChange={ this.handleChange }
                    style={{
                        borderColor: color,
                    }}
                    >
                </input>
            </div>
        )
    }
}
export default FormsField;
