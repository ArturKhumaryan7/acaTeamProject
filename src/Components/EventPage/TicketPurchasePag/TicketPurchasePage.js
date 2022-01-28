import { useState } from "react";
import TicketAmountAndDonation from "./TicketAmountAndDonation/TicketAmountAndDonation";
import TicketPayment from "./TicketPayment/TicketPayment";
import "./TicketPurchasePage.css"
import Modal from "react-modal"

    function TicketPurchasePage({ hideTicketPurchasePage, eventPageInfo, setIsHidden }){

        const [ticketsAmount, setTicketsAmount] = useState(0)
        const [donationAmount, setDonationAmount] = useState(0)
        const [isCheckoutClicked, setIsCheckoutClicked] = useState(false)
        const [isModalOpen, setIsModalOpen] = useState(false)
        return(
            <div className="TicketPurchasePage" style={{display:`${hideTicketPurchasePage?"none":"flex"}`}}>
                <Modal isOpen={isModalOpen} className="purchaseIsDoneModal" style={{overlay:{zIndex:"99999"}}}>
                        <div style={{width:"100%"}}>
                            <div style={{margin:"auto", width:"80%"}}>
                                <img className="successfulPaymentAnimation" src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"/>
                                <p style={{color:"green", marginLeft:'15px', fontSize:'large'}}>Payment Successful</p>
                            </div>
                        </div>
                </Modal>
                {!isCheckoutClicked && <TicketAmountAndDonation    
                                                eventPageInfo={eventPageInfo} 
                                                setTicketsAmount={(amount) => setTicketsAmount(amount)}
                                                setDonationAmount={(amount) => setDonationAmount(amount)}
                                                setIsCheckoutClicked={() => setIsCheckoutClicked(true)}
                                            />}
                { isCheckoutClicked && <TicketPayment 
                                                setIsCheckoutClicked={() => setIsCheckoutClicked(false)}
                                                eventInfo={eventPageInfo}
                                                setIsModalOpen={(status) => setIsModalOpen(status)}/>}
                <div>
                    <button className="closeTicketPurchasePaseBtn" onClick={() => setIsHidden(true)}>X</button>
                    <img className="TicketPuchaseImg" src={eventPageInfo.avatar}/>
                    {
                        ticketsAmount > 0
                        ?
                        <div className="SummaryDiv">
                            <h4>Summary</h4>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p>{ticketsAmount} x General Admission</p>
                                <p>${eventPageInfo.price === "Free" || eventPageInfo.price === "Donation"?"0.00":`${ticketsAmount * (eventPageInfo.price.substr(1, eventPageInfo.price.length))}`}</p>
                            </div>
                            {
                                donationAmount > 0
                                ?
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <p>Donation</p>
                                    <p>${donationAmount}</p>
                                </div>: ""
                            }
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <h3>Total</h3>
                                <h3>${eventPageInfo.price === "Free" || eventPageInfo.price === "Donation"?donationAmount:`${+donationAmount + +ticketsAmount * (eventPageInfo.price.substr(1, eventPageInfo.price.length))}`}</h3>
                            </div>
                        </div>:""
                    }
                </div>
            </div>
        )
    }

export default TicketPurchasePage;