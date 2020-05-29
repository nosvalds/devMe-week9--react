import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';

function App() {
  return (
    <div className="mx-auto" style={{width: 400}}>
      <Router>
        <MinimumLength length={ 5 } />
        <Route path="/hide-me">
          <HideMe>Blah blah blah blah</HideMe>
        </Route>
        <Route path="/count-by/:step" render={ ({ match }) => (
                <CountBy 
                    step={ +match.params.step }
                />
        )}/>
        <Route path="/even-clicks" component={ EvenClicks } />
        <Route path="/multiplier/:x/:y" render={ ({ match }) => (
                <Multiplier 
                    x={ +match.params.x }
                    y={ +match.params.y }
                />
        )}/>
      </Router>
    </div>
  );
}

export default App;
