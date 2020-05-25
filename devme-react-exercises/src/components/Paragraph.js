import React from 'react';

const Paragraph = ({ message }) => {
    return (
        <p>{ message }</p>
    )
}

Paragraph.defaultProps = {
    message: "Hello World"
};

export default Paragraph;