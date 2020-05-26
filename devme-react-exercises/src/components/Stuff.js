import React from 'react';
import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from './Basket';
import Clicked from './state/Clicked';
import ToggleText from './state/ToggleText';
import Counter from './state/Counter';
import StepCounter from './state/StepCounter';
import CatchMeIfYouCan from './state/CatchMeIfYouCan';

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
        <Counter initial={ 50 } max={ 100 }/>
        <StepCounter max={ 100 } step={ 5 } />
        <CatchMeIfYouCan jump={ 5 } />
    </React.Fragment>
  );
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;