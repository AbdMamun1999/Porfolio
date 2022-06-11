import React, { useEffect, useState } from 'react';
import Product from './Product';

const Portfolio = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://enigmatic-headland-12539.herokuapp.com/product')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-white my-10 text-5xl font-bold'>Recent Works</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-x-3 gap-y-5'>
                {
                    products.map((product) => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Portfolio;