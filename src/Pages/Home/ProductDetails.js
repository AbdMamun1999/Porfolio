import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product,setProduct] = useState({})
    const {productId} = useParams()

    useEffect(()=>{
        fetch(`https://enigmatic-headland-12539.herokuapp.com/product/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    
    return (
        <div className='h-full pb-5 bg-primary grid grid-cols-1 justify-items-center gap-5'>
            <div>
                <h1>{product.name}</h1>
            </div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-5/6 mx-auto'>
                    {
                        product.img?.map((image, index) => <img src={image} className="w-[400px] " alt={product.name}></img>)
                    }
                </div>
            </div>
            <ul className='w-5/6 mx-auto text-white list-disc'>
                {
                    product.details?.map((detail, index) => <li>{detail}</li>)
                }
            </ul>
            <ul className='w-5/6 mx-auto text-white'>
                <li className='list-disc'>
                    <span className='font-bold'>
                        Technology
                    </span>: {product.technologies?.map((tech, index) => <span>{tech}</span>)
                    }</li>
            </ul>
            <div className='flex flex-row w-5/6 mx-auto justify-center text-white gap-5 mt-5'>
                <div >
                    <a
                        className='bg-green-600 rounded py-2 px-3'
                        href={product.client} target="_blank">Client</a>
                </div>
                <div>
                    <a
                        className='bg-green-600 rounded py-2 px-3'
                        href={product.server} target="_blank">Server</a>
                </div>
                <div>
                    <a
                        className='bg-green-600 rounded py-2 px-3'
                        href={product.project_live} target="_blank">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;