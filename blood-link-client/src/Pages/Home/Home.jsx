import React from 'react';
import Banner from './Components/Banner';
import Motivation from './Components/Motivation';
import Highlighting from './Components/Highlighting';
import DonateUs from './Components/DonateUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Motivation/>
            <Highlighting/>
            <DonateUs/>
        </div>
    );
};

export default Home;