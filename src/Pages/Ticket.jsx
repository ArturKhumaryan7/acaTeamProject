import React, { useEffect } from "react";
import Order from "../components/Orders/Order"
import '../Styles/Tickets.css'
import avatar from '../assets/img/user.png'
import icon from '../assets/img/svgexport-8 (1).svg'
import '../components/Orders/Order.css'


const Ticket = ({ items }) => {

    const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
    console.log(userInfo.orders)

    return (
        <div>
            <div className='user-div'>
                <img className='user-img' src={userInfo.profilePicture === ""?avatar:userInfo.profilePicture}/>
                <div className='ticket-div5'>
                    <h1 className='ticket-h1'>{userInfo.name} {userInfo.surname}</h1>
                    <ul className='ticket-ul1'>
                        <a className='ticket-a2' href="">{userInfo.orders.length} orders</a>
                        <a  className='ticket-a2' href="">4 likes</a>
                        <a  className='ticket-a2' href="">0 following</a>
                    </ul>
                </div>
            </div>
            <div className='qw'>
                <h1>Orders</h1>
                {
                    userInfo.orders.map((obj)=>(
                        <Order items={obj} key={obj.id} eventInfo={obj}/>
                    ))
                }
                <hr className='hr'/>
                <a className='ticket-a' href=''><h1>Interests</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
                <a className='ticket-a' href=''><h1>Collections</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
                <a className='ticket-a' href='/likedEvents'><h1>Likes</h1><img className='a-img' src={icon}/> </a>

            </div>

        </div>
    );
};

export default Ticket;
