import React, { useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

function ContactForm(){

    useEffect(()=>{
        Aos.init()
    },[])

    return(
        <div id="Contact" className="ContactForm-container" data-Aos="fade-up">
            <h1 className="ContactForm-title">Kontakt</h1>
            <form>
                <span>
                    <input type="text" placeholder="Imię" required/>
                    <input type="text" placeholder="Nazwisko" required/>
                </span>
                <input type="email" placeholder="E-mail" required/>
                <textarea placeholder="Wiadomość..." required></textarea>
                    <span className="errorText">Uzupelnij dane!</span>
                <input type="submit" value="Prześlij"/>
            </form>

            <div className="blobContact">
                <li></li>
                <li></li>
            </div>
        </div>
    )
}

export default ContactForm