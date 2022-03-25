import React from 'react';

const Product = (props) => {
    const {name,picture} = props.product
    return (
        <div>
            <h1>{name}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default Product;