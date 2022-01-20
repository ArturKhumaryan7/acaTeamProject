import { useState } from 'react';
import like from '../../../assets/img/svgexport-9.svg'
import dislike from '../../../assets/img/svgexport-10.svg'
import "./LikedItems.css"

const LikedItems = ({ imageUrl, price, title, page, location, data }) => {
    const [liked, setLiked] = useState(true);
    const onSelectLike=((isLiked)=>{
        setLiked(!isLiked);
    })
    return (
        <div className='div'>
            <div className='div1'>
                <a className='a' href={page} >{title}</a>
                <h3 className='data'>{data}</h3>
                <h3 className='place'>{location}</h3>
                <h3 className='price'>{price}</h3>
            </div>
            <div className='div2'>
                <img className='imga' src={imageUrl}/>
                <button onClick={() => onSelectLike((liked))} className={'btnl'}>
                    <img className={'like'} src={liked?like:dislike}/>
                </button>

            </div>
        </div>
    );
};

export default LikedItems;
