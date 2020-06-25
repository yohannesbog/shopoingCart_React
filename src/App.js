import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/Products' exact component={Products}/>

    {/* <Home /> */}
    {/* <Products /> */}
    </div>
    </Router>
  );
}

export default App;
