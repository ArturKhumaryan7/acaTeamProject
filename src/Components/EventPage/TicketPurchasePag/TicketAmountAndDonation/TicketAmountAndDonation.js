import { useState } from "react"
import "./TicketAmountAndDonation.css"


    function TicketAmountAndDonation({ eventPageInfo, setTicketsAmount, setDonationAmount, setIsCheckoutClicked }){

        const donationAskForFree = "We want to keep this event free, but as so many people are coming we need help maintaining our systems.  If you are included, please give us a hand. But this is OPTIONAL, enjoy the free lesson."
        const donationAskForNonFree = "This event is not free, but as so many people are coming we need help maintaining our systems.  If you are included, please give us a hand. But this is OPTIONAL, enjoy the lesson."

        return(
                <div className="TicketAmountAndDonation">
                    <div className="TitleAndDate">
                        <h3>{eventPageInfo.title}</h3>
                        <h5 style={{marginTop:"-20px"}}>{eventPageInfo.startTime} {eventPageInfo.startDate}</h5>
                    </div>
                    <hr/>
                    <div style={{width:"100%", height:"60%"}}>
                        <div className="ticketsAndDonation">
                            <div className="Tickets">
                                <h2>Tickets</h2>
                                <div style={{display:"flex", width:"80%", justifyContent:"space-between"}}>
                                    <div>
                                        <h3>General Admission</h3>
                                        <h5 style={{marginTop:"-17px"}}>free</h5>
                                    </div>
                                    <select className="amountOfTickets" onChange={(evt) => setTicketsAmount(evt.target.value)}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </select>
                                </div>
                                <p style={{marginTop:"-12px"}}>1714 REMAININGSales end on {eventPageInfo.startDate}</p><br/>
                                <p style={{marginTop:"-20px"}}>The link to the class will be on your eTicket. [Scroll down to the bottom of the ticket]</p>
                            </div>
                            <hr/>
                            <div>
                                <h2>Donations</h2>
                                <div style={{display:"flex", width:"80%", justifyContent:"space-between"}}>
                                    <div>
                                        <h3>Donation</h3>
                                        <h5 style={{marginTop:"-17px"}}>Fees will be deducted from your donation amount.</h5>
                                    </div>
                                    <input className="amountOfDonation" type="number" placeholder="$0.00" onChange={(evt) => setDonationAmount(evt.target.value)}/>
                                </div>
                                <p style={{marginTop:"-12px"}}>1714 REMAININGSales end on {eventPageInfo.startDate}</p><br/>
                                <p style={{marginTop:"-20px"}}>{eventPageInfo.price == "Free"?donationAskForFree:donationAskForNonFree}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%", textAlign:"end"}}><button className="ticketCheckoutBtn" onClick={() => setIsCheckoutClicked()}>Checkout</button></div>
                </div>
        )
    }

export default TicketAmountAndDonation;