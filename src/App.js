import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import ContactInfo from "./components/AccountSettings/ContactInfo/ContactInfo";
import CreditDebitCards from "./components/AccountSettings/CreditDebitCards/CreditDebitCards";
import DeleteAccount from "./components/AccountSettings/DeleteAccount/DeleteAccount";
import LinkedAccounts from "./components/AccountSettings/LinkedAccounts/LinkedAccounts";
import Password from "./components/AccountSettings/Password/Password";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";

  function App() {
    const [hideNavBar, setHideNavBar] = useState(false)


    return (
      <div className="App">
        <BrowserRouter>
          {(!hideNavBar && window.location.href !== "http://localhost:3000/logIn") && <NavBar hideNavBar={(status) => setHideNavBar(status)}/>}
          <Routes>
            <Route path="/logIn/*" element={<LogIn />} hideNavBar={(status) => setHideNavBar(status)}/> 
            <Route  path="/account-settings" element={<AccountSettings />}>
              <Route  exact path="ContactInfo" element={<ContactInfo />}/>
              <Route  path="Password" element={<Password />}/>
              <Route  path="Credit/DebitCards" element={<CreditDebitCards />}/>
              <Route  path="LinkedAccounts" element={<LinkedAccounts />}/>
              <Route  path="DeleteAccount" element={<DeleteAccount />}/>           
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;
