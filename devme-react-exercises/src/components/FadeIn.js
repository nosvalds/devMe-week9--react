import React from 'react';

const FadeIn = ({ time, children }) => (
    <div style={{
        animationDuration: time,
        animationName: "fadeIn"
        }}
    > 
        { children }
    </div>
)

export default FadeIn;