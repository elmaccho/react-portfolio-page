import React, { useEffect } from "react";
import './style.css'
import Aos from "aos";
import 'aos/dist/aos.css'

export function Project(){

    useEffect(()=>{
        Aos.init()
    }, [])

    return(

        <>
            <div id="Projects" className="projects-container" data-Aos="fade-in">

                <h1 className="projects-title">Projekty</h1>

                <div className="projectBox-container">

                    <div className="projectBox">
                        <div className="projectBox-image">
                            <img src='../../images/inpostSS.png' alt=""/>
                        </div>

                        <div className="projectBox-text">

                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a href="#github"></a>
                                <a href="#site"></a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">

                        </div>

                        <div className="projectBox-text">

                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a href="#github"></a>
                                <a href="#site"></a>
                            </div>
                            
                        </div>
                    </div>

                    <div className="projectBox">
                        <div className="projectBox-image">

                        </div>

                        <div className="projectBox-text">

                        </div>

                        <div className="seeMoreBox">
                            <span>Zobacz więcej</span>
                            
                            <div className="seeMoreContent">
                                <a href="#github"></a>
                                <a href="#site"></a>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>


            </div>
        </>


    )
}