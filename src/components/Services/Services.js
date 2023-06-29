import React, { useEffect } from "react";
import './style.css'

import Aos from "aos";
import 'aos/dist/aos.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPager, faPalette, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Services(){

    useEffect(()=>{
        Aos.init()
    }, [])

    return(
        <>
            <div id="Services" className="services-content">
                <h2 className="services-title" data-aos="fade-up" data-aos-once="true">Usługi</h2>

                <div className="boxWrapper">
                    <div className="serviceBox" data-aos="fade-up" data-aos-once="true">
                        <span><FontAwesomeIcon className="icon" icon={faPager}></FontAwesomeIcon></span>
                        <h2>Strony internetowe</h2>
                        <p>Oferuję usługi związane z tworzeniem stron internetowych, w tym możliwość 
                            stworzenia strony typu landing page lub portfolio online. Niezależnie od celu Twojej witryny, 
                            mogę dostarczyć responsywny design, 
                            intuicyjną nawigację, optymalizację pod kątem SEO </p>
                    </div>
                    <div className="serviceBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                        <span><FontAwesomeIcon className="icon" icon={faMobileAlt}></FontAwesomeIcon></span>
                        <h2>Responsywność</h2>
                        <p>Strona internetowa będzie dostosowana do każdego rodzaju urządzenia.</p>
                    </div>
                    <div className="serviceBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                        <span><FontAwesomeIcon className="icon" icon={faPalette}></FontAwesomeIcon></span>
                        <h2>Projekt strony</h2>
                        <p>Twój projekt strony internetowej zostanie starannie wykonany, z dbałością o doskonałe
                         UI i UX. Zapewniam przyjemny dla oka design oraz intuicyjne i satysfakcjonujące
                          doświadczenie użytkownika.</p>
                    </div>
                </div>

                <div className="blob">
                    <li></li>
                    <li></li>
                </div>
            </div>
        </>
    )    
}

export default Services