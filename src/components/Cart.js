import { connect } from 'react-redux'
import './Products.css'
import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {removeFromCart} from '../actions/removeFromCart';
import {cartItemQty} from '../actions/cartItemQty';



class Cart extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          message: ''
    //     }
    //     this.setState({
    //         message: 
    //     })
    // }
    
    render() {
        return (
            <div>
                <h1>Your selected Items</h1>
                <Link to='Products'>Back To Products</Link>

                <ul className="card-deck">
                    {
                        this.props.cart.map((product, index) =>

                            <li key={index}>
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
                                    <span>{product.count}</span>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.cartItemQty(product.id)} value="">inc qyt</button>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.removeFromCart(product)}>Remove from Cart</button>

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
        cart: state.selectedProduct.cart
    };

}

// const matchDispatchToProps = {
//     removeFromCart,
//      cartItemQty
// }
function matchDispatchToProps(dispatch) {
   return bindActionCreators({removeFromCart, cartItemQty},dispatch)
}


export default connect( mapStateToProps,matchDispatchToProps)(Cart)