import React from "react";
import './style.css'

function ContactForm(){
    return(
        <div id="Contact" className="ContactForm-container">
            <h1 className="ContactForm-title">Kontakt</h1>
            <form>
                <span>
                    <input type="text" placeholder="Imię" />
                    <input type="text" placeholder="Nazwisko" />
                </span>
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Wiadomość..."></textarea>
                <input type="submit" value="Prześlij"/>
            </form>
        </div>
    )
}

export default ContactForm