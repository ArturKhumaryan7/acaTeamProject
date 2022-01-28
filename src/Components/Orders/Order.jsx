import React from 'react';
import "./Order.css"


const Order = ({ avatar, price, name, location, startDate, id }) => {
    return (
        <div>
            <a className='order-name' href={"/event/" + id}>
                <div className='order'>
                    <img className='order-img' src={avatar}/>
                    <div className='order-text'>
                        <span>{name}</span>
                        <h4 className='order-data'>{startDate}</h4>
                        <h4 className='order-location'>{location}</h4>
                        <h4 className='order-price'>{price} order</h4>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Order;
