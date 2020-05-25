import React from 'react';

const Square = ({ color }) => {
    return (
        <div style={{
            width: "200px",
            height: "200px",
            backgroundColor: color
             }}>
        </div>
    )
}

Square.defaultProps = {
    color: "salmon"
}

export default Square;