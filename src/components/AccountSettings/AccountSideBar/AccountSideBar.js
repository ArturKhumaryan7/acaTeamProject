import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import "./AccountSideBar.css"


    function AccountSideBar(){

        const [sideBarDropDownOpener, setSideBarDropDownOpener] = useState(true)

        return(
            <div className="AccountSideBar">
                <div className="sideBarDropDownTitleDiv" onClick={() => setSideBarDropDownOpener(!sideBarDropDownOpener)}>
                    <p className="sideBarDrobDownTitle">Account</p>                            
                    <h3 style={{marginRight:"50px", marginTop:"20px"}} id="dropDownIcon">{sideBarDropDownOpener?"⯅":"⯆"}</h3>
                </div>
                <div className="sideBarDropDown" hidden={!sideBarDropDownOpener}>
                    <Link style={{textDecoration:"none", color:"black"}} to="/account-settings/ContactInfo"><div className="sideBarDropDownLinks"><p className="sideBarDrobDownConent">Contact Info</p></div></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/account-settings/Password"><div className="sideBarDropDownLinks"><p className="sideBarDrobDownConent">Password</p></div></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/account-settings/Credit/DebitCards"><div className="sideBarDropDownLinks"><p className="sideBarDrobDownConent">Credit/Debit Cards</p></div></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/account-settings/LinkedAccounts"><div className="sideBarDropDownLinks"><p className="sideBarDrobDownConent">Linked Accounts</p></div></Link>
                    <Link style={{textDecoration:"none", color:"black"}} to="/account-settings/DeleteAccount"><div className="sideBarDropDownLinks"><p className="sideBarDrobDownConent">Delete Account</p></div></Link>
                    <Outlet />
                </div>
            </div>
        )
    }

export default AccountSideBar