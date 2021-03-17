import React, { useState, useEffect } from "react";
import AirportTransferFormPaypal from "./AirportTransferFormPaypal";
import HotelsAndPricing from "./HotelsAndPricing";

function AirportTransferForm() {
  const [price, setPrice] = useState(0);
  const [paid, setPaid] = useState(false);
  const [Form, setForm] = useState(<div></div>);

  useEffect(() => {
    setForm(<div></div>);
    setTimeout(
      () =>
        setForm(<AirportTransferFormPaypal setPaid={setPaid} price={price} />),
      0
    );
  }, [price]);

  if (!paid) {
    return (
      <section className="section-airport-transfer-form">
        <HotelsAndPricing price={price} setPaid={setPaid} setPrice={setPrice} />
        {Form}
      </section>
    );
  } else {
    return (
      <a
        style={{
          display: "block",
          textAlign: "center",
          color: "green",
          margin: "2rem",
          textDecoration: "none",
        }}
        href="/"
      >
        Your payment was successul. We will contact you shortly
      </a>
    );
  }
}
export default AirportTransferForm;
