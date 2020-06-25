import React, { Component } from 'react'
import './Products.css'
import Home from './Home'
import pic from './Images/shoes1.jpg'
import data from '../productData'
import {
    Link
} from "react-router-dom";

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data
        }
    }
    
    addToCart = () => {
        alert('Add To Cart')
    }
    
    render() {
        return (
            <div  >
                <Home />

                <ul className="card-deck">
                    {
                        data.products.map(product =>
                            <li key={product.id}>
                                <div className='card'>
                                    <a><img className="card-img-top" id='image' src={pic} /></a>
                                    <div className='card-bod'>
                                   <Link><h5 class="card-title">{product.brand}</h5> </Link> 
                                    <p class="card-text">{product.type}</p>
                                    <p class="card-text">${product.price}</p>
                                    </div>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.addToCart}>Add To Cart</button>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buy Now</button>
                                </div>
                            </li>
                        )}
                </ul>
            </div>
        )
    }
}

export default Products

