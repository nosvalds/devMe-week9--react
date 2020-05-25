import React from 'react';

const People = ({ names }) => {
    return !names ? (<p>Nothing to see here</p>) : (
        <ul>
            {names.map((name, index) => (
                <li className="page-item" key={ index }>
                    { name }
                </li>
            ))}
        </ul>
    )
}

export default People;