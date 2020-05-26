import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';
import Clicked from './state/Clicked';
import ToggleText from './state/ToggleText';

const Stuff = ({ square }) => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ]; 
  return (
    <React.Fragment>
        <Header>Hello, world</Header>
        <Paragraph>Lorem Ipsum dolor etc. etc.</Paragraph>
        { square ? <Square color="hotpink" /> : null}
        <People names={ names } />
        <Basket items={ items } />
        <Clicked />
        <ToggleText initial="Hello" alternate="World" />
    </React.Fragment>
  );
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;