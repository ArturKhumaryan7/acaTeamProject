import React from "react";
import Order from "../components/Orders/Order"
import '../Styles/Tickets.css'
import avatar from '../assets/img/user.png'
import icon from '../assets/img/svgexport-8 (1).svg'
import '../components/LikedEvents/LikedItems/LikedItems.css'
import '../components/Orders/Order.css'


const Ticket = ({items,items2}) => {
    return (
        <div>
            <div className='user-div'>
                <img className='user-img' src={avatar}/>
                <div className='ticket-div5'>
                    <h1 className='ticket-h1'>Hovhannes Danielyan</h1>
                    <ul className='ticket-ul1'>
                        <a className='ticket-a2' href="">7 orders</a>
                        <a  className='ticket-a2' href="">4 likes</a>
                        <a  className='ticket-a2' href="">0 following</a>
                    </ul>
                </div>
            </div>
            <div className='qw'>
                <h1>Orders</h1>
                {
                    items2.map((obj)=>(
                        <Order items={obj} key={obj.id} {...obj}/>
                    ))
                }
                <div className='ticket-div'>
                <button className='ticket-btn' ><h2>See past orders</h2></button>
                </div>
                <hr className='hr'/>
                <a className='ticket-a' href=''><h1>Interests</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
                <a className='ticket-a' href=''><h1>Collections</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
                <a className='ticket-a' href=''><h1>Likes</h1><img className='a-img' src={icon}/> </a>

            </div>

        </div>
    );
};

export default Ticket;
