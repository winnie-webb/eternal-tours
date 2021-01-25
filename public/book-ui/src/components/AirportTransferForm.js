import React, { useState,useEffect} from "react";
import  AirportTransferFormCreditCard  from "./AirportTransferFormCreditCard";
import AirportTransferFormPaypal from "./AirportTransferFormPaypal";
import HotelsAndPricing from "./HotelsAndPricing";
import paypalIcon from"./svg/paypal.svg";
import cardIcon from "./svg/credit-card.svg";
function AirportTransferForm(){

    const [price,setPrice] = useState(0);
    const ATFCC = <AirportTransferFormCreditCard price={price}/>
    const ATFP = <AirportTransferFormPaypal price={price} />
    const [CurrentForm,setForm] = useState(ATFCC);
    const [currentCC,setCurrentCC] = useState("current switch-tab__tab");
    const [currentPaypal,setCurrentPaypal] = useState("switch-tab__tab");

    useEffect( () => setForm(CurrentForm),[price]);

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
    export default AirportTransferForm;
