import "./index.css";
import React,{useContext} from "react";
import i18n from "../../i18n"
import { useTranslation } from "react-i18next";
import { EventContext } from "../../Contexts/EventContext";


const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        console.log(e.target.value,"language target value")
        i18n.changeLanguage(e.target.value);
    };
    
    const {handleFilterClick,filterRef} = useContext(EventContext)
 
    const handleBtnClick = (e) =>{

        window.scrollTo({
            top: filterRef.current.offsetTop,
            behavior: "smooth"
        });
        handleFilterClick(e)      
        
    }
   
    return(
        
        <footer className="main-footer">
            <div className="main-footer-size">
                <div className="main-footer-container">
                    <section>
                        <h4>{t("findEvnts")}</h4>
                        <div className="main-footer-btns">
                            <button value='All' onClick={handleBtnClick}>{t("All")}</button>
                            <button value="Online event" onClick={handleBtnClick}>{t("Online")}</button>
                            <button value="Today" onClick={handleBtnClick}>{t("Today")}</button>
                            <button value="This weekend" onClick={handleBtnClick}>{t("This weekend")}</button>
                            <button value='Free' onClick={handleBtnClick}>{t("Free")}</button>
                            <button value="Music" onClick={handleBtnClick}>{t("Music")}</button>
                            <button value="Food and Drink" onClick={handleBtnClick}>{t("Food & Drink")}</button>
                            <button value="Charity & Causes" onClick={handleBtnClick}>{t("Charity & Causes")}</button>
                        </div>

                    </section>

                    <section>
                        <h4>{t("Connect With Us")}</h4>
                        <p><a href="https://twitter.com" target="_blank">Twitter</a></p>
                        <p><a href="https://facebook.com" target="_blank">Facebook</a></p>
                        <p><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></p>
                        <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
                    </section>

                    <section className="main-footer-select">
                        <select name="main-footer-language" onChange={changeLanguage}>
                            <option value="en">English</option>
                            <option value="hy">Armenian</option>
                        </select>
                    </section>
                

                </div>
            </div>    
        </footer>
    )
}
export default Footer;
