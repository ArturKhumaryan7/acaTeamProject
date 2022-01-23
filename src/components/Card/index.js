import React from "react";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.css";
import {Link} from "react-router-dom";

function Card( {
  id,
  name,
  avatar,
  price,
  location,
  endDate,
  follow,
  loading,
  onClick,
}) {
const [isLiked, setIsLiked] = useState(false)

const handeClike = () => {
  setIsLiked(!isLiked)
}


    return ( 
      <div className="card">
     { loading ?
     (<ContentLoader 
      speed={1}
      width={400}
      height={400}
      viewBox="0 0 400 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#a5a4a4"
      
    >
      <rect x="0" y="0" rx="20" ry="20" width="280" height="140" /> 
      <circle cx="66" cy="141" r="27" /> 
      <rect x="127" y="135" rx="0" ry="0" width="121" height="47" /> 
      <rect x="191" y="194" rx="0" ry="0" width="57" height="50" /> 
      <rect x="15" y="190" rx="0" ry="0" width="90" height="12" /> 
      <rect x="17" y="233" rx="0" ry="0" width="90" height="12" /> 
      <rect x="16" y="211" rx="0" ry="0" width="120" height="12" /> 
      <rect x="130" y="221" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>)  : (
      <> 

        <Link to={`event/${id}`}>
        <img className="cardImage" onClick={onClick} height={140} width={280} src={avatar}/>
        </Link>
          <div className="eventInfo">
            <p className="price" >{price}</p>
            <p className="title">{name}</p>
 
          <div className="additionalInfo">
             <p className="info">
             <i className="fas fa-map-marker-alt"></i>
                  {location}
             </p>
             <p className="info">
                  <i className="fas fa-calendar-alt"></i>
                   {endDate}
             </p>
         <p> <i className="fas fa-user-alt"></i>
         {follow} followers
         </p>
      </div>
      <button className="action">
          <img className="heart" width={25} height={25} onClick={handeClike} src={isLiked ? "/img/HeartOutline.svg":"/img/heart.svg"} />
      </button>
  </div>     
     </>
    )   }
    </div>   
 );
 }

 export default Card;
  
    


    