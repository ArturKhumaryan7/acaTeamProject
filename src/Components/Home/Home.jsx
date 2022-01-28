import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import EventPage from "../EventPage";
import CardPage from "../CardPage";
import { useState } from "react";
import Footer from "../Footer/index"



const Home = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Routes>
            <Route path="/" element={<CardPage  selectEvent/>}>
            </Route>
            </Routes>
            <Footer />
            
           
        </div>
    );
};

export default Home;
