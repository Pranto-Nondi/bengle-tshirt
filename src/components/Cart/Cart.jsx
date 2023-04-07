import React from 'react';
import './Cart.css'
const Cart = ({ cart, removeToCart }) => {
    let msg;
    if (cart.length === 0) {
        msg = <p>Plz Add Some Shirt</p>
    }
    else {
        msg = <div>Tnx For Buy Shirt</div>
    }

    return (
        <div>
            <h2 className={cart.length === 0 ? 'red' : 'blue'}>Order Summary:{cart.length}</h2>
            <h3 className={`bold ${cart.length === 0 ? 'red' : 'orange'}`}>{cart.length === 0 ? 'Oh No' : 'WOW Great'}</h3>
            {
                cart.length > 2 ? <span className='purple'>Great Work and More Buy Shirt</span> : <span>Oh  No, More Buy!!</span>
            }
            {
                msg
            }
            {
                cart.map((tShirt, index) => <p key={index}>{tShirt.name}
                    <button onClick={() => removeToCart(tShirt._id)} >X</button></p>)
            }
            {
                cart.length === 3 && <p>Good Job, Keep Buy</p>
            }
            {
                cart.length > 4 || <p> Buy 5 or More Prduct for Discount</p>
            }
        </div>
    );
};

export default Cart;