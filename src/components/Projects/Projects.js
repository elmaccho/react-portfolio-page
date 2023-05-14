import React, { useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
                            <img src="./images/inpostSS.jpg" alt=""/>
                        </div>

                        <div className="projectBox-text">
                            Próba odwzorowania aplikacji InPost z dodatkiem bazy danych MySQL oraz PHP.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="#github">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a className="faIcon" href="#site">
                                    <FontAwesomeIcon  icon={faGlobe}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">
                            <img src="./images/inpostSS.jpg" alt=""/>
                        </div>

                        <div className="projectBox-text">
                            Próba odwzorowania aplikacji InPost z dodatkiem bazy danych MySQL oraz PHP.
                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a className="faIcon" href="#github">
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>

                                <a className="faIcon" href="#site">
                                    <FontAwesomeIcon  icon={faGlobe}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>

                </div>


            </div>
        </>


    )
}