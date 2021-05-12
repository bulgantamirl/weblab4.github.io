import React from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/header/Header';
import { HashRouter, Route, Link } from "react-router-dom";
import './styles/main.css';
    

ReactDOM.render(
  <HashRouter>
  <div>
  <Header />
    <Route exact path="/">
      <div className="btn">     
      <Link to="/states">Switch to States</Link>
      </div>
      <Example />
    </Route>
    <Route  path="/states">
      <div className="btn">
      <Link to="/example">Switch to Example</Link>
      </div>
      <States />
    </Route>   
    <Route  path="/example"> 
      <div className="btn">
        <Link to="/states">Switch to States</Link>
      </div>
      <Example />
    </Route>
    
  </div>
  </HashRouter>,
  document.getElementById('reactapp'),
);

