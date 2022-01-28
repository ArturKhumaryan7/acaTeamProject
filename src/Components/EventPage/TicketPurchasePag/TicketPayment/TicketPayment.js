import "./TicketPayment.css"
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useState } from "react"
import Modal from "react-modal"


    function TicketPayment({ setIsCheckoutClicked, eventInfo, setIsModalOpen }){

        const [number, setNumber] = useState("")
        const [name, setName] = useState("")
        const [expiry, setExpiry] = useState("")
        const [cvc, setCvc] = useState("")
        const [focus, setFocus] = useState("")
        const [isCreditCardRadioBoxChecked, setIsCreditCardRadioBoxChecked] = useState(false)
        const userInfo = JSON.parse(window.localStorage.getItem("currentUser"))

        let isPayPalRadioBoxClicked = (evt) => {
            let payPalRadioBox = document.getElementById("paypalRadioBox")

            if(payPalRadioBox.checked === true){
                evt.target.checked = true
                payPalRadioBox.checked = false
                setIsCreditCardRadioBoxChecked(true)
            } else {
                setIsCreditCardRadioBoxChecked(true)
            }
        }

        let isCreditCardRadioBoxClicked = (evt) => {
            let creditCardRadioBox = document.getElementById("creditCardRadioBox")

            if(creditCardRadioBox.checked === true){
                evt.target.checked = true
                creditCardRadioBox.checked = false
                setIsCreditCardRadioBoxChecked(false)
            } else {
                setIsCreditCardRadioBoxChecked(false)
            }
        }

        let buyTicket = () => {
            if(number.length === 16 && cvc.length === 3 && name.length !== 0 && expiry.length >= 3){
                userInfo.orders.push(eventInfo)
                fetch(`https://61e6cdffce3a2d001735944d.mockapi.io/users/${userInfo.id}`, {
                    method:"put",
                    headers: {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(userInfo)
                }).then(res => {
                    setIsModalOpen(true)
                    window.localStorage.setItem("currentUser", JSON.stringify(userInfo))
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 3000)
                })
            }
        }

        return(
                <div className="TicketPayment">
                    {/* <Modal isOpen={isModalOpen}>
                        <div>
                            your payment is good
                        </div>
                    </Modal> */}
                    <div className="PaymentTitleAndTime">
                        <h1 style={{marginTop:"30px"}}>Checkout</h1>
                    </div>
                    <hr/>
                    <div style={{width:"900px", height:"60%"}}>
                        <div className="contactInfoAndPayment">
                            <div>
                                <h2>Contact Info</h2>
                                <div style={{display:"column", width:"60%", justifyContent:"space-between", marginTop:"-20px"}}>
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <div>
                                            <h5>Name</h5>
                                            <input className="checkoutNameSurname" value={userInfo.name}/> 
                                        </div>
                                        <div>
                                            <h5>Surname</h5>
                                            <input className="checkoutNameSurname" value={userInfo.surname}/> 
                                        </div>
                                    </div>
                                    <h5>Email</h5>
                                    <input className="checkoutEmailAddress" value={userInfo.email}/>
                                </div>
                            </div>
                            <div>
                                <h2>Payment Method</h2>
                                <div style={{display:"column", width:"60%", justifyContent:"space-between"}}>
                                    <div className="bandCardDiv">
                                        <div style={{display:"flex", margin:"20px 20px"}}>
                                            <input className="bankCardRadiobox" type="radio" id="creditCardRadioBox" onClick={isPayPalRadioBoxClicked}/>
                                            <p style={{marginLeft:"5px", marginTop:"2px"}}>Credit Card</p>
                                        </div>
                                    </div>
                                    {isCreditCardRadioBoxChecked && 
                                        <div style={{display:"flex",width:"600px", justifyContent:"space-between", marginTop:"30px"}}>
                                            <div style={{display:"flex", flexDirection:"column"}}>
                                                <input 
                                                    type="tel"
                                                    placeholder="Card Number"
                                                    name="number"
                                                    className="cardNumber"
                                                    value={number}
                                                    onChange={evt => setNumber(evt.target.value)}
                                                    onFocus={evt => setFocus(evt.target.name)}
                                                />
                                                <input 
                                                    type="text"
                                                    placeholder="Name"
                                                    name="name"
                                                    className="cardName"
                                                    value={name}
                                                    onChange={evt => setName(evt.target.value)}
                                                    onFocus={evt => setFocus(evt.target.name)}
                                                />
                                                <input 
                                                    type="text"
                                                    placeholder="MM/YY Expiry"
                                                    name="Expiry"
                                                    className="cardExpiry"
                                                    value={expiry}
                                                    onChange={evt => setExpiry(evt.target.value)}
                                                    onFocus={evt => setFocus(evt.target.name)}
                                                />
                                                <input 
                                                    type="tel"
                                                    placeholder="CVC"
                                                    name="cvc"
                                                    className="cardCvc"
                                                    value={cvc}
                                                    onChange={evt => setCvc(evt.target.value)}
                                                    onFocus={evt => setFocus(evt.target.name)}
                                                />
                                            </div>
                                            <Cards 
                                                number={number}
                                                name={name}
                                                expiry={expiry}
                                                cvc={cvc}
                                                focused={focus}
                                            />
                                        </div>
                                    }
                                    <div className="paypalDiv">
                                        <div style={{display:"flex", margin:"20px 20px"}}>
                                            <input className="paypalRadioBox" type="radio" id="paypalRadioBox" onClick={isCreditCardRadioBoxClicked}/>
                                            <p style={{marginLeft:"5px", marginTop:"2px"}}>PayPal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%", textAlign:"end"}}>
                        <button className="ticketCheckoutBtn" onClick={() => setIsCheckoutClicked()}>Back</button>
                        <button className="ticketCheckoutBtn" onClick={buyTicket}>Buy</button>
                    </div>
                </div>
        )
    }

export default TicketPayment;