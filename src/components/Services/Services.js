import React from "react";
import './style.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPager, faPalette, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Services(){
    return(
        <>
            <div className="services-content">
                <h1 className="services-title">Usługi</h1>

                <div className="boxWrapper">
                    <div className="serviceBox">
                        <span><FontAwesomeIcon className="icon" icon={faPager}></FontAwesomeIcon></span>
                        <h2>Strony internetowe</h2>
                        <p>Oferuję usługi związane z tworzeniem stron internetowych, w tym możliwość 
                            stworzenia strony typu landing page lub portfolio online. Niezależnie od celu Twojej witryny, 
                            mogę dostarczyć responsywny design, 
                            intuicyjną nawigację, optymalizację pod kątem SEO </p>
                    </div>
                    <div className="serviceBox">
                        <span><FontAwesomeIcon className="icon" icon={faMobileAlt}></FontAwesomeIcon></span>
                        <h2>Responsywność</h2>
                    </div>
                    <div className="serviceBox">
                        <span><FontAwesomeIcon className="icon" icon={faPalette}></FontAwesomeIcon></span>
                    </div>
                </div>
            </div>
        </>
    )    
}

export default Services