import EventPage from "./components/EventPage"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import ContactInfo from "./components/AccountSettings/ContactInfo/ContactInfo";
import CreditDebitCards from "./components/AccountSettings/CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./components/AccountSettings/DeleteAccount/DeleteAccount";
import LinkedAccounts from "./components/AccountSettings/LinkedAccounts/LinkedAccounts";
import Password from "./components/AccountSettings/Password/Password";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";
import Liked from "./components/LikedEvents/Liked";
import Tickets from "./Pages/Tickets";
import Ticket from './Pages/Ticket';
import axios from "axios";
import Home from "./components/Home/Home";
import CreateEvent from "./components/CreateEvent";



  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)
    const [orders, setOrders] = useState([]);
    const [events, setEvents] = useState([]);


    useEffect(()=>{
        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events')
        .then(({data})=>{
            setOrders(data);
        })

        axios.get('https://61e2a20e3050a10017682205.mockapi.io/events')
        .then(({data})=>{
            setEvents(data);
        })
    },[])


    return (
      <div className="App">
          { !hideNavBar && window.location.href !== "http://localhost:3000/logIn" && <NavBar hideNavBar={(status) => setHideNavBar(status)}/>}
          <Routes>
            <Route path="/logIn/*" element={<LogIn />} hideNavBar={(status) => setHideNavBar(status)}/> 
            <Route  path="/account-settings" element={<AccountSettings />}>
              <Route  exact path="ContactInfo" element={<ContactInfo />}/>
              <Route  path="Password" element={<Password />}/>
              <Route  path="Credit/DebitCards" element={<CreditDebitCards />}/>
              <Route  path="LinkedAccounts" element={<LinkedAccounts />}/>
              <Route  path="DeleteAccount" element={<DeleteAccount />}/>           
            </Route>
            <Route path="event/:id" element={<EventPage />} />
            <Route path="/createEvent" element = { <CreateEvent />}/>
            <Route path="/likedEvents" element={<Liked items={events}/>} exact />
            <Route path="/Tickets" element={<Tickets/>}/>
            <Route path="/T" element={<Ticket items={events} items2={orders} />}/>
            <Route path="/" element={<Home />}/>
          </Routes>

          <Footer />
      </div>
    );
  }

export default App;
