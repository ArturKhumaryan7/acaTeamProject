import React from 'react';
import "./Order.css"

const Order = ({ eventInfo }) => {
    console.log(eventInfo[0])
    return (
        <div>
            <a className='order-name' href={"/event/" + eventInfo.id}>
                <div className='order'>
                    <img className='order-img' src={eventInfo.avatar}/>
                    <div className='order-text'>
                        <span>{eventInfo.title}</span>
                        <h4 className='order-data'>{eventInfo.startDate}</h4>
                        <h4 className='order-location'>{eventInfo.location}</h4>
                        <h4 className='order-price'>{eventInfo.price} order</h4>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Order;
