function ToursForm () {
    return (
        <section className="section-form-tours">

            <form className="forms" action="/book" method="POST">
                
                <div className="forms__form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="input-field forms__form__field"/>
                </div>

                <div className="forms__form">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="input-field forms__form__field"/>
                </div>

                <div className="forms__form">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" className="input-field forms__form__field"></textarea>
                </div>

                <div className="forms__form-btn">
                <input className="forms__btn"  type="submit" value="Send" />
                </div>
            </form>
        </section>
    )
}
export default ToursForm;