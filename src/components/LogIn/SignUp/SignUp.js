import "./SignUp.css"
import { Link } from "react-router-dom"
import { useState } from "react";


    function SignUp({ showSignUp }){

        const hiddenPasswordImg = window.location.origin + "/passwordHidden.png";
        const nonHiddenPasswordImg = window.location.origin + "/passwordNotHidden.png";
        const [passwordVisibility, setPasswordVisibility] = useState(hiddenPasswordImg)
        const [repeatPasswordVisibility, setRepeatPasswordVisibility] = useState(hiddenPasswordImg) 
        const [errorMassage, setErrorMassage] = useState("")

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
                passwordGuide.innerText = "Your password must contain at least 8 characters"
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

        let emailChecker = (evt) => {
            let currentEmail = evt.target.value;
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if(currentEmail.match(regexEmail) || currentEmail.length === 0) {
                evt.target.style.borderColor = "gray" 
            } else {
                evt.target.style.borderColor = "red" 
            }
        }

        let isNewUserFillAllRequirements = () => {
            let emailInp = document.getElementById("emailInp")
            let nameInp = document.getElementById("nameInp")
            let surnameInp = document.getElementById("surnameInp")
            let passwordInp = document.getElementById("passwordInp")
            let repeatPasswordInp = document.getElementById("repeatPasswordInp")

            if(nameInp.value.length <= 1 || surnameInp.value.length <= 1 || 
               passwordInp.style.borderColor === "red" || 
               repeatPasswordInp.style.borderColor === "red" || 
               emailInp.style.borderColor === "red" ||
               emailInp.value.length <= 1 || passwordInp.value.length <= 1 ||
               repeatPasswordInp.value.length <= 1){

                setErrorMassage("Please fill all require fields")
            } else {
                setErrorMassage("")
                fetch("https://61e6cdffce3a2d001735944d.mockapi.io/users", {
                    method:"post",
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        name: nameInp.value,
                        surname: surnameInp.value,
                        password: passwordInp.value,
                        email: emailInp.value,
                        profilePicture: "",
                        city: "",
                        status: "user",
                    })
                }).then(res => window.location.href = "http://localhost:3000/logIn")

            }
        }


        return(
            <div className="signUp">
                <Link className='siteTitle' to="/">YourEvent</Link>
                <h1 style={{fontSize:"xx-large"}}>Create An Account</h1><br/>
                <input className="regEmail" type="text" id="emailInp" placeholder="Email" onChange={emailChecker}/><br/>
                <input className="regName" type="text" id="nameInp" placeholder="Name"/>
                <input className="regSurname" type="text" id="surnameInp" placeholder="Surname"/><br/>
                <input className="regPassword" type="password" id="passwordInp" placeholder="Password" onChange={passwordQualityChecker}/><img className="passwordVisibility" src={passwordVisibility}  onClick={passwordVisibilityChanger}/><br/>
                <input className="regPassword" type="password" id="repeatPasswordInp" placeholder="Repeat Password" onChange={repeatPasswordChecker}/><img className="passwordVisibility" src={repeatPasswordVisibility} onClick={repeatPasswordVisibilityChanger}/><br/>
                <div className="passwordQualityIndicatorDiv" id="passwordQualityIndicator">
                    <div className="indicator" id="indicator"></div>
                </div>
                <p style={{fontSize:"small", marginTop:"4px"}} id="passwordGuide">Your password must contain at least 8 characters</p>
                <p style={{color:"red", marginTop:"4px"}}>{errorMassage}</p>
                <button className="registerBtn" onClick={isNewUserFillAllRequirements}>Create account</button><br/>
                <button className="SignInBtn" onClick={() => showSignUp()}>Sign In</button><br/>
            </div>
        )
    }

export default SignUp;