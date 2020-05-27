import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import Clicked from './components/state/Clicked';
import Length from './components/forms/Length';
import Adder from './components/forms/Adder';


const App = () => (
    <Router>
        <Header>Welcome to my App</Header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/clicked">Clicked</Link>
            <Link to="/length">Length</Link>
            <Link to="/adder">Adder</Link>
        </nav>
        <Route exact path="/clicked" component={Clicked} />
        <Route exact path="/length" component={Length} />
        <Route exact path="/adder" component={Adder} />
    </Router>
)

export default App;
