import React from 'react';

const Cart = ({ cart,removeToCart }) => {

    return (
        <div>
            <h2>Order Summary:{cart.length}</h2>
            {
                cart.map((tShirt,index) => <p key={index}>{tShirt.name}
                    <button onClick={() => removeToCart(tShirt._id)} >X</button></p>)
            }
        </div>
    );
};

export default Cart;