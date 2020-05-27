import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import Clicked from './components/state/Clicked';
import Length from './components/forms/Length';
import Adder from './components/forms/Adder';
import ToggleText from './components/state/ToggleText';
import LameGame from './components/tricksy_state/LameGame';
import Forms from './components/forms/Forms'

const App = () => (
    <Router>
        <Header>Welcome to my App</Header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/clicked">Clicked</Link>
            <Link to="/length">Length</Link>
            <Link to="/adder">Adder</Link>
            <Link to="/toggle-text">Toggle Text</Link>
            <Link to="/lame-game">Lame Game</Link>
            <Link to="/forms">Forms</Link>
        </nav>
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
    </Router>
)

export default App;
