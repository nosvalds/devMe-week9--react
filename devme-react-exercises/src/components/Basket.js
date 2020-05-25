import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({ items }) => (
    <table className="table">
        <thead>
            <tr><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody>
            { items.map((item, index) => (
                <BasketItem key={ index } price={ item.price } name={ item.name }/>
            ))}
        </tbody>
    </table>
)

export default Basket;
