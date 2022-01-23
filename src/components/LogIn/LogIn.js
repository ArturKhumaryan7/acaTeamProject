import "./LogIn.css"
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react";

    function LogIn({ hideNavBar }){

        const [showSignUp, setShowSignUp] = useState(false)
        const [a, setA] = useState("narek")

        return(
            <div className='LogInPage' >
                { !showSignUp && <SignIn hideNavBar={hideNavBar} showSignUp={() => setShowSignUp(true)}/> }
                {  showSignUp && <SignUp showSignUp={(status) => setShowSignUp(false)}/> }
                
                <div className="logInPictureDiv" id="logInPictureDiv" style={{backgroundImage: "url(" +  window.location.origin + "/events.jpg)"}}></div>
            </div>
        )
    }

export default LogIn;