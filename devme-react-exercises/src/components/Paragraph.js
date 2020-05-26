import React from 'react';

const Paragraph = ({ children }) => {
    return (
        <p>{children ? children : "Hello, world"}</p>
    )
}

export default Paragraph;