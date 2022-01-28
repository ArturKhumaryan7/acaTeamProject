import React from 'react';
import './LikedItems/LikedItems.css'
import LikedItems from './LikedItems/LikedItems';
import FooterSecond from "../Footer/footer"

const Liked = ({items}) => {
    return (
        <>
        <div className='top'>
            <h1 className='h1'>Likes</h1>
            {
                items.map((obj)=><LikedItems key={obj.id} {...obj}/>)
            }
            
        </div>
        <FooterSecond />
        </>
    );
};

export default Liked;
