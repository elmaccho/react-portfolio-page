import React from "react";
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';


// const icon = <FontAwesomeIcon icon={faFacebook} />

function NavBar(){
    return(
        <>
        

        
        <div className="navBar-container">

            <div className="socialLinks">
                <a href="https://github.com/elmaccho" target="_blank" className="socialsBtn">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://www.facebook.com/eeeeeeee1234567890" target="_blank" className="socialsBtn">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
            </div>

            <div className="navBtns">
                <button className="containerBtns">
                    Kontakt
                </button>

                <button className="containerBtns">
                    Umiejętności
                </button>

                <button className="containerBtns">
                    O mnie
                </button>
            </div>

        </div>
        </>
    )
}

export default NavBar