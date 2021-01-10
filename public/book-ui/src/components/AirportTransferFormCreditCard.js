function AirportTransferFormCreditCard(){
    return (
      <section className="section-form-transfer">
        <form className="forms" action="/payments">

      <section className="section-personal-info">
        <h2>Personal Info</h2>
        <div className="personal-info">
        <div className="forms__form email-form">
          <label htmlFor="email">Email</label>
          <input className="input-field" type="email" id="email" name="email" />
          </div>

          <div className="forms__form">
          <label htmlFor="name">Full Name</label>
          <input className="input-field" type="text" id="name" name="name" />
          </div>
          </div>
          </section>
<section className="section-checkouts">
<h2>Checkout</h2>

      <div className="checkouts">
          
          <div className="forms__form">
          <label htmlFor="ccn">Card Number</label>
          <input className="input-field" id="ccn" name="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="0000 0000 0000 0000"/>
          </div>
  
          <div className="forms__form">
          <label htmlFor="exp__field">Expiration Date</label>

          <span id="exp" className="exp">
         <input className=" exp__field exp-month" type="text" name="month" placeholder="MM" maxLength="2" size="2" />
         <span className="exp__slash">/</span>
         <input className=" exp__field exp-year" type="text" name="year" placeholder="YY" maxLength="2" size="2" />
</span>
  
          </div>
  </div>
  </section>
        </form>

        </section>
    )
  }
export default AirportTransferFormCreditCard;