import React from 'react';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Feature from '../Feature/Feature';
import ReachUs from '../ReachUs/ReachUs';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <Banner />
            <Cards />
            <Services />
            <Feature />
            <Reviews />
            <ReachUs />
        </div>
    );
};

export default Home;