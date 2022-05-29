import React from 'react';
import Contact from '../Contact';
import ExtraSection from '../ExtraSection/ExtraSection';
import Product from '../Product/Product';
import Banner from './Banner';
import Footer from './Footer/Footer';
import NavBanner from './NavBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NavBanner></NavBanner>
            <Product></Product>
            <ExtraSection></ExtraSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;