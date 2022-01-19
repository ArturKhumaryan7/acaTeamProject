import "./SignIn.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";


    function SignIn({ showSignUp, hideNavBar }){

        const hiddenPasswordImg = window.location.origin + "/passwordHidden.png";
        const nonHiddenPasswordImg = window.location.origin + "/passwordNotHidden.png";
        const [passwordVisibility, setPasswordVisibility] = useState(hiddenPasswordImg);
        const [errorMessage, setErrorMessage] = useState("")
        const [users, setUsers] = useState([])
        const [logInPasswordInpValues, setLogInPasswordInpValue] = useState({
            logIn: "",
            password: "" 
        })

        useEffect(() => {
            fetch("https://61e6cdffce3a2d001735944d.mockapi.io/users")
            .then(res => res.json())
            .then(json => setUsers(json))
        }, [])

        let passwordVisibilityChanger = (evt) => {
            if(evt.target.src === hiddenPasswordImg){
                document.getElementById("passwordInp").type = "text"
                setPasswordVisibility(nonHiddenPasswordImg)
            } else{
                document.getElementById("passwordInp").type = "password"
                setPasswordVisibility(hiddenPasswordImg)
            }
        }

        let isUserExistChecker = () => {
            for(let i = 0; i < users.length; i++){
                if(users[i].email === logInPasswordInpValues.logIn && users[i].password === logInPasswordInpValues.password){
                    setErrorMessage("")
                    window.localStorage.setItem("isUserLogIned", true)
                    window.localStorage.setItem("currentUser", JSON.stringify(users[i]))
                    window.location.href = "http://localhost:3000"
                    break
                } else {
                    setErrorMessage("Email or Password is incorrect")
                }
            }
        }

        let userLogInChanger = (evt) => {
            logInPasswordInpValues.logIn = evt.target.value
            setLogInPasswordInpValue(logInPasswordInpValues)
        }

        let userPasswordChanger = (evt) => {
            logInPasswordInpValues.password = evt.target.value
            setLogInPasswordInpValue(logInPasswordInpValues)
        }

        let onEnterSignIn = (evt) => {
            if(evt.key === "Enter"){
                isUserExistChecker()
            }
        }


        return(
            <div className="signIn" onKeyPress={onEnterSignIn}>                    
                <Link className='siteTitle' to="/" onClick={() => hideNavBar(false)}>YourEvent</Link>
                <h1 style={{fontSize:"xx-large"}}>Log In</h1>
                <div style={{marginTop:"50px", display:"felx", flexDirection:"column"}}>
                    <input className="loginPassword" type="text" placeholder="Login" onChange={userLogInChanger}/>
                    <input className="loginPassword" type="password" id="passwordInp" placeholder="Password" onChange={userPasswordChanger}/><img className="passwordVisibility" src={passwordVisibility} onClick={passwordVisibilityChanger}/>
                    <p className="errorMessage">{errorMessage}</p>
                    <button className="SignInBtn" onClick = {isUserExistChecker}>Log In</button>
                    <button className="SignUpBtn" onClick={() => showSignUp()}>Sign Up</button>
                </div>
                <hr style={{width:"350px", margin:"0", marginTop:"10px", marginBottom:"10px"}}/>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <button className="sociialMediaBtns"><img className="socialMediaIcons" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"/><p style={{marginLeft:"20px", marginTop:"10px"}}>Sign In with facebook</p></button>
                    <button className="sociialMediaBtns"><img className="socialMediaIcons" src="https://freesvg.org/img/1534129544.png"/><p style={{marginLeft:"20px", marginTop:"10px"}}>Sign In with Google</p></button>
                    <button className="sociialMediaBtns"><img className="socialMediaIcons" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/><p style={{marginLeft:"20px", marginTop:"10px"}}>Sign In with GitHub</p></button>
                </div>
                <hr style={{width:"350px", margin:"0", marginTop:"10px"}}/>
            </div>
        )
    }

export default SignIn;