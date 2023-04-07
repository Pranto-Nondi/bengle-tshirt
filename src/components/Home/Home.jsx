import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <p>T-Shirt:{products.length}</p>
        </div>
    );
};

export default Home;