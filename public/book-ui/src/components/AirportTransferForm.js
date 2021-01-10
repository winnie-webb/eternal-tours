import React, { useState } from "react";
import  AirportTransferFormCreditCard  from "./AirportTransferFormCreditCard";
import AirportTransferFormPaypal from "./AirportTransferFormPaypal";
import HotelsAndPricing from "./HotelsAndPricing";
import "./css/AirportTransferForm.css";
import paypalIcon from"./svg/paypal.svg";
import cardIcon from "./svg/credit-card.svg";
function AirportTransferForm(){

    const [CurrentForm,setForm] = useState(<AirportTransferFormCreditCard />);
    const [currentCC,setCurrentCC] = useState("current switch-tab__tab");

    const [currentPaypal,setCurrentPaypal] = useState("switch-tab__tab");
    return (
        <section className="section-airport-transfer-form">
              <HotelsAndPricing/>
            <p>Payment Methods</p>

<div className="switch-tab">
        <div className={currentCC} onClick={() => {

          setForm(<AirportTransferFormCreditCard />);
          setCurrentCC("current switch-tab__tab");

          setCurrentPaypal("switch-tab__tab")
        }}>
          <img id="card-icon" src={cardIcon} alt="Credit Card Icon" />
        <span>Card</span>
        </div>
        <div className={currentPaypal} onClick={() => {

          setForm(<AirportTransferFormPaypal />);
          setCurrentCC("switch-tab__tab");
          setCurrentPaypal("current switch-tab__tab")
          
        }}>
        <img id="paypal-icon" src={paypalIcon} alt="Paypal Icon" />
        </div>
      </div>
      {CurrentForm}

      </section>
    )
    }
    export default AirportTransferForm;
