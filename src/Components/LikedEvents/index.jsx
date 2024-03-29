import React from 'react';
import Footer from "../Footer/footer";
import styles from './LikedItems.css';

function LikedEvents  ()  {

const likedCard = JSON.parse(window.localStorage.getItem("currentUser"))

  
return (
    <>

         
     <h1 className='likesStyle'>Likes</h1>

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
       <Footer/>
    </>
   
        

);
};

export default LikedEvents;
