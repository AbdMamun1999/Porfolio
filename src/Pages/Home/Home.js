import React from 'react';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Contact from './Contact';
import MySkills from './MySkills';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;