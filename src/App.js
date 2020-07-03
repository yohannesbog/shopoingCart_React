import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Cloths from './components/Cloths';

import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from './components/Cart';

import allReducers from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ProductDetail from './components/ProductDetail';


// const store = createStore(allReducers);





function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/cloths' exact component={Cloths}/>

    <Route path='/products' exact component={Products}/>
    <Route path='/cart' exact component={Cart}/>
    <Route path='/product/detail' exact component={ProductDetail}/>

    {/* <Home /> */}
    {/* <Products /> */}
    </div>
    </Router>
  );
}

export default App;
