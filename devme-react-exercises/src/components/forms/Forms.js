import React, { Component } from 'react';
import FormsField from './components/FormField';
class Forms extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            submit: false, // tracks if form has been submitted
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            submit: true
        })
    }

    render() {
        const { fields } = this.props
        const { submit } = this.state
        return (
            <form>
                { fields.map((value, index) => (
                        <FormsField key={ index } label={ value } submit={ submit } />
                    )
                )}
                <button 
                    onClick={ this.handleClick }
                >
                    Submit
                </button>
            </form>
        )
    }
}
export default Forms;
