import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShareIcons from "../ShareIcons"
import styles from "./EventPage.css";
import TicketPurchasePage from "./TicketPurchasePag/TicketPurchasePage";
import Modal from "react-modal"
import i18n from "../../i18n"
import { useTranslation } from "react-i18next";
import EventShareButton from "../EventShareButton";


function getID() {
  let idURL = window.location.pathname;
  if (idURL.endsWith("/")) {
      idURL = idURL.substring(0, idURL.length - 1);
  }
  return idURL.substring(7)
}

function EventPage({
  id,
  name,
  organaizer,
  price,
  startDate,
  startTime,
  avatar,
  location,
  endDate,
  endTime,
  description,
  title,
  likedEvents
}) {
 
  const [eventPageInfo, setEventPageInfo] = useState({})
  const [follow, setFollow] = useState(0);
  const [isFollow, setIsFollow] = useState(false);
  const [isLiked, setIsLiked] = useState();
  const [listingChange, setListingChange] = useState(false);
  const [hideTicketPurchasePage, setHideTicketPurchasePage] = useState(true)
  const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
  const [shareFriends, setShareFriends] = useState(false);


  useEffect(() => {
    if (name === undefined) {
        async function eventCardPageData() {
            const cardInfo = await axios.get(
              "https://61e2a20e3050a10017682205.mockapi.io/newEvent"
            );
            let cId = getID();
            setEventPageInfo(cardInfo.data.find((item) => item.id === cId))
          }
        eventCardPageData();
    } else {
        setEventPageInfo({
            id,
            name,
            organaizer,
            price,
            startDate,
            startTime,
            avatar,
            location,
            endDate,
            endTime,
            description,
            title,
        })
    }
  }, [])

  if(!hideTicketPurchasePage){
    document.body.style.overflowY="hidden"
  } else {
    document.body.style.overflowY="scroll"
  }

  
  const shareClike = () => {
    setShareFriends(!shareFriends)
  }


  const handeClike = () => {
    setIsLiked(!isLiked)
    likedEvents(eventPageInfo)
  }

  const followCount = () => {

    
    setIsFollow(!isFollow);

    (isFollow ? setFollow(follow - 1): setFollow(follow + 1));

    if(!isFollow){
      userInfo.followings++;
    } else {
      userInfo.followings--;
    }

    fetch(`https://61e6cdffce3a2d001735944d.mockapi.io/users/${userInfo.id}`, {
                    method:"put",
                    headers: {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(userInfo)
                }).then(res => {
                    window.localStorage.setItem("currentUser", JSON.stringify(userInfo))
                })
  };

  const listingPanelChanging = () => {
      if (window.scrollY > 490) {
        setListingChange(true)
      } else {
        setListingChange(false)
      }
  }

  window.addEventListener('scroll', listingPanelChanging)

  const descriptionText = () => {
     if(Array.isArray(eventPageInfo.description)){
        return eventPageInfo.description.map((item, index) => <p key={index}>{item}</p>)
     }
 }

 

  return (
    <div className="EventPageHead">
    <Modal isOpen={!hideTicketPurchasePage} className="modal" style={{overlay:{backgroundColor:"grey", zIndex:"99999"}}}>
        <TicketPurchasePage hideTicketPurchasePage = {hideTicketPurchasePage} 
                            eventPageInfo = {eventPageInfo}
                            setIsHidden = {() => setHideTicketPurchasePage(true)}/>
      </Modal>
    {shareFriends ? <EventShareButton  onClick={shareClike} />: null}
      <header className="eventListingHeader clrfix">
        <div className="listingHeroImageBlurryBackground">
          <picture content={eventPageInfo.avatar}>
            <source srcSet={eventPageInfo.avatar} sizes="100vw" />
            <img
              className="listingHeroImage"
              data-automation="listing-hero-image"
              alt=""
            />
          </picture>
        </div>
      </header>
      {}
      <div className="gGrid">
        <div className="eventListingBody">
          <div className="listingHeroDetailsMainContaine">
            <div className="headerTop">
              <div className="eventImage">
                <div className="listingHeroBadgeContainer">
                  <span className="badgePrice" data-automation="hero-badge">
                    {eventPageInfo.price}
                  </span>
                </div>
                <div className="thisEventImage">
                  <img src={eventPageInfo.avatar} alt="RunEvent" />
                </div>
              </div>
              <div className="headerInfo">
                <div className="headerDateDiv">
                  <div className="headerDate">
                    <time className="eventDayMon">
                      <p className="eventDateMon">{eventPageInfo.startDate}</p>
                      <p className="eventDateDay">{eventPageInfo.startTime}</p>
                    </time>
                  </div>
                  <div className="headerBody">
                    <h1 className="headerEventName">{eventPageInfo.name}</h1>
                    <div className="headerEventFollowers">
                      <div className="headerEventFollowTitle">
                        <div className="lAlignLeft">
                            {eventPageInfo.organaizer}
                          <span className="headerEventFollowInfo">
                            <div>
                              <button
                                className={isFollow? "followButtonClick":"followButton clrfix"}
                                onClick={followCount}
                              >
                               {isFollow ? "following": "follow"} 
                              </button>
                            </div>
                            <div className="followCount">
                              {follow} followers
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="headrPrice">
                    <div className="headerEventPrice">{eventPageInfo.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="listingPanelWrapper clrfix">
            <div className={listingChange ? (shareFriends ? "listingPanel clrfix": "listingPanelScroll clrfix") :"listingPanel clrfix"}>
              <div className={listingChange ? "listingPanelElementsScroll clarfix":"listingPanelElements clrfix"}>
                <div className="listingPanelGCell">
                  <h2 className="isHiddenAccessible">
                    Actions and Detail Panel
                  </h2>
                  <ul className="listingPanelAction">
                    <li className="eventShare">
                      <div>
                        <div className="edsTooltips">
                          <span className="addIconButton">
                            <button className="shareAction">
                              <img
                                onClick={shareClike}
                                width={30}
                                height={30}
                                src="/img/share.svg"
                              />
                            </button>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="eventLiked">
                      <button className="shareAction">
                        <img
                          className="heart"
                          height={30}
                          width={30}
                          onClick={handeClike}
                          src={isLiked ? "/img/HeartOutline.svg":"/img/heart.svg"}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="listingEvenetPrice">
                  <div className={listingChange?"":"lsitingEventInfoPricePanel"}>
                    <div className="panelDisyplayPrice">{eventPageInfo.price}</div>
                  </div>
                </div>
                <div className="registerButton">
                  <button className="registerAction" onClick={() => setHideTicketPurchasePage(false)}>Order</button>
                </div>
              </div>
            </div>
          </div>

          <section className="aboutThisEvent">
            <div className="eventSection clrfix">
              <div className="structuredContent">
                <div
                  className="textBody"
                  data-automation="listing-event-description"
                >
                  <strong>{eventPageInfo.title}</strong>
                </div>
                <h2 className="textBodyLarge">About this event</h2>
                <div
                  className="hasUserGeneratedContent"
                  data-automation="about-this-event-sc"
                >
                  <div className="structuredContentRichText">{descriptionText()}</div>
                </div>
                <div className="shareEvenet clrfix">
                  <h3 className="shareEvenetTitle">Share with friends</h3>
                  <ShareIcons />
                </div>
              </div>

              <div className="eventDetails">
                <h3
                  className="labelPrimary"
                  data-automation="listing-info-language"
                >
                  Date and time
                </h3>
                <div className="eventDetailsData">
                  <meta content="2022-03-26T10:00:00+00:00" />
                  <meta content="2022-03-26T15:00:00+00:00" />
                  <time className="clrfix" data-automation="event-details-time">
                    <p className="dateTimeFirstLine">
                      {eventPageInfo.startDate} {eventPageInfo.startTime}
                    </p>
                    <p className="dateTimeSecondLine">
                      {eventPageInfo.endDate} {eventPageInfo.endTime}
                    </p>
                    <p className="hideSmallMedium">
                    <input type="date" id="start" name="trip-start"
                         value='Today'
                     min="2022-01-01" max="2030-12-31"/>
                    </p>
                  </time>
                </div>
                <h3 className="labelPrimary">Location</h3>
                <div className="eventDetailsData">
                  {eventPageInfo.location}
                  <p>
                    <a
                      className="viewMapLink is"
                      href="https://www.google.com/maps/@40.1587458,44.5201964,14z"
                      target="_blank"
                    >
                      View Map
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
