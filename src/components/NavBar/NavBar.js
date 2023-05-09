import React from "react";
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


// const icon = <FontAwesomeIcon icon={faFacebook} />

function NavBar(){
    return(
        <>
        
        <button className="menuBtn">
            <FontAwesomeIcon icon={faBars} />
        </button>
        
        <div className="navBar-container">
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
        </>
    )
}

export default NavBar