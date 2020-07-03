import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';

import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';


// const store = createStore(allReducers);





function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/products' exact component={Products}/>
    <Route path='/cart' exact component={Cart}/>
    <Route path='/product/checkout' exact component={Checkout}/>

    </div>
    </Router>
  );
}

export default App;
