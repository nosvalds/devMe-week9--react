import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Multiplier from './components/Multiplier';

function App() {
  return (
    <div className="container-md">
      <Router>
        <Multiplier x={ 5 } y={ 7 } />
      </Router>
    </div>
  );
}

export default App;
