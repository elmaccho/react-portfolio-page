import React, { useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import img1 from './images/inpostSS.jpg'
import img2 from './images/infinityscroll.png'
import img3 from './images/loginpage.png'
import img4 from './images/gorskimeble.png'

export function Project(){

    useEffect(()=>{
        Aos.init()
    }, [])

    return(

        <>
            <div id="Projects" className="projects-container" data-Aos="fade-up">

                <h1 className="projects-title">Projekty</h1>

                <div className="projectBox-container">

                    <div className="projectBox">
                        <div className="projectBox-image">
                            {/* <img src={img1} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Próba odwzorowania aplikacji InPost z dodatkiem bazy danych MySQL oraz PHP.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="https://github.com/elmaccho/InpostApp" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">
                            {/* <img src={img2} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Strona logowania oraz rejestracji.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="https://github.com/elmaccho/Login-page" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a className="faIcon" href="https://elmaccho.github.io/Login-page/" target="_blank">
                                    <FontAwesomeIcon  icon={faGlobe}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">
                            {/* <img src={img3} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Infinity scrolling inspirowany Pinterest oraz Instagramem.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="https://github.com/elmaccho/infinityscroll.github.io" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a className="faIcon" href="https://elmaccho.github.io/infinityscroll.github.io/" target="_blank">
                                    <FontAwesomeIcon  icon={faGlobe}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">
                            {/* <img src={img4} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Górski meble - strona wizytówka.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="https://github.com/elmaccho/Portfolio-Page" target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a className="faIcon" href="https://elmaccho.github.io/Portfolio-Page/" target="_blank">
                                    <FontAwesomeIcon  icon={faGlobe}/>
                                </a>
                            </div>
                            
                        </div>
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