import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import React from 'react';
import './Product.css';

const Product = (props) => {
    // const {hundelCart} = props
    const {name,picture,balance} = props.product
  

    return (
        <div className='product'>
            <div className='product-items'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p><strong>price: {balance}</strong></p>
            </div>
            <button onClick={() => props.hundelCart(props.product)}  className='add-Btn'>Add To Cart 
            <FontAwesomeIcon className='add-icone' icon={faShoppingCart}></FontAwesomeIcon>
           
            </button>
        </div>
    );
};

export default Product;