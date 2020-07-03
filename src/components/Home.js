import React, { Component } from 'react'
import './Home.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Route>
                <nav className="navbar navbar-light bg-light justify-content-between">
                <Link to='products'>Products</Link>
                <Link to="contact">Contact</Link>
                <Link to="cart">Cart</Link>
                </nav>
            </Route>
        )
    }
}

export default Home