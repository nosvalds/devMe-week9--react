import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class EvenClicks extends Component {

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
        this.setState({ clicked: this.state.clicked + 1 }); // update state +1 when clicked
    }

    render() {
        const { clicked } = this.state;
        let display = "";
        if (clicked === 0) {
            display = "Click Me"; // initial state should not be even or odd
        } else {
            display = clicked % 2 === 0 ? "Even" : "Odd"; // swap between even and odd
        }
        return (
            <Card className="text-center" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Quiz 02 - EvenClicks</Card.Title>
                    <Card.Text onClick={ this.handleClick }>
                        { display }
                    </Card.Text>
                </Card.Body>
            </Card>
            // <>
            //     <h3>
            //         Quiz 02 - EvenClicks
            //     </h3>
            //     <p 
            //         onClick={ this.handleClick }
            //     >
            //         { display }
            //     </p>
            // </>
        );
    }
}

export default EvenClicks;