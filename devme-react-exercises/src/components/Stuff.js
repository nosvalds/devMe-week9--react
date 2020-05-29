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
import RollCall from './state/RollCall';
import Colours from './tricksy_state/Colours';
import Die from './tricksy_state/Die';
import LameGame from './tricksy_state/LameGame';
import Length from './forms/Length';
import PasswordStrength from './forms/PasswordStrength';
import TempConverter from './forms/TempConverter';
import List from './forms/List';
import Adder from './forms/Adder';
import TransformParent from './forms/TransformParent';
import Forms from './forms/Forms';
import Progress from '../prebuiltcomponents/Progress';
import CatchMeIfYouCan2 from '../prebuiltcomponents/CatchMeIfYouCan';
import PasswordStrength2 from '../prebuiltcomponents/PasswordStrength2';
import List2 from '../prebuiltcomponents/List2';
import TempConverter2 from '../prebuiltcomponents/TempConverter2';
import Dates from '../prebuiltcomponents/Dates';
import ImageCarousel from '../prebuiltcomponents/ImageCarousel';

const Stuff = ({ square }) => {
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ]; 

    let colours = [
      "#C14412",
      "#EBB31A",
      "#8F5318",
      "#009EAD",
      "#395967",
    ]; 

    let x = 5;

  return (
    <React.Fragment >
        <Header>
          Hello, world
        </Header>

        <Paragraph>
          Lorem Ipsum dolor etc. etc.
        </Paragraph>

        { square ? 
          <Square 
            color="hotpink" 
          /> 
        : null}

        <People 
          names={ names } 
        />

        <Basket 
          items={ items } 
        />
        <h2>State Exercises</h2>
        <Clicked />

        <ToggleText 
          initial="Hello" 
          alternate="World"
        />

        <Counter 
          initial={ 50 } 
          max={ 100 }
        />

        <StepCounter 
          max={ 100 } 
          step={ 5 } 
        />

        <CatchMeIfYouCan 
          jump={ 100 } 
        />

        <RollCall 
          names={ names } 
        />
        <h2>State Tricksy Exercises</h2>
        <Colours 
          colours={ colours }
        />
        
        <Die
         sides={ 6 }
        />

        <LameGame 
          aim={ x }
        />

        <h2>Form Exercises</h2>

        <h3>01 Length</h3>
        <Length />
        
        <h3>02 Password Strength</h3>
        <PasswordStrength />
        
        <h3>03 Temp Converter</h3>
        <TempConverter />
        
        <h3>04 List </h3>
        <List />
        
        <h3>05 Adder </h3>
        <Adder />
        
        <h3>06 Transform </h3>
        <TransformParent />
        
        <h3>01 Tricksy Form </h3>
        <Forms 
          fields={
                    ["First Name", "Last Name", "Emails"]
                  } 
        />

        <h2>Prebuilt Component Exercises</h2>

        <h3>01 Progress</h3>
        <Progress />

        <h3>02 Catch Me 2 - Electric Boogaloo</h3>
        <CatchMeIfYouCan2 jump={ 100 }/>

        <h3>03 Password Check 2 - Electric Boogaloo</h3>
        <PasswordStrength2 />

        <h3>04 List 2 - Electric Boogaloo</h3>
        <List2 />

        <h3>05 Temp Convert 2 - Electric Boogaloo</h3>
        <TempConverter2 />

        <h3>06 Dates</h3>
        <Dates />

        <h3>07 Image Carousel</h3>
        <ImageCarousel />
        
        
    </React.Fragment>
  );
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;