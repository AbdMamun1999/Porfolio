import React from 'react';
import about from '../../Images/Hero/about.png'
import { saveAs } from "file-saver";




const AboutMe = () => {
    const saveFile = () => {
        saveAs(
            "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            "example.pdf"
        );
    };
    return (
        <div class="bg-primary text-white" id='about'>
            <div class="flex flex-col-reverse lg:flex-row gap-20 w-[80%] mx-auto ">
                <div className=' flex-1'>
                    <div className='mt-10 ml-5'>
                        <h1 className='text-5xl font-bold '>About Me</h1>
                        <p className='mt-3'>
                            I am a web developer. I am an expert in HTML, CSS, JavaScript, and React JS. I also have experience working with Node JS, Express JS, and MongoDB. I have the ability to work under pressure and adapt to different environments with fast learning capabilities. I would like to be a part of an organization where I could use and enhance my knowledge and talent for
                        </p>
                       
                        <div className='mt-3'>
                            <a
                                className='bg-green-600 rounded py-2 px-3'
                                href="https://drive.google.com/uc?export=download&amp;id=1vSmhsBgO9HcmhkqlLp57yfe1cJMw9jNF"
                                download >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-primary ">
                    <figure><img src={about} alt="Hero" className='bg-primary w-[500px] h-[400px]' /></figure>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;