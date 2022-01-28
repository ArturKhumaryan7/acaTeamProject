import React from 'react';
import "./Order.css"


const Order = ({imageUrl,price,title,page,location,data}) => {
    return (
        <div className='order'>
            <img className='order-img' src={imageUrl}/>
            <div className='order-text'>
                <a className='order-name' href={page}>{title}</a>
                <h3 className='order-data'>{data}</h3>
                <h3 className='order-location'>{location}</h3>
                <h3 className='order-price'>{price} order</h3>
            </div>
        </div>
    );
};

export default Order;
