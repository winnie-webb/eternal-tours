import React, { useState,useEffect} from "react";
import  AirportTransferFormCreditCard  from "./AirportTransferFormCreditCard";
import AirportTransferFormPaypal from "./AirportTransferFormPaypal";
import HotelsAndPricing from "./HotelsAndPricing";
import paypalIcon from"./svg/paypal.svg";
import cardIcon from "./svg/credit-card.svg";
function AirportTransferForm(){

    const [price,setPrice] = useState(0);
    const [paid,setPaid] = useState(false);
    const ATFCC = <AirportTransferFormCreditCard price={price}/>
    const ATFP = <AirportTransferFormPaypal key="atfp" setPrice={setPrice} setForm={setForm} setPaid={setPaid} price={price} />
    const [CurrentForm,setForm] = useState(ATFCC);
    const [currentCC,setCurrentCC] = useState("current switch-tab__tab");
    const [currentPaypal,setCurrentPaypal] = useState("switch-tab__tab");

    useEffect( () => {
      if(CurrentForm.key === "atfp"){
        toggleToCCSection();
        setTimeout(toggleToPaypal,1)
      }
      console.log(ATFP.key,CurrentForm.key);
      console.log(JSON.stringify(CurrentForm) === JSON.stringify(ATFP))
    },[price]);
    
    function toggleToCCSection () {
      setForm(ATFCC);
      setCurrentCC("current switch-tab__tab");
      setCurrentPaypal("switch-tab__tab");
    }
    function toggleToPaypal(){
      setForm(ATFP);
      setCurrentCC("switch-tab__tab");
      setCurrentPaypal("current switch-tab__tab"); 
    }
    if(!paid){
    return (
        <section className="section-airport-transfer-form">
              <HotelsAndPricing price={price} setPrice={setPrice}/>
            <p>Payment Methods</p>

<div className="switch-tab">
        <div className={currentCC} onClick={toggleToCCSection}>
          <img id="card-icon" src={cardIcon} alt="Credit Card Icon" />
        <span>Card</span>
        </div>
        <div className={currentPaypal} onClick={toggleToPaypal}>
        <img id="paypal-icon" src={paypalIcon} alt="Paypal Icon" />
        </div>
      </div>
      {CurrentForm}

      </section>
    )
    }

  else {
    return <a style={{display:"block",textAlign:"center",color: "green", margin: "2rem",textDecoration:"none"}} href="/">Your payment was successul would you like to browse some more</a>
  }
}
    export default AirportTransferForm;
