import React from 'react';

const LameGameHeader = ({ gameStateIndex, aim, diff }) => {
    if (gameStateIndex === 0) {
        return (
            <h2>
                Click Start to Play!
            </h2>
        )
    } else if (gameStateIndex === 1) {
        return (
            <h2>
                Click now in { aim } seconds
            </h2>
        )
    } else if (gameStateIndex === 2) {
        return (
            <h2>
                You were { diff } seconds off
            </h2>
        )
    }
}

export default LameGameHeader;