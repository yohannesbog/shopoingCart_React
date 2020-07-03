import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import './Products.css'
import Home from './Home'
import {
    Link
} from "react-router-dom";
import {addToCart} from '../actions/addTocart';
import {cartItemQty} from '../actions/cartItemQty';
import Checkout from './Checkout'
import Footer from './Footer'




class Products extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }

        this.buy = this.buy.bind(this)
    }

    buy() {
        alert('Confirm Buying')
    }


    render() {
        return (
            <div  >
                <Home />
                <ul className="card-deck">

                    {
                        this.props.products.map(product =>
                            <li key={product.id}>
                                <div className='card'>
                                    <Link to= {'/product/checkout'}><img className="card-img-top" id='image' src={product.picture}/></Link>
                                    <div className='card-bod'>
                                   <Link to= {'/product/checkout'}><h5 className="card-title" >{product.brand} </h5> </Link> 
                                    <p className="card-text">{product.type}</p>
                                    <p className="card-text">${product.price}</p>
                                    </div>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.addToCart(product)}>Add To Cart</button>

                                   {/* <Link to= {'/cart'} className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () =>this.props.addToCart(product)}>Add To Cart</Link> */}
                                   <Link to= {'/product/checkout'}> <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick ={this.buy}>Buy Now</button></Link>

                                </div>
                            </li>
                        )}
                </ul>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
      return {
          products: state.products
      }
}
function matchDispatchToProps(dispatch) {
     return bindActionCreators({addToCart: addToCart}, dispatch);

}


export default connect(mapStateToProps, matchDispatchToProps)(Products)

