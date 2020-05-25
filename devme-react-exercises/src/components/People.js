import React from 'react';

const People = () => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    return (
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