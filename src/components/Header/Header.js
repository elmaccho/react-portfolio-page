import React from "react";
import './style.css'

function Header(){
    return(
        <div className="header-container">
            <div className="header-text">
                <span>Hej!</span>
                <h1>Jestem Maciej</h1>
                <span>Junior FrontEnd Developer</span>
                <button className="contactMe-button">Współpraca?</button>
            </div>
                
            <div className="header-img">
                <img alt="zdjecia nie ma jeszcze"></img>
            </div>
        </div>
    )
}

export default Header
