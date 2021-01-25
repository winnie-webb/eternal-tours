function PaypalForm(props) {
    const {price} = props;

    return (
        <form className="paypal-form" action="/pay" method="POST">
          <input  style={{display: "none"}} value={price} name="price"/>
          <input className="paypal-form__button" value="Paypal Checkout" type="submit"/>
        </form>
    )
}
export default PaypalForm;