import { useState } from "react"
import "./DeleteAccount.css"

    function DeleteAccount(){
        const [deleteAccErrMessage, setDeleteAccErrMessage] = useState("")
        const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))

        let userRemover = () => {
            let deleteAccInpForClose = document.getElementById("deleteAccInpForClose")
            let deleteAccPasswordInp = document.getElementById("deleteAccPasswordInp")

            if(deleteAccInpForClose.value === "CLOSE" && deleteAccPasswordInp.value === userInfo.password){
                fetch(`https://61e6cdffce3a2d001735944d.mockapi.io/users/${userInfo.id}`, { method: "delete" })
                .then(res => {
                    setDeleteAccErrMessage("")
                    window.localStorage.clear("currentUser")
                    window.location.href= "/"
                })
            } else {
                setDeleteAccErrMessage("Please fill all required fileds")
            }
        }

        return(
            <div className="DeleteAccount">
                <h1>Delete Account</h1>
                <hr/>
                <p>Thank you for using YourEvent Events.</p>
                <p>Please take a moment to let us know why you are leaving:</p>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>I do not recall signing up for YourEvent</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>The pricing is too high</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>I chose a different solution</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}} >The pricing is confusing</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>The product lacks the necessary features</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>The product is too difficult to use</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>I do not host events</span></div><br/>
                <div><input type="radio"/><span style={{fontFamily:"Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif"}}>Other (Please explain)</span></div><br/>
                <textarea className="explaneTextArea" placeholder="Write an explanation"></textarea>
                <p style={{}}>Please enter "CLOSE" and your password to confirm that you wish to close your account</p>
                <p style={{color:"gray"}}>If you selected the "Delete my account after closing it" option above, you are also confirming that you wish to delete your account</p>
                <div style={{display:"flex", justifyContent:"space-between", width:"400px"}}>
                    <p>Type "CLOSE":</p>
                    <input className="deleteAccInps" id="deleteAccInpForClose" type="text"/>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", width:"400px", marginTop:"20px"}}>
                    <p>Enter your password:</p>
                    <input className="deleteAccInps" id="deleteAccPasswordInp" type="password"/>
                </div>
                <p style={{color:"red"}}>{deleteAccErrMessage}</p>
                <button className="accDeleteBtn" onClick={userRemover}>Delete Account</button>
            </div>
        )
    }

export default DeleteAccount;