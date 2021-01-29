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
      payer: {
        name: {
          given_name: "PayPal",
          surname: "Customer"
        },
        address: {
          address_line_1: '123 ABC Street',
          address_line_2: 'Apt 2',
          admin_area_2: 'San Jose',
          admin_area_1: 'CA',
          postal_code: '95121',
          country_code: 'US'
        },
        email_address: "customer@domain.com",
        phone: {
          phone_type: "MOBILE",
          phone_number: {
            national_number: "14082508100"
          }
        }
      },
      purchase_units: [
        {
          amount: {
            value: price,
            currency_code: 'USD'
          },
          shipping: {
            address: {
              address_line_1: '2211 N First Street',
              address_line_2: 'Building 17',
              admin_area_2: 'San Jose',
              admin_area_1: 'CA',
              postal_code: '95131',
              country_code: 'US'
            }
          },
        }
      ]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      setPaid(true)
      alert("Transaction was sucessful!")
    });
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