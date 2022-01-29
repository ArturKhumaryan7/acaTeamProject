import React from "react";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import axios from "axios";
import styels from "./CardPage.css"
import {EventContext} from "../../Contexts/EventContext"
import { getAdditionalUserInfo } from "firebase/auth";




function CardPage({ selectEvent, event, isLoading, likedEvents}) {
  const [eventCount, setEventCount] = useState(8);

  const lessEvent = event?.slice(0, eventCount);

  const onClickShowMor =  () => {
   setEventCount(eventCount + 4)
 };

 const onClickShowLes =  () => {
  setEventCount(eventCount - 4)
};



  const loadingFunc = function () {
    const arr = [...Array(8)].map(
      (item, index) => (item = [<Card key={index} loading={true} />])
    );

 
    const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
    const userLogInCard = window.localStorage.getItem("isUserLogIned")

    return isLoading
      ? arr
          
      : lessEvent?.map((obj, index) => (

            <Card
              userLogInCard= {userLogInCard}
              isLiked = {userInfo?.likes?.map((item) => item.id ).includes(obj.id)}
              likedEvents={likedEvents}
              onClick={() => {
                selectEvent(obj);
              }}
              key={index}
              loading={isLoading}
              {...obj}
            />
           
        ));
  };
  return  <div>
          <div className="eventCard">
           {loadingFunc()}
           </div>
           <div className="ShowMoreEvent">
              <button className="showMoreCard" onClick={onClickShowMor}>
              ... Show More
            </button>
            <button className="showMoreCard" onClick={onClickShowLes}>
              ... Show Less
            </button>
           </div>
           </div>
           ;
}

export default CardPage;
