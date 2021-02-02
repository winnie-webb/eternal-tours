import {useRef,useState} from "react";
function ToursForm () {
    const emailElement = useRef();
    const nameElement = useRef();
    const messageElement = useRef();
    const [sentMailResponse,setSentMailResponse] = useState();
    const [sentMessage, setSentMessage] = useState(false);

    function controlFormSubmission (e) {
        e.preventDefault();
        const email = emailElement.current.value;
        const name = nameElement.current.value;
        const message = messageElement.current.value;

       const formBody =  {
        email:email,
        name:name,
        message:message,
    }
        fetch("/email",{
            method: "POST",
            headers : {
                "Content-Type" : "application/json;charset=UTF-8"
            },
            body: JSON.stringify(formBody)
        })
        .then(res => res.json())
        .then(res =>{
            setSentMailResponse(res.message);
            if(res.success){
                setSentMessage(true)
            }
        })
        .catch(err => setSentMailResponse(err.message));

    }
    if(!sentMessage){


        function EmailInput(){

            return (

            <div className="forms__form">
                <label htmlFor="email">Email</label>
                <input ref={emailElement} required type="email" id="email" name="email" className="input-field forms__form__field"/>
           </div>

            )
        }


        function NameInput() {

          return (

            <div className="forms__form">
                <label htmlFor="name">Full Name</label>
                <input ref={nameElement} required type="text" id="name" name="name" className="input-field forms__form__field"/>
            </div> 

          )        

        }

        function MessageInput() {
            
           return (

            <div className="forms__form">
                <label htmlFor="message">Message</label>
                <textarea placeholder="Example : Hey Desmond, I would like to book a tour for five persons. We will be arriving on June 13,2021 at 10:00 am" ref={messageElement} required id="message" name="message" className="input-field forms__form__field"></textarea>
            </div>

           )

        }


        function SubmitButton() {

            return (

            <div className="forms__form-btn">
                <input className="forms__btn"  type="submit" value="Send" />
            </div>

            )
        }


        function Form(){

        return (    

            <form onSubmit={controlFormSubmission} className="forms">
                <EmailInput/>
                <NameInput/>
                <MessageInput/>
                <SubmitButton/>   
            </form>

        )

        }


    return (
        <section className="section-form-tours">
            <p style={{color:"red"}}>{sentMailResponse}</p>
            <Form/>
        </section>
    )
    }
    else {
        return <p style={{margin:"2rem",textAlign:"center"}}>Thank you! {sentMailResponse} </p>
    }
}
export default ToursForm;