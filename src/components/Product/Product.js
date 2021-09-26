import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h2 className="product-name">{name}</h2>
            <p><small>by: </small>{seller}</p>
            <p>Price: ${price}</p>
            <p>only {stock} left in the stock</p>
            <button onClick={ () => props.handleAddCart(props.product)} className="add-button">{<FontAwesomeIcon icon={faShoppingCart} />}add to cart</button>
            </div>
        </div>
    );
};

export default Product;