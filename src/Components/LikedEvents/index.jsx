import React from 'react';
import { useState } from 'react';
import CardPage from '../CardPage';
import Card from '../Card';
import styles from './LikedItems.css';

function LikedEvents  ()  {

const likedCard = JSON.parse(window.localStorage.getItem("currentUser"))

  
return (
    <>
        { likedCard?.likes?.map((obj) => 
           <div className='liked'>
           <img className='liked-img' src={obj.avatar}/>
           <div className='liked-text'>
               <a className='liked-name' href={`event/${obj.id}`}>{obj.name}</a>
               <h3 className='liked-data'>{obj.endDate}</h3>
               <h3 className='liked-location'>{obj.location}</h3>
               <h3 className='liked-price'>{obj.price}</h3>
           </div>
          </div>
        )
        
       }
    </>
   
        

);
};

export default LikedEvents;
