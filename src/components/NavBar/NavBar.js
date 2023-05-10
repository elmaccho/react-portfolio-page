import React, { useState, useEffect, useRef } from "react";
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


function NavBar(){

    const [toggleState, setToggleState] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null);

    function toggleMenu(){
        setToggleState(!toggleState)
    }

    useEffect( ()=> {
        function handleClickOutside(event){
            if (!menuRef.current.contains(event.target) && event.target !== buttonRef.current){
                setToggleState(false)
            }
        }
    
        document.addEventListener("click", handleClickOutside)
        return () =>{
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])



    return(
        <>
            <button className="menuToggleBtn menuOpen" onClick={toggleMenu} ref={buttonRef}>
                <FontAwesomeIcon className="faBarsIcon" icon={faBars}/>
            </button>

            <div className={`navBar-container ${toggleState ? "toggle" : ""}`} ref={menuRef}>
                <button className="menuToggleBtn menuClose" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>

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