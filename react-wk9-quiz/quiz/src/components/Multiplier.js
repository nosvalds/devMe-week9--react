import React from 'react';
import Card from 'react-bootstrap/Card'

const Multiplier = ({ x, y }) => {
    return (
        <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Quiz 01 - Multiplier</Card.Title>
                <Card.Text>
                    { x } * { y } = { x * y }
                </Card.Text>
            </Card.Body>
        </Card>
        // 
        //     <h2>Quiz 01 - Multiplier</h2>
        //     <p>{ x * y }</p>
        // 
    );
}

export default Multiplier;
