import {useRef,useState} from "react";
function ToursForm () {
    const emailElement = useRef();
    const nameElement = useRef();
    const messageElement = useRef();
    const [sentMailResponse,setSentMailResponse] = useState();
    function controlFormSubmission (e) {
        e.preventDefault();
        const email = emailElement.current.value;
        const name = nameElement.current.value;
        const message = messageElement.current.value;
        fetch("/email",{
            method: "POST",
            headers : {
                "Content-Type" : "application/json;charset=UTF-8"
            },
            body: JSON.stringify({email:email,name:name,message:message})
        })
        .then(res => res.json())
        .then(res => setSentMailResponse(res.message))
        .catch(err => setSentMailResponse(err.message));

    }
    return (
        <section className="section-form-tours">
            <form onSubmit={controlFormSubmission} className="forms">
                <span>{sentMailResponse}</span>
                <div className="forms__form">
                <label htmlFor="email">Email</label>
                <input ref={emailElement} required type="email" id="email" name="email" className="input-field forms__form__field"/>
                </div>

                <div className="forms__form">
                <label htmlFor="name">Full Name</label>
                <input ref={nameElement} required type="text" id="name" name="name" className="input-field forms__form__field"/>
                </div>

                <div className="forms__form">
                <label htmlFor="message">Message</label>
                <textarea ref={messageElement} required id="message" name="message" className="input-field forms__form__field"></textarea>
                </div>

                <div className="forms__form-btn">
                <input className="forms__btn"  type="submit" value="Send" />
                </div>
            </form>
        </section>
    )
}
export default ToursForm;