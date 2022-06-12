import React from 'react';
import about from '../../Images/Hero/about.png'
import { saveAs } from "file-saver";




const AboutMe = () => {
    return (
        <div class="card lg:card-side bg-primary mt-10 lg:flex-row-reverse w-[90%] lg:w-[65%] mx-auto z-0" id='about'>
            <figure data-aos="fade-left" data-aos-duration="1000">
                <img src={about} alt="Album" className='w-[300px] lg:w-[400px]' />
            </figure>
            <div class="card-body text-white p-2 lg:p-8" data-aos="fade-up" data-aos-duration="1000">
                <h1 className='text-5xl font-bold'>About Me</h1>
                <p className='mt-3'>
                    I am a web developer. I am an expert in HTML, CSS, JavaScript, and React JS. I also have experience working with Node JS, Express JS, and MongoDB. I have the ability to work under pressure and adapt to different environments with fast learning capabilities. I would like to be a part of an organization where I could use and enhance my knowledge and talent for
                </p>

                <div class="card-actions justify-start" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="1000"
                    data-aos-duration="1000">
                    <a
                        href="https://drive.google.com/uc?export=download&amp;id=1vSmhsBgO9HcmhkqlLp57yfe1cJMw9jNF"
                        class="btn btn-primary bg-green-600 text-white hover:bg-green-600">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;