import React, { Component } from 'react'
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FaShoppingCart, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa'

class Home extends Component {
    render() {
        return (
            <Route>
             
       <div id="navlinks">
                <nav id="nav" className="navbar">
                <Link to='products'>Products</Link>
                <Link to="contact">Contact
                <FaEnvelope color='rgb(255, 215, 0' size={22} />
                </Link> 
                <Link to="cart">Cart
                <FaShoppingCart color='rgb(255, 215, 0' size={22} />
                <i class="fas fa-shopping-cart"></i>
                 </Link>
                <span>
                </span>
                
                </nav>
                </div>  
              
            </Route>
        )
    }
}

export default Home