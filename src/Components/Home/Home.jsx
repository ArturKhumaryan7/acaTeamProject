import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import CardPage from "../CardPage";
import { useState } from "react";
import Footer from "../Footer/index"



const Home = ({
    selectEvent,
    event,
    isLoading,
    onAddToLiked,
    likedEvents
}) => {
    return (
        <div>
            <Header/>
            <Categories/>
            <CardPage 
            likedEvents={likedEvents}
            selectEvent={selectEvent}
            liked ={true}
            event = {event}
            isLoading = {isLoading}
            onAddToLiked={onAddToLiked}
            />
            <Footer />

           
        </div>
    );
};

export default Home;
