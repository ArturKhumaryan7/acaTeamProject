import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AccountSettings from "./Components/AccountSettings/AccountSettings";
import ContactInfo from "./Components/AccountSettings/ContactInfo/ContactInfo";
import CreditDebitCards from "./Components/AccountSettings/CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./Components/AccountSettings/DeleteAccount/DeleteAccount";
import LinkedAccounts from "./Components/AccountSettings/LinkedAccounts/LinkedAccounts";
import Password from "./Components/AccountSettings/Password/Password";
import LogIn from "./Components/LogIn/LogIn";
import NavBar from "./Components/NavBar/NavBar";
import Liked from "./Components/LikedEvents/Liked";
import Tickets from "./Pages/Tickets";
import Ticket from './Pages/Ticket';
import axios from "axios";
import Home from "./Components/Home/Home";



  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)
    const [orders, setOrders] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events').then(({data})=>{
            setOrders(data);
        })

        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events').then(({data})=>{
            setEvents(data);
        })
    },[])


    return (
      <div className="App">
          { (!hideNavBar || window.location.href !== "http://localhost:3000/logIn") && <NavBar hideNavBar={(status) => setHideNavBar(status)}/>}
          <Routes>
            <Route path="/logIn/*" element={<LogIn />} hideNavBar={(status) => setHideNavBar(status)}/> 
            <Route  path="/account-settings" element={<AccountSettings />}>
              <Route  exact path="ContactInfo" element={<ContactInfo />}/>
              <Route  path="Password" element={<Password />}/>
              <Route  path="Credit/DebitCards" element={<CreditDebitCards />}/>
              <Route  path="LinkedAccounts" element={<LinkedAccounts />}/>
              <Route  path="DeleteAccount" element={<DeleteAccount />}/>           
            </Route>
            <Route path="/likedEvents" element={<Liked items={events}/>} exact />
            <Route path="/Tickets" element={<Tickets/>}/>
            <Route path="/T" element={<Ticket items={events} items2={orders} />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
      </div>
    );
  }

export default App;
