import Categories from "../Categories/Categories";
import Header from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import CardPage from "../CardPage";
import { useState } from "react";


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
            <Categories items={[
                'For you',
                'Online',
                'Today',
                'This weekend',
                'Free',
                'Music',
                'Food & Drink',
                'Charity & Causes']}/>
            <CardPage 
            likedEvents={likedEvents}
            selectEvent={selectEvent}
            liked ={true}
            event = {event}
            isLoading = {isLoading}
            onAddToLiked={onAddToLiked}
            />
           
        </div>
    );
};

export default Home;
