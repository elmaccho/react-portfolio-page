import React from "react";
import './style.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faSass, faReact, faPhp, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Technologies(){
    return (
        <>
            <div className="tech-container">

                <h1 className="tech-title">Technologie/programy <br/> z którymi pracuje</h1>

                {/* <div className="tech-wrapper"> */}
                    <div className="skill-wrapper">
                        <span><FontAwesomeIcon className="icon" icon={faHtml5} /> HTML</span>
                        <span><FontAwesomeIcon className="icon" icon={faCss3Alt} /> CSS</span>
                        <span><FontAwesomeIcon className="icon" icon={faJsSquare} /> JavaScript</span>
                        <span><FontAwesomeIcon className="icon" icon={faSass} /> Sass</span>
                        <span><FontAwesomeIcon className="icon" icon={faReact} /> React</span>
                        <span><FontAwesomeIcon className="icon" icon={faPhp} /> PHP</span>
                        <span><FontAwesomeIcon className="icon" icon={faDatabase} /> MySql</span>
                        <span><FontAwesomeIcon className="icon" icon={faFigma} /> Figma</span>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Technologies