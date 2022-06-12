import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';

const MySkills = () => {
    const percentage = 66;
    return (
        <div className='mb-20 mt-20 w-[90%] mx-auto' id='skills'>
            <h1 className='text-5xl text-center font-bold text-white my-10'>My Skill</h1>
            <div className='  grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 text-white'>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>HTML</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 90 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>CSS</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 85 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>JavaScript</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 70 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>Boostrap</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 80 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>Tailwind</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 80 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>Node</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 50 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>Express JS</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 50 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

                <div className='text-center text-white' style={{ width: "100px" }} data-aos="fade-up" data-aos-duration="1000">
                    <p className='my-5'>MongoDB</p>
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 55 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                />
                            );
                        }}
                    </VisibilitySensor>
                </div>

            </div>
        </div>
    );
};

export default MySkills;