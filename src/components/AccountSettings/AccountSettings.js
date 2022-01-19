import { Link, Route, Routes } from "react-router-dom";
import "./AccountSettings.css"
import AccountSideBar from "./AccountSideBar/AccountSideBar";
import ContactInfo from "./ContactInfo/ContactInfo";
import CreditDebitCards from "./CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import LinkedAccounts from "./LinkedAccounts/LinkedAccounts";
import Password from "./Password/Password";


    function AccountSettings() {

        return(
            <div className="AccountSettings">
                <AccountSideBar />
            </div>
        )
    }

export default AccountSettings;