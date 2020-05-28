import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Clicked from './components/state/Clicked';
import Length from './components/forms/Length';
import Adder from './components/forms/Adder';
import ToggleText from './components/state/ToggleText';
import LameGame from './components/tricksy_state/LameGame';
import Forms from './components/forms/Forms';
import Footer from './components/Footer';
import FourOhFour from './components/FourOhFour';
import Square from './components/Square';
import StepCounter from './components/state/StepCounter';
import Stuff from './components/Stuff';

const App = () => (
    <Router>
        <Header>Welcome to my App</Header>
        <Switch>
            <Route exact path="/">
                <h2>Welcome Home, select a link from the footer to see some sweet React mini-apps</h2>
            </Route>
            <Route exact path="/all-stuff" component={Stuff} />
            <Route exact path="/clicked" component={Clicked} />
            <Route exact path="/length" component={Length} />
            <Route exact path="/adder" component={Adder} />
            <Route path="/toggle-text">
                <ToggleText 
                initial="Hello" 
                alternate="World"
                />
            </Route>
            <Route path="/lame-game">
                <LameGame
                    aim={ 5 }
                />
            </Route>
            <Route path="/forms">
                <Forms 
                fields={
                            ["First Name", "Last Name", "Emails", "Job Titles"]
                        } 
                />
            </Route>
            <Route path="/squares/:colour" render={ ({ match }) => (
                <Square color={ match.params.colour } />
            )}/>
            <Route path="/steps/:max/:step" render={ ({ match }) => (
                <StepCounter 
                    max={ +match.params.max }
                    step={ +match.params.step }
                />
            )}/>
            <Route component={FourOhFour}/>
        </Switch>
        <Footer/>
    </Router>
)

export default App;
