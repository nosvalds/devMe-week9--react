import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = () => {
  return (
    <React.Fragment>
        <Header text="Hello, world" />
        <Paragraph />
        <Square />
        <People />
    </React.Fragment>
  );
}

export default Stuff;