import "./index.css";
import React from "react";
import i18n from "../../i18n"
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const events = [t("Virtual Events"),t("Online Webinars"),t("Online Classes"),t("Online Yoga"),
                   t("Virtual Runs"),t("Online Zumba Classes"),t("Virtual Conferences"),
                   t("Online Seminars"),t("Online Speed Dating"),t("Virtual Wine Tasting")]
    return(
        
        <footer>
            <div className="footer-size">
                <div className="footer-container">
                    <section>
                        <h4>{t("findEvnts")}</h4>
                        {events.map((item) => {
                            return <p key={Math.random()}><a>{item}</a></p>
                        })}
                    </section>

                    <section>
                        <h4>{t("Connect With Us")}</h4>
                        <p><a href="https://twitter.com" target="_blank">Twitter</a></p>
                        <p><a href="https://facebook.com" target="_blank">Facebook</a></p>
                        <p><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></p>
                        <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
                    </section>

                    <section className="select">
                        <select name="language" onChange={(e) => changeLanguage(e)}>
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
