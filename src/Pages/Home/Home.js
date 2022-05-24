import React from 'react';
import Banner from './Banner';
import Footer from './Footer/Footer';
import NavBanner from './NavBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NavBanner></NavBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;