import React from "react";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import axios from "axios";

import Home from "./Pages/Home";
import Liked from "./Pages/Liked";
import Tickets from "./Pages/Tickets";
import Ticket from './Pages/Ticket';


import './Styles/Header.css'
import './Styles/Ctegories.css'


function App() {
    const [orders, setOrders] = React.useState([]);
    const [events, setEvents] = React.useState([]);

    React.useEffect(()=>{
        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events').then(({data})=>{
            setOrders(data);
        })
    },[])

    React.useEffect(()=>{
        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events').then(({data})=>{
            setEvents(data);
        })
    },[])


    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/Liked" element={<Liked items={events}/>} exact />
            <Route path="/Tickets" element={<Tickets/>}/>
            <Route path="/T" element={<Ticket items={events} items2={orders} />}/>

        </Routes>
    </div>
  );
}

export default App;
