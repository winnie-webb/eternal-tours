import {useRef}  from "react"
function AirportTransferFormCreditCard(props){
  const expInputRef = useRef();
  function addSlashToInput(e) {
    const expInput = expInputRef.current;
    if(expInput.value.length > 2) return;

    const isExpInputMMValid = expInput.value.length > 1 && e.code !== "Backspace";
    if (isExpInputMMValid) expInput.value += "/";
  }


  
    return (
      <section className="section-form-transfer">
        <form className="forms" action="/pay/cc" method="POST">

<section className="section-checkouts">
<h2>Checkout</h2>

      <div className="checkouts">
          <div className="forms__form">
          <label htmlFor="ccn">Card Number</label>
          <input className="input-field" id="ccn" name="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="0000 0000 0000 0000"/>
          </div>
          <div className="forms__form">
          <label htmlFor="exp">Expiration Date</label>
          <input ref={expInputRef} onKeyPress= {e => addSlashToInput(e)} className="input-field" id="exp" name="exp" type="text" placeholder="MM/YY" />
  
          </div>
          
  </div>
  </section>
  <div>
    <input type="submit" value="Checkout" />
  </div>
        </form>

        </section>
    )
  }
export default AirportTransferFormCreditCard;