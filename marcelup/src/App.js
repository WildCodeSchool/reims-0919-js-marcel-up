import React from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './App.css';
import Converter from './Components/Converter';


function App() {
  return (
    <div className="App">
      <Converter />
      <ScrollUpButton />

    </div>
  );
}

export default App;
