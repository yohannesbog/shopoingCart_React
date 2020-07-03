import { connect } from 'react-redux'
import './Products.css'
import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";
import {bindActionCreators} from 'redux'
import {removeFromCart} from '../actions/removeFromCart';
import {cartItemQty} from '../actions/cartItemQty';
import {subQuantity} from  '../actions/SubQuantity'
import './Cart.css'


class Cart extends Component {
 render() {
        return (
            <div>
                <h1 id='header'>Your selected Items</h1>
                <Link to='products' id='back'> Back To Products</Link>

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
                
                                    <span>{product.count}</span>
                                   <div>

                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.cartItemQty(product.id)} value="">increase qty</button>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.subQuantity(product.id)} value="">decrease qty</button>
                                    </div>
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
   return bindActionCreators({removeFromCart, cartItemQty, subQuantity},dispatch)
}


export default connect( mapStateToProps,matchDispatchToProps)(Cart)