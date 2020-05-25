import React from 'react';

const BasketItem = ({ price, name }) => (
    <tr><td>{ name }</td><td>{ price }</td></tr>
)

export default BasketItem;