import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import ContactInfo from "./components/AccountSettings/ContactInfo/ContactInfo";
import CreditDebitCards from "./components/AccountSettings/CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./components/AccountSettings/DeleteAccount/DeleteAccount";
import LinkedAccounts from "./components/AccountSettings/LinkedAccounts/LinkedAccounts";
import Password from "./components/AccountSettings/Password/Password";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";
import Liked from "./Pages/Liked";
import Tickets from "./Pages/Tickets";
import Ticket from './Pages/Ticket';
import './Styles/Header.css'
import './Styles/Ctegories.css'
import axios from "axios";



  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)
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
        <BrowserRouter>
          {(!hideNavBar && window.location.href !== "http://localhost:3000/logIn") && <NavBar hideNavBar={(status) => setHideNavBar(status)}/>}
          <Routes>
            <Route path="/logIn/*" element={<LogIn />} hideNavBar={(status) => setHideNavBar(status)}/> 
            <Route  path="/account-settings" element={<AccountSettings />}>
              <Route  exact path="ContactInfo" element={<ContactInfo />}/>
              <Route  path="Password" element={<Password />}/>
              <Route  path="Credit/DebitCards" element={<CreditDebitCards />}/>
              <Route  path="LinkedAccounts" element={<LinkedAccounts />}/>
              <Route  path="DeleteAccount" element={<DeleteAccount />}/>           
            </Route>
            <Route path="/" element={<Home/>} exact />
            <Route path="/Liked" element={<Liked items={events}/>} exact />
            <Route path="/Tickets" element={<Tickets/>}/>
            <Route path="/T" element={<Ticket items={events} items2={orders} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;
