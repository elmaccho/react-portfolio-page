import React, { useEffect } from "react";
import './style.css'

import Aos from "aos";
import 'aos/dist/aos.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faSass, faReact, faPhp, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Technologies(){
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
            <div className="tech-container">

                <h1 className="tech-title" data-Aos="fade-in" data-aos-once="true">Technologie z którymi pracuje</h1>

                {/* <div className="tech-wrapper"> */}
                    <div className="skill-wrapper" data-Aos="fade-up"  data-aos-once="true">
                        <span className="test"><span data-aos-once="true" data-aos-delay="100" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faHtml5} /> HTML</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="200" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faCss3Alt} /> CSS</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="300" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faJsSquare} /> JavaScript</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="400" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faSass} /> Sass</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="500" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faReact} /> React</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="600" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faPhp} /> PHP</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="700" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faDatabase} /> MySql</span></span>
                        <span className="test"><span data-aos-once="true" data-aos-delay="800" data-Aos="fade-up" className="innerTest"><FontAwesomeIcon className="icon" icon={faFigma} /> Figma</span></span>
                    {/* </div> */}
                </div>

                <div className="blob">
                    <li></li>
                    <li></li>
                </div>
            </div>
        </>
    )
}

export default Technologies