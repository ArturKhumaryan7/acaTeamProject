import React,{useState} from 'react'
import "./index.css"
import { FaSearch,FaDollarSign } from "react-icons/fa";
import {GrTextAlignLeft} from "react-icons/gr"
import {RiTreasureMapLine} from "react-icons/ri"
import {ImCalendar} from "react-icons/im"
import {TimePickerComponent,DatePickerComponent} from "@syncfusion/ej2-react-calendars";
import TimezoneSelect,{allTimezones} from "react-timezone-select";
import CurrencyInput from "react-currency-input-field";

const CreateEvent = () => {
    const [isClicked,setIsClicked] = useState();
    const [dateStart, setDateStart] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 20));
    const [dateEnd, setDateEnd] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), 20));  
    const [startTime,setStartTime] = useState(new Date('8/3/2017 10:00 AM'))
    const [endTime,setEndTime] = useState(new Date('8/3/2017 10:00 AM'))
    const [selectedTimezone, setSelectedTimezone] = useState("");
    const [price, setPrice] = useState();
    const [isFree,setIsFree] = useState();
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
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
     
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section className='infoSection'>
                    <GrTextAlignLeft className='GrTextAlignLeft'/>
                        <div className='info'>
                            <h1>Basic Info</h1>
                            <p>Name your event and tell event-goers why they should come. 
                            Add details that highlight what makes it unique.</p>
                            <label>Event Title</label>
                            <input type="text" placeholder='Be clear and descriptive' />
                            <label>Organizer</label>
                            <input type="text" placeholder='Tell atendees who is organizing this event' />
                            <div className='textarea'>
                                <p>Description</p>
                                <textarea placeholder='Tell more details about event'></textarea>
                            </div>
                            <select>
                                <option>Category</option>
                                <option>Business & Professional</option>
                                <option>Community & Culture</option>
                                <option>Food & Drink</option>
                                <option>Family & Education</option>
                                <option>Fashion & Beauty</option>
                                <option>Film, Media & Entertainment</option>
                                <option>Health & Wellness</option>
                                <option>Home & Lifestyle</option>
                                <option>Music</option>
                                <option>Science & Technology</option>
                                <option>Sports & Fitness</option>
                                <option>Travel & Outdoor</option>
                            </select>
                            
                        </div>       
                </section>

                <hr className='hr'/>

                <section>
                    <RiTreasureMapLine className='RiTreasureMapLine'/>
                        <div className='location'>
                            <h1>Location</h1>
                            <p>Help people in the area discover your event and
                            let attendees know where to show up.</p>
                            <button onClick={() => setIsClicked(false)}>Venue</button>
                            <button onClick={() => setIsClicked(true)}>Online Event</button>
                            {isClicked  ? <p>Online events have unique event pages where you can 
                                             add links to livestreams and more</p>
                                        :(
                                            <div>
                                                <label>Venue location</label>
                                                <FaSearch className='faSearch' />
                                                <input type="text" placeholder='Search for a venue or address'/>
                                            </div>
                                        )
                            }
                        </div>
                </section>

                <hr className='hr'/>

                <section>
                    <ImCalendar className='ImCalendar'/>
                        <div className='date'>
                            <h1>Date and time</h1>
                            <p>Tell event-goers when your event starts and 
                            ends so they can make plans to attend.</p>
                            <div className='dateTimeStart'>
                                <div className='eventStart'>
                                    <label htmlFor='dateStart'>Event Starts</label>
                                    <DatePickerComponent  value={dateStart} selected={dateStart} onChange={handleChangeStart} id="dateStart" />
                                </div>

                                <div className='timeStart'>
                                    <label htmlFor='timeStart'>Start Time</label>
                                    <TimePickerComponent value={startTime} selected={startTime} onChange={handleTimeStart} id='timeStart' />
                                </div>
                              
                            </div>
                            <div className='dateTimeEnd'>
                                <div className='eventEnd'>
                                    <label htmlFor='eventEnd'>Event Ends</label>
                                    <DatePickerComponent  value={dateEnd} selected={dateEnd} onChange={handleChangeEnd} id='eventEnd'/>
                                </div>

                                <div className='timeEnd'>
                                    <label htmlFor='timeEnd'>End Time</label>
                                    <TimePickerComponent value={endTime} selected={endTime} onChange={handleTimeEnd} id="timeEnd" />
                                </div>
                            </div>
                            <span>Time Zone</span>
                            <div className="timezone-wrapper">
                                <TimezoneSelect timezones={{...allTimezones}} value={selectedTimezone} onChange={setSelectedTimezone}/>
                            </div>

                        </div>
                </section>
                   <hr/>

                <section>
                    <FaDollarSign className='FaDollarSign' />
                    <div className='price'>
                        <h1>Price</h1>
                        <p>Let event-goers know how much they should pay for attending your event.</p>
                        <button onClick={() => setIsFree(false)}>Price</button>
                        <button onClick={() => setIsFree(true)}>Free</button>
                        {isFree ? <p>Event is free so event-goers are not charged for attending your event.</p>
                                :(
                                    <div className='priceInput-container'>
                                        <label htmlFor='input-example'>Please enter a number</label>
                                        <CurrencyInput
                                            className="priceInput"
                                            prefix="$"
                                            id="input-example"
                                            name="input-name"
                                            decimalsLimit={2}
                                            value={price}
                                            onValueChange={(e) => setPrice(e)}
                                        />
                                    </div>
                                )
                        }
                        
                    </div>
                </section>
                
                <div className='formBtns'>
                    <button className='btnDiscard'>Discard</button>
                    <button className='btnSave'>Save & Continue</button>
                </div>
               
            </form>
        </div>
    )
}

export default CreateEvent;
