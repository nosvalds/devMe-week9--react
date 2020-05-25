import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = () => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
  return (
    <React.Fragment>
        <Header text="Hello, world" />
        <Paragraph message="lorem" />
        <Square />
        <People names={names} />
    </React.Fragment>
  );
}

export default Stuff;