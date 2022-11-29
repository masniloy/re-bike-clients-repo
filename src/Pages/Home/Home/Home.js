import React from 'react';
import About from '../../About/About';
import Advertiseditem from '../../Advertiseditem/Advertiseditem';
import Category from '../../Category/Category';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner><br /><br />
            <Advertiseditem></Advertiseditem><br /><br />
            <Category></Category><br /><br />
            <About></About>
        </div>
    );
};

export default Home;