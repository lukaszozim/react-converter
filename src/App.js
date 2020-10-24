import React from 'react';
import './App.css';
import  { Button } from './components/Button';
import {Calc} from './components/Calc';

function App() {
  return (
    <div className="App">
     <Button label="click"/>
    <Calc/>
     
    </div>
  );
}

export default App;
