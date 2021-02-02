import {useEffect,useState} from "react"
function PaypalForm(props) {
    const {price,setPaid,setPrice} = props;
    const [errorStyle,setErrorStyle] = useState("price-error-hidden");

  useEffect(() => {
    setErrorStyle("price-error-hidden")
  },[price])


    useEffect(() => {
window.paypal.Buttons({
  style:{
    shape:"pill",
    label:"checkout"
  },
  enableStandardCardFields: false,
  createOrder: function(data, actions) {
    return actions.order.create({
      intent: 'CAPTURE',
      shipping_type: 'PICKUP',

      purchase_units: [
        {
          amount: {
            value: price,
            currency_code: 'USD'
          }
        }
      ],
      application_context: {    
          shipping_preference: 'NO_SHIPPING'
      },
      
    })
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      setPaid(true)
    })
  },

    onError: function (err) {
      setErrorStyle("price-error")
    }

}).render(".paypal-form");        
    },[])

  
    return (
      <>
        <p className={errorStyle}>Please ensure a hotel and group is selected</p>
        <div className="paypal-form"></div>
        </>
    )
    
}
export default PaypalForm;