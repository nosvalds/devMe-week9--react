import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const links = {
        "/": "Home",
        "/all-stuff": "Everything",
    }
    let key = 0;
    return (
    <footer>
        {/* { links.forEach((name, url) => {
            key += 1;
            return (<Link key={ key } to={ url }>{ name }</Link>)
        })} */}
        <Link to="/all-stuff">Everything</Link>
        <Link to="/clicked">Clicked</Link>
        <Link to="/length">Length</Link>
        <Link to="/adder">Adder</Link>
        <Link to="/toggle-text">Toggle Text</Link>
        <Link to="/lame-game">Lame Game</Link>
        <Link to="/forms">Forms</Link>
    </footer>
    )
}

export default Footer;