import React from 'react';

const Paragraph = ({ message }) => {
    return (
        <p>{ message }</p>
    )
}

Paragraph.defaultProps = {
    message: "Hell, world"
};

export default Paragraph;