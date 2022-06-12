import React from 'react';
import img from "../../Images/Hero/mamun.png"
import location from "../../Images/icon/geo-alt-fill.svg"
import email from "../../Images/icon/envelope-fill.svg"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-primary  text-white">
            <div class="flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-20 w-[90%] lg:w-[60%]">
                <div class=" flex-1 mt-10">
                    <p className='mb-2'>Hello there!</p>
                    <h1 class="text-4xl font-bold">I'm Abdullah Al Mamun</h1>
                    <h4 className='mt-2 font-bold'>Web Developer</h4>
                    <div>
                        <div className='mt-2 flex gap-2 items-center'>
                            <FaMapMarkerAlt />
                            <span>Dhaka , Bangladesh</span>
                        </div>
                        <div className='mt-2 flex gap-2 items-center'>
                            <FaEnvelope></FaEnvelope>
                            <span>abdullahalmamun12121999@gmail.com</span>
                        </div>
                        <div className='mt-4 lg:mt-10'>
                            <ul className='flex gap-5 '>
                                <li className='rounded-[50%] border w-[50px] h-[50px] flex justify-center items-center hover:bg-sky-700 hover:border-sky-700  ease-in-out duration-300'>
                                    <a href="#">
                                        <FaLinkedin></FaLinkedin>
                                    </a>
                                </li>
                                <li className='rounded-[50%] border w-[50px] h-[50px] flex justify-center items-center hover:bg-[#385898] hover:border-[#385898] ease-in-out duration-300'>
                                    <a href="#">
                                        <FaFacebookSquare></FaFacebookSquare>
                                    </a>
                                </li>
                                <li className='rounded-[50%] border w-[50px] h-[50px] flex justify-center items-center hover:bg-[#2ca16b] hover:border-[#2ca16b] ease-in-out duration-300'>
                                    <a href="#">
                                        <FaWhatsapp></FaWhatsapp>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 w-full max-w-sm  bg-base-100" data-aos="fade-up"
                    data-aos-duration="3000">
                    <img src={img} alt="Shoes" className='bg-primary' />
                </div>
            </div>
        </div>
    );
};

export default Banner;