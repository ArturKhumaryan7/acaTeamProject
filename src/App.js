import EventPage from "./components/EventPage"
import Footer from "./components/Footer"
import { useEffect, useState,useRef} from "react";
import { Route, Routes } from "react-router-dom";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import ContactInfo from "./components/AccountSettings/ContactInfo/ContactInfo";
import CreditDebitCards from "./components/AccountSettings/CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./components/AccountSettings/DeleteAccount/DeleteAccount";
import LinkedAccounts from "./components/AccountSettings/LinkedAccounts/LinkedAccounts";
import Password from "./components/AccountSettings/Password/Password";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar"
import LikedEvents from "./components/LikedEvents";
import Ticket from './Pages/Ticket';
import Home from "./components/Home/Home";
import CreateEvent from "./components/CreateEvent";
import {EventContext} from "./Contexts/EventContext"
import axios from "axios"
import i18n from "./i18n";
import { useTranslation } from "react-i18next";



  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const [curentEvent, setCurentEvent] = useState(undefined);
    const [event, setEvent] = useState([]);
    const [filterArr,setFilterArr] = useState([]);
    const filterRef = useRef();

    function handleFilterClick(e){
       
      const val = e.target.value;
      let filtered = [];

      switch(val){
        case "All":
          setEvent(filterArr)
          break;
        case "Free":
          filtered = filterArr.filter((item) => item.price === "Free");
          setEvent(filtered)
          break; 
        case "Online event":
          filtered = filterArr.filter((item) => item.location === "Online event");
          setEvent(filtered)
          break;
        case "Music":  
          filtered = filterArr.filter((item) => item.category === "Music");
          setEvent(filtered)
          break;
        case "Food and Drink":
          filtered = filterArr.filter((item) => item.category === "Food and Drink");
          setEvent(filtered)
          break;
        case "Today":  
          filtered = filterArr.filter((item) => new Date(item.startDate).toLocaleString().split(",")[0] === new Date().toLocaleString().split(",")[0])
          setEvent(filtered)
          break;
        case "This weekend":
          let curr = new Date();
          let first = curr.getDate() + 1 - curr.getDay();
          let last = first + 6; 
          let sunday = new Date(curr.setDate(last)).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
          let saturday = new Date(curr.setDate(last - 1)).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
          filtered = filterArr.filter((item) => item.startDate === saturday || item.startDate === sunday)
          setEvent(filtered)
          break;
          case "Charity & Causes":  
          filtered = filterArr.filter((item) => item.category === "Charity & Causes")
          setEvent(filtered)
          break;
        default:  
      }
    
  }

    
    



    useEffect(() => {
      async function eventCardData() {
        const cardInfo = await axios.get(
          "https://61e2a20e3050a10017682205.mockapi.io/newEvent"
        );

        setIsLoading(false);
        setFilterArr(cardInfo.data)
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
          <EventContext.Provider value={{handleFilterClick,event,setEvent,setFilterArr,filterRef}}>
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
            <Route path="/Tickets" element={<Ticket items={event}/>}/>
            <Route path="/likedEvents" element={<LikedEvents />} exact />
            <Route path="/" element={<Home
            likedEvents={likedEvents}
            selectEvent={setCurentEvent} 
            event = {event}
            isLoading = {isLoading}
            />}/>
          </Routes>

            {/* <Footer /> */}
          </EventContext.Provider>
      </div>
    );
  }

export default App;
