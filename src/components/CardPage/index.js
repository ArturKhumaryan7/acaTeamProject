import React from "react";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import axios from "axios";
import styels from "./CardPage.css"
import {EventContext} from "../../Contexts/EventContext"



function CardPage({selectEvent}) {
  const [isLoading, setIsLoading] = useState(true);
  const {event,setEvent,setFilterArr} = useContext(EventContext)
  
  useEffect(() => {
    async function eventCardData() {
      const cardInfo = await axios.get(
        "https://61e2a20e3050a10017682205.mockapi.io/newEvent"
      );
      setIsLoading(false);
      setFilterArr(cardInfo.data)
      setEvent(cardInfo.data);
    }
    eventCardData();
  }, []);
  
  const loadingFunc = function () {
    const arr = [...Array(12)].map(
      (item, index) => (item = [<Card key={index} loading={true} />])
    );

    return isLoading
      ? arr
      : event.map((obj, index) => (
          
            <Card
              onClick={() => {
                selectEvent(obj);
              }}
              key={index}
              loading={isLoading}
              {...obj}
            />
           
        ));
  };
  return <div className="eventCard">{loadingFunc()}</div>;
}

export default CardPage;
