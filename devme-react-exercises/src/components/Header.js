import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { children } = this.props;
        return (
            <header>
                <h1>{ children }</h1>
            </header>
        );
    }
}

export default Header;