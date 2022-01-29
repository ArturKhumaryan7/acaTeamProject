import "./index.css"
import axios from "../../api/axios"
import React,{useState,useEffect} from 'react'
import {useForm} from "react-hook-form";
import {FaDollarSign } from "react-icons/fa";
import {GrTextAlignLeft} from "react-icons/gr"
import {RiTreasureMapLine} from "react-icons/ri"
import {ImCalendar} from "react-icons/im"
import {TimePickerComponent,DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import TimezoneSelect,{allTimezones} from "react-timezone-select";
import CurrencyInput from "react-currency-input-field";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom"
import Modal from "react-modal";
import FooterSecond from "../Footer/footer"


  
Modal.setAppElement("#root");

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
  
      textAlign: "center"
    }
  };



const CreateEvent = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const { t } = useTranslation();

    const {register,handleSubmit,reset, formState: { errors }} = useForm({defaultValues:{description:[]}});

    const [isOnline,setIsOnline] = useState();
    const [dateStart, setDateStart] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 20));
    const [dateEnd, setDateEnd] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 20));  
    const [startTime,setStartTime] = useState(new Date('8/3/2017 10:00 AM'))
    const [endTime,setEndTime] = useState(new Date('8/3/2017 10:00 AM'))
    const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [price, setPrice] = useState(0);
    const [location,setLocation] = useState("")

    const handleTimeStart = (e) => {
        let selectedTimeStart = new Date(e.value).toLocaleString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true })
        setStartTime(selectedTimeStart)
    }

    const handleTimeEnd = (e) => {
        let selectedTimeEnd = new Date(e.value).toLocaleString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true })
        setEndTime(selectedTimeEnd)
    }

    const handleChangeStart = (e) => {
        const selectedDateStart = new Date(e.value).toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        setDateStart(selectedDateStart);
    };

    const handleChangeEnd = (e) => {
        const selectedDateEnd = new Date(e.value).toLocaleString('en-US', { month: '2-digit',day: '2-digit', year: 'numeric' });
        setDateEnd(selectedDateEnd);
    };

    const onSubmit = (data) => {
        data.description = [data.description]
        axios.post("/newEvent",
                    {...data,
                        "location": location === ""?"Online event":location,
                        "price": new Intl.NumberFormat().format(price)==="0"? "Free" : "$" + new Intl.NumberFormat().format(price),
                        "follow":"0",
                        startDate:dateStart.toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
                        endDate:dateEnd.toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
                        startTime:startTime.toLocaleString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true }),
                        endTime:endTime.toLocaleString('en-US', { hour: '2-digit', minute:'2-digit', hour12: true }),
                        timezone:selectedTimezone?.value?selectedTimezone?.value:selectedTimezone 
                    }
                )
                .then((res)=>{
                    setPrice(0)
                    setIsOnline()
                    reset()
                    setIsModalOpen(true)
                })
                .catch((err)=>{
                    console.log(err)
                })
                
    };
    
    const handleDiscard = () =>{
        setPrice(0)
        setIsOnline()
        reset()   
    }
    const handleOnlineFalse = (e) => {
        e.preventDefault()
        setIsOnline(false)
    }
    const handleOnlineTrue = (e) => {
        e.preventDefault()
        setIsOnline(true)
    }
    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = "hidden";
        }else{
          document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    const handleModalBtnClick = () =>{
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
        navigate("/")
    }
    const handleLocation = (e) =>{
        setLocation(e.target.value)
    }
  
    return (
        <div>
            <Modal style={customStyles} isOpen={isModalOpen}>
                <h1 style={{ color: "green", fontSize: "35px" }}>Success!</h1>
                <p style={{ color: "grey", fontSize: "25px" }}>
                Your event has been created and added to the other events.
                </p>
                <p style={{ color: "grey", fontSize: "25px" }}>
                For viewing the event go 
                </p>
                <button
                    onClick={handleModalBtnClick}
                    style={{
                        cursor:"pointer",
                        margin:"20px",
                        backgroundColor: "green",
                        color: "white",
                        fontSize: "18px",
                        paddingTop:"13px",
                        paddingBottom:"13px",
                        paddingLeft: "30px",
                        paddingRight: "30px"
                    }}
                    >
                    Home
                </button>
            </Modal> 
            <form className="createEvent-form" onSubmit={handleSubmit(onSubmit)}>
                <section className='createEvent-infoSection'>
                    <GrTextAlignLeft className='createEvent-GrTextAlignLeft'/>
                        <div className='createEvent-info'>
                            <h1>{t("Basic Info")}</h1>
                            <p>{t("Basic Info p")}</p>
                            <label>{t("Event Title")}</label>
                            <input {...register("title", { required: "This feild is required"})} type="text" placeholder={t('Be clear and descriptive' )}/>
                            <p className='createEvent-err'>{errors.title?.message}</p>
                            <label>{t("Event Name")}</label>
                            <input {...register("name", { required: "This feild is required"})} type="text" placeholder={t('Be clear and descriptive' )}/>
                            <p className='createEvent-err'>{errors.name?.message}</p>
                            <label>{t("Organizer")}</label>
                            <input {...register("organizer", { required: "This feild is required" })} type="text" placeholder={t('Tell atendees who is organizing this event')} />
                            <p className='createEvent-err'>{errors.organizer?.message}</p>
                            <div className='createEvent-textarea'>
                                <p className='createEvent-textarea-p'>{t("Description")}</p>
                                <textarea {...register("description", { required: "This feild is required" })} placeholder={t("Tell more details about event")}></textarea>
                                <p className='createEvent-err'>{errors.description?.message}</p>                           
                            </div>
                            <select {...register("category")}>
                                <option value="Category">{t("Category")}</option>
                                <option value="Business & Professional">{t("Business & Professional")}</option>
                                <option value="Community & Culture">{t("Community & Culture")}</option>
                                <option value="Food & Drink">{t("Food & Drink")}</option>
                                <option value="Family & Education">{t("Family & Education")}</option>
                                <option value="Fashion & Beauty">{t("Fashion & Beauty")}</option>
                                <option value="Film, Media & Entertainment">{t("Film, Media & Entertainment")}</option>
                                <option value="Health & Wellness">{t("Health & Wellness")}</option>
                                <option value="Home & Lifestyle">{t("Home & Lifestyle")}</option>
                                <option value="Music">{t("Music")}</option>
                                <option value="Science & Technology">{t("Science & Technology")}</option>
                                <option value="Sports & Fitness">{t("Sports & Fitness")}</option>
                                <option value="Travel & Outdoor">{t("Travel & Outdoor")}</option>
                                <option value="Charity & Causes">{t("Charity & Causes")}</option>
                            </select>
                            <p className='createEvent-textarea-p'>{t("Image URL")}</p>
                            <input {...register("avatar", { required: "This feild is required" })} type="text" />
                            <p className='createEvent-err'>{errors.avatar?.message}</p>
                            
                        </div>       
                </section>

                <hr className='createEvent-hr'/>

                <section>
                    <RiTreasureMapLine className='createEvent-RiTreasureMapLine'/>
                        <div className='createEvent-location'>
                            <h1>{t("Location")}</h1>
                            <p>{t("Location p")}</p>
                            <button onClick={handleOnlineFalse}>{t("Venue")}</button>
                            <button onClick={handleOnlineTrue}>{t("Online Event")}</button>
                            {isOnline  ? <p>{t("Online Event p")}</p>
                                        :(
                                            <div>
                                                <label>{t("Venue location")}</label>
                                                <input value={location} onChange={handleLocation}  type="text" placeholder={t("Write a venue or address")}/>
                                            </div>
                                        )
                            }
                        </div>
                </section>

                <hr className='createEvent-hr'/>

                <section>
                    <ImCalendar className='createEvent-ImCalendar'/>
                        <div className='createEvent-date'>
                            <h1>{t("Date and time")}</h1>
                            <p>{t("Date and time p")}</p>
                            <div className='createEvent-dateTimeStart'>
                                <div className='createEvent-eventStart'>
                                    <label htmlFor='dateStart'>{t("Event Starts")}</label>
                                    <DatePickerComponent value={dateStart} selected={dateStart} onChange={handleChangeStart} id="dateStart" />
                                </div>

                                <div className='createEvent-timeStart'>
                                    <label htmlFor='timeStart'>{t("Start Time")}</label>
                                    <TimePickerComponent value={startTime} selected={startTime} onChange={handleTimeStart} id='timeStart' />
                                </div>
                              
                            </div>
                            <div className='createEvent-dateTimeEnd'>
                                <div className='createEvent-eventEnd'>
                                    <label htmlFor='eventEnd'>{t("Event Ends")}</label>
                                    <DatePickerComponent value={dateEnd} selected={dateEnd} onChange={handleChangeEnd} id='eventEnd'/>
                                </div>

                                <div className='createEvent-timeEnd'>
                                    <label htmlFor='timeEnd'>{t("End Time")}</label>
                                    <TimePickerComponent value={endTime} selected={endTime} onChange={handleTimeEnd} id="timeEnd" />
                                </div>
                            </div>
                            <span>{t("Time Zone")}</span>
                            <div className="createEvent-timezone-wrapper">
                                <TimezoneSelect  timezones={{...allTimezones}} value={selectedTimezone} onChange={setSelectedTimezone}/>
                                
                            </div>

                        </div>
                </section>
                   <hr/>

                <section>
                    <FaDollarSign className='createEvent-FaDollarSign' />
                    <div className='createEvent-price'>
                        <h1>{t("Price")}</h1>
                        <p>{t("Price p")}</p>
                        <div className='createEvent-price-div'>{t("Price")}</div>
                        
                        <div className='createEvent-priceInput-container'>
                            <label htmlFor='input-example'>{t("Please enter a number")}</label>
                                <CurrencyInput
                                    className="createEvent-priceInput"
                                    prefix="$"
                                    id="input-example"
                                    name="input-name"
                                    decimalsLimit={2}
                                    value={price}
                                    onValueChange={(e) =>setPrice(e)}
                                />
                        </div>
                                
                        
                        
                    </div>
                </section>
                
                <div className='createEvent-formBtns'>
                    <button onClick={handleDiscard} className='createEvent-btnDiscard'>{t("Discard")}</button>
                    <button type='submit' className='createEvent-btnSave'>{t("Save & Continue")}</button>
                </div>
               
            </form>
            <FooterSecond /> 
        </div>

    )
}

export default CreateEvent;
