import React from 'react';

const People = ({ names }) => {
    return !names ? (<p>Nothing to see here</p>) : (
        <ul onClick={() => console.log("Hello, world")}>
            {names.map((name, index) => (
                <li key={ index }>
                    { name }
                </li>
            ))}
        </ul>
    )
}

export default People;