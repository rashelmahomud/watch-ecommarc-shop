import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,picture,balance} = props.product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <strong>price: {balance}</strong>
        </div>
    );
};

export default Product;