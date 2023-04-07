import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tShirt, addToCart }) => {
    const { price, picture, name } = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;