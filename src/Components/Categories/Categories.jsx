import React,{useContext,useState} from 'react';
import image from '../../assets/img/svgexport-7.svg'
import "./Categories.css"
import { EventContext } from "../../Contexts/EventContext";
import {useTranslation} from "react-i18next";

const Categories = () => {
    const { t } = useTranslation();

    const {weekendbtnRef,freebtnRef,foodbtnRef,charitybtnRef,musicbtnRef,todaybtnRef,onlinebtnRef,allbtnRef,handleFilterClick,filterRef} = useContext(EventContext)

    const [activeItem,setActiveItem] = useState(null)
    const onSelectItem = (id,e)=>{
        setActiveItem(id)
        handleFilterClick(e)  
    }
    return (
        <div className='searchEventWithCategorias'>
            <div className='search'>
                <div className='search1'>{t("Popular in")} </div>
                            <div className='search5'>
                                        <span className='span'>
                                                <img src={image} />
                                        </span>
                                <div className='search6' >
                                    <input  className='input' type="text" placeholder={t("Yerevan")}/>
                                </div>
                            </div>

            </div>
            <nav ref={filterRef}  className='nav'>
                <ul className='ul'>
                    <li className='li'>
                        <button
                            ref = {allbtnRef}
                            value='All'
                            onClick={(e)=>onSelectItem(null,e)}
                            className={activeItem===null?'active':'passive'}>
                            {t("All")}
                        </button>
                    </li>
                     
                    <li className='li'> 
                        <button
                            ref = {onlinebtnRef}
                            value="Online event"
                            id="btnOnline"
                            onClick={(e)=>onSelectItem("btnOnline",e)}
                            className={activeItem==="btnOnline"?'active':'passive'}>
                            {t("Online")}
                        </button>
                    </li>
                    <li className='li'> 
                        <button 
                            ref = {todaybtnRef}
                            value="Today"
                            id="btnToday"
                            onClick={(e)=>onSelectItem("btnToday",e)}
                            className={activeItem==="btnToday"?'active':'passive'}>
                            {t("Today")}
                        </button>
                    </li>
                    <li className='li'> 
                        <button 
                            ref = {weekendbtnRef}
                            value="This weekend"
                            id="btnWeekend"
                            onClick={(e)=>onSelectItem("btnWeekend",e)}
                            className={activeItem==="btnWeekend"?'active':'passive'}>
                            {t("This weekend")}
                        </button>
                    </li>    
                    <li className='li'> 
                        <button 
                            ref = {freebtnRef}
                            value='Free'
                            id="btnFree"
                            onClick={(e)=>onSelectItem("btnFree",e)}
                            className={activeItem==="btnFree"?'active':'passive'}>
                            {t("Free")}
                        </button>
                    </li>    
                    <li className='li'>     
                        <button 
                            ref = {musicbtnRef}
                            value="Music"
                            id="btnMusic"
                            onClick={(e)=>onSelectItem("btnMusic",e)}
                            className={activeItem==="btnMusic"?'active':'passive'}>
                            {t("Music")}
                        </button>
                    </li>    
                    <li className='li'>    
                        <button 
                            ref = {foodbtnRef}
                            value="Food and Drink"
                            id="btnFood"
                            onClick={(e)=>onSelectItem("btnFood",e)}
                            className={activeItem==="btnFood"?'active':'passive'}>
                            {t("Food & Drink")}
                        </button>
                    </li>
                    <li className='li'>    
                        <button 
                            ref = {charitybtnRef}
                            value="Charity & Causes"
                            id="btnCharity"
                            onClick={(e)=>onSelectItem("btnCharity",e)}
                            className={activeItem==="btnCharity"?'active':'passive'}>
                            {t("Charity & Causes")}
                        </button>
                    </li>

                </ul>
            </nav>
        </div>

    );
};

export default Categories;
