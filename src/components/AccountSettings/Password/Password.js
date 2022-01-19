import { useState } from "react";
import "./Password.css"



    function Password(){

        const hiddenPasswordImg = window.location.origin + "/passwordHidden.png";
        const nonHiddenPasswordImg = window.location.origin + "/passwordNotHidden.png";
        const [passwordVisibility, setPasswordVisibility] = useState(hiddenPasswordImg)
        const [repeatPasswordVisibility, setRepeatPasswordVisibility] = useState(hiddenPasswordImg) 
        const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
         

        let passwordVisibilityChanger = (evt) => {
            if(evt.target.src === hiddenPasswordImg){
                document.getElementById("passwordInp").type = "text"
                setPasswordVisibility(nonHiddenPasswordImg)
            } else{
                document.getElementById("passwordInp").type = "password"
                setPasswordVisibility(hiddenPasswordImg)
            }
        }

        let repeatPasswordVisibilityChanger = (evt) => {
            if(evt.target.src === hiddenPasswordImg){
                document.getElementById("repeatPasswordInp").type = "text"
                setRepeatPasswordVisibility(nonHiddenPasswordImg)
            } else{
                document.getElementById("repeatPasswordInp").type = "password"
                setRepeatPasswordVisibility(hiddenPasswordImg)
            }
        }

        let passwordQualityChecker = (evt) => {

            let indicator = document.getElementById("indicator")
            let passwordGuide = document.getElementById("passwordGuide")
            let password = evt.target;
            let nonLetterRegExp = /[^A-Z]/ig;
            let nonLetterAndNumberRegExp = /[^A-Z0-9]/ig

            
            
            if(password.value.length < 8 && password.value.length){
                password.style.borderColor = "red";
                passwordGuide.innerText = "Your password must contain at least 8 characters";
                indicator.style.width = "0px"
            } else {
                password.style.borderColor = "gray";
                if(password.value.length >= 8 && password.value.length <= 10){
                    indicator.style.width = "20%";
                    indicator.style.backgroundColor = "red";
                    passwordGuide.innerText = "Your password is very weak"
                } else if(password.value.length >= 11 && password.value.length <= 14){
                    indicator.style.width = "40%";
                    indicator.style.backgroundColor = "orangered";
                    passwordGuide.innerText = "Your password is weak"
                } else if(password.value.length >= 15 && password.value.length <= 17 && nonLetterRegExp.test(password.value)){
                    indicator.style.width = "60%";
                    indicator.style.backgroundColor = "orange";
                    passwordGuide.innerText = "Your password is moderate"
                } else if(password.value.length >= 18 && nonLetterRegExp.test(password.value) && !nonLetterAndNumberRegExp.test(password.value)){
                    indicator.style.width = "80%";
                    indicator.style.backgroundColor = "green";
                    passwordGuide.innerText = "Your password is strong"
                } else if(password.value.length >= 18 && nonLetterAndNumberRegExp.test(password.value)){
                    indicator.style.width = "100%";
                    indicator.style.backgroundColor = "green";
                    passwordGuide.innerText = "Your password is very strong"
                }
                
                
            }
        }

        let repeatPasswordChecker = (evt) => {
            let password = document.getElementById("passwordInp")
            
            
            if(password.value !== evt.target.value && evt.target.value.length){
                evt.target.style.borderColor = "red"
            } else {
                evt.target.style.borderColor = "gray"
            }
        }
        
        return(
            <div className="Password">
                <h1>Your Password</h1>
                <hr/>
                <h6>Set a new password</h6>
                <input className="passwordChangeInps" type="password" placeholder="Current Password"/><br/>
                <input className="passwordChangeInps" type="password" id="passwordInp" placeholder="New Password" onChange={passwordQualityChecker}/><img className="changePasswordVisibility" src={passwordVisibility} onClick={passwordVisibilityChanger}/><br/>
                <input className="passwordChangeInps" type="password" id="repeatPasswordInp" placeholder="Repeat Password" onChange={repeatPasswordChecker}/><img className="changePasswordVisibility" src={repeatPasswordVisibility} onClick={repeatPasswordVisibilityChanger}/>
                <div className="passwordQualityIndicatorDiv" id="passwordQualityIndicator">
                    <div className="indicator" id="indicator"></div>
                </div>
                <p style={{fontSize:"small", marginTop:"4px"}} id="passwordGuide">Your password must contain at least 8 characters</p>
                <button className="newPassSaveBtn">Save</button>
            </div>
        )
    }


export default Password;