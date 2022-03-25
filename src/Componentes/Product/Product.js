import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';


import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,picture,balance} = props.product
    const hundelCart = () => {
        console.log('Hello hundel');
    }
    return (
        <div className='product'>
            <div className='product-items'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p><strong>price: {balance}</strong></p>
            </div>
            <button onClick={hundelCart} className='add-Btn'>Add To Cart 
            <FontAwesomeIcon className='add-icone' icon={faShippingFast}></FontAwesomeIcon>
           
            </button>
        </div>
    );
};

export default Product;