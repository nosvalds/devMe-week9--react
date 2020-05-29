import React from 'react';
import Card from 'react-bootstrap/Card'

const Multiplier = ({ x, y }) => {
    return (
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Quiz 01</Card.Title>
                <Card.Text>
                    <p>{ x } * { y } = { x * y }</p>
                </Card.Text>
            </Card.Body>
        </Card>
        // <Card>
        //     <h2>Quiz 01</h2>
        //     <p>{ x * y }</p>
        // </Card>
    );
}

export default Multiplier;
