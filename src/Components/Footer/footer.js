import React from 'react';
import "./index.css";
import i18n from "../../i18n"
import { useTranslation } from "react-i18next";

function FooterSecond() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };
  return(
    <footer className="main-footer">
            <div className="main-footer-size">
                <div className="main-footer-container">
                    <section>
                        <p>© 2022 <a href="/">YourEvent</a></p>
                    </section>
                    <section className='main-footer-contactInfo'>
                        <p><a href="https://twitter.com" target="_blank">Twitter</a></p>
                        <p><a href="https://facebook.com" target="_blank">Facebook</a></p>
                        <p><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></p>
                        <p><a href="https://instagram.com" target="_blank">Instagram</a></p>
                    </section>
                    <section className="main-footer-select">
                        <select name="main-footer-language" onChange={(e) => changeLanguage(e)}>
                            <option value="en">English</option>
                            <option value="hy">Armenian</option>
                        </select>
                    </section>
                </div>
            </div>
    </footer>
  ) 
}

export default FooterSecond;
