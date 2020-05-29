import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class EvenClicks extends Component {

    constructor(props) {
        // make sure you always add this, it makes Component work
        super(props);
        // setup our state which is # of clicks
        this.state = {
            clicked: false 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true }); // set to true once clicked
    }

    render() {
        const { clicked } = this.state;
        const { children } = this.props;
        return (
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Quiz 04 - Hide Me</Card.Title>
                    { clicked ? null : // if clicked = true hide, else show children from props
                    <Card.Text onClick={ this.handleClick }>
                        { children }
                    </Card.Text>}
                </Card.Body>
             </Card>
        );
    }
}

export default EvenClicks;