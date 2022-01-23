import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import EventPage from "../EventPage";
import CardPage from "../CardPage";
import { useState } from "react";


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
            <Routes>
            <Route path="/" element={<CardPage selectEvent/>}>
            </Route>
            </Routes>
           
        </div>
    );
};

export default Home;
