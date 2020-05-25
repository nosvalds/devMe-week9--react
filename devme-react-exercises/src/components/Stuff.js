import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ({ square }) => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];
  return (
    <React.Fragment>
        <Header>Hello, world</Header>
        <Paragraph>Lorem Ipsum dolor etc. etc.</Paragraph>
        { square ? <Square /> : null}
        <People names={names} />
    </React.Fragment>
  );
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;