import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <Link to="/">Home</Link>
        <Link to="/all-stuff">Everything</Link>
        <Link to="/clicked">Clicked</Link>
        <Link to="/length">Length</Link>
        <Link to="/adder">Adder</Link>
        <Link to="/toggle-text">Toggle Text</Link>
        <Link to="/lame-game">Lame Game</Link>
        <Link to="/forms">Forms</Link>
    </footer>
)

export default Footer;