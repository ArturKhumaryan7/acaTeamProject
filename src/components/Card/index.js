import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.moduls.css";


function Card( {
  id,
  title,
  imageUrl,
  price,
  location,
  data,
  followers,
  page,
  type,
  liked = false,
  loading= false
}) {
const [isLiked, setIsLiked] = React.useState(false)

const handeClike = () => {
  setIsLiked(!isLiked)
}


    return ( 
      <div className="card">
     { loading ?
     (<ContentLoader 
      speed={2}
      width={400}
      height={400}
      viewBox="0 0 400 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="250" height="130" /> 
      <circle cx="66" cy="141" r="27" /> 
      <rect x="127" y="135" rx="0" ry="0" width="121" height="47" /> 
      <rect x="191" y="194" rx="0" ry="0" width="57" height="50" /> 
      <rect x="15" y="190" rx="0" ry="0" width="90" height="12" /> 
      <rect x="17" y="233" rx="0" ry="0" width="90" height="12" /> 
      <rect x="16" y="211" rx="0" ry="0" width="120" height="12" /> 
      <rect x="130" y="221" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>)  : (
      <>
      <a  href={page} target="blank">
      <img className="cartImage" height={130} width={250} src={imageUrl}/>
      </a>
 
          <div className="event-info">
            <p className="price">{price}</p>
            <p className="title">{title}</p>
 
          <div className="additional-info">
             <p className="info">
             <i className="fas fa-map-marker-alt"></i>
                  {location}
             </p>
             <p className="info">
                  <i className="fas fa-calendar-alt"></i>
                   {data}
             </p>
         <p> <i className="fas fa-user-alt"></i>
         {followers}
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
  
    


    