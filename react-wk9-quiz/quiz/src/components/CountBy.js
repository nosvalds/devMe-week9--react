import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class CountBy extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state which is # of clicks
        this.state = {
            clicked: 0 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: this.state.clicked + this.props.step }); // update state +step when clicked
    }

    render() {
        const { clicked } = this.state;
        return (
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Quiz 03 - Count By</Card.Title>
                    <Card.Text onClick={ this.handleClick }>
                        { clicked }
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CountBy;