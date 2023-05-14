import React, { useState, useEffect, useRef } from "react";
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


function NavBar(){

    const [toggleState, setToggleState] = useState(false)
    const menuRef = useRef(null)
    const buttonRef = useRef(null);

    function toggleMenu(){
        setToggleState(!toggleState)
    }

    useEffect(()=> {
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

                    <Link 
                        className="containerBtns"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        O mnie
                    </Link>

                    <Link 
                        className="containerBtns"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        Projekty
                    </Link>

                    <Link 
                        className="containerBtns"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Kontakt
                    </Link>
                </div>
                

            </div>
        </>
    )
}

export default NavBar