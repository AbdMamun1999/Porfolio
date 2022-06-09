import React from 'react';

const MySkills = () => {
    return (
        <div className='mb-20 mt-20'>
            <h1 className='text-5xl text-center font-bold text-white my-10'>My Skill</h1>
            <div className='w-[80%] mx-auto grid grid-cols-4 justify-items-center gap-10 text-white'>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>HTML</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>CSS</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>Bootstrap</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>Tailwind</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>JavaScript</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>React JS</h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>
                    Node JS
                    </h5>
                </div>
                <div className='text-center'>
                    <div class="radial-progress" style={{ "--value": 80 }}>80%</div>
                    <h5 className='text-4xl font-bold mt-5'>MongoDB</h5>
                </div>
              
            </div>
        </div>
    );
};

export default MySkills;