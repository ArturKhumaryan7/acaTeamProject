import { useState } from "react";
import "./Password.css"



    function Password(){

        const hiddenPasswordImg = window.location.origin + "/passwordHidden.png";
        const nonHiddenPasswordImg = window.location.origin + "/passwordNotHidden.png";
        const [passwordVisibility, setPasswordVisibility] = useState(hiddenPasswordImg)
        const [repeatPasswordVisibility, setRepeatPasswordVisibility] = useState(hiddenPasswordImg) 
        const [passChangeErrMessage, setPassChangeErrMessage] = useState("")
        const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))
         

        let passwordVisibilityChanger = (evt) => {
            if(evt.target.src === hiddenPasswordImg){
                document.getElementById("newPasswordInp").type = "text"
                setPasswordVisibility(nonHiddenPasswordImg)
            } else{
                document.getElementById("newPasswordInp").type = "password"
                setPasswordVisibility(hiddenPasswordImg)
            }
        }

        let repeatPasswordVisibilityChanger = (evt) => {
            if(evt.target.src === hiddenPasswordImg){
                document.getElementById("repeatNewPasswordInp").type = "text"
                setRepeatPasswordVisibility(nonHiddenPasswordImg)
            } else{
                document.getElementById("repeatNewPasswordInp").type = "password"
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
            let password = document.getElementById("newPasswordInp")
            
            
            if(password.value !== evt.target.value && evt.target.value.length){
                evt.target.style.borderColor = "red"
            } else {
                evt.target.style.borderColor = "gray"
            }
        }

        let newPasswordSetter = () => {
            let currentPasswordInp = document.getElementById("currentPasswordInp")
            let newPasswordInp = document.getElementById("newPasswordInp")
            let repeatNewPasswordInp = document.getElementById("repeatNewPasswordInp")

            console.log(userInfo)
            if(currentPasswordInp.value === userInfo.password && newPasswordInp.style.borderColor !== "red" && 
            repeatNewPasswordInp.style.borderColor !== "red" && newPasswordInp.value.length !== 0 && repeatNewPasswordInp.value.length !== 0){
                fetch(`https://61e6cdffce3a2d001735944d.mockapi.io/users/${userInfo.id}`, { 
                    method: "put",
                    headers: {
                        "content-type":"application/json"
                    } ,
                    body: JSON.stringify({
                        password: newPasswordInp.value
                    })
                }).then(res => {
                    setPassChangeErrMessage("")
                    userInfo.password = newPasswordInp.value
                    window.localStorage.setItem("currentUser", JSON.stringify(userInfo))
                    window.location.href = "/"
                })

            } else {
                setPassChangeErrMessage("Please fill all required fileds")
            }
        }

        
        
        return(
            <div className="Password">
                <h1>Your Password</h1>
                <hr/>
                <h6>Set a new password</h6>
                <input className="passwordChangeInps" id="currentPasswordInp" type="password" placeholder="Current Password"/><br/>
                <input className="passwordChangeInps" type="password" id="newPasswordInp" placeholder="New Password" onChange={passwordQualityChecker}/><img className="changePasswordVisibility" src={passwordVisibility} onClick={passwordVisibilityChanger}/><br/>
                <input className="passwordChangeInps" type="password" id="repeatNewPasswordInp" placeholder="Repeat Password" onChange={repeatPasswordChecker}/><img className="changePasswordVisibility" src={repeatPasswordVisibility} onClick={repeatPasswordVisibilityChanger}/>
                <div className="passwordQualityIndicatorDiv" id="passwordQualityIndicator">
                    <div className="indicator" id="indicator"></div>
                </div>
                <p style={{fontSize:"small", marginTop:"4px"}} id="passwordGuide">Your password must contain at least 8 characters</p>
                <p style={{color:"red"}}>{passChangeErrMessage}</p>
                <button className="newPassSaveBtn" onClick={newPasswordSetter}>Save</button>
            </div>
        )
    }


export default Password;