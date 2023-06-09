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
            <div id="Projects" className="projects-container" data-aos="fade-up" data-aos-once="true">

                <h2 className="projects-title">Projekty</h2>

                <div className="projectBox-container">

                    <div className="projectBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="0">
                        <div className="projectBox-image">
                            {/* <img src={img1} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Próba odwzorowania aplikacji InPost z dodatkiem bazy danych MySQL oraz PHP.
                        </div>

                        <div className="seeMoreBox">                            
                                <a aria-label="githubLink" className="projectLink" href="https://github.com/elmaccho/InpostApp" target="_blank" rel="noopener">GitHub</a>
                        </div>
                    </div>

                    <div className="projectBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                        <div className="projectBox-image">
                            {/* <img src={img2} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Strona logowania oraz rejestracji.
                        </div>

                        <div className="seeMoreBox">                            
                                <a aria-label="githubLink" className="projectLink" href="https://github.com/elmaccho/Login-page" target="_blank" rel="noopener">
                                    GitHub
                                </a>

                                <a aria-label="liveLink" className="projectLink" href="https://elmaccho.github.io/Login-page/" target="_blank" rel="noopener">
                                    Live
                                </a>
                        </div>
                    </div>

                    <div className="projectBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="100">
                        <div className="projectBox-image">
                            {/* <img src={img3} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Infinity scrolling inspirowany Pinterest oraz Instagramem.
                        </div>

                        <div className="seeMoreBox">
                                <a aria-label="githubLink" className="projectLink" href="https://github.com/elmaccho/infinityscroll.github.io" target="_blank" rel="noopener">
                                    GitHub
                                </a>

                                <a aria-label="liveLink" className="projectLink" href="https://elmaccho.github.io/infinityscroll.github.io/" target="_blank" rel="noopener">
                                    Live
                                </a>
                        </div>
                    </div>

                    <div className="projectBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
                        <div className="projectBox-image">
                            {/* <img src={img4} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            Strona robiona wraz z członkami zarządu Koło PI
                        </div>

                        <div className="seeMoreBox">
                                <a aria-label="githubLink" className="projectLink" href="https://github.com/elmaccho/koloPi" target="_blank" rel="noopener">
                                    GitHub
                                </a>

                                <a aria-label="liveLink" className="projectLink" href="http://kolopi.uniwersytetradom.pl" target="_blank" rel="noopener">
                                    Live
                                </a>
                        </div>
                    </div>

                    <div className="projectBox" data-aos="fade-up" data-aos-once="true" data-aos-delay="150">
                        <div className="projectBox-image">
                            {/* <img src={img4} alt=""/> */}
                        </div>

                        <div className="projectBox-text">
                            [NIEUKOŃCZONE] Strona typu forum: będzie zawierać bazę danych, profile, postowanie, rangi i wiele innych funkcji.
                        </div>

                        <div className="seeMoreBox">
                                <a aria-label="githubLink" className="projectLink" href="https://github.com/elmaccho/forum-app-or-smth" target="_blank" rel="noopener">
                                    GitHub
                                </a>

                                {/* <a aria-label="liveLink" className="projectLink" href="http://kolopi.uniwersytetradom.pl" target="_blank" rel="noopener">
                                    Live
                                </a> */}
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