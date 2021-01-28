import {useEffect,useState} from "react"
function PaypalForm(props) {
    const {price,setPaid} = props;
    const [errorStyle,setErrorStyle] = useState("price-error-hidden");
    useEffect(() => {
      setErrorStyle("price-error-hidden")
    },[price])
    useEffect(() => {
      window.paypal
      .Buttons({
        style:{
          layout: "horizontal",
          color:"blue",
          shape: "pill",
          fundingicons: "true",
          label: "checkout",
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency: "USD",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          fetch(actions.order.capture())
          .then(setPaid(true))
          console.log(order);
        },
        onError: (err) => {
          setErrorStyle("price-error"),
          console.error(err);
        },
      })
      .render(".paypal-form");
    },[])
    
    return (
      <>
        <p className={errorStyle}>Please ensure a hotel and group is selected</p>
        <div className="paypal-form"></div>
        </>
    )
    
}
export default PaypalForm;