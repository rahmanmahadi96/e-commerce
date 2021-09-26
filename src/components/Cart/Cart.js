import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
   
    
    for(const product of cart){
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) /10;
    const grand = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.length}</h5>
            <h5><small>Total</small> {total.toFixed(2)}</h5>
            <h5>Delivery: {shipping}</h5>
            <h5>Tax: {tax.toFixed(2)}</h5>
            <h5>Grand Total: {grand.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;