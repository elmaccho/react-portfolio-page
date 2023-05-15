import React from "react";
import './style.css'

function ContactForm(){
    return(
        <div id="Contact" className="ContactForm-container">
            <h1 className="ContactForm-title">Kontakt</h1>
            <form>
                <span>
                    <input type="text" placeholder="Imię" required/>
                    <input type="text" placeholder="Nazwisko" required/>
                </span>
                <input type="email" placeholder="E-mail" required/>
                <textarea placeholder="Wiadomość..." required></textarea>
                    <span className="errorText"></span>
                <input type="submit" value="Prześlij"/>
            </form>
        </div>
    )
}

export default ContactForm