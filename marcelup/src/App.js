import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import EnterButton from './Components/EnterButton';
import Converter from './Components/Converter';


function App() {
  return (
    <BrowserRouter>
    <header >
      <img src='logo192.png' alt='logo'/>
    </header>
    <Switch>
      <Route path="/converter" component={Converter} />
      <Route exact path="/" exact component={EnterButton} />

    </Switch>
  </BrowserRouter> 
  );
}

export default App;
