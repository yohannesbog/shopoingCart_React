import { connect } from 'react-redux'
import './Products.css'
import React, { Component } from 'react'
import { selectedProduct } from '../reducers/selectedProduct'
import {
    Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {removeFromCart} from '../actions/removeFromCart';


class Cart extends Component {
    render() {
        return (
            <div>
                <h1>Your selected Items</h1>
                <Link to='Products'>Back To Products</Link>

                <ul className="card-deck">
                    {
                        this.props.cart.map(product =>

                            <li key={product.id}>
                                <div className='card'>
                                    <img className="card-img-top" id='image' src={product.picture} />

                                    <div className='card-bod'>
                                        <p className="card-text">{product.type}</p>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text">Description:{product.description}</p>

                                    </div>
                                    <div>
                                        <select id="dropdown">
                                            <option value="">Select Quantity</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                            <option value="6">Six</option>
                                            <option value="7">Seven</option>
                                            <option value="8">Eight</option>
                                            <option value="9">Nine</option>
                                            <option value="10">Ten</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buy Now</button>
                                    {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.removeFromCart(product)}>Remove From Cart</button> */}

                                </div>
                            </li>

                        )} 
                        </ul>
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        ...state,
        cart: state.selectedProduct.cart
    }
}
// function matchDispatchToProps(dispatch) {
//    return bindActionCreators({removeFromCart: removeFromCart}, dispatch)
// }


export default connect( mapStateToProps)(Cart)