import React from 'react';
import Transform from './Transform';

const TransformParent = () => {
    return (
        <>
        <p>x => x * x</p>
        <Transform transform={(x) => x * x} />

        <p>x => x + 1</p>
        <Transform transform={(x) => x + 1} />

        <p>x => 2 * x</p>
        <Transform transform={(x) => 2 * x} />

        <p>x => cos(x)</p>
        <Transform transform={(x) => Math.cos(x)} />


        </>
    )
}
export default TransformParent;