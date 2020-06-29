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
                <Link to='Products'>Products</Link>
                <Link to="Shoes">Shoes</Link>
                <Link to="Cloths">Cloths</Link>
                <Link to="cart">Cart</Link>

                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </Route>
        )
    }
}

export default Home
//                     {/* <Link to='/'>Home</Link>

//                     <Link to="Products">Products</Link>
//                     <Link to="services">Shoes</Link>
//                     <Link to="clients">Cloths</Link>
//                     <Link to="contact">Contact</Link> */}