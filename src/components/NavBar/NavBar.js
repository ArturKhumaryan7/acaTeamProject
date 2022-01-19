import './NavBar.css';
import { BrowserRouter, Link, Router, Routes } from "react-router-dom"
import { useState } from 'react';

    function NavBar({ hideNavBar }){

        const [userLogIn, setUserLogIn] = useState(!window.localStorage.getItem("isUserLogIned"))
        const [showDropDown, setShowDropDown] = useState(true)
        const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
        console.log(window.localStorage.getItem("isUserLogIned"))

        let dropDownHide = () => {
            setShowDropDown(true)
        }

        let dropDownShow = () => {
            setShowDropDown(false)
        }


        return(
            <div className='NavBar'>
                    <div className='NavBarItmes'>
                        <div className='titleAndSearch'>
                            <Link className='siteTitle' to="/" style={{marginLeft:"15px"}}>YourEvent</Link>
                            <input className='searchInp' type="text" placeholder=" Search Events"/>
                            <img className="searchIcon" src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"/>
                        </div>
                        <div className='createEvtAndSignIn'>
                            {   (userLogIn || userInfo.status === "admin") && <Link className='createEvtBtn' to={userLogIn ? "/logIn": userInfo.status === "admin" ? "/createEvent": ""} onClick={() => hideNavBar(true)}><p className='NavBarBtnContent'>Create New Event</p></Link>}
                                {userLogIn && <Link className='signInBtn' to='/logIn' onClick={() => hideNavBar(true)}><p className='NavBarBtnContent'>Sign In</p></Link>}
                            {   !userLogIn &&  
                                            <Link className='likesLink' to="/likedEvents">
                                                <img className='likeIcon' src='https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png'/><br/>
                                                <p className='likes' to='/likedEvents'>Likes</p>
                                            </Link>
                            }
                            {   !userLogIn && 
                                <div style={{display:"flex", flexDirection:"column", justifyContent:"end"}} hidden= {true}>
                                    <div className='userAccDropDown' onMouseOver={dropDownShow} onMouseOut={dropDownHide}>
                                        <img className='accIcon' src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"/>
                                        <p className='NavBarBtnContent'>{userInfo.email}</p>
                                        <img className='dropDownIcon' src="https://cdn-icons-png.flaticon.com/512/60/60995.png"/>
                                    </div>
                                    <div className='dropDown' style = {{visibility:showDropDown ? "hidden": "visible"}} onMouseOver={dropDownShow} onMouseOut={dropDownHide}>
                                        <Link className='dropDown-Links' to='/ManageEvents'><p className='dropDown-content' >Manage my events</p></Link>
                                        <Link className='dropDown-Links' to='/likedEvents'><p className='dropDown-content' >Liked</p></Link>
                                        <Link className='dropDown-Links' to='/account-settings'><p className='dropDown-content'>Account Settings</p></Link>
                                        <Link className='dropDown-Links' to='/'><p className='dropDown-content' onClick = {() => {
                                                setUserLogIn(!userLogIn)
                                                window.localStorage.setItem("isUserLogIned", false)
                                                window.localStorage.clear("currentUser")
                                            }}>Log Out</p></Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
            </div>
        )
    }

export default NavBar;