import React from "react";
import '../Styles/Tickets.css'
import avatar from '../assets/img/user.png'
import img from '../assets/img/svgexport-8.svg'
import icon from '../assets/img/svgexport-8 (1).svg'
import FooterSecond from "../components/Footer/footer"

const Tickets = ({items}) => {
    return (
        <div>
            <div className='user-div'>
                <img className='user-img' src={avatar}/>
                <div className='ticket-div5'>
                    <h1 className='ticket-h1'>Narek Hovhannisyan</h1>
                    <ul className='ticket-ul1'>
                        <a className='ticket-a2' href="">0 orders</a>
                        <a  className='ticket-a2' href="">0 likes</a>
                        <a  className='ticket-a2' href="">0 following</a>
                    </ul>

                </div>

            </div>
            <div className='qw'>
                <h1>Orders</h1>
                <div className='ticket-div'>
                    <div className='ttmdiv'>
                        <img className='ticket-img2' src={img}/>
                    </div>
                    <h1>No upcoming orders</h1>
                    <button className='ticket-btn' ><h2>See past orders</h2></button>
                </div>

                <hr className='hr'/>
                <a className='ticket-a' href=''><h1>Interests</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
                <a className='ticket-a' href=''><h1>Collections</h1><img className='a-img' src={icon}/> </a><hr className='hr'/>
            </div>
            <FooterSecond />
        </div>

    );
};

export default Tickets;
