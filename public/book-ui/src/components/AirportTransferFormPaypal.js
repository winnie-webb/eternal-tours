
function PaypalForm(props) {
    const {price} = props;

    return (
        <form className="paypal-form" action="/pay" method="POST">
          <input  style={{display: "none"}} value={price} name="price"/>
          <button className="paypal-form__button" type="submit">
            PayPal Checkout
          </button>
        </form>
    )
}
export default PaypalForm;