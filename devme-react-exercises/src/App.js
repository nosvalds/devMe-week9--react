import React from 'react';
import './App.css';
import Stuff from './components/Stuff';
import FadeIn from './components/FadeIn';

const App = () => (<FadeIn time="5000ms"><Stuff /></FadeIn>)

export default App;
