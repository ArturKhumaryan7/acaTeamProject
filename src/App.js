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
import NavBar from "./components/NavBar/NavBar"
import Liked from "./components/LikedEvents/Liked";
import LikedEvents from "./components/LikedEvents";
import Tickets from "./Pages/Tickets";
import Ticket from './Pages/Ticket';
import Home from "./components/Home/Home";
import CreateEvent from "./components/CreateEvent";



  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [curentEvent, setCurentEvent] = useState(undefined);
    const [event, setEvent] = useState([]);




    useEffect(() => {
      async function eventCardData() {
        const cardInfo = await axios.get(
          "https://61e2a20e3050a10017682205.mockapi.io/newEvent"
        );

        setIsLoading(false);
        setEvent(cardInfo.data);
      }
      eventCardData();
    }, []);
      

    const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))

    const likedEvents = (obj) => {
      let likesArray = userInfo.likes
      if(likesArray.find((item)=> item.id === obj.id)) {
        likesArray = likesArray.filter((item) => item.id !== obj.id)
      } else {
        likesArray.push(obj)
      }
    userInfo.likes = likesArray
      fetch(`https://61e6cdffce3a2d001735944d.mockapi.io/users/${userInfo.id}`, {
        method:"put",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(userInfo)
    }).then(res => {
        window.localStorage.setItem("currentUser", JSON.stringify(userInfo))
    })
    }
    
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
            <Route path="event/:id" element={<EventPage
            likedEvents={likedEvents}
            {...curentEvent} />}/>
            <Route path="/createEvent" element = { <CreateEvent />}/>
            <Route path="/likedEvents" element={<Liked items={events}/>} exact />
            <Route path="/Tickets" element={<Ticket items={events}/>}/>
            <Route path="/" element={<Home />}/>
            <Route path="/likedEvents" element={<LikedEvents />} exact />
            <Route path="/Tickets" element={<Tickets/>}/>
            <Route path="/T" element={<Ticket />}/>
            <Route path="/" element={<Home
            likedEvents={likedEvents}
            selectEvent={setCurentEvent} 
            event = {event}
            isLoading = {isLoading}
            />}/>
          </Routes>

          <Footer />
      </div>
    );
  }

export default App;
