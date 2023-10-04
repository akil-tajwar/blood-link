import React from 'react';
import Banner from './Components/Banner';
import Motivation from './Components/Motivation';
import Highlighting from './Components/Highlighting';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Motivation/>
            <Highlighting/>
        </div>
    );
};

export default Home;