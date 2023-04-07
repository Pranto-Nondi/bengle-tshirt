import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])
    const addToCart = (tShirt) => {
        const exixt = cart.find(ts => ts._id === tShirt._id)
        if (exixt) {
            toast.error("Oh No,You Have Already Added This Shirt", { autoClose: 2000 });
        }
        else {
            setCart([...cart, tShirt])
        }

    }
    const removeToCart = (id) => {
        const remain = cart.filter(tShirt => tShirt._id !== id)
        setCart(remain)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tShirt => <Tshirt key={tShirt._id} tShirt={tShirt} addToCart={addToCart}></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} removeToCart={removeToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;