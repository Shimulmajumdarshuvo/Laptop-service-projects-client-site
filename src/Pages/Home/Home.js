import React from 'react';
import Contact from '../Contact';
import CustomerReview from '../CustomerReview/CustomerReview';
import Device from '../Device';
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
            <Device></Device>
            <Product></Product>

            <CustomerReview></CustomerReview>
            <ExtraSection></ExtraSection>

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;