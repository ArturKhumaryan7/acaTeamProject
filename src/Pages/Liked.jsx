import React from 'react';
import LikedPage from "../Components/LikedPage";
import '../../src/Styles/LikedPage.css'

const Liked = ({items}) => {
    return (
        <div className='top'>
            <h1 className='h1'>Likes</h1>
            {
                items.map((obj)=><LikedPage key={obj.id} {...obj}/>)
            }
        </div>
    );
};

export default Liked;
