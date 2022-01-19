import React from 'react';
import Categories from "../Components/Categories";
import Header from "../Components/Header";
import '../../src/Styles/Ctegories.css'
import '../../src/Styles/Header.css'

const Home = () => {
    return (
        <div>
            <Header/>
            <Categories items={[
                'For you',
                'Online',
                'Today',
                'This weekend',
                'Free',
                'Music',
                'Food & Drink',
                'Charity & Causes']}/>
        </div>
    );
};

export default Home;
