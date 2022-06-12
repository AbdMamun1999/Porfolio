import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Portfolio.css"

const Product = ({ product }) => {
    const { img, _id } = product;
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div class="bg-base-100 shadow-xl main relative product-div" data-aos="fade-up"
        data-aos-duration="3000">
            <figure><img src={img[0]} alt="" /></figure>
            <div className='absolute top-0 w-full h-full flex justify-center items-center button-div'>
                <button
                    onClick={() => handleNavigate(_id)}
                    class="btn btn-primary block mx-auto button-div">
                    Details
                </button>
            </div>
        </div>
    );
};

export default Product;